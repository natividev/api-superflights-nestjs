/*
  Warnings:

  - You are about to drop the `Passenger` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE `Passenger`;

-- CreateTable
CREATE TABLE `passenger` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(100) NOT NULL,
    `email` VARCHAR(100) NOT NULL,
    `status` BOOLEAN NOT NULL DEFAULT true,

    UNIQUE INDEX `passenger_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
