/*
  Warnings:

  - You are about to drop the column `simulationId` on the `savings` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[queryId]` on the table `savings` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `queryId` to the `savings` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "savings" DROP CONSTRAINT "savings_simulationId_fkey";

-- DropIndex
DROP INDEX "savings_simulationId_key";

-- AlterTable
ALTER TABLE "savings" DROP COLUMN "simulationId",
ADD COLUMN     "queryId" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "savings_queryId_key" ON "savings"("queryId");

-- AddForeignKey
ALTER TABLE "savings" ADD CONSTRAINT "savings_queryId_fkey" FOREIGN KEY ("queryId") REFERENCES "queries"("id") ON DELETE CASCADE ON UPDATE CASCADE;
