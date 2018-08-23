<?php
//allow access from TenthGear App
header('Access-Control-Allow-Origin: http://localhost:3000', false);
error_reporting(E_ERROR | E_PARSE);

//catch all of form data that was sent from TenthGear App
$source = $_POST['source'];
$vin = $_POST['vin'];
$comment = $_POST['comment'];
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
    EXPENSES(VNDRID,COMMENT,COST,DATE,VEHICLEID)
    VALUES
    (?,?,?,?,?)");
    $query->bind_param("isdsi",$source,$comment,$purchasePrice,$datePurchased,$vin);
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
