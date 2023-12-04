import { db } from "../../lib/db";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import SuffleButton from "./suffle-button";

interface SuffleUsersProps {
  userPin: string;
  roomId: string;
}

const SuffleUsers = async ({ userPin, roomId }: SuffleUsersProps) => {
  const usersInRoom = await db.rooms.findUnique({
    where: { pin: roomId },
    select: { users: true },
  });

  return (
    <div className="w-full h-screen flex flex-col justify-center items-center bg-christmas bg-cover">
      <Card>
        <CardHeader>
          <CardTitle> Shuffle The Participants </CardTitle>
        </CardHeader>
        <CardContent>
          <SuffleButton roomId={roomId} />
        </CardContent>
      </Card>
    </div>
  );
};

export default SuffleUsers;
