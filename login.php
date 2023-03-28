<?php 

$host="localhost";
$user="root";
$email="";
$password="";
$db="texteditor";

mysql_connect($host,$user,$password);
mysql_select_db($db);

if(isset($_POST['Full name'])){
    
    $uname=$_POST['Full name'];
    $email=$_POST['Email adress'];
    $password=$_POST['password'];
    
    $sql="select * from user where Full name='".$uname."'AND Email adress='". $email."',password='". $password."'limit 1";
    
    $result=mysql_query($sql);
    
    if(mysql_num_rows($result)==1){
        echo " You Have Successfully Logged in";
        exit();
    }
    else{
        echo " You Have Entered Incorrect Password";
        exit();
    }
        
}
?>




