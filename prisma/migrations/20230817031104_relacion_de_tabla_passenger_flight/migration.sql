/*
  Warnings:

  - Added the required column `passenger_id` to the `flight` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `flight` ADD COLUMN `passenger_id` INTEGER NOT NULL;

-- CreateIndex
CREATE INDEX `idx_passenger_passenger_id` ON `flight`(`passenger_id`);

-- AddForeignKey
ALTER TABLE `flight` ADD CONSTRAINT `flight_passenger_id_fkey` FOREIGN KEY (`passenger_id`) REFERENCES `passenger`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
