<?php
//allow access from TenthGear App
header('Access-Control-Allow-Origin: http://localhost:3000', false);
error_reporting(E_ERROR | E_PARSE);

$encryptionMethod = "AES-256-CBC";
$secret = "My32charPasswordAndInitVectorStr";  //must be 32 char length
$iv = substr($secret, 0, 16);

$user = $_POST['user'];
$pass = $_POST['pass'];

//url fetch passes + as blank space, so must insert + symbol again after catching the parameters
$user = str_replace(" ","+",$user);
$pass = str_replace(" ","+",$pass);

//$encryptedMessage = openssl_encrypt($textToEncrypt, $encryptionMethod, $secret,0,$iv);

$dm1 = openssl_decrypt($user, $encryptionMethod, $secret,0,$iv);
$dm2 = openssl_decrypt($pass, $encryptionMethod, $secret,0,$iv);

//catch all of form data that was sent from TenthGear App
$userLoggedin = 'us';
$passLoggedin = 'pw';

//crate mysql database connection
$db = new mysqli('localhost','root','','TENTHGEAR');

//check if any error connecting to database
if(mysqli_connect_errno()){
  $res = array(
    'res'=>'Error connecting to database...'
  );
  echo json_encode($res);
}
else
{
  $query = $db->prepare("SELECT USERNAME,PASSWORD FROM USERS WHERE USERNAME = ? AND PASSWORD = ?");
  $query->bind_param("ss",$dm1,$dm2);
  $query->execute();
  $query->bind_result($userLoggedin,$passLoggedin);
  $row = $query->fetch();

  if($row > 0)
  {
    $userLoggedin = openssl_encrypt($userLoggedin, $encryptionMethod, $secret,0,$iv);
    $passLoggedin = openssl_encrypt($passLoggedin, $encryptionMethod, $secret,0,$iv);

    session_start();


    $se = session_id();

    $res = array(
      'u'=>$userLoggedin,
      'p'=>$passLoggedin,
      'se'=>$se,
    );
  }
  else {

    $res = array(
      'un'=>'Incorrect',
    );
  }
    //clean up
  $query->free_result();
  $query->close();
  $db->close();

  echo json_encode($res);
}
 ?>
