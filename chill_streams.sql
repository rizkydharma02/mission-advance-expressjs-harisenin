-- MySQL dump 10.13  Distrib 8.0.33, for macos13 (arm64)
--
-- Host: 127.0.0.1    Database: chill_stream
-- ------------------------------------------------------
-- Server version	8.0.33

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `genre`
--

DROP TABLE IF EXISTS `genre`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `genre` (
  `id_genre` int NOT NULL AUTO_INCREMENT,
  `genre_title` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `added_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id_genre`),
  UNIQUE KEY `genre_title` (`genre_title`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `genre`
--

LOCK TABLES `genre` WRITE;
/*!40000 ALTER TABLE `genre` DISABLE KEYS */;
INSERT INTO `genre` VALUES (1,'action','2025-11-21 14:29:45'),(2,'romance','2025-11-21 14:30:00'),(3,'horror','2025-11-21 14:30:18'),(4,'comedy','2025-11-21 14:30:48'),(5,'mystery','2025-11-21 14:31:04'),(6,'animation','2025-11-21 14:31:23'),(7,'thriller','2025-11-21 14:31:30'),(8,'drama','2025-11-21 14:31:44'),(9,'fiction','2025-11-21 14:32:03');
/*!40000 ALTER TABLE `genre` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `movies`
--

DROP TABLE IF EXISTS `movies`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `movies` (
  `id_movie` int NOT NULL AUTO_INCREMENT,
  `id_genre` int DEFAULT NULL,
  `movie_title` varchar(50) NOT NULL,
  `movie_subtitle` varchar(255) NOT NULL,
  `movie_year` year NOT NULL,
  `movie_classification` varchar(255) NOT NULL,
  `movie_producer` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `movie_cast` varchar(100) NOT NULL,
  `movie_image` varchar(100) NOT NULL,
  `movie_duration` varchar(50) NOT NULL,
  `added_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `movie_rating` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `movie_ongoing` tinyint(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id_movie`),
  UNIQUE KEY `movie_title` (`movie_title`),
  KEY `fk_movies_genre` (`id_genre`),
  CONSTRAINT `fk_movies_genre` FOREIGN KEY (`id_genre`) REFERENCES `genre` (`id_genre`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=77 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `movies`
--

LOCK TABLES `movies` WRITE;
/*!40000 ALTER TABLE `movies` DISABLE KEYS */;
INSERT INTO `movies` VALUES (45,3,'2','Film',2020,'mature','Universal Pictures','Hugh Grant, Emma Thompson','number3','2 Hoursss','2025-11-21 16:22:15','7.6',1),(46,1,'Shazam!','Film',2025,'mature','Warner Bros','Zachary Levi, Mark Strong','number2','2 Hours','2025-11-21 16:22:15','7.0',0),(47,1,'Avatar','Film',2025,'mature','20th Century Studios','Sam Worthington, Zoe Saldana','number3','2 Hours','2025-11-21 16:22:15','7.9',0),(48,1,'Fast X','Film',2025,'mature','Universal Pictures','Vin Diesel, Jason Momoa','number4','2 Hours','2025-11-21 16:22:15','5.9',0),(49,6,'Blue Lock','24 Episode',2025,'mature','Eight Bit Studio','Kazuki Ura, Tasuku Kaito','number5','2 Hours','2025-11-21 16:22:15','8.4',1),(50,9,'The Little Mermaid','Film',2025,'mature','Walt Disney Pictures','Halle Bailey, Jonah Hauer-King','number6','2 Hours','2025-11-21 16:22:15','7.2',0),(51,1,'The Tomorrow War','Film',2025,'mature','Skydance Media','Chris Pratt, Yvonne Strahovski','number7','2 Hours','2025-11-21 16:22:15','6.5',0),(52,1,'Batman','Film',2025,'mature','DC Films','Robert Pattinson, Zoe Kravitz','number8','2 Hours','2025-11-21 16:22:15','6.9',0),(53,8,'All of Us Are Dead','Film',2025,'mature','Film Monster','Park Ji-hu, Yoon Chan-young','number9','2 Hours','2025-11-21 16:22:15','7.5',0),(54,8,'A man Called Otto','Film',2025,'mature','Sony Pictures','Tom Hanks, Mariana Trevino','number10','2 Hours','2025-11-21 16:22:15','7.8',0),(55,7,'Alice in Borderland','Film',2025,'mature','Netflix','Kento Yamazaki, Tao Tsuchiya','number11','2 Hours','2025-11-21 16:22:15','7.9',0),(56,6,'Big Hero 6','Film',2025,'mature','Walt Disney Pictures','Ryan Potter, Scott Adsit','number12','2 Hours','2025-11-21 16:22:15','7.8',0),(57,5,'Missing','Film',2025,'mature','Screen Gems','Storm Reid, Joaquim de Almeida','number13','2 Hours','2025-11-21 16:22:15','6.0',0),(58,6,'Suzume','Film',2025,'mature','CoMix Wave Films','Nanoka Hara, Hokuto Matsumura','number14','2 Hours','2025-11-21 16:22:15','7.8',0),(59,7,'Megan','Film',2025,'mature','Blumhouse Productions','Allison Williams, Violet McGraw','number15','2 Hours','2025-11-21 16:22:15','7.4',0),(60,1,'Quantumania','Film',2025,'mature','Marvel Studios','Paul Rudd, Evangeline Lilly','number16','2 Hours','2025-11-21 16:22:15','8.0',0),(61,8,'Duty After School','Film',2025,'mature','TVING','Shin Hyun-soo, Lim Se-mi','number17','2 Hours','2025-11-21 16:22:15','7.5',0),(62,6,'My Hero Academia: World Heroes Mission','24 Episode',2025,'mature','Bones Studio','Daiki Yamashita, Nobuhiko Okamoto','number18','2 Hours','2025-11-21 16:22:15','8.2',1),(63,5,'Doctor Strange in the Multiverse of Madness','Film',2025,'mature','Marvel Studios','Benedict Cumberbatch, Elizabeth Olsen','number19','2 Hours','2025-11-21 16:22:15','7.4',0),(64,9,'Dont Look Up','Film',2025,'mature','Hyperobject Industries','Leonardo DiCaprio, Jennifer Lawrence','number20','2 Hours','2025-11-21 16:22:15','6.5',0),(65,1,'Black Adam','Film',2025,'mature','DC Films','Dwayne Johnson, Aldis Hodge','number21','2 Hours','2025-11-21 16:22:15','5.6',0),(66,8,'Devil All The Time','Film',2025,'mature','Nine Stories Productions','Tom Holland, Robert Pattinson','number22','2 Hours','2025-11-21 16:22:15','6.2',0),(67,4,'Ted Lasso','Film',2025,'mature','Apple TV+','Jason Sudeikis, Hannah Waddingham','number23','2 Hours','2025-11-21 16:22:15','6.5',0),(68,6,'Stuart Little','Film',2025,'mature','Columbia Pictures','Michael J. Fox, Geena Davis','number24','2 Hours','2025-11-21 16:22:15','8.7',0),(69,1,'Jurassic Park Dominion','Film',2025,'mature','Amblin Entertainment','Chris Pratt, Bryce Dallas Howard','number25','2 Hours','2025-11-21 16:22:15','6.1',0),(70,6,'Baymax','Film',2025,'mature','Walt Disney Pictures','Scott Adsit, Maya Rudolph','number26','2 Hours','2025-11-21 16:22:15','7.3',0),(71,2,'Dilan 1991','Film',2025,'mature','Falcon Pictures','Iqbaal Ramadhan, Vanesha Prescilla','number27','2 Hours','2025-11-21 16:22:15','7.5',0),(72,3,'Happiness','Film',2025,'mature','Studio Dragon','Han Hyo-joo, Park Hyung-sik','number28','2 Hours','2025-11-21 16:22:15','6.2',0),(73,6,'Sonic 2','Film',2025,'mature','Paramount Pictures','Ben Schwartz, James Marsden','number29','2 Hours','2025-11-21 16:22:15','7.1',0),(74,4,'Guardian of the Galaxy','Film',2025,'mature','Marvel Studios','Chris Pratt, Zoe Saldana','number30','2 Hours','2025-11-21 16:22:15','8.8',0),(75,6,'Spiderman: Across the Spider-Verse','Film',2025,'mature','Sony Pictures Animation','Shameik Moore, Hailee Steinfeld','number31','2 Hours','2025-11-21 16:22:15','7.2',0),(76,3,'contohku','Film',2020,'mature','Universal Pictures','Hugh Grant, Emma Thompson','number3','2 Hoursss','2025-11-22 08:48:32','7.6',1);
/*!40000 ALTER TABLE `movies` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `my_list`
--

DROP TABLE IF EXISTS `my_list`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `my_list` (
  `id_mylist` int NOT NULL AUTO_INCREMENT,
  `id_user` int DEFAULT NULL,
  `id_movie` int DEFAULT NULL,
  `id_series` int DEFAULT NULL,
  `list_image` varchar(100) NOT NULL,
  `added_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id_mylist`),
  UNIQUE KEY `id_user` (`id_user`),
  UNIQUE KEY `id_movie` (`id_movie`),
  UNIQUE KEY `id_series` (`id_series`),
  CONSTRAINT `fk_movies` FOREIGN KEY (`id_movie`) REFERENCES `movies` (`id_movie`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_series` FOREIGN KEY (`id_series`) REFERENCES `series` (`id_series`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_users` FOREIGN KEY (`id_user`) REFERENCES `users` (`id_user`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `my_list`
--

LOCK TABLES `my_list` WRITE;
/*!40000 ALTER TABLE `my_list` DISABLE KEYS */;
/*!40000 ALTER TABLE `my_list` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `orders`
--

DROP TABLE IF EXISTS `orders`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `orders` (
  `id_order` int NOT NULL AUTO_INCREMENT,
  `id_payment` int DEFAULT NULL,
  `order_price` int NOT NULL,
  `order_history` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id_order`),
  UNIQUE KEY `id_payment` (`id_payment`),
  CONSTRAINT `fk_payments` FOREIGN KEY (`id_payment`) REFERENCES `payments` (`id_payment`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `orders`
--

LOCK TABLES `orders` WRITE;
/*!40000 ALTER TABLE `orders` DISABLE KEYS */;
/*!40000 ALTER TABLE `orders` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `packets`
--

DROP TABLE IF EXISTS `packets`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `packets` (
  `id_packet` int NOT NULL AUTO_INCREMENT,
  `packet_name` varchar(100) NOT NULL,
  `packet_status` enum('Ready','Not Ready') CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  PRIMARY KEY (`id_packet`),
  UNIQUE KEY `packet_name` (`packet_name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `packets`
--

LOCK TABLES `packets` WRITE;
/*!40000 ALTER TABLE `packets` DISABLE KEYS */;
/*!40000 ALTER TABLE `packets` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `payments`
--

DROP TABLE IF EXISTS `payments`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `payments` (
  `id_payment` int NOT NULL AUTO_INCREMENT,
  `id_packet` int DEFAULT NULL,
  `payment_price` int NOT NULL,
  `code_voucher` varchar(50) NOT NULL,
  `payment_method` varchar(50) NOT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `payment_status` enum('Success','Pending','Rejected') NOT NULL,
  PRIMARY KEY (`id_payment`),
  UNIQUE KEY `id_packet` (`id_packet`),
  CONSTRAINT `fk_packets` FOREIGN KEY (`id_packet`) REFERENCES `packets` (`id_packet`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `payments`
--

LOCK TABLES `payments` WRITE;
/*!40000 ALTER TABLE `payments` DISABLE KEYS */;
/*!40000 ALTER TABLE `payments` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `series`
--

DROP TABLE IF EXISTS `series`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `series` (
  `id_series` int NOT NULL AUTO_INCREMENT,
  `id_genre` int DEFAULT NULL,
  `series_title` varchar(50) NOT NULL,
  `series_subtitle` varchar(255) NOT NULL,
  `series_desc` varchar(255) NOT NULL,
  `series_year` year NOT NULL,
  `series_classification` varchar(255) NOT NULL,
  `series_producer` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `series_cast` varchar(100) NOT NULL,
  `series_image` varchar(100) NOT NULL,
  `series_duration` varchar(50) DEFAULT NULL,
  `amount_episode` varchar(50) NOT NULL,
  `added_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `series_rating` varchar(20) NOT NULL,
  `series_ongoing` tinyint(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id_series`),
  UNIQUE KEY `series_title` (`series_title`),
  KEY `fk_series_genre` (`id_genre`),
  CONSTRAINT `fk_series_genre` FOREIGN KEY (`id_genre`) REFERENCES `genre` (`id_genre`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `series`
--

LOCK TABLES `series` WRITE;
/*!40000 ALTER TABLE `series` DISABLE KEYS */;
INSERT INTO `series` VALUES (4,2,'Love Actually aku ganteng banget','Film','A heartfelt romantic drama about intertwined lives.',2025,'mature','Universal Pictures','Hugh Grant, Emma Thompson','number1','2 Hours','12','2025-11-21 17:15:48','7.6',1),(5,2,'Love Actually yebah','Film','A heartfelt romantic drama about intertwined lives.',2025,'mature','Universal Pictures','Hugh Grant, Emma Thompson','number1','2 Hours','12','2025-11-21 17:15:48','7.6',1),(8,2,'Love Actually wadidaw','Film','A heartfelt romantic drama about intertwined lives.',2025,'mature','Universal Pictures','Hugh Grant, Emma Thompson','number1','2 Hours','12','2025-11-22 09:07:13','7.6',1),(9,2,'contih21','Film','A heartfelt romantic drama about intertwined lives.',2025,'mature','Universal Pictures','Hugh Grant, Emma Thompson','number1','2 Hours','12','2025-11-22 09:12:46','7.6',1),(10,2,'Ldaasdku ganteng banget','Film','A heartfelt romantic drama about intertwined lives.',2025,'mature','Universal Pictures','Hugh Grant, Emma Thompson','number1','2 Hours','12','2025-11-22 09:12:46','7.6',1);
/*!40000 ALTER TABLE `series` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id_user` int NOT NULL AUTO_INCREMENT,
  `fullname` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(255) NOT NULL,
  `username` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `verification_token` varchar(255) DEFAULT NULL,
  `is_verified` tinyint(1) DEFAULT '0',
  PRIMARY KEY (`id_user`),
  UNIQUE KEY `username` (`username`)
) ENGINE=InnoDB AUTO_INCREMENT=44 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'rizky dharma','rizkydharma02@gmail.com','$2b$10$iBOBh318uzD1DnkxORMbE.Zn/bPp5FRGVtXM6BVJTucob8QrqXEuC','rizkydharma02','2025-11-25 10:13:02',NULL,0),(2,'rizky dharmaku','rizkydharma022@gmail.com','$2b$10$OVWw/C2p9IShcjx/gL4qIuHoqtI1BNWLJc87z4wsdymTcrVlB9XCi','rizkydharma022','2025-11-25 10:14:16',NULL,0),(3,'rizky dharmakuganteng','rizkydharma0222@gmail.com','$2b$10$xy62Tt1HZ/2tPCBDuTfCuOb9vImErQk8TxlYu1QPl91uJQKyWxQ3.','rizkydharma0223','2025-11-25 10:14:48',NULL,0),(5,'rizky dharmakugantejn2kg','rizkydharma02i22@gmail.com','$2b$10$EIEUWTmZBgwSkKLdPVv9O.mHij59JLbrfLdX6Hhb1pzgthwg9gGOK','rizkydharmaj0223','2025-11-25 12:05:04',NULL,0),(7,'rizky dharmakugantejns2kg','rizkydharma02i22w@gmail.com','$2b$10$4vMg8Uvo2n2tWqvXSf70A.Xd19dQbU2Qls3Q83C2PEUw6M/03PIPS','rizkydharmaj02223','2025-11-25 12:15:03',NULL,0),(8,'rizky dharmakugantejnsu2kg','rizkydharma02i22uw@gmail.com','$2b$10$UHD5z/MSIhOsBq4gqgjSyumRnWOLX4HsTHtdpth8ppvrIsQNhlviC','rizkydharmaj022u23','2025-11-27 08:10:27',NULL,0),(10,'rizky dharmakuganstejnsu2kg','rizkydharma02i22u2w@gmail.com','$2b$10$bS8uqmkYgPS56w9qrjo3WOyxwwbv/pRgarYn8q/nhPQccu1d7eL3a','rizkydharma2j022u23','2025-11-27 08:33:19',NULL,0),(11,'rizky dharmakuganstejnsu2kg','rizkydharma02i22u22w@gmail.com','$2b$10$AjEwWRNjX2KaQSmoOj5kHO5ExiGjIVO1TGXCGOMCT237OW8D/PaKS','rizkydharma2j022u223','2025-11-27 08:36:57',NULL,0),(12,'rizky dharmakuganstejnsu2kg','rizkydharma02i22u222w@gmail.com','$2b$10$hnbrY1T2fJjkFtH8jsvgqu9nk4blgLmevRqd19LzNnLQYzN8IBKs6','rizkydharmada2u223','2025-11-27 08:40:31',NULL,0),(13,'rizky dharmakuganstejnsu2kg','rizkydhardai22u222w@gmail.com','$2b$10$t5HnGpzic6FODyKOBM44quoBscJTLf3KBH8w4cJ8DNMuPc4Y9YTge','rizkydharmadwwu223','2025-11-27 08:41:09',NULL,0),(14,'rizky dharmakuganstejnsu2kg','rizkydhard31222w@gmail.com','$2b$10$WzLqZJGWQIZDuxkCFtELROGLZcdU2MNXjxX3DN7NrcHa.txnVrwEm','rizkyadwadwwu223','2025-11-27 08:43:01',NULL,0),(15,'rizky dharmakuganstejnsu2kg','rizkyadw222w@gmail.com','$2b$10$dtD1o.mJOgvRHT7hyvkg6O5YPLabRcm4vu5O9iAxZ4KsarYelLuZW','ri312wu223','2025-11-27 08:43:47',NULL,0),(16,'rizky dhganstejnsu2kg','ri12kyadw222w@gmail.com','$2b$10$xSJBtL8x3VDajlDeiqQCLO3G1GERSLGKSGhOETM5xc5hQwoPfY.nu','ri31221223','2025-11-27 08:47:08',NULL,0),(17,'rizky dhganstejnsu2kg','ri12kyad1w@gmail.com','$2b$10$3PxGiH339UpYV2O4xjiqP.zS0Xr8nkpqXNU.8slzj6OZNX133qtBy','1ws21223','2025-11-27 08:47:51',NULL,0),(18,'rizky dhganstejnsu2kg','r1ad1w@gmail.com','$2b$10$TgqCfwMtppMqHDHabO9jyOWYrnYWQfGeJBDsfi6MAVAyz4bfRjLc2','1ws121223','2025-11-27 08:48:08',NULL,0),(19,'rizky dhganstejnsu2kg','1221aw@gmail.com','$2b$10$U1aOyEfGIGbxoyLDEl1wCeIBwi0M7SgRs5dWzLcFmXice0Uop8XoC','1ws1223','2025-11-27 08:49:16',NULL,0),(20,'rizky dhgwanstejnsu2kg','1221aww@gmail.com','$2b$10$V3Yo0M8F4gtcc2WtYM9mIugV9FfG0CRw757XnG.LvusZCcWWFibJ6','1ws122w3','2025-11-27 09:09:58',NULL,0),(21,'rizky dhgwanstejjnsu2kg','1221ajww@gmail.com','$2b$10$akWmm0LhucG5TSVoA6UNw.UU1PkvBKUSPnkGnTSS.CFa6fvdIDKAW','1ws122jw3','2025-12-01 07:27:22',NULL,0),(22,'tester login','testerlogin@gmail.com','$2b$10$51w0yqUNCnwPMTKQgJoCGeXUFLVPlq7UKpVn5F1395dhanihTv9C2','testerlogin','2025-12-01 07:32:56',NULL,0),(23,'John Doe','john@example.com','$2b$10$LvZXivaZjwYK4kwY2nb/w./21qld1sq64us14CR7l7MAign3gPgb.','johndoe','2025-12-01 14:14:48',NULL,0),(24,'John Doe rizky','akunbisnisraya02@gmail.com','$2b$10$rs5e74YpslaFQCrBfVNyAu8JnNiTu0bH0D6eP2lxQUQQJkWyNKkeS','rizky','2025-12-01 14:15:40',NULL,0),(25,'John Doe rizky dharma','harmanmyth02@gmail.com','$2b$10$wuwv4DsmQN7Lbn6ILBcc8uafpynMbyPSoaaltJEK2944TqCMnJb0y','harman myth02','2025-12-01 14:22:39',NULL,0),(26,'akuganteng02','akugantengdong@gmail.com','$2b$10$XE0/M1sFJggg2gs.//uuuu/LBKDcopTrwm/ya4H.y9PDd0P6PZf2i','akugantengdong','2025-12-02 03:01:52',NULL,0),(27,'akugantengkaka','akugantengdongkaka@gmail.com','$2b$10$5U8NUgQVcP0WKYdB1yYJp.GdTR79.wHuFjMxtSCwi2OSzbUNEh28O','akugantengdongkaka','2025-12-02 03:04:55',NULL,0),(28,'akugantengkakak','akugantengdongkakak@gmail.com','$2b$10$nV2uHERSEPrtB8KVfDNMMuVKd5cyHU5MFVa3/rliYJfBLA2pMiJ.i','akugantengdongkakak','2025-12-02 03:12:30',NULL,0),(29,'akugantengskakak','akugantengdongskakak@gmail.com','$2b$10$QGG8mIfQRDpV.nHn.9Fyp.uNop2XgDp8dAoJ0BVgLGutPRoCD2LIy','akugantengsdongkakak','2025-12-02 03:20:31',NULL,0),(30,'akugantengskakmak','akugantengdongsmkakak@gmail.com','$2b$10$hKAs.lF2t.OVFBfOzFw62.sfXKunuSLn.eT95dshhhV857FQAfBzi','akugantljkak','2025-12-02 03:37:51',NULL,0),(31,'akugantengskakmkak','akugabntengdongsmkakak@gmail.com','$2b$10$Gbfc1RenosVlPtIg7jFj3uaB0otm5yn7vu/zk/eD5IF6ySldZnwEu','akugantbljkak','2025-12-02 03:41:04',NULL,0),(32,'akugajgskakmkak','akugahbmongsmkakak@gmail.com','$2b$10$Nirh2zz6k37bF6WP4.g5Qe5eXjpPw9niEk/Nx65ENA6h.udaILwNO','akugjhtbljkak','2025-12-02 03:44:21',NULL,0),(33,'akugajgskakmkkak','akugahbmonkgsmkakak@gmail.com','$2b$10$Q3z//8Rq5TeWdBbIX1GJju/3v9UiKwD4wcwd4heTZIpEhNcl9fHXG','akugjhtbkljkak','2025-12-02 03:51:17',NULL,0),(34,'akugajgskakkmkkak','akugahbmkonkgsmkakak@gmail.com','$2b$10$.qO3A.W.WY5VqeSmsXIdDumqGWbhmOSaHbW5AoQIh2QdCQsun8m2.','akugjhtbklkjkak','2025-12-02 03:52:43',NULL,0),(35,'akugajgskadkkmkkak','akugahbmkonkgsdmkakak@gmail.com','$2b$10$Q9LBj2Uzg9yORPubTj9MY.NQyYaMfT12PVkoijBz1BFC8HctMYDF2','akudgjhtbklkjkak','2025-12-02 04:09:18',NULL,1),(36,'akugajgkskadkkmkkak','akukkjnkgsdmkakak@gmail.com','$2b$10$DrrugogtiTBrB.rQaTsKzO9/44TkPJKGqRRWgekKLoaW0qEjxgwmC','akudgjjnjjnak','2025-12-02 04:10:31',NULL,1),(37,'akdsskadkkmkkak','awwdkakak@gmail.com','$2b$10$u89S9hkwv0C7rMZUiZZ1quQbHIJvZCV/g0D5kfG8mIyNcGr9fUMay','wdawsnjjnak','2025-12-02 04:15:09',NULL,1),(38,'akdsskadsmkkak','awjnkkak@gmail.com','$2b$10$v9RayY90s4hrRj06bQYBB.0P4cBuVRv0sGBSay6I8DYYshxA6U2mO','wdajkjjnak','2025-12-02 04:33:31','9cce65c8-024b-4af1-9410-e18cebca56fb',0),(39,'akddsmkkak','awjndasd@gmail.com','$2b$10$uEmo1RAwN6ADuOSHaVvPOehl9I8zxxM2CKm9PmZwilr49f.hpyLQy','wdasasasdajnak','2025-12-02 04:36:12',NULL,1),(40,'akddsmkkjkjkak','awjhbjjbhj@gmail.com','$2b$10$YVzzgZRIAyS/sSMNFX1p.euLHCC/vC3jsLWZPQSiTpY5GkqVgKbyq','wdasjjhjhjhajnak','2025-12-02 04:38:35',NULL,1),(41,'akddsmkjkak','awjhbsssj@gmail.com','$2b$10$Ck1m4wPKODtL6sjWTpzJ5ecIR67fQmjbYSq8AjWCxQSUQgaL3jZwe','wsshjhajnak','2025-12-02 04:53:02',NULL,1),(42,'akddsmksjkak','awjhbsssssj@gmail.com','$2b$10$IZMhtC5yXx3nUy3eh/klOuVoQl18IXfFk6hn0g9qCNy4l8M3Y7Xh2','wsshjhajssnak','2025-12-02 05:03:11',NULL,1),(43,'admin','admin@gmail.com','$2b$10$RrGhBvCHz74aqa480Kv1nekrZI96/h2dNX7nqwjKkrr9PGHU1V2Dq','admin','2025-12-02 05:12:15',NULL,1);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'chill_stream'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-12-02 14:59:19
