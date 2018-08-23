<?php
//allow access from TenthGear App
header('Access-Control-Allow-Origin: http://localhost:3000', false);
error_reporting(E_ERROR | E_PARSE);

//to hold returned query data
$id;
$source;
$img;
$year;
$make;
$model;
$miles;
$vin;
$color;
$plates;
$purchasePrice;
$entryDate;
$datePurchased;

$search;


//crate mysql database connection
$db = new mysqli('localhost','root','','TENTHGEAR');

//check if any error connecting to database
if(mysqli_connect_errno()){
  $res = array(
    'res'=>'Error connecting to database...'
  );
  echo json_encode($res);
}
else {

  if(!isset($_POST['search'])){

    $query = $db->prepare("SELECT * FROM VEHICLES");
    $query->execute();
    $query->bind_result($id,$source,$img,$year,$make,$model,$miles,$vin,$color,$plates,$purchasePrice,$entryDate,$datePurchased);
    $row = $query->fetch();

    $img = base64_encode($img);
    $count = 0;

    $resArray = array($query->num_rows);
    while($row){
      $resArray[$count] = array(
        'red'=>'ok',
        'id'=>$id,
        'source'=>$source,
        'img'=>$img,
        'year'=>$year,
        'make'=>$make,
        'model'=>$model,
        'miles'=>$miles,
        'vin'=>$vin,
        'color'=>$color,
        'plates'=>$plates,
        'purchasePrice'=>$purchasePrice,
        'entryDate'=>$entryDate,
        'datePurchased'=>$datePurchased
      );

      $row = $query->fetch();
      $count++;
      $img = base64_encode($img);
    }

    $msg = json_encode($resArray);

    //clean up
    $query->free_result();
    $query->close();
    $db->close();

    echo $msg;

  }
  else if(isset($_POST['search'])){
    $search = '%'.$_POST['search'].'%';
    if($search=='%%'){
      $search = '';
    }

    $query = $db->prepare("SELECT * FROM VEHICLES WHERE MAKE LIKE ? OR MODEL LIKE ? OR VIN LIKE ? OR YEAR LIKE ? OR COLOR LIKE ? OR PLATE LIKE ? OR COST LIKE ? OR MILES LIKE ?");
    $query->bind_param("ssssssss",$search,$search,$search,$search,$search,$search,$search,$search);
    $query->execute();
    $query->bind_result($id,$source,$img,$year,$make,$model,$miles,$vin,$color,$plates,$purchasePrice,$entryDate,$datePurchased);
    $row = $query->fetch();

    $img = base64_encode($img);
    $count = 0;

    $resArray = array($query->num_rows);

    if($row){
    while($row){
      $resArray[$count] = array(
        'res'=>'ok',
        'id'=>$id,
        'source'=>$source,
        'img'=>$img,
        'year'=>$year,
        'make'=>$make,
        'model'=>$model,
        'miles'=>$miles,
        'vin'=>$vin,
        'color'=>$color,
        'plates'=>$plates,
        'purchasePrice'=>$purchasePrice,
        'entryDate'=>$entryDate,
        'datePurchased'=>$datePurchased
      );

      $row = $query->fetch();
      $count++;
      $img = base64_encode($img);
    }
  }else{
    $resArray = array(
      'res'=>'bad'
    );
  }

    $msg = json_encode($resArray);

    //clean up
    $query->free_result();
    $query->close();
    $db->close();

    echo $msg;
  }
}
 ?>
