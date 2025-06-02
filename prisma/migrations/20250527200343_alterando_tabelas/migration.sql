/*
  Warnings:

  - You are about to drop the column `companyId` on the `simulations` table. All the data in the column will be lost.
  - You are about to drop the column `visitorId` on the `simulations` table. All the data in the column will be lost.
  - You are about to drop the `companies` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `leads` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `visitors` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `companyName` to the `simulations` table without a default value. This is not possible if the table is not empty.
  - Added the required column `email` to the `simulations` table without a default value. This is not possible if the table is not empty.
  - Added the required column `phone` to the `simulations` table without a default value. This is not possible if the table is not empty.
  - Added the required column `segment` to the `simulations` table without a default value. This is not possible if the table is not empty.
  - Added the required column `visitorName` to the `simulations` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "leads" DROP CONSTRAINT "leads_simulationId_fkey";

-- DropForeignKey
ALTER TABLE "simulations" DROP CONSTRAINT "simulations_companyId_fkey";

-- DropForeignKey
ALTER TABLE "simulations" DROP CONSTRAINT "simulations_visitorId_fkey";

-- DropForeignKey
ALTER TABLE "visitors" DROP CONSTRAINT "visitors_companyId_fkey";

-- AlterTable
ALTER TABLE "simulations" DROP COLUMN "companyId",
DROP COLUMN "visitorId",
ADD COLUMN     "companyName" TEXT NOT NULL,
ADD COLUMN     "email" TEXT NOT NULL,
ADD COLUMN     "phone" TEXT NOT NULL,
ADD COLUMN     "segment" TEXT NOT NULL,
ADD COLUMN     "visitorName" TEXT NOT NULL;

-- DropTable
DROP TABLE "companies";

-- DropTable
DROP TABLE "leads";

-- DropTable
DROP TABLE "visitors";
