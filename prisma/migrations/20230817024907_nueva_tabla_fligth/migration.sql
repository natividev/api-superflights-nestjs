-- CreateTable
CREATE TABLE `flight` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `pilot` VARCHAR(100) NOT NULL,
    `airplane` VARCHAR(100) NOT NULL,
    `destinatioCity` VARCHAR(100) NOT NULL,
    `flighDate` DATE NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
