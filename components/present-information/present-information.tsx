import { db } from "../../lib/db";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

const PresentInformation = async ({ userPin }: { userPin: string }) => {
  const user = await db.users.findUnique({
    where: { pinUser: userPin },
  });
  if (!user?.giveTo) {
    return <div>User not found</div>;
  }

  const giveToUser = await db.users.findUnique({
    where: { pinUser: user?.giveTo },
  });

  return (
    <div className="w-full h-screen flex flex-col justify-center items-center bg-christmas bg-cover">
      <Card>
        <CardHeader>
          <CardTitle> Your Present will give to </CardTitle>
        </CardHeader>
        <CardContent>
          <h1 className="w-full text-center text-5xl font-bold text-red-500">
            {giveToUser?.name}
          </h1>
        </CardContent>
      </Card>
    </div>
  );
};

export default PresentInformation;
