// Inside your db module (lib/db.js)

import { db } from "./db";

export const updateGiveTo = async (currentUserPin, targetUserPin) => {
  return await db.users.update({
    where: { pinUser: currentUserPin },
    data: { giveTo: targetUserPin },
  });
};
