-- MySQL dump 10.13  Distrib 8.0.31, for Win64 (x86_64)
--
-- Host: localhost    Database: lotterydrumsnew
-- ------------------------------------------------------
-- Server version	8.0.31

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `tblcountry`
--

DROP TABLE IF EXISTS `tblcountry`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tblcountry` (
  `id` int NOT NULL AUTO_INCREMENT,
  `txtCountryname` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tblcountry`
--

LOCK TABLES `tblcountry` WRITE;
/*!40000 ALTER TABLE `tblcountry` DISABLE KEYS */;
INSERT INTO `tblcountry` VALUES (1,'India'),(2,'Pakistan');
/*!40000 ALTER TABLE `tblcountry` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbldistrict`
--

DROP TABLE IF EXISTS `tbldistrict`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbldistrict` (
  `id` int NOT NULL AUTO_INCREMENT,
  `txtDistrict` varchar(50) DEFAULT NULL,
  `refStateid` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `refStateid` (`refStateid`),
  CONSTRAINT `tbldistrict_ibfk_1` FOREIGN KEY (`refStateid`) REFERENCES `tblstate` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbldistrict`
--

LOCK TABLES `tbldistrict` WRITE;
/*!40000 ALTER TABLE `tbldistrict` DISABLE KEYS */;
INSERT INTO `tbldistrict` VALUES (1,'Trivandrum',1),(2,'Kollam',1),(3,'Pathanamthitta',1),(4,'Kottayam',1),(5,'Idukki',1),(6,'Salem',2),(7,'Trichy',2),(8,'Coimbatore',2),(9,'Nilgiris',2),(10,'Chennai',2),(11,'Bhopal',10),(12,'Bhind',10),(13,'Gwalior',10),(14,'Sivapuri',10);
/*!40000 ALTER TABLE `tbldistrict` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbllotterymaster`
--

DROP TABLE IF EXISTS `tbllotterymaster`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbllotterymaster` (
  `id` int NOT NULL AUTO_INCREMENT,
  `txtLotteryname` varchar(50) DEFAULT NULL,
  `dtLotterydrawdate` datetime DEFAULT NULL,
  `txtCost` int DEFAULT NULL,
  `txtUnitSaleAmount` int DEFAULT NULL,
  `txtPurchasedamount` int DEFAULT NULL,
  `txtAdminChargeperUnit` int DEFAULT NULL,
  `txtStartRange` int DEFAULT NULL,
  `txtEndRange` int DEFAULT NULL,
  `txtSelectionLimit` int DEFAULT NULL,
  `txtNoOfCol` int DEFAULT NULL,
  `txtNoOfRow` int DEFAULT NULL,
  `txtColStartAt` int DEFAULT NULL,
  `txtColEndAt` int DEFAULT NULL,
  `txtPurchaseLimit` int DEFAULT NULL,
  `txtSubLottery` varchar(50) DEFAULT NULL,
  `txtRaffleid` int DEFAULT NULL,
  `refProvider` int DEFAULT NULL,
  `txtAgentCommission` int DEFAULT NULL,
  `txtTax` int DEFAULT NULL,
  `txtOtherDeduct1` int DEFAULT NULL,
  `txtOtherDeduct2` int DEFAULT NULL,
  `txtCharitypercent` int DEFAULT NULL,
  `txtCommissionrate` int DEFAULT NULL,
  `txtFirstprize` int DEFAULT NULL,
  `txtSecondprize` int DEFAULT NULL,
  `txtThirdprize` int DEFAULT NULL,
  `txtFourthprize` int DEFAULT NULL,
  `txtFifthprize` int DEFAULT NULL,
  `txtSixthprize` int DEFAULT NULL,
  `txtCreatedBy` varchar(50) DEFAULT NULL,
  `txtCreatedOn` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `txtUpdatedBy` varchar(50) DEFAULT NULL,
  `dtUpdatedOn` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `txtUpdatedflag` int DEFAULT '0',
  `txtDeleteflag` int DEFAULT '0',
  `txtLotteryresult` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `refProvider` (`refProvider`),
  CONSTRAINT `tbllotterymaster_ibfk_1` FOREIGN KEY (`refProvider`) REFERENCES `tblprovider` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=45 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbllotterymaster`
--

LOCK TABLES `tbllotterymaster` WRITE;
/*!40000 ALTER TABLE `tbllotterymaster` DISABLE KEYS */;
INSERT INTO `tbllotterymaster` VALUES (1,'Kerala Bumper','2023-01-01 00:00:00',450,NULL,NULL,NULL,1,30,5,NULL,NULL,NULL,NULL,5,NULL,NULL,3,NULL,NULL,NULL,NULL,NULL,NULL,10000,1000,100,10,1,NULL,NULL,'2023-02-06 14:48:09',NULL,'2023-02-06 14:48:09',0,0,'[1,2,4,6,8]'),(2,'TN weekly','2022-12-01 00:00:00',500,NULL,NULL,NULL,1,30,5,NULL,NULL,NULL,NULL,5,NULL,NULL,3,NULL,NULL,NULL,NULL,NULL,NULL,10000,1000,100,10,1,NULL,NULL,'2023-02-06 14:48:09',NULL,'2023-02-06 14:48:09',0,0,'[2,6,8,10,11]'),(3,'Monthly lottery','2023-01-02 00:00:00',600,NULL,NULL,NULL,1,39,6,NULL,NULL,NULL,NULL,5,NULL,NULL,4,NULL,NULL,NULL,NULL,NULL,NULL,20000,10000,1000,100,50,NULL,NULL,'2023-02-06 14:48:09',NULL,'2023-02-06 14:48:09',0,0,'[2,4,6,8,10,14]'),(4,'Gotham city','2022-05-02 00:00:00',500,NULL,NULL,100,1,30,5,NULL,NULL,NULL,NULL,5,NULL,NULL,4,NULL,NULL,NULL,NULL,NULL,NULL,20000,10000,1000,100,50,NULL,NULL,'2023-02-06 14:48:09',NULL,'2023-02-06 14:48:09',0,0,'[2,6,8,10,11]'),(5,'New year bumber','2023-01-14 00:00:00',800,NULL,NULL,NULL,1,30,5,NULL,NULL,NULL,NULL,5,NULL,NULL,5,NULL,NULL,NULL,NULL,NULL,NULL,20000,10000,1000,100,50,NULL,NULL,'2023-02-06 14:48:09',NULL,'2023-02-06 14:48:09',0,0,'[2,6,8,10,11]'),(25,'Kerala','2023-04-01 00:00:00',200,NULL,NULL,NULL,1,39,5,NULL,NULL,NULL,NULL,5,'1',NULL,3,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'2023-02-06 14:48:09',NULL,'2023-02-06 14:48:09',0,0,'[2,6,8,10,11]'),(27,'Kerala lottery','2023-03-21 00:00:00',500,100,NULL,20,1,39,5,NULL,NULL,NULL,NULL,5,'bumber offer',NULL,3,7,14,8,8,15,8,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'2023-02-06 14:48:09',NULL,'2023-02-06 14:48:09',0,0,'[1,2,4,6,8]'),(28,'Kerala lottery','2023-03-21 00:00:00',500,100,NULL,20,1,39,5,NULL,NULL,NULL,NULL,5,'',NULL,3,7,14,8,8,15,8,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'2023-02-06 14:48:09',NULL,'2023-02-06 14:48:09',0,0,'[2,3,4,5,6]'),(29,'TN weekly','2022-11-30 00:00:00',500,80,NULL,10,1,30,5,NULL,NULL,NULL,NULL,5,'null',NULL,3,2,4,12,12,10,8,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'2023-02-06 14:48:09',NULL,'2023-02-06 14:48:09',0,0,'[2,3,4,5,6]]'),(30,'TN Weekly','2023-02-14 00:00:00',500,150,450,30,1,39,6,10,10,1,9,5,'1',1212,3,14,20,5,5,10,14,100000,10000,1000,100,50,10,NULL,'2023-02-06 14:48:09',NULL,'2023-02-06 14:48:09',0,0,'[2,3,4,1,4]'),(31,'newlot','2023-02-12 00:00:00',200,200,200,20,0,0,0,7,7,0,7,4,'1',1214,3,14,14,14,14,10,14,1000000,100000,10000,50000,10000,5000,NULL,'2023-02-03 12:25:10',NULL,'2023-02-03 12:25:10',0,0,'[1,2,3,4,5]'),(32,'Gotham city','2022-05-01 00:00:00',550,200,200,20,0,29,6,10,10,0,9,5,'bumberr',NULL,4,14,14,14,14,14,14,1000000,10000,10000,1000,100,50,NULL,'2023-02-06 14:48:09',NULL,'2023-02-06 14:48:09',0,0,'[7,8]'),(33,'new lottery test','2023-05-14 00:00:00',200,200,200,20,0,39,6,10,10,0,9,5,'bumber',NULL,17,14,14,14,14,14,14,1000000,100000,10000,1000,1000,100,NULL,'2023-02-06 14:48:09',NULL,'2023-02-06 14:48:09',0,0,NULL),(34,'new lottery test','2023-05-14 00:00:00',200,200,241,20,0,39,6,10,10,0,9,5,'bumber',NULL,17,14,14,14,14,10,14,1000000,100000,10000,1000,1000,100,NULL,'2023-02-06 14:48:09',NULL,'2023-02-06 14:48:09',0,0,NULL),(35,'newlot','2023-02-12 00:00:00',200,200,200,20,0,29,5,0,0,0,0,5,'1',1212,3,14,14,14,14,10,14,1000000,100000,10000,50000,10000,0,NULL,'2023-02-06 14:48:09',NULL,'2023-02-06 14:48:09',0,0,'1,2,3,4,1'),(36,'newlot','2023-02-12 00:00:00',200,200,200,20,0,29,5,0,0,0,0,5,'1',1421,3,14,14,14,14,10,14,1000000,100000,10000,50000,10000,0,NULL,'2023-02-06 14:48:09',NULL,'2023-02-06 14:48:09',0,0,''),(37,'test1lottery','2023-02-03 00:00:00',420,200,200,10,0,39,5,0,0,0,0,3,'1',1212,18,14,14,14,14,14,14,1400000,1000000,1000000,100000,1000,0,NULL,'2023-02-02 16:09:24',NULL,'2023-02-02 16:09:24',0,0,'1,2,4,4'),(38,'Kerala Bumper','2023-01-01 00:00:00',450,100,200,10,1,30,5,0,0,0,0,4,'',121212,18,14,14,14,14,10,14,10000,1000,100,10,1,0,NULL,'2023-02-02 22:18:20',NULL,'2023-02-02 22:18:20',0,0,'[2,6,8,10,11]'),(39,'Kerala Bumper','2023-01-01 00:00:00',450,100,200,10,1,30,5,0,0,0,0,4,'',NULL,18,14,14,14,14,10,14,10000,1000,100,10,1,0,NULL,'2023-02-03 10:24:23',NULL,'2023-02-03 10:24:23',0,0,'[7,8]'),(40,'newlot','2023-02-12 00:00:00',200,200,200,20,0,29,5,0,0,0,0,5,'No sub lottery',1234,3,14,14,14,14,10,14,1000000,100000,10000,50000,10000,0,NULL,'2023-02-02 15:53:50',NULL,'2023-02-02 15:53:50',0,0,'1,2,3,4,5'),(41,'kerala lottery','2023-02-11 00:00:00',NULL,NULL,NULL,NULL,NULL,NULL,NULL,0,10,0,9,4,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,1000000,10000,1000,500,100,NULL,NULL,'2023-02-06 00:00:00',NULL,'2023-02-06 00:00:00',0,0,NULL),(43,'TN Weekly','2023-02-09 00:00:00',500,150,100,30,1,39,6,0,0,0,0,5,'1',NULL,3,14,20,5,5,10,14,100000,10000,1000,100,50,10,NULL,'2023-02-06 10:55:34',NULL,'2023-02-06 10:55:34',0,0,NULL),(44,'TN Weekly','2023-02-08 00:00:00',500,150,100,30,0,0,0,7,7,0,6,5,'1',NULL,3,14,20,5,5,10,14,100000,10000,1000,100,50,10,NULL,'2023-02-06 11:08:36',NULL,'2023-02-06 11:08:36',0,0,NULL);
/*!40000 ALTER TABLE `tbllotterymaster` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tblprovider`
--

DROP TABLE IF EXISTS `tblprovider`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tblprovider` (
  `id` int NOT NULL AUTO_INCREMENT,
  `txtProvidername` varchar(250) DEFAULT NULL,
  `txtEmail` varchar(250) DEFAULT NULL,
  `txtContactnumber` int DEFAULT NULL,
  `txtRegisteredaddress` varchar(250) DEFAULT NULL,
  `txtZipcode` int DEFAULT NULL,
  `refState` int DEFAULT NULL,
  `txtDeleteflag` int NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tblprovider`
--

LOCK TABLES `tblprovider` WRITE;
/*!40000 ALTER TABLE `tblprovider` DISABLE KEYS */;
INSERT INTO `tblprovider` VALUES (3,'KL lottery','kl@gmail.com',789,'Kerala',247,3,0),(4,'TN Lottery','tn@gmail.com',457,'Tamil Nadu',476,3,0),(5,'Bumper','Bumper@gmail.com',745,'Delhi',784,4,0),(18,'test1provider','test1@gmail.com',1212,'calicut',2525,1,0),(19,'Test','test@nomail.com',789456123,'a',12,2,0),(20,'testtest','test2@nomail.com',95655,'khb',1212,1,1),(21,'testprovider','dsd@',1414,'bsdub',21221,2,1);
/*!40000 ALTER TABLE `tblprovider` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tblresultmap`
--

DROP TABLE IF EXISTS `tblresultmap`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tblresultmap` (
  `id` int NOT NULL AUTO_INCREMENT,
  `refUnitid` int DEFAULT NULL,
  `txtMatchingcount` int DEFAULT NULL,
  `txtPrizemoney` int DEFAULT NULL,
  `refLotterymasterid` int DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tblresultmap`
--

LOCK TABLES `tblresultmap` WRITE;
/*!40000 ALTER TABLE `tblresultmap` DISABLE KEYS */;
INSERT INTO `tblresultmap` VALUES (1,14,5,500,2),(2,15,0,0,2),(3,16,0,0,2),(4,17,4,400,2),(5,52,3,300,1),(6,53,1,100,1),(7,54,5,500,1),(8,55,4,400,3),(9,56,3,300,3),(10,57,0,0,3),(11,58,1,100,3);
/*!40000 ALTER TABLE `tblresultmap` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tblresultmaster`
--

DROP TABLE IF EXISTS `tblresultmaster`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tblresultmaster` (
  `id` int NOT NULL AUTO_INCREMENT,
  `refLotterymaster` int DEFAULT NULL,
  `txtCreatedBy` varchar(50) DEFAULT NULL,
  `txtCreatedOn` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `txtUpdatedBy` varchar(50) DEFAULT NULL,
  `dtUpdatedOn` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `txtDeleteflag` int DEFAULT '0',
  `txtUpdatedflag` int DEFAULT '0',
  `txtLotteryresult` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tblresultmaster`
--

LOCK TABLES `tblresultmaster` WRITE;
/*!40000 ALTER TABLE `tblresultmaster` DISABLE KEYS */;
INSERT INTO `tblresultmaster` VALUES (1,1,NULL,NULL,NULL,NULL,0,0,NULL),(2,2,NULL,NULL,NULL,NULL,0,0,NULL),(3,3,NULL,NULL,NULL,NULL,0,0,NULL),(4,29,NULL,'2023-01-24 22:27:18',NULL,'2023-01-24 22:27:18',0,0,NULL),(5,30,NULL,'2023-01-28 11:29:37',NULL,'2023-01-28 11:29:37',0,0,NULL),(6,31,NULL,'2023-01-28 11:30:20',NULL,'2023-01-28 11:30:20',0,0,NULL);
/*!40000 ALTER TABLE `tblresultmaster` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tblstate`
--

DROP TABLE IF EXISTS `tblstate`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tblstate` (
  `id` int NOT NULL AUTO_INCREMENT,
  `txtStatename` varchar(50) DEFAULT NULL,
  `refCountryid` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `refCountryid` (`refCountryid`),
  CONSTRAINT `tblstate_ibfk_1` FOREIGN KEY (`refCountryid`) REFERENCES `tblcountry` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tblstate`
--

LOCK TABLES `tblstate` WRITE;
/*!40000 ALTER TABLE `tblstate` DISABLE KEYS */;
INSERT INTO `tblstate` VALUES (1,'Kerala',1),(2,'TamilNadu',1),(3,'Karnataka',1),(4,'Telangana',1),(5,'AndhraPradesh',1),(6,'Goa',1),(7,'Maharashtra',1),(8,'Orissa',1),(9,'MP',1),(10,'UP',1);
/*!40000 ALTER TABLE `tblstate` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tblunit`
--

DROP TABLE IF EXISTS `tblunit`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tblunit` (
  `id` int NOT NULL AUTO_INCREMENT,
  `refUser` int DEFAULT NULL,
  `refLotterymaster` int DEFAULT NULL,
  `txtPurchaseddate` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `txtCreatedBy` varchar(50) DEFAULT NULL,
  `txtCreatedOn` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `txtUpdatedBy` varchar(50) DEFAULT NULL,
  `dtUpdatedOn` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `txtUpdateflag` int DEFAULT '0',
  `txtDeleteflag` int DEFAULT '0',
  `txtLotteryNumber` varchar(25) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=130 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tblunit`
--

LOCK TABLES `tblunit` WRITE;
/*!40000 ALTER TABLE `tblunit` DISABLE KEYS */;
INSERT INTO `tblunit` VALUES (1,1,4,'2023-01-06 15:08:53',NULL,'2023-01-06 15:08:53','admin','2023-01-06 15:08:53',1,1,NULL),(4,2,4,'2023-01-06 15:08:53',NULL,'2023-01-06 15:08:53',NULL,'2023-01-06 15:08:53',1,0,NULL),(5,6,4,'2023-01-25 15:10:28',NULL,'2023-01-25 15:10:28',NULL,'2023-01-25 15:10:28',1,0,NULL),(6,6,4,'2023-02-01 18:38:36',NULL,'2023-02-01 18:38:36',NULL,'2023-02-01 18:38:36',1,0,''),(7,5,4,'2023-02-01 18:38:36',NULL,'2023-02-01 18:38:36',NULL,'2023-02-01 18:38:36',0,0,'[1,2,3,4,5]'),(8,7,4,'2023-01-25 15:10:28',NULL,'2023-01-25 15:10:28',NULL,'2023-01-25 15:10:28',1,0,NULL),(9,4,4,'2023-01-06 15:08:53',NULL,'2023-01-06 15:08:53',NULL,'2023-01-06 15:08:53',1,0,NULL),(10,5,4,'2023-02-01 18:38:36',NULL,'2023-02-01 18:38:36',NULL,'2023-02-01 18:38:36',1,0,'[1,2,3,4,5]'),(11,1,4,'2023-01-06 15:08:53',NULL,'2023-01-06 15:08:53',NULL,'2023-01-06 15:08:53',1,0,NULL),(12,1,4,'2023-01-06 15:08:53',NULL,'2023-01-06 15:08:53',NULL,'2023-01-06 15:08:53',0,0,NULL),(13,1,4,'2023-01-06 15:08:53',NULL,'2023-01-06 15:08:53',NULL,'2023-01-06 15:08:53',1,0,NULL),(14,5,2,'2023-02-01 18:40:23',NULL,'2023-02-01 18:40:23',NULL,'2023-02-01 18:40:23',1,0,'[1,2,3,4,5]'),(15,1,2,'2023-01-06 15:04:29',NULL,'2023-01-06 15:04:29',NULL,'2023-01-06 15:04:29',1,0,'[11,21,31,14,15]'),(16,2,2,'2023-01-06 15:04:29',NULL,'2023-01-06 15:04:29',NULL,'2023-01-06 15:04:29',1,0,'[11,21,31,14,15]'),(17,3,2,'2023-01-06 15:04:29',NULL,'2023-01-06 15:04:29',NULL,'2023-01-06 15:04:29',0,0,'[]'),(52,3,1,'2023-01-01 22:10:03',NULL,'2023-01-01 22:10:03',NULL,'2023-01-01 22:10:03',1,0,'[11,19,25,30,38]'),(53,3,1,'2023-01-06 15:04:29',NULL,'2023-01-06 15:04:29',NULL,'2023-01-06 15:04:29',1,0,'[3,6,16,18,30]'),(54,3,1,'2023-01-06 15:04:29',NULL,'2023-01-06 15:04:29',NULL,'2023-01-06 15:04:29',1,0,'[11,12,28,30,38]'),(55,3,3,'2023-01-06 15:04:29',NULL,'2023-01-06 15:04:29',NULL,'2023-01-06 15:04:29',1,0,'[11,19,25,30,38]'),(56,3,3,'2023-01-06 15:04:29',NULL,'2023-01-06 15:04:29',NULL,'2023-01-06 15:04:29',1,0,'[3,6,16,18,30]'),(57,3,3,'2023-01-06 15:04:29',NULL,'2023-01-06 15:04:29',NULL,'2023-01-06 15:04:29',1,0,'[]'),(58,3,3,'2023-01-06 15:04:29',NULL,'2023-01-06 15:04:29',NULL,'2023-01-06 15:04:29',1,0,'[11,19,25,30,38]'),(59,3,4,'2023-01-06 15:08:53',NULL,'2023-01-06 15:08:53',NULL,'2023-01-06 15:08:53',1,0,'[]'),(60,3,4,'2023-01-06 15:08:53',NULL,'2023-01-06 15:08:53',NULL,'2023-01-06 15:08:53',1,0,'[]'),(61,3,4,'2023-01-06 15:08:53',NULL,'2023-01-06 15:08:53',NULL,'2023-01-06 15:08:53',1,0,'[11,19,25,30,38]'),(62,3,4,'2023-01-06 15:08:53',NULL,'2023-01-06 15:08:53',NULL,'2023-01-06 15:08:53',1,0,'[3,8,15,28,32]'),(63,3,4,'2023-01-06 15:08:53',NULL,'2023-01-06 15:08:53',NULL,'2023-01-06 15:08:53',0,0,'[7,18,20,22,34]'),(64,3,4,'2023-01-06 15:08:53',NULL,'2023-01-06 15:08:53',NULL,'2023-01-06 15:08:53',1,0,'[15,16,22,28,37]'),(65,3,4,'2023-01-06 15:08:53',NULL,'2023-01-06 15:08:53',NULL,'2023-01-06 15:08:53',1,0,'[11,15,19,21,26]'),(66,3,4,'2023-01-06 15:08:53',NULL,'2023-01-06 15:08:53',NULL,'2023-01-06 15:08:53',1,0,'[5,15,21,23,37]'),(67,3,4,'2023-01-06 15:08:53',NULL,'2023-01-06 15:08:53',NULL,'2023-01-06 15:08:53',1,0,'[4,8,18,30,38]'),(100,1,4,'2023-01-06 15:08:53',NULL,'2023-01-06 15:08:53',NULL,'2023-01-06 15:08:53',1,0,'[5,13,18,24,38]'),(101,1,4,'2023-01-06 15:20:09',NULL,'2023-01-06 15:20:09',NULL,'2023-01-06 15:20:09',1,0,NULL),(102,1,4,'2023-01-06 15:08:53',NULL,'2023-01-06 15:08:53',NULL,'2023-01-06 15:08:53',0,0,'[10,18,28,29,36]'),(103,1,4,'2023-01-06 15:08:53',NULL,'2023-01-06 15:08:53',NULL,'2023-01-06 15:08:53',0,0,'[4,10,11,13,27]'),(104,1,4,'2023-01-06 15:08:53',NULL,'2023-01-06 15:08:53',NULL,'2023-01-06 15:08:53',0,0,'[5,10,13,28,35]'),(105,1,4,'2023-01-06 15:08:53',NULL,'2023-01-06 15:08:53',NULL,'2023-01-06 15:08:53',0,0,'[5,10,13,28,35]'),(106,1,4,'2023-01-06 15:08:53',NULL,'2023-01-06 15:08:53',NULL,'2023-01-06 15:08:53',0,0,'[5,10,13,28,35]'),(107,2,5,'2023-01-13 11:02:37',NULL,'2023-01-13 11:02:37',NULL,'2023-01-13 11:02:37',0,3,'[13,19,27,28,35]'),(108,2,5,'2023-01-13 11:03:01',NULL,'2023-01-13 11:03:01',NULL,'2023-01-13 11:03:01',0,3,'[3,5,15,22,33]'),(109,2,5,'2023-01-25 10:18:32',NULL,'2023-01-25 10:18:32',NULL,'2023-01-25 10:18:32',0,3,'[12,22,23,24,34]'),(110,2,5,'2023-01-25 10:18:33',NULL,'2023-01-25 10:18:33',NULL,'2023-01-25 10:18:33',0,3,'[10,18,30,35,37]'),(111,2,5,'2023-01-25 10:18:34',NULL,'2023-01-25 10:18:34',NULL,'2023-01-25 10:18:34',0,3,'[11,14,19,20,25]'),(112,2,5,'2023-01-25 10:18:35',NULL,'2023-01-25 10:18:35',NULL,'2023-01-25 10:18:35',0,3,'[7,27,29,30,33]'),(113,2,5,'2023-01-25 10:18:36',NULL,'2023-01-25 10:18:36',NULL,'2023-01-25 10:18:36',0,3,'[5,18,28,29,37]'),(114,2,5,'2023-01-25 10:18:41',NULL,'2023-01-25 10:18:41',NULL,'2023-01-25 10:18:41',0,3,'[5,12,13,24,37]'),(115,5,25,'2023-02-02 22:01:53',NULL,'2023-02-02 22:01:53',NULL,'2023-02-02 22:01:53',0,3,'[9,10,11,16,20]'),(116,5,25,'2023-02-02 22:01:53',NULL,'2023-02-02 22:01:53',NULL,'2023-02-02 22:01:53',0,3,'[6,11,19,27,36]'),(117,6,25,'2023-02-02 22:01:53',NULL,'2023-02-02 22:01:53',NULL,'2023-02-02 22:01:53',0,0,'[8,23,28,29,36]'),(118,7,25,'2023-02-02 22:01:53',NULL,'2023-02-02 22:01:53',NULL,'2023-02-02 22:01:53',0,0,'[6,7,8,15,28]'),(119,2,31,'2023-02-06 11:06:52',NULL,'2023-02-06 11:06:52',NULL,'2023-02-06 11:06:52',0,3,'[19,20,21,23,26]'),(120,2,37,'2023-02-06 11:06:55',NULL,'2023-02-06 11:06:55',NULL,'2023-02-06 11:06:55',0,3,'[8,12,32,35,37]'),(121,2,37,'2023-02-06 11:06:57',NULL,'2023-02-06 11:06:57',NULL,'2023-02-06 11:06:57',0,3,'[4,31,33,37,38]'),(122,2,31,'2023-02-06 11:07:00',NULL,'2023-02-06 11:07:00',NULL,'2023-02-06 11:07:00',0,3,'[5,8,12,16,18]'),(123,2,31,'2023-02-06 11:07:03',NULL,'2023-02-06 11:07:03',NULL,'2023-02-06 11:07:03',0,3,'[0,2,7,18,23]'),(124,2,43,'2023-02-06 11:07:06',NULL,'2023-02-06 11:07:06',NULL,'2023-02-06 11:07:06',0,3,'[8,16,24,27,33,38]'),(125,2,43,'2023-02-06 11:07:08',NULL,'2023-02-06 11:07:08',NULL,'2023-02-06 11:07:08',0,3,'[2,7,11,19,26,30]'),(126,2,1,'2023-02-06 11:05:34',NULL,'2023-02-06 11:05:34',NULL,'2023-02-06 11:05:34',0,0,'[2,12,17,24]'),(127,2,43,'2023-02-06 11:07:11',NULL,'2023-02-06 11:07:11',NULL,'2023-02-06 11:07:11',0,3,'[5,9,10,11,19,34]'),(128,2,43,'2023-02-06 11:06:48',NULL,'2023-02-06 11:06:48',NULL,'2023-02-06 11:06:48',0,3,'[3,18,19,21,24,28]'),(129,2,1,'2023-02-06 11:06:44',NULL,'2023-02-06 11:06:44',NULL,'2023-02-06 11:06:44',0,0,'[4,22,24]');
/*!40000 ALTER TABLE `tblunit` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbluserrole`
--

DROP TABLE IF EXISTS `tbluserrole`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbluserrole` (
  `id` int NOT NULL AUTO_INCREMENT,
  `txtRole` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbluserrole`
--

LOCK TABLES `tbluserrole` WRITE;
/*!40000 ALTER TABLE `tbluserrole` DISABLE KEYS */;
INSERT INTO `tbluserrole` VALUES (1,'Admin'),(2,'User');
/*!40000 ALTER TABLE `tbluserrole` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tblusers`
--

DROP TABLE IF EXISTS `tblusers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tblusers` (
  `id` int NOT NULL AUTO_INCREMENT,
  `txtFname` varchar(50) DEFAULT NULL,
  `txtLname` varchar(50) DEFAULT NULL,
  `txtUpassword` varchar(50) DEFAULT NULL,
  `txtUphoneno` varchar(50) DEFAULT NULL,
  `txtUemail` varchar(50) DEFAULT NULL,
  `txtaddress` varchar(100) DEFAULT NULL,
  `refDistrict` int DEFAULT NULL,
  `refState` int DEFAULT NULL,
  `txtOtp` varchar(50) DEFAULT NULL,
  `txtCreatedBy` varchar(50) DEFAULT NULL,
  `txtCreatedOn` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `txtUpdatedBy` varchar(50) DEFAULT NULL,
  `dtUpdatedOn` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `txtUpdatedflag` int DEFAULT '0',
  `txtDeleteflag` int DEFAULT '0',
  `refUserRole` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `refDistrict` (`refDistrict`),
  KEY `refUserRole` (`refUserRole`),
  CONSTRAINT `tblusers_ibfk_1` FOREIGN KEY (`refDistrict`) REFERENCES `tbldistrict` (`id`),
  CONSTRAINT `tblusers_ibfk_2` FOREIGN KEY (`refUserRole`) REFERENCES `tbluserrole` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tblusers`
--

LOCK TABLES `tblusers` WRITE;
/*!40000 ALTER TABLE `tblusers` DISABLE KEYS */;
INSERT INTO `tblusers` VALUES (1,'Michael','Clarke','aaaa','111111','michael@gmail.com','Kowdiar',1,1,NULL,NULL,'2022-12-24 21:54:24',NULL,'2022-12-24 21:54:24',NULL,0,1),(2,'Peter','Tyson','bbbb','222222','tyson@gmail.com','Mersal',6,2,NULL,NULL,'2022-12-24 21:54:24',NULL,'2022-12-24 21:54:24',NULL,0,1),(3,'Rajesh','Krishnan','cccc','333333','rajesh@gmail.com','Valakadavu',2,1,NULL,NULL,'2022-12-24 21:54:24',NULL,'2022-12-24 21:54:24',NULL,0,1),(4,'Daniel','Chen','dddd','444444','daniel@gmail.com','Pandalam',3,1,NULL,NULL,'2022-12-24 21:54:24',NULL,'2022-12-24 21:54:24',NULL,0,1),(5,'James','Davis','eeee','555555','james@gmail.com','ChandniChowk',12,10,NULL,NULL,'2022-12-24 21:54:24',NULL,'2022-12-24 21:54:24',NULL,0,2),(6,'Rohan','Mathew','123',NULL,'si.nahor@gmail.com',NULL,NULL,NULL,'ad7jie',NULL,'2022-12-24 21:54:24',NULL,'2022-12-24 21:54:24',NULL,1,2),(7,'Rachel ','Thomas','123',NULL,'rachel_07thomas@yahoo.com',NULL,NULL,NULL,'7hdej0',NULL,'2022-12-24 21:54:24',NULL,'2022-12-24 21:54:24',NULL,1,2),(8,'Mammen','John','abc',NULL,'mammen.john@yahoo.com',NULL,NULL,NULL,'z1p9sd',NULL,'2022-12-24 21:54:24',NULL,'2022-12-24 21:54:24',NULL,1,2),(9,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'2022-12-24 21:54:24',NULL,'2022-12-24 21:54:24',0,0,2),(10,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'2022-12-24 21:54:24',NULL,'2022-12-24 21:54:24',0,0,2),(11,'test_otp','jsaj','123',NULL,'archanacs154@gmail',NULL,NULL,NULL,'1olnek',NULL,'2022-12-28 16:57:21',NULL,'2022-12-28 16:57:21',0,0,NULL),(12,'sdfg','sdfg','12',NULL,'archanacs154@gmail.com',NULL,NULL,NULL,'euzzu3',NULL,'2022-12-28 17:04:04',NULL,'2022-12-28 17:04:04',0,0,NULL),(13,'asgd','dfg','33',NULL,'afg',NULL,NULL,NULL,'7ddpn1',NULL,'2022-12-28 17:08:39',NULL,'2022-12-28 17:08:39',0,0,NULL),(14,'Rohan','Mathew','1234',NULL,'archana.devfactory@gmail.com',NULL,NULL,NULL,'9m908g',NULL,'2023-01-02 10:39:31',NULL,'2023-01-02 10:39:31',0,1,2),(15,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'2023-01-02 10:35:00',NULL,'2023-01-02 10:35:00',0,0,2),(16,'Ansar','A','Ansar@123',NULL,'ansar.devfactory@gmail.com',NULL,NULL,NULL,'kv62hq',NULL,'2023-02-03 14:14:17',NULL,'2023-02-03 14:14:17',0,1,NULL);
/*!40000 ALTER TABLE `tblusers` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-02-06 14:49:05
