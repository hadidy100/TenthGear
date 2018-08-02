INSERT INTO VENDORS (VENDORSNAME) VALUES ('ABS AUCTION');
INSERT INTO VENDORS (VENDORSNAME) VALUES ('CDE AUCTION');
INSERT INTO VENDORS (VENDORSNAME) VALUES ('DED AUCTION');
INSERT INTO VENDORS (VENDORSNAME) VALUES ('DES AUCTION');
INSERT INTO VENDORS (VENDORSNAME) VALUES ('FFE AUCTION');

INSERT INTO VEHICLES (VNDRID,IMAGE ,YEAR ,MAKE ,MODEL ,MILES,VIN ,COLOR ,PLATE, COST) VALUES
(
 1,
 LOAD_FILE('/home/hadidy/cpsc473/tenthGear/myapp/src/images/car1.png'),
 '2016' ,
'HONDA' ,
 'ACCORD' ,
 63443 ,
 'ABDE1234567810ZXCV' ,
 'WHITE' ,
 'REBOOTIN',
  12345.78
);

INSERT INTO VEHICLES (VNDRID,IMAGE ,YEAR ,MAKE ,MODEL ,MILES,VIN ,COLOR ,PLATE, COST) VALUES
(
 2,
 LOAD_FILE('/home/hadidy/cpsc473/tenthGear/myapp/src/images/car2.png'),
 '2016' ,
'NISSAN' ,
 'MAXIMA' ,
 63443 ,
 'ABDE1234567811ZXCV' ,
 'RED' ,
 'RESTARTIN',
  12345.78
);

INSERT INTO VEHICLES (VNDRID, IMAGE ,YEAR ,MAKE ,MODEL ,MILES,VIN ,COLOR ,PLATE, COST) VALUES
(
 3,
 LOAD_FILE('/home/hadidy/cpsc473/tenthGear/myapp/src/images/car3.png'),
 '2016' ,
'HONDA' ,
 'CIVIC' ,
 63443 ,
 'ABDE1234567812ZXCV' ,
 'BLUE' ,
 'RECALCULATIN',
  12345.78
);

INSERT INTO VEHICLES (VNDRID,IMAGE ,YEAR ,MAKE ,MODEL ,MILES,VIN ,COLOR ,PLATE, COST) VALUES
(
 3,
 LOAD_FILE('/home/hadidy/cpsc473/tenthGear/myapp/src/images/car4.png'),
 '2016' ,
'HONDA' ,
 'PILOT' ,
 63443 ,
 'ABDE1234567813ZXCV' ,
 'SILVER' ,
 'RECODIN',
  12345.78
);

INSERT INTO VEHICLES (VNDRID, IMAGE ,YEAR ,MAKE ,MODEL ,MILES,VIN ,COLOR ,PLATE, COST) VALUES
(
 2,
 LOAD_FILE('/home/hadidy/cpsc473/tenthGear/myapp/src/images/car5.png'),
 '2016' ,
'TOYOTA' ,
 'CAMRY' ,
 63443 ,
 'ABDE1234567814ZXCV' ,
 'GREY' ,
 'REHASHIN',
  12345.78
);

INSERT INTO VEHICLES (VNDRID,IMAGE ,YEAR ,MAKE ,MODEL ,MILES,VIN ,COLOR ,PLATE, COST) VALUES
(
 1,
 LOAD_FILE('/home/hadidy/cpsc473/tenthGear/myapp/src/images/car6.png'),
 '2016' ,
'TOYOTA' ,
 'COROLLA' ,
 63443 ,
 'ABDE1234567815ZXCV' ,
 'BLACK' ,
 'REEVALUATIN',
  12345.78
);

INSERT INTO VEHICLES (VNDRID,IMAGE ,YEAR ,MAKE ,MODEL ,MILES,VIN ,COLOR ,PLATE, COST) VALUES
(
 3,
 LOAD_FILE('/home/hadidy/cpsc473/tenthGear/myapp/src/images/car7.png'),
 '2016' ,
'NISSAM' ,
 'SENTRA' ,
 63443 ,
 'ABDE1234567816ZXCV' ,
 'GOLD' ,
 'REDOIN',
  12345.78
);

INSERT INTO VEHICLES (VNDRID,IMAGE ,YEAR ,MAKE ,MODEL ,MILES,VIN ,COLOR ,PLATE, COST) VALUES
(
 3,
 LOAD_FILE('/home/hadidy/cpsc473/tenthGear/myapp/src/images/car8.png'),
 '2016' ,
'LEXUS' ,
 'RX350' ,
 63443 ,
 'ABDE1234567817ZXCV' ,
 'BLACK' ,
 'RETRACKTIN',
  12345.78
);

