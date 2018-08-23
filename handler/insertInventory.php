<?php
//allow access from TenthGear App
header('Access-Control-Allow-Origin: http://localhost:3000', false);
error_reporting(E_ERROR | E_PARSE);

//catch all of form data that was sent from TenthGear App
$source = $_POST['source'];
$img = file_get_contents($_FILES['img']['tmp_name']);
$year = $_POST['year'];
$make = $_POST['make'];
$model = $_POST['model'];
$miles = $_POST['miles'];
$vin = $_POST['vin'];
$color = $_POST['color'];
$plates = $_POST['plates'];
$purchasePrice = $_POST['purchasePrice'];
$datePurchased = $_POST['datePurchased'];

//crate mysql database connection
$db = new mysqli('localhost','root','','TENTHGEAR');

//check if any error connecting to database
if(mysqli_connect_errno()){
  $res = array(
    'msg'=>'databaseError'
  );
  echo json_encode($res);
}
else {
  $query = $db->prepare(
    "INSERT INTO
    VEHICLES(VNDRID,image,YEAR,MAKE,MODEL,MILES,VIN,COLOR,PLATE,COST,PURCHASEDATE)
    VALUES
    (?,?,?,?,?,?,?,?,?,?,?)");
    $query->bind_param("issssisssds",$source,$img,$year,$make,$model,$miles,$vin,$color,$plates,$purchasePrice,$datePurchased);
    if($query->execute()){
      $res = array(
        'msg'=>'ok'
      );
      echo json_encode($res);
    }
    else{
      $res = array(
        'msg'=>'bad'
      );
      echo json_encode($res);
    }

    //clean up
    $query->free_result();
    $query->close();
    $db->close();
}
 ?>
