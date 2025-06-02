/*
  Warnings:

  - Added the required column `fairValue` to the `savings` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "savings" ADD COLUMN     "fairValue" DOUBLE PRECISION NOT NULL;
