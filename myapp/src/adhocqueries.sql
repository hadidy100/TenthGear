SELECT
 V.YEAR,
 V.MAKE,
 V.MODEL,
 V.MILES,
 V.VIN,
 V.COLOR,
 V.PLATE,
 V.COST,
 R.VENDORSNAME
 FROM
 VEHICLES V,
 VENDORS R
 WHERE
 V.VNDRID = R.ID;



 SELECT
 V.YEAR,
 V.MAKE,
 V.MODEL,
 V.MILES,
 V.VIN,
 V.COLOR,
 V.PLATE,
 V.COST,
 E.COMMENT,
 E.COST,
 E.DATE,
 R.VENDORSNAME
 FROM
 VEHICLES V ,
  EXPENSES E,
  VENDORS R where
 E.VEHICLEID = V.ID AND
 E.VNDRID = R.ID ;
