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
     
	$sbassin=$_GET["sbassin"];
	$moyenne=$_GET["moyenne"];
   
 
    $query="INSERT INTO `pluie`( `jour`,`ddate`,  `idsb`, `mois`,  `moyenne`,`annee`) VALUES ('".date('d', $date)."','".date('Y-m-d', $date)."',$sbassin,'".date('m', $date)."',$moyenne,'".date('Y', $date)."')";
    mysqli_query($con,$query) or die(mysqli_error($con));
    mysqli_close($con);		
	}
?>