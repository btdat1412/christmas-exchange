"use client";

const CreateRoomButton = ({
  roomPin,
  hostPin,
}: {
  roomPin: string;
  hostPin: string | null;
}) => {
  return (
    <div className="flex gap-1 text-sm mt-1">
      <p className="inline-block text-gray-500">or</p>
      <a
        href={`/${roomPin}/${hostPin}`}
        className="inline-block text-blue-700 underline"
      >
        Create a room
      </a>
    </div>
  );
};

export default CreateRoomButton;
