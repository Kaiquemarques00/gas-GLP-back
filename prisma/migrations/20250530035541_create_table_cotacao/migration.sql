-- CreateTable
CREATE TABLE "cotacoes" (
    "id" TEXT NOT NULL,
    "valuePerKg" DOUBLE PRECISION NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "cotacoes_pkey" PRIMARY KEY ("id")
);
