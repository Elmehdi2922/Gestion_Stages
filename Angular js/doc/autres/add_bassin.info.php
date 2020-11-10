<?php
	$host_name ="localhost";
	$user_name="root";
	$user_password="";
	$database_name="stageiir4";

	$con =mysqli_connect($host_name,$user_name,$user_password,$database_name);

	if($con)
	{	
	 
     
	$nom=$_GET["nom"];
	$province=$_GET["province"];
    
 
    $query="insert into sbassin(nom,province) values('$nom',$province)";
    mysqli_query($con,$query) or die(mysqli_error($con));
    mysqli_close($con);		
	}
?>