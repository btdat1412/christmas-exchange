import { useRouter } from "next/navigation";
import { db } from "../../lib/db";
import CreateRoomButton from "./create-room-button";

const CreateRoom = async () => {
  const host = await db.users.create({
    data: {
      name: "Đạt",
      pinUser: Math.floor(Math.random() * 1000000).toString(),
      avatar:
        "https://gravatar.com/avatar/53a0095ff85e839e627c3afc95b60d0e?s=400&d=retro&r=x",
      isHost: true,
    },
  });

  const room = await db.rooms.create({
    data: {
      pin: Math.floor(Math.random() * 1000000).toString(),
      hostId: host.id,
      isClosed: false,
    },
  });

  const updateHost = await db.users.update({
    where: { id: host.id },
    data: { roomId: room.id },
  });

  const participant = await db.users.createMany({
    data: [
      {
        name: "Duy",
        pinUser: Math.floor(Math.random() * 1000000).toString(),
        avatar:
          "https://gravatar.com/avatar/aa2b0d77f5bc3b945dad83b74e195841?s=400&d=retro&r=x",
        isHost: false,
        roomId: room.id,
      },
      {
        name: "Anh Duy",
        pinUser: Math.floor(Math.random() * 1000000).toString(),
        avatar:
          "https://gravatar.com/avatar/5fe44b9ec084ad4562459032a71ae547?s=400&d=retro&r=x",
        isHost: false,
        roomId: room.id,
      },
      {
        name: "Duyên",
        pinUser: Math.floor(Math.random() * 1000000).toString(),
        avatar:
          "https://gravatar.com/avatar/ba9c79f64a66279133fa2776b67e8c72?s=400&d=retro&r=x",
        isHost: false,
        roomId: room.id,
      },
      {
        name: "Đại",
        pinUser: Math.floor(Math.random() * 1000000).toString(),
        avatar:
          "https://gravatar.com/avatar/adab646bbbfd3c49ad8fc359e111a973?s=400&d=retro&r=x",
        isHost: false,
        roomId: room.id,
      },
      {
        name: "Khánh",
        pinUser: Math.floor(Math.random() * 1000000).toString(),
        avatar:
          "https://gravatar.com/avatar/8b8719da09a215a7dd59a61ee5b43c39?s=400&d=retro&r=x",
        isHost: false,
        roomId: room.id,
      },
      {
        name: "Linh",
        pinUser: Math.floor(Math.random() * 1000000).toString(),
        avatar:
          "https://gravatar.com/avatar/c5d84b8b3f75777101c1500ea1bfc691?s=400&d=retro&r=x",
        isHost: false,
        roomId: room.id,
      },
      {
        name: "Lợi",
        pinUser: Math.floor(Math.random() * 1000000).toString(),
        avatar:
          "https://gravatar.com/avatar/420e7b1192c5947de9a151fb5d0ced24?s=400&d=retro&r=x",
        isHost: false,
        roomId: room.id,
      },
      {
        name: "Mỹ",
        pinUser: Math.floor(Math.random() * 1000000).toString(),
        avatar:
          "https://gravatar.com/avatar/c1c048491f9dd1b504722bfbe92e17ae?s=400&d=retro&r=x",
        isHost: false,
        roomId: room.id,
      },
      {
        name: "Nguyễn",
        pinUser: Math.floor(Math.random() * 1000000).toString(),
        avatar:
          "https://gravatar.com/avatar/5afb93547737d1644912f3294ecbb956?s=400&d=retro&r=x",
        isHost: false,
        roomId: room.id,
      },
      {
        name: "Nhi",
        pinUser: Math.floor(Math.random() * 1000000).toString(),
        avatar:
          "https://gravatar.com/avatar/545dc635b507a2c781f8c7fd7855a197?s=400&d=retro&r=x",
        isHost: false,
        roomId: room.id,
      },
      {
        name: "Quang",
        pinUser: Math.floor(Math.random() * 1000000).toString(),
        avatar:
          "https://gravatar.com/avatar/b9e7a3ed4b825e674818e940e1b01b8a?s=400&d=retro&r=x",
        isHost: false,
        roomId: room.id,
      },
      {
        name: "Thắng",
        pinUser: Math.floor(Math.random() * 1000000).toString(),
        avatar:
          "https://gravatar.com/avatar/2cced9c760393c76f36ea0d923366bb1?s=400&d=retro&r=x",
        isHost: false,
        roomId: room.id,
      },
      {
        name: "Toàn",
        pinUser: Math.floor(Math.random() * 1000000).toString(),
        avatar:
          "https://gravatar.com/avatar/a035997e075f93383bd19c225b72f245?s=400&d=retro&r=x",
        isHost: false,
        roomId: room.id,
      },
      {
        name: "Thy",
        pinUser: Math.floor(Math.random() * 1000000).toString(),
        avatar:
          "https://gravatar.com/avatar/64b107c3b0df9d2a302a1174919215e9?s=400&d=retro&r=x",
        isHost: false,
        roomId: room.id,
      },
      {
        name: "Vinh",
        pinUser: Math.floor(Math.random() * 1000000).toString(),
        avatar:
          "https://gravatar.com/avatar/be3c1b833cdb30c4c5bc0a5b07ca667f?s=400&d=retro&r=x",
        isHost: false,
        roomId: room.id,
      },
      {
        name: "Thi",
        pinUser: Math.floor(Math.random() * 1000000).toString(),
        avatar:
          "https://gravatar.com/avatar/bd6f391c797436414dd21be5f8e72304?s=400&d=retro&r=x",
        isHost: false,
        roomId: room.id,
      },
    ],
  });

  return <CreateRoomButton roomPin={room.pin} hostId = {host.id} />;
};

export default CreateRoom;
