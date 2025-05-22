/*
  Warnings:

  - You are about to drop the column `segmentId` on the `companies` table. All the data in the column will be lost.
  - You are about to drop the `segments` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `segment` to the `companies` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "companies" DROP CONSTRAINT "companies_segmentId_fkey";

-- AlterTable
ALTER TABLE "companies" DROP COLUMN "segmentId",
ADD COLUMN     "segment" TEXT NOT NULL;

-- DropTable
DROP TABLE "segments";
