-- MySQL dump 10.13  Distrib 8.0.31, for Win64 (x86_64)
--
-- Host: localhost    Database: lotterydump
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
  `txtLotterytype` int DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `refProvider` (`refProvider`),
  CONSTRAINT `tbllotterymaster_ibfk_1` FOREIGN KEY (`refProvider`) REFERENCES `tblprovider` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=72 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbllotterymaster`
--

LOCK TABLES `tbllotterymaster` WRITE;
/*!40000 ALTER TABLE `tbllotterymaster` DISABLE KEYS */;
INSERT INTO `tbllotterymaster` VALUES (68,'Kerala monthly draw','2023-02-26 00:00:00',75,125,100,20,0,29,5,0,0,0,0,4,'69',NULL,28,2,4,1,1,4,2,10000000,1000000,100000,10000,1000,0,NULL,'2023-02-21 12:09:13',NULL,'2023-02-21 12:09:13',0,0,'[3,4,7,22,20]',0),(69,'Kerala sub lottery','2023-02-28 00:00:00',75,120,100,20,0,29,5,0,0,0,0,4,'No sub lottery',NULL,28,2,4,1,1,4,2,10000000,1000000,100000,10000,1000,0,NULL,'2023-02-21 12:09:13',NULL,'2023-02-21 12:09:13',0,0,'[2,7,9,10,14]',1),(71,'Friday grand draw','2023-02-20 00:00:00',100,150,125,20,0,29,5,0,0,0,0,4,'No sub lottery',NULL,30,12,2,4,4,10,4,1000000,10000,10000,1000,500,0,NULL,'2023-02-15 17:26:23',NULL,'2023-02-15 17:26:23',0,0,'[1,4,6,20,21]',0);
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
  `txtContactnumber` varchar(10) DEFAULT NULL,
  `txtRegisteredaddress` varchar(250) DEFAULT NULL,
  `txtZipcode` int DEFAULT NULL,
  `refState` int DEFAULT NULL,
  `txtDeleteflag` int NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=31 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tblprovider`
--

LOCK TABLES `tblprovider` WRITE;
/*!40000 ALTER TABLE `tblprovider` DISABLE KEYS */;
INSERT INTO `tblprovider` VALUES (28,'Kerala Lottery','kerala@nomail.com','888888888','Calicut',1215,1,0),(30,'Karnataka','karnataka@gmail.com','777777777','elecronic city',1414,3,0);
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
  `txtMatchnum` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=184 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tblresultmap`
--

LOCK TABLES `tblresultmap` WRITE;
/*!40000 ALTER TABLE `tblresultmap` DISABLE KEYS */;
INSERT INTO `tblresultmap` VALUES (125,313,2,10000,68,NULL),(126,316,2,10000,68,NULL),(127,321,1,1000,68,NULL),(128,323,2,10000,68,NULL),(129,324,1,1000,68,NULL),(130,329,1,1000,68,NULL),(131,331,1,1000,68,NULL),(132,332,2,10000,68,NULL),(133,337,1,1000,68,NULL),(134,338,2,10000,68,NULL),(135,317,1,1000,69,NULL),(136,318,2,10000,69,NULL),(137,319,1,1000,69,NULL),(138,320,1,1000,69,NULL),(139,325,1,1000,69,NULL),(140,326,1,1000,69,NULL),(141,333,1,1000,69,NULL),(142,335,1,1000,69,NULL),(143,339,1,1000,69,NULL),(147,345,1,500,71,NULL),(148,346,3,10000,71,NULL),(149,347,2,1000,71,NULL),(150,348,1,500,71,NULL),(151,313,2,10000,68,NULL),(152,316,2,10000,68,NULL),(153,321,1,1000,68,NULL),(154,323,2,10000,68,NULL),(155,324,1,1000,68,NULL),(156,329,1,1000,68,NULL),(157,331,1,1000,68,NULL),(158,332,2,10000,68,NULL),(159,337,1,1000,68,NULL),(160,338,2,10000,68,NULL),(161,350,1,1000,68,NULL),(162,313,2,10000,68,NULL),(163,316,2,10000,68,NULL),(164,321,1,1000,68,NULL),(165,323,2,10000,68,NULL),(166,324,1,1000,68,NULL),(167,329,1,1000,68,NULL),(168,331,1,1000,68,NULL),(169,332,2,10000,68,NULL),(170,337,1,1000,68,NULL),(171,338,2,10000,68,NULL),(172,350,1,1000,68,NULL),(173,313,2,10000,68,'3,7'),(174,316,2,10000,68,'3,4'),(175,321,1,1000,68,'22'),(176,323,2,10000,68,'3,4'),(177,324,1,1000,68,'4'),(178,329,1,1000,68,'20'),(179,331,1,1000,68,'22'),(180,332,2,10000,68,'3,22'),(181,337,1,1000,68,'22'),(182,338,2,10000,68,'3,4'),(183,350,1,1000,68,'3');
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
) ENGINE=InnoDB AUTO_INCREMENT=353 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tblunit`
--

