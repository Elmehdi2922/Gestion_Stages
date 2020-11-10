var app=angular.module("mnadm",[]);
app.controller("AdminController",function($scope,$http){
 
	$scope.resources=[];
	var xx=0;

	/*Charger*/
	console.log("dd");
	console.log("id:"+sessionStorage.getItem('id'));
	if(sessionStorage.getItem('id')=="null" || sessionStorage.getItem('type')!="admin"){window.location.href = "http://localhost:8080/login.html";}
	$scope.logout=function(){
		sessionStorage.setItem('id',null);sessionStorage.setItem('type',null);
		sessionStorage.setItem('nom',null);
		sessionStorage.setItem('prenom',null);
		sessionStorage.setItem('image',null);
		window.location.href = "http://localhost:8080/login.html";
	};
	
	function load()
	{
		$http.get("/api/rh/All").success(function(data){$scope.resources=data;console.log("resources");console.log(data);});
	}
	
	load();
	 
	/*Ajouter*/	
	$scope.save=function(){
		var imageDes=document.getElementById("imageZone").value; 

		var body= {"cin": $scope.Cin,"nom": $scope.Nom,"prenom": $scope.Prenom,"adresse": $scope.Adresse,"tele": $scope.Tele,"email": $scope.Email,"image": imageDes,"login": $scope.Login,"motpasse": $scope.Motpasse,"etat": true};
					   
		$http.post("/api/rh/add",body).success(function(data){load();console.log("rh successfully added");});
	};
				
	/*Supprimer*/		
	$scope.deletePersonne=function(res)
	{
		$http.delete("/api/rh/delete/"+res.id).success(function(data){load();console.log(res.id+" successfully deleted");});	
	};
				
	/*update*/
	$scope.updatePersonne=function(prodDel){
		document.getElementById("idindice").value=prodDel.id;
		document.getElementById("adresseAu").value=prodDel.adresse;
		document.getElementById("nomAu").value=prodDel.nom; 
		document.getElementById("cinAu").value=prodDel.cin; 
		document.getElementById("prenomAu").value=prodDel.prenom;
		document.getElementById("teleAu").value=prodDel.tele; 
		document.getElementById("emailAu").value=prodDel.email; 
		document.getElementById("loginAu").value=prodDel.login; 
		document.getElementById("motpasseAu").value=prodDel.motpasse;  
		document.getElementById("imageZoneu").value=prodDel.image;	
		document.getElementById("ssu").src=prodDel.image;
	};
				
	/*SaveUpdate*/
	$scope.saveupdate=function(){

		var idindice=document.getElementById("idindice").value;
		var adresseAu=document.getElementById("adresseAu").value;
		var nomAu=document.getElementById("nomAu").value;
		var cinAu=document.getElementById("cinAu").value;
		var prenomAu=document.getElementById("prenomAu").value;
		var teleAu=document.getElementById("teleAu").value;
		var emailAu=document.getElementById("emailAu").value; 
		var loginAu=document.getElementById("loginAu").value; 
		var motpasseAu=document.getElementById("motpasseAu").value;
		var imageDes=document.getElementById("imageZoneu").value;
						
		var body= {"id": idindice,"cin":cinAu,"nom": nomAu,"prenom": prenomAu,"adresse":adresseAu,"tele": teleAu,"email": emailAu,"image": imageDes,"login": loginAu,"motpasse": motpasseAu,"etat": true};
					
		$http.put("/api/rh/update",body).success(function(data){load();console.log("rh successfully Updated");});
	};
			
});

	