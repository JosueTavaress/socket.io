-- MySQL Script generated by MySQL Workbench
-- dom 27 fev 2022 14:54:27
-- Model: New Model    Version: 1.0
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema chatTime
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema chatTime
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `chatTime` ;
USE `chatTime` ;

-- -----------------------------------------------------
-- Table `chatTime`.`user`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `chatTime`.`user` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(25) NOT NULL,
  `last_name` VARCHAR(45) NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  `password` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `chatTime`.`chanel`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `chatTime`.`chanel` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `description` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `chatTime`.`menssage`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `chatTime`.`menssage` (
  `id` INT NOT NULL,
  `message` VARCHAR(255) NOT NULL,
  `user_id` INT NOT NULL,
  `chanel_id` INT NOT NULL,
  `data_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`, `user_id`, `chanel_id`),
  INDEX `fk_mensage_user1_idx` (`user_id` ASC) VISIBLE,
  INDEX `fk_menssage_chanel1_idx` (`chanel_id` ASC) VISIBLE,
  CONSTRAINT `fk_mensage_user1`
    FOREIGN KEY (`user_id`)
    REFERENCES `chatTime`.`user` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_menssage_chanel1`
    FOREIGN KEY (`chanel_id`)
    REFERENCES `chatTime`.`chanel` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `chatTime`.`subscribe`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `chatTime`.`subscribe` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `user_id` INT NOT NULL,
  `chanel_id` INT NOT NULL,
  PRIMARY KEY (`id`, `user_id`, `chanel_id`),
  INDEX `fk_subscribe_user1_idx` (`user_id` ASC) VISIBLE,
  INDEX `fk_subscribe_chanel1_idx` (`chanel_id` ASC) VISIBLE,
  CONSTRAINT `fk_subscribe_user1`
    FOREIGN KEY (`user_id`)
    REFERENCES `chatTime`.`user` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_subscribe_chanel1`
    FOREIGN KEY (`chanel_id`)
    REFERENCES `chatTime`.`chanel` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;