INSERT INTO VEHICLES (VNDRID,IMAGE ,YEAR ,MAKE ,MODEL ,MILES,VIN ,COLOR ,PLATE, COST) VALUES
(
 1,
 LOAD_FILE('/home/hadidy/cpsc473/tenthGear/myapp/src/images/car9.png'),
 '2016' ,
'FORD' ,
 'F150' ,
 63443 ,
 'ABDE1234567818ZXCV' ,
 'BLACK' ,
 'RECURSIN',
  12345.78
);

INSERT INTO VEHICLES (VNDRID, IMAGE ,YEAR ,MAKE ,MODEL ,MILES,VIN ,COLOR ,PLATE, COST) VALUES
(
 2,
 LOAD_FILE('/home/hadidy/cpsc473/tenthGear/myapp/src/images/car10.png'),
 '2016',
'FORD',
 'F150',
 63443,
 'ABDE1234567819ZXCV' ,
 'WHITE',
 'REMAPIN',
  12345.78
);

INSERT INTO CUSTOMERS
         (vid,FIRSTNAME ,LASTNAME ,MIDDLENAME ,streetnum ,streetadd ,city ,state,zip)
VALUES  (1,'JHON', 'JONES', 'E','123','Streeter st','Fullerton' ,'CA' ,'92801');

INSERT INTO CUSTOMERS
        (vid,FIRSTNAME ,LASTNAME ,MIDDLENAME ,streetnum ,streetadd ,city ,state,zip)
VALUES  (2,'EDWARD', 'HAINS', 'F','124','Streeter st','Anaheim' ,'CA' ,'92802');

INSERT INTO CUSTOMERS
        (vid,FIRSTNAME ,LASTNAME ,MIDDLENAME ,streetnum ,streetadd ,city ,state,zip)
 VALUES  (3,'TODD', 'HOUSTON', 'A','125','Streeter st','Buena Park' ,'CA' ,'92803');

 INSERT INTO CUSTOMERS
         (vid,FIRSTNAME ,LASTNAME ,MIDDLENAME ,streetnum ,streetadd ,city ,state,zip)
VALUES  (4,'CLIVE', 'GRITTON', 'D','126','Streeter st','Cypress' ,'CA' ,'92804');

INSERT INTO CUSTOMERS
        (vid,FIRSTNAME ,LASTNAME ,MIDDLENAME ,streetnum ,streetadd ,city ,state,zip)
VALUES  (5,'FERNANDO', 'TUNG', 'R','127','Streeter st','Garden Grove' ,'CA' ,'92805');

INSERT INTO CUSTOMERS
        (vid,FIRSTNAME ,LASTNAME ,MIDDLENAME ,streetnum ,streetadd ,city ,state,zip)
 VALUES  (6,'TUNG', 'PINEDA', 'C','128','Streeter st','Anaheim Hills' ,'CA' ,'92806');

 INSERT INTO CUSTOMERS
         (vid,FIRSTNAME ,LASTNAME ,MIDDLENAME ,streetnum ,streetadd ,city ,state,zip)
VALUES  (7,'KATHY', 'DAVIS', 'W','129','Streeter st','Santa Ana' ,'CA' ,'92807');

INSERT INTO CUSTOMERS
        (vid,FIRSTNAME ,LASTNAME ,MIDDLENAME ,streetnum ,streetadd ,city ,state,zip)
VALUES  (8,'ALEXIS', 'CALDERON', '','130','Streeter st','Costa' ,'CA' ,'92808');

INSERT INTO CUSTOMERS
        (vid,FIRSTNAME ,LASTNAME ,MIDDLENAME ,streetnum ,streetadd ,city ,state,zip)
 VALUES  (9,'KRISTEN', 'CABRERA', 'B','131','Streeter st','Irvine' ,'CA' ,'92809');

 INSERT INTO CUSTOMERS
         (vid,FIRSTNAME ,LASTNAME ,MIDDLENAME ,streetnum ,streetadd ,city ,state,zip)
VALUES  (10,'CLAUDIA', 'AVELA', 'A','132','Streeter st','Mission Viejon' ,'CA' ,'92900');



INSERT INTO EXPENSES
      (VNDRID,COMMENT,COST ,DATE ,VEHICLEID)
VALUES
      ('WINDSHEILD', 189.52,  NOW(), 1);

INSERT INTO EXPENSES
      (VNDRID,COMMENT,COST ,DATE ,VEHICLEID)
VALUES
      ('BATTARY', 99.52,  NOW(), 1);

INSERT INTO EXPENSES
      (VNDRID,COMMENT,COST ,DATE ,VEHICLEID)
VALUES
      ('TIRES', 389.77,  NOW(), 1);

INSERT INTO EXPENSES
    (VNDRID,COMMENT,COST ,DATE ,VEHICLEID)
VALUES
    ('WATER PUMP', 123.44,  NOW(), 1);
