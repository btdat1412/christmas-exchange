import PresentInformation from "../../../components/present-information/present-information";
import SuffleUsers from "../../../components/suffle-user/suffle-user";
import { db } from "../../../lib/db";

const InformationPage = async ({
  params,
}: {
  params: {
    roomId: string;
    userPin: string;
  };
}) => {
  const user = await db.users.findUnique({
    where: { pinUser: params.userPin },
    select: { isHost: true },
  });

  const room = await db.rooms.findUnique({
    where: { pin: params.roomId },
  });

  if (!room) {
    return <div>Room not found</div>;
  }
  return user?.isHost ? (
    <SuffleUsers userPin={params.userPin} roomId={params.roomId} />
  ) : (
    <PresentInformation userPin={params.userPin}/>
  );
};

export default InformationPage;
