"use client";

import { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { useRouter } from "next/navigation";

const JoinRoom = () => {
  const [roomPin, setRoomPin] = useState("");
  const router = useRouter();

  const handleJoinRoom = () => {
    router.push(`/${roomPin}`);
  };
  return (
    <div className="flex flex-col gap-4">
      <Input
        type="text"
        placeholder="Enter room pin"
        value={roomPin}
        onChange={(e) => setRoomPin(e.target.value)}
      />
      <Button onClick={handleJoinRoom}>Join Room</Button>
    </div>
  );
};

export default JoinRoom;
