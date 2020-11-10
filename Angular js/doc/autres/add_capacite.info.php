<?php
	$host_name ="localhost";
	$user_name="root";
	$user_password="";
	$database_name="stageiir4";

	$con =mysqli_connect($host_name,$user_name,$user_password,$database_name);

	if($con)
	{	
	 
	 
	$s = $_GET["ddate"];
	$date = strtotime($s); 
     
	$barrage=$_GET["barrage"];
	$volume=$_GET["volume"];
   
 
    $query="INSERT INTO `capacite`(`day`, `ddate`, `idbarrage`, `month`, `volume`, `year`) VALUES ('".date('d', $date)."','".date('Y-m-d', $date)."',$barrage,'".date('m', $date)."',$volume,'".date('Y', $date)."')";
    mysqli_query($con,$query) or die(mysqli_error($con));
    mysqli_close($con);		
	}
?>