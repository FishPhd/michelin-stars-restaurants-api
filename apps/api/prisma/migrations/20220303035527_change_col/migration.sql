/*
  Warnings:

  - You are about to drop the column `type` on the `restaurants` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "restaurants" DROP COLUMN "type",
ADD COLUMN     "cuisine" TEXT;
