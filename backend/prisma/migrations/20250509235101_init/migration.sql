-- CreateTable
CREATE TABLE `Clientes` (
    `ID_cli` INTEGER NOT NULL AUTO_INCREMENT,
    `Nome_cli` VARCHAR(191) NOT NULL,
    `Email_cli` VARCHAR(191) NOT NULL,
    `Senha_cli` VARCHAR(191) NOT NULL,
    `CPF_cli` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Clientes_Email_cli_key`(`Email_cli`),
    UNIQUE INDEX `Clientes_CPF_cli_key`(`CPF_cli`),
    PRIMARY KEY (`ID_cli`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Fornecedores` (
    `ID_for` INTEGER NOT NULL AUTO_INCREMENT,
    `Nome_for` VARCHAR(191) NOT NULL,
    `CNPJ_for` VARCHAR(191) NOT NULL,
    `Email_for` VARCHAR(191) NOT NULL,
    `Contato_for` VARCHAR(191) NULL,
    `Categoria_for` VARCHAR(191) NULL,
    `Uf_for` VARCHAR(191) NULL,
    `Cidade_for` VARCHAR(191) NULL,

    UNIQUE INDEX `Fornecedores_CNPJ_for_key`(`CNPJ_for`),
    PRIMARY KEY (`ID_for`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Ingredientes` (
    `ID_ing` INTEGER NOT NULL AUTO_INCREMENT,
    `Nome_ing` VARCHAR(191) NOT NULL,
    `Un_med_ing` VARCHAR(191) NOT NULL,
    `Qtd_estoque_ing` DOUBLE NOT NULL,
    `Valor_ing` DOUBLE NOT NULL,

    PRIMARY KEY (`ID_ing`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Entradas` (
    `ID_ent` INTEGER NOT NULL AUTO_INCREMENT,
    `Data_ent` DATETIME(3) NOT NULL,
    `NF_ent` VARCHAR(191) NULL,
    `ID_for` INTEGER NOT NULL,

    PRIMARY KEY (`ID_ent`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Itens_Entrada` (
    `ID_ite_ent` INTEGER NOT NULL AUTO_INCREMENT,
    `ID_ent` INTEGER NOT NULL,
    `ID_ing` INTEGER NOT NULL,
    `Qtd_ite_ent` DOUBLE NOT NULL,

    PRIMARY KEY (`ID_ite_ent`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Produtos_Vendas` (
    `ID_prod_ven` INTEGER NOT NULL AUTO_INCREMENT,
    `Nome_prod_ven` VARCHAR(191) NOT NULL,
    `Valor_prod_ven` DOUBLE NOT NULL,
    `Un_med_prod_ven` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`ID_prod_ven`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Receitas` (
    `ID_rec` INTEGER NOT NULL AUTO_INCREMENT,
    `ID_prod_ven` INTEGER NOT NULL,
    `ID_ing` INTEGER NOT NULL,
    `Qtd_ing_rec` DOUBLE NOT NULL,

    PRIMARY KEY (`ID_rec`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Vendas` (
    `ID_ven` INTEGER NOT NULL AUTO_INCREMENT,
    `ID_cli` INTEGER NOT NULL,
    `Data_ven` DATETIME(3) NOT NULL,
    `Horario_ven` VARCHAR(191) NOT NULL,
    `Valor_total_ven` DOUBLE NOT NULL,
    `Desc_val_total_ven` DOUBLE NOT NULL,
    `Valor_final_ven` DOUBLE NOT NULL,

    PRIMARY KEY (`ID_ven`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Itens_Vendas` (
    `ID_ite_ven` INTEGER NOT NULL AUTO_INCREMENT,
    `ID_ven` INTEGER NOT NULL,
    `ID_prod_ven` INTEGER NOT NULL,
    `Qtd_prod_ite_ven` DOUBLE NOT NULL,
    `Valor_un_ite_ven` DOUBLE NOT NULL,
    `Un_med_ite_ven` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`ID_ite_ven`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Encomendas` (
    `ID_en` INTEGER NOT NULL AUTO_INCREMENT,
    `ID_cli` INTEGER NOT NULL,
    `Valor_total_en` DOUBLE NOT NULL,

    PRIMARY KEY (`ID_en`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Itens_Encomenda` (
    `ID_ite_en` INTEGER NOT NULL AUTO_INCREMENT,
    `ID_en` INTEGER NOT NULL,
    `ID_prod_ven` INTEGER NOT NULL,
    `Qtd_prod_ite_en` DOUBLE NOT NULL,
    `Valor_un_prod_ite_en` DOUBLE NOT NULL,
    `Valor_total_prod_ite_en` DOUBLE NOT NULL,
    `Un_med_ite_en` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`ID_ite_en`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Entradas` ADD CONSTRAINT `Entradas_ID_for_fkey` FOREIGN KEY (`ID_for`) REFERENCES `Fornecedores`(`ID_for`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Itens_Entrada` ADD CONSTRAINT `Itens_Entrada_ID_ent_fkey` FOREIGN KEY (`ID_ent`) REFERENCES `Entradas`(`ID_ent`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Itens_Entrada` ADD CONSTRAINT `Itens_Entrada_ID_ing_fkey` FOREIGN KEY (`ID_ing`) REFERENCES `Ingredientes`(`ID_ing`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Receitas` ADD CONSTRAINT `Receitas_ID_prod_ven_fkey` FOREIGN KEY (`ID_prod_ven`) REFERENCES `Produtos_Vendas`(`ID_prod_ven`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Receitas` ADD CONSTRAINT `Receitas_ID_ing_fkey` FOREIGN KEY (`ID_ing`) REFERENCES `Ingredientes`(`ID_ing`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Vendas` ADD CONSTRAINT `Vendas_ID_cli_fkey` FOREIGN KEY (`ID_cli`) REFERENCES `Clientes`(`ID_cli`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Itens_Vendas` ADD CONSTRAINT `Itens_Vendas_ID_ven_fkey` FOREIGN KEY (`ID_ven`) REFERENCES `Vendas`(`ID_ven`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Itens_Vendas` ADD CONSTRAINT `Itens_Vendas_ID_prod_ven_fkey` FOREIGN KEY (`ID_prod_ven`) REFERENCES `Produtos_Vendas`(`ID_prod_ven`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Encomendas` ADD CONSTRAINT `Encomendas_ID_cli_fkey` FOREIGN KEY (`ID_cli`) REFERENCES `Clientes`(`ID_cli`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Itens_Encomenda` ADD CONSTRAINT `Itens_Encomenda_ID_en_fkey` FOREIGN KEY (`ID_en`) REFERENCES `Encomendas`(`ID_en`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Itens_Encomenda` ADD CONSTRAINT `Itens_Encomenda_ID_prod_ven_fkey` FOREIGN KEY (`ID_prod_ven`) REFERENCES `Produtos_Vendas`(`ID_prod_ven`) ON DELETE RESTRICT ON UPDATE CASCADE;