LOCK TABLES `tblunit` WRITE;
/*!40000 ALTER TABLE `tblunit` DISABLE KEYS */;
INSERT INTO `tblunit` VALUES (313,3,68,'2023-02-14 15:31:58',NULL,'2023-02-14 15:31:58',NULL,'2023-02-14 15:31:58',0,0,'[0,2,3,7,11]'),(314,3,68,'2023-02-14 15:31:58',NULL,'2023-02-14 15:31:58',NULL,'2023-02-14 15:31:58',0,0,'[2,8,12,15,24]'),(315,3,68,'2023-02-14 15:31:58',NULL,'2023-02-14 15:31:58',NULL,'2023-02-14 15:31:58',0,0,'[0,6,17,19,26]'),(316,3,68,'2023-02-14 15:31:58',NULL,'2023-02-14 15:31:58',NULL,'2023-02-14 15:31:58',0,0,'[3,4,9,15,24]'),(317,3,69,'2023-02-14 15:32:06',NULL,'2023-02-14 15:32:06',NULL,'2023-02-14 15:32:06',0,0,'[0,6,14,17,22]'),(318,3,69,'2023-02-14 15:32:06',NULL,'2023-02-14 15:32:06',NULL,'2023-02-14 15:32:06',0,0,'[2,9,11,19,27]'),(319,3,69,'2023-02-14 15:32:06',NULL,'2023-02-14 15:32:06',NULL,'2023-02-14 15:32:06',0,0,'[3,8,9,17,19]'),(320,3,69,'2023-02-14 15:32:06',NULL,'2023-02-14 15:32:06',NULL,'2023-02-14 15:32:06',0,0,'[9,12,20,21,25]'),(321,4,68,'2023-02-14 15:32:48',NULL,'2023-02-14 15:32:48',NULL,'2023-02-14 15:32:48',0,0,'[0,19,22,24,26]'),(322,4,68,'2023-02-14 15:32:48',NULL,'2023-02-14 15:32:48',NULL,'2023-02-14 15:32:48',0,0,'[10,16,17,21,26]'),(323,4,68,'2023-02-14 15:32:48',NULL,'2023-02-14 15:32:48',NULL,'2023-02-14 15:32:48',0,0,'[2,3,4,18,19]'),(324,4,68,'2023-02-14 15:32:48',NULL,'2023-02-14 15:32:48',NULL,'2023-02-14 15:32:48',0,0,'[4,8,9,17,24]'),(325,4,69,'2023-02-14 15:32:56',NULL,'2023-02-14 15:32:56',NULL,'2023-02-14 15:32:56',0,0,'[9,15,18,23,24]'),(326,4,69,'2023-02-14 15:32:56',NULL,'2023-02-14 15:32:56',NULL,'2023-02-14 15:32:56',0,0,'[1,3,9,16,22]'),(327,4,69,'2023-02-14 15:32:56',NULL,'2023-02-14 15:32:56',NULL,'2023-02-14 15:32:56',0,0,'[0,4,17,19,27]'),(328,4,69,'2023-02-14 15:32:56',NULL,'2023-02-14 15:32:56',NULL,'2023-02-14 15:32:56',0,0,'[11,12,15,24,25]'),(329,1,68,'2023-02-14 15:34:07',NULL,'2023-02-14 15:34:07',NULL,'2023-02-14 15:34:07',0,0,'[15,18,20,24,26]'),(330,1,68,'2023-02-14 15:34:07',NULL,'2023-02-14 15:34:07',NULL,'2023-02-14 15:34:07',0,0,'[0,14,17,23,25]'),(331,1,68,'2023-02-14 15:34:07',NULL,'2023-02-14 15:34:07',NULL,'2023-02-14 15:34:07',0,0,'[0,6,10,22,23]'),(332,1,68,'2023-02-14 15:34:07',NULL,'2023-02-14 15:34:07',NULL,'2023-02-14 15:34:07',0,0,'[3,11,22,26,27]'),(333,1,69,'2023-02-14 15:34:15',NULL,'2023-02-14 15:34:15',NULL,'2023-02-14 15:34:15',0,0,'[2,3,6,15,26]'),(334,1,69,'2023-02-14 15:34:15',NULL,'2023-02-14 15:34:15',NULL,'2023-02-14 15:34:15',0,0,'[3,12,13,26,27]'),(335,1,69,'2023-02-14 15:34:15',NULL,'2023-02-14 15:34:15',NULL,'2023-02-14 15:34:15',0,0,'[5,7,11,16,22]'),(336,1,69,'2023-02-14 15:34:15',NULL,'2023-02-14 15:34:15',NULL,'2023-02-14 15:34:15',0,0,'[5,11,15,17,21]'),(337,1,68,'2023-02-14 15:34:23',NULL,'2023-02-14 15:34:23',NULL,'2023-02-14 15:34:23',0,0,'[2,6,22,23,24]'),(338,1,68,'2023-02-14 15:34:23',NULL,'2023-02-14 15:34:23',NULL,'2023-02-14 15:34:23',0,0,'[3,4,8,17,28]'),(339,1,69,'2023-02-14 15:34:44',NULL,'2023-02-14 15:34:44',NULL,'2023-02-14 15:34:44',0,0,'[7,8,19,20,21]'),(340,1,69,'2023-02-14 15:34:44',NULL,'2023-02-14 15:34:44',NULL,'2023-02-14 15:34:44',0,0,'[1,8,21,22,26]'),(345,5,71,'2023-02-15 16:50:24',NULL,'2023-02-15 16:50:24',NULL,'2023-02-15 16:50:24',0,0,'[14,16,21,23,26]'),(346,5,71,'2023-02-15 16:50:24',NULL,'2023-02-15 16:50:24',NULL,'2023-02-15 16:50:24',0,0,'[1,4,6,15,24]'),(347,5,71,'2023-02-15 16:50:24',NULL,'2023-02-15 16:50:24',NULL,'2023-02-15 16:50:24',0,0,'[1,6,15,24,26]'),(348,5,71,'2023-02-15 16:50:24',NULL,'2023-02-15 16:50:24',NULL,'2023-02-15 16:50:24',0,0,'[14,16,18,21,28]'),(349,5,68,'2023-02-22 12:01:40',NULL,'2023-02-22 12:01:40',NULL,'2023-02-22 12:01:40',0,0,'[1,2,17,24,25]'),(350,5,68,'2023-02-22 12:01:40',NULL,'2023-02-22 12:01:40',NULL,'2023-02-22 12:01:40',0,0,'[3,5,14,15,26]'),(351,5,69,'2023-02-22 12:01:47',NULL,'2023-02-22 12:01:47',NULL,'2023-02-22 12:01:47',0,0,'[4,7,15,17,28]'),(352,5,69,'2023-02-22 12:01:47',NULL,'2023-02-22 12:01:47',NULL,'2023-02-22 12:01:47',0,0,'[5,7,8,11,27]');
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
INSERT INTO `tblusers` VALUES (1,'Michael','Clarke','aaaa','111111','michael@gmail.com','Kowdiar',1,1,NULL,NULL,'2022-12-24 21:54:24',NULL,'2022-12-24 21:54:24',NULL,0,1),(2,'Peter','Tyson','bbbb','222222','tyson@gmail.com','Mersal',6,2,NULL,NULL,'2022-12-24 21:54:24',NULL,'2022-12-24 21:54:24',NULL,0,1),(3,'Rajesh','Krishnan','cccc','333333','rajesh@gmail.com','Valakadavu',2,1,NULL,NULL,'2023-02-14 15:29:31',NULL,'2023-02-14 15:29:31',NULL,0,2),(4,'Daniel','Chen','dddd','444444','daniel@gmail.com','Pandalam',3,1,NULL,NULL,'2023-02-14 15:29:04',NULL,'2023-02-14 15:29:04',NULL,0,2),(5,'James','Davis','eeee','555555','james@gmail.com','ChandniChowk',12,10,NULL,NULL,'2022-12-24 21:54:24',NULL,'2022-12-24 21:54:24',NULL,0,2),(6,'Rohan','Mathew','123',NULL,'si.nahor@gmail.com',NULL,NULL,NULL,'ad7jie',NULL,'2022-12-24 21:54:24',NULL,'2022-12-24 21:54:24',NULL,1,2),(7,'Rachel ','Thomas','123',NULL,'rachel_07thomas@yahoo.com',NULL,NULL,NULL,'7hdej0',NULL,'2022-12-24 21:54:24',NULL,'2022-12-24 21:54:24',NULL,1,2),(8,'Mammen','John','abc',NULL,'mammen.john@yahoo.com',NULL,NULL,NULL,'z1p9sd',NULL,'2022-12-24 21:54:24',NULL,'2022-12-24 21:54:24',NULL,1,2),(9,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'2022-12-24 21:54:24',NULL,'2022-12-24 21:54:24',0,0,2),(10,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'2022-12-24 21:54:24',NULL,'2022-12-24 21:54:24',0,0,2),(11,'test_otp','jsaj','123',NULL,'archanacs154@gmail',NULL,NULL,NULL,'1olnek',NULL,'2022-12-28 16:57:21',NULL,'2022-12-28 16:57:21',0,0,NULL),(12,'sdfg','sdfg','12',NULL,'archanacs154@gmail.com',NULL,NULL,NULL,'euzzu3',NULL,'2022-12-28 17:04:04',NULL,'2022-12-28 17:04:04',0,0,NULL),(13,'asgd','dfg','33',NULL,'afg',NULL,NULL,NULL,'7ddpn1',NULL,'2022-12-28 17:08:39',NULL,'2022-12-28 17:08:39',0,0,NULL),(14,'Rohan','Mathew','1234',NULL,'archana.devfactory@gmail.com',NULL,NULL,NULL,'9m908g',NULL,'2023-01-02 10:39:31',NULL,'2023-01-02 10:39:31',0,1,2),(15,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'2023-01-02 10:35:00',NULL,'2023-01-02 10:35:00',0,0,2),(16,'Ansar','A','Ansar@123',NULL,'ansar.devfactory@gmail.com',NULL,NULL,NULL,'kv62hq',NULL,'2023-02-03 14:14:17',NULL,'2023-02-03 14:14:17',0,1,NULL);
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

-- Dump completed on 2023-02-23 15:02:41
