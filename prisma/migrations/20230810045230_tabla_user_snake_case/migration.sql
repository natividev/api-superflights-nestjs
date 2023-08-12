/*
  Warnings:

  - You are about to drop the column `username` on the `user` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[user_name]` on the table `user` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `user_name` to the `user` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX `user_username_key` ON `user`;

-- AlterTable
ALTER TABLE `user` DROP COLUMN `username`,
    ADD COLUMN `user_name` VARCHAR(50) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `user_user_name_key` ON `user`(`user_name`);
