"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Input } from "../../components/ui/input";
import { Button } from "../../components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";

interface InputUserPinProps {
  params: {
    roomId: string;
  };
}

const InputUserPin = ({ params }: InputUserPinProps) => {
  const [userPin, setUserPin] = useState("");
  const router = useRouter();

  const handleJoinRoom = () => {
    router.push(`/${params.roomId}/${userPin}`);
  };
  return (
    <div className="flex flex-col justify-center items-center bg-christmas bg-cover w-full h-screen">
      <Card>
        <CardHeader>
          <CardTitle> Enter Your Id </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-4">
            <Input
              type="text"
              placeholder="Enter Your Id"
              value={userPin}
              onChange={(e) => setUserPin(e.target.value)}
            />
            <Button onClick={handleJoinRoom}>Expose</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default InputUserPin;
