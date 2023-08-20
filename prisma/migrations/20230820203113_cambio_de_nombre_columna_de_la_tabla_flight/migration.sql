/*
  Warnings:

  - You are about to drop the column `destinatioCity` on the `flight` table. All the data in the column will be lost.
  - Added the required column `destinationCity` to the `flight` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `flight` DROP COLUMN `destinatioCity`,
    ADD COLUMN `destinationCity` VARCHAR(100) NOT NULL;
