/*
  Warnings:

  - You are about to drop the column `contractText` on the `contracts` table. All the data in the column will be lost.
  - Added the required column `pdfPath` to the `contracts` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "contracts" DROP COLUMN "contractText",
ADD COLUMN     "pdfPath" TEXT NOT NULL;
