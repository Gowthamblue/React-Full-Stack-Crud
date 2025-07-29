-- MySQLShell dump 2.0.1  Distrib Ver 9.4.0 for Win64 on x86_64 - for MySQL 9.4.0 (MySQL Community Server (GPL)), for Win64 (x86_64)
--
-- Host: localhost    Database: recipes    Table: ratings
-- ------------------------------------------------------
-- Server version	8.0.40

--
-- Current Database: `recipes`
--

USE `recipes`;

--
-- Table structure for table `ratings`
--

/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE IF NOT EXISTS `ratings` (
  `recipe_id` int DEFAULT NULL,
  `rating` int DEFAULT NULL,
  KEY `recipe_id` (`recipe_id`),
  CONSTRAINT `ratings_ibfk_1` FOREIGN KEY (`recipe_id`) REFERENCES `recipes` (`recipe_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;
