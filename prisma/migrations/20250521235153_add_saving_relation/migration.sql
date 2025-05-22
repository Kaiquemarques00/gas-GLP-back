-- CreateTable
CREATE TABLE "savings" (
    "id" TEXT NOT NULL,
    "simulationId" TEXT NOT NULL,
    "currentTotal" DOUBLE PRECISION NOT NULL,
    "suggestedTotal" DOUBLE PRECISION NOT NULL,
    "savedAmount" DOUBLE PRECISION NOT NULL,
    "savedPercent" DOUBLE PRECISION NOT NULL,
    "currentPriceKg" DOUBLE PRECISION NOT NULL,
    "suggestedPriceKg" DOUBLE PRECISION NOT NULL,
    "monthsAnalyzed" INTEGER,
    "notes" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "savings_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "savings_simulationId_key" ON "savings"("simulationId");

-- AddForeignKey
ALTER TABLE "savings" ADD CONSTRAINT "savings_simulationId_fkey" FOREIGN KEY ("simulationId") REFERENCES "simulations"("id") ON DELETE CASCADE ON UPDATE CASCADE;
