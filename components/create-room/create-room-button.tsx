"use client";

const CreateRoomButton = ({
  roomPin,
  hostId,
}: {
  roomPin: string;
  hostId: number;
}) => {
  return (
    <div className="flex gap-1 text-sm mt-1">
      <p className="inline-block text-gray-500">or</p>
      <a
        href={`/${roomPin}/${hostId}`}
        className="inline-block text-blue-700 underline"
      >
        Create a room
      </a>
    </div>
  );
};

export default CreateRoomButton;
