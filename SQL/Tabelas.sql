CREATE DATABASE ecommerce;
USE ecommerce;

CREATE TABLE `ecommerce`.`Usuarios` (
  `id` INT NOT NULL,
  `nome` VARCHAR(45) NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  `telefone` VARCHAR(45) NOT NULL,
  `endereco` VARCHAR(100) NOT NULL,
  `senha` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`));

CREATE TABLE `ecommerce`.`Produtos` (
  `id` INT NOT NULL,
  `nome` VARCHAR(45) NOT NULL,
  `descricao` VARCHAR(45) NOT NULL,
  `preco` DECIMAL(10,2) NOT NULL,
  `quantidade` INT NULL,
  PRIMARY KEY (`id`));

CREATE TABLE `ecommerce`.`Vendas` (
  `id` INT NOT NULL,
  `idProduto` INT NOT NULL,
  `idUsuario` INT NOT NULL,
  `quantidade` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `idProduto_idx` (`idProduto` ASC),
  INDEX `idUsuario_idx` (`idUsuario` ASC),
  CONSTRAINT `idProduto`
    FOREIGN KEY (`idProduto`)
    REFERENCES `ecommerce`.`Produtos` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `idUsuario`
    FOREIGN KEY (`idUsuario`)
    REFERENCES `ecommerce`.`Usuarios` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);