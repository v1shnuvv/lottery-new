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
) ENGINE=InnoDB AUTO_INCREMENT=63 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbllotterymaster`
--

LOCK TABLES `tbllotterymaster` WRITE;
/*!40000 ALTER TABLE `tbllotterymaster` DISABLE KEYS */;
INSERT INTO `tbllotterymaster` VALUES (56,'Kerala lucky draw sub','2023-02-20 00:00:00',75,125,100,25,0,29,5,0,0,0,0,4,'undefined',NULL,25,5,5,5,5,5,5,10000000,100000,10000,1000,500,0,NULL,'2023-02-10 12:58:18',NULL,'2023-02-10 12:58:18',0,0,'[1,2,3,4,5]',1),(57,'Kerala lucky draw','2023-02-15 00:00:00',75,125,100,25,0,30,5,0,0,0,0,4,'56',NULL,25,5,5,5,5,5,5,10000000,1000000,10000,1000,500,0,NULL,'2023-02-10 12:58:18',NULL,'2023-02-10 12:58:18',0,0,'[2,7,8,10,21]',0);
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
) ENGINE=InnoDB AUTO_INCREMENT=27 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tblprovider`
--

LOCK TABLES `tblprovider` WRITE;
/*!40000 ALTER TABLE `tblprovider` DISABLE KEYS */;
INSERT INTO `tblprovider` VALUES (25,'Kerala lottery','kerala@nomail.com','8888888888','Calicut',674545,1,0),(26,'Texas lottery','texas@nomail.com','9999999999','texas',4242,6,0);
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
) ENGINE=InnoDB AUTO_INCREMENT=110 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tblresultmap`
--

LOCK TABLES `tblresultmap` WRITE;
/*!40000 ALTER TABLE `tblresultmap` DISABLE KEYS */;
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
) ENGINE=InnoDB AUTO_INCREMENT=276 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tblunit`
--

LOCK TABLES `tblunit` WRITE;
/*!40000 ALTER TABLE `tblunit` DISABLE KEYS */;
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

-- Dump completed on 2023-02-10 13:01:05
