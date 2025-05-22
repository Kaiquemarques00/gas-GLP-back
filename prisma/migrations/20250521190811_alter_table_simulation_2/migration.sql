/*
  Warnings:

  - You are about to drop the column `cityId` on the `simulations` table. All the data in the column will be lost.
  - You are about to drop the `cities` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `states` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `city` to the `simulations` table without a default value. This is not possible if the table is not empty.
  - Added the required column `state` to the `simulations` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "cities" DROP CONSTRAINT "cities_stateId_fkey";

-- DropForeignKey
ALTER TABLE "simulations" DROP CONSTRAINT "simulations_cityId_fkey";

-- AlterTable
ALTER TABLE "simulations" DROP COLUMN "cityId",
ADD COLUMN     "city" TEXT NOT NULL,
ADD COLUMN     "state" TEXT NOT NULL;

-- DropTable
DROP TABLE "cities";

-- DropTable
DROP TABLE "states";
