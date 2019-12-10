CREATE DATABASE ecommerce;
USE ecommerce;

CREATE TABLE `ecommerce`.`Usuarios` (
  `id` INT NOT NULL auto_increment,
  `nome` VARCHAR(45) NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  `telefone` VARCHAR(45) NOT NULL,
  `senha` VARCHAR(45) NOT NULL,
  `endereco` VARCHAR(100) NOT NULL,
  `admin` BOOLEAN NOT NULL,
  PRIMARY KEY (`id`));

CREATE TABLE `ecommerce`.`Produtos` (
  `id` INT NOT NULL auto_increment,
  `nome` VARCHAR(45) NOT NULL,
  `descricao` VARCHAR(2000) NOT NULL,
  `plataforma`VARCHAR(45) NOT NULL,
  `estilo`VARCHAR(45) NOT NULL,
  `preco` DECIMAL(10,2) NOT NULL,
  `quantidade` INT NULL,
  `imagem` VARCHAR(5000),
  PRIMARY KEY (`id`));

  INSERT INTO `Produtos` VALUES (1,'God of War','Um jogo legal','playstation','Açao',149.00,15,'https://s3.amazonaws.com/comparegame/thumbnails/42222/large.jpg'),(2,'Fifa 20','Futebol','playstation','Esportes',79.00,10,'https://images-na.ssl-images-amazon.com/images/I/810m7X9943L._SL1500_.jpg'),(3,'Halo','Um jogo de tiro','xbox','Ação',120.00,15,'https://images-americanas.b2w.io/produtos/01/00/item/124403/4/124403493_1GG.png'),(4,'Gears of War','tiro','xbox','Ação',100.00,5,'https://images-americanas.b2w.io/produtos/01/00/item/124007/1/124007124_1GG.jpg'),(5,'Pokemon Sword','pokemon','nintendo','RPG',250.00,10,'https://www.pokemoncenter.com/wcsstore/PokemonCatalogAssetStore/images/catalog/products/P5699/716-52782/P5699_716-52782_01.jpg'),(6,'Donkey Kong Country 3','donkey','classico','Plataforma',1000.00,10,'https://upload.wikimedia.org/wikipedia/pt/e/e2/Donkey_Kong_Country_3.jpg'),(7,'Counter Strike GO','cs','windows','FPS',24.99,5,'https://upload.wikimedia.org/wikipedia/pt/c/ce/Counter-Strike_Global_Offensive.jpg'),(8,'The Legend of Zelda-Links Awakening','zelda','nintendo','RPG',284.99,50,'https://upload.wikimedia.org/wikipedia/pt/thumb/7/76/The_Legend_of_Zelda_Links_Awakening_2019_capa.png/270px-The_Legend_of_Zelda_Links_Awakening_2019_capa.png'),(9,'MU','mu','windows','MMORPG',10.00,1000,'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREC7sOJZW-CgZWn9vy2bq1Y305TcaK9zFHXmEVHTZ7eqVOc-jS&s'),(10,'The Last of Us','tlou','playstation','Zumbi',200.00,5,'https://s3.amazonaws.com/comparegame/thumbnails/39408/large.jpg'),(11,'Super Mario World','SPW','classico','Plataforma',500.00,5,'https://upload.wikimedia.org/wikipedia/pt/thumb/0/06/Super-Mario-World.jpg/280px-Super-Mario-World.jpg'),(12,'Bloodborne','BB','playstation','Ação',69.89,5,'https://i.zst.com.br/images/jogo-bloodborne-ps4-from-software-photo38445623-45-3f-15.jpg'),(13,'The Witcher 3','witcher','nintendo','RPG',250.00,5,'https://d221j5qju5nlg3.cloudfront.net/Custom/Content/Products/99/97/999712_the-witcher-3-wild-hunt-complete-edition-pre-venda-switch_m1_637066481616167191.jpg');

CREATE TABLE `ecommerce`.`Vendas` (
  `id` INT NOT NULL auto_increment,
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