/*
  Warnings:

  - You are about to drop the column `distributorId` on the `simulations` table. All the data in the column will be lost.
  - You are about to drop the `distributors` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `distributor` to the `simulations` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "simulations" DROP CONSTRAINT "simulations_distributorId_fkey";

-- AlterTable
ALTER TABLE "simulations" DROP COLUMN "distributorId",
ADD COLUMN     "distributor" TEXT NOT NULL;

-- DropTable
DROP TABLE "distributors";
