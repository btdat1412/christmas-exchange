-- CreateTable
CREATE TABLE "users" (
    "id" SERIAL NOT NULL,
    "pinUser" TEXT,
    "giveTo" TEXT,
    "name" TEXT NOT NULL,
    "avatar" TEXT,
    "isHost" BOOLEAN NOT NULL DEFAULT false,
    "roomId" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "rooms" (
    "id" SERIAL NOT NULL,
    "pin" TEXT NOT NULL,
    "hostId" INTEGER,
    "isClosed" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "rooms_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_pinUser_key" ON "users"("pinUser");

-- CreateIndex
CREATE INDEX "idx_roomId_users" ON "users"("roomId");

-- CreateIndex
CREATE UNIQUE INDEX "rooms_pin_key" ON "rooms"("pin");
