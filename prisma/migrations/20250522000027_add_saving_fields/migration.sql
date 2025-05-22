/*
  Warnings:

  - You are about to drop the column `currentPriceKg` on the `savings` table. All the data in the column will be lost.
  - You are about to drop the column `currentTotal` on the `savings` table. All the data in the column will be lost.
  - You are about to drop the column `monthsAnalyzed` on the `savings` table. All the data in the column will be lost.
  - You are about to drop the column `notes` on the `savings` table. All the data in the column will be lost.
  - You are about to drop the column `savedAmount` on the `savings` table. All the data in the column will be lost.
  - You are about to drop the column `savedPercent` on the `savings` table. All the data in the column will be lost.
  - You are about to drop the column `suggestedPriceKg` on the `savings` table. All the data in the column will be lost.
  - You are about to drop the column `suggestedTotal` on the `savings` table. All the data in the column will be lost.
  - Added the required column `estimatedSaving` to the `savings` table without a default value. This is not possible if the table is not empty.
  - Added the required column `savingPercentage` to the `savings` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `savings` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "savings" DROP COLUMN "currentPriceKg",
DROP COLUMN "currentTotal",
DROP COLUMN "monthsAnalyzed",
DROP COLUMN "notes",
DROP COLUMN "savedAmount",
DROP COLUMN "savedPercent",
DROP COLUMN "suggestedPriceKg",
DROP COLUMN "suggestedTotal",
ADD COLUMN     "estimatedSaving" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "savingPercentage" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;
