"use client";

import { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { useRouter } from "next/router";

const TakeRandom = ({ roomPin }: { roomPin: string }) => {
  const [userId, setUserId] = useState("");
  const router = useRouter();

  const handleTakeRandom = () => {
    router.push(`/${roomPin}/${userId}`);
  };
  return (
    <div>
      <Input
        type="text"
        placeholder="Enter room pin"
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
      />
      <Button onClick={handleTakeRandom}>Join Room</Button>
    </div>
  );
};

export default TakeRandom;
