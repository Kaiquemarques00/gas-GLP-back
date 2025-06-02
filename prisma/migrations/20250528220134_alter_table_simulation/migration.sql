/*
  Warnings:

  - Added the required column `pricePerKg` to the `simulations` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "simulations" ADD COLUMN     "pricePerKg" DOUBLE PRECISION NOT NULL;
