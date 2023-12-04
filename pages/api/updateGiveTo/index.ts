// pages/api/updateGiveTo.ts
import { NextApiRequest, NextApiResponse } from "next";
import { db } from "../../../lib/db";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  try {
    const { roomId } = req.body;

    if (!roomId) {
      return res.status(400).json({ error: "Missing required parameters" });
    }

    const usersInRoom = await db.rooms
      .findUnique({
        where: { pin: roomId },
        select: {
          users: {
            select: {
              pinUser: true,
              giveTo: true,
            },
          },
        },
      })
      .then((result) => result?.users || []);

    const shuffledUsers = [...usersInRoom];
    for (let i = shuffledUsers.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledUsers[i], shuffledUsers[j]] = [
        shuffledUsers[j],
        shuffledUsers[i],
      ];
    }

    for (let i = 0; i < shuffledUsers.length; i++) {
      const currentUser = shuffledUsers[i];
      const nextUser = shuffledUsers[(i + 1) % shuffledUsers.length];

      await db.users.update({
        where: { pinUser: currentUser.pinUser || "" },
        data: { giveTo: nextUser?.pinUser || "" },
      });
    }

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error("Error updating GiveTo fields:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}
