import Image from "next/image";
import { Button } from "../components/ui/button";
import { ModeToggle } from "../components/theme-toggle";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import CreateRoom from "../components/create-room/create-room";
import JoinRoom from "../components/join-room/join-room";

export default function Home() {
  return (
    <div className="h-screen w-screen flex justify-center items-center bg-christmas bg-cover">
      <Card>
        <CardHeader>
          <CardTitle>🎄Christmas Exchange🎄</CardTitle>
        </CardHeader>
        <CardContent>
          <JoinRoom />
          <CreateRoom />
        </CardContent>
      </Card>
    </div>
  );
}
