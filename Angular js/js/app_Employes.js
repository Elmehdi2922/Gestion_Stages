var app=angular.module("mnadm",[]);
app.controller("AdminController",function($scope,$http){
 
	$scope.employes=[];
	$scope.departements=[];
	
	console.log("Suites");

	console.log("id:"+sessionStorage.getItem('id')+" ff "+sessionStorage.getItem('type') );
	if(sessionStorage.getItem('id')=='null' || sessionStorage.getItem('type')!='admin'){window.location.href = "http://localhost:8080/login.html";}
	$scope.logout=function(){
		sessionStorage.setItem('id',null);
		sessionStorage.setItem('type',null);
		sessionStorage.setItem('nom',null);
		sessionStorage.setItem('prenom',null);
		sessionStorage.setItem('image',null);
		window.location.href = "http://localhost:8080/login.html";
	};

	/*Charger*/
	$scope.logout=function(){
		sessionStorage.setItem('id',null);
		sessionStorage.setItem('type',null);
		sessionStorage.setItem('nom',null);
		sessionStorage.setItem('prenom',null);
		sessionStorage.setItem('image',null);
		window.location.href = "http://localhost:8080/login.html"
	};
	
	$http.get("/api/departements/All").success(function(data){$scope.departements=data;console.log("departements");console.log(data); });

	load();

	function load()
	{
		$http.get("/api/employes/All").success(function(data){$scope.employes=data;console.log("employes");console.log(data);});
	}
	 
	/*Ajouter*/		
	$scope.save=function(){
		var imageDes=document.getElementById("imageZone").value;
		var selec=document.getElementById("select").value;
	
		var body= {"cin": $scope.Cin,"nom": $scope.Nom,"prenom": $scope.Prenom,"adresse": $scope.Adresse,"tele": $scope.Tele,"email": $scope.Email,"image": imageDes,"login": $scope.Login,"motpasse": $scope.Motpasse,"etat": true,"typecompte": "employe","iddepartement": {"id": selec}};
		
		$http.post("/api/employes/add", body).success(function(data){load();console.log("Admin successfully added"); });
	};
				
	/*Supprimer*/		
	$scope.deletePersonne=function(res)
	{
		$http.delete("/api/employes/delete/"+res.id).success(function(data){console.log("deletePersonne "+res.id+" successfully deleted");load();});				
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
		document.getElementById("selectu").value=prodDel.iddepartement; 
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
		var selectu=document.getElementById("selectu").value;
		var motpasseAu=document.getElementById("motpasseAu").value;

		var imageDes=document.getElementById("imageZoneu").value;
		var body= {"id": idindice,"cin":cinAu,"nom": nomAu,"prenom": prenomAu,"adresse":adresseAu,"tele": teleAu,"email": emailAu,"image": imageDes,"login": loginAu,"motpasse": motpasseAu,"etat": true,"typecompte": "employe","iddepartement": {"id":selectu}};
		
		$http.put("/api/employes/update",body).success(function(data){console.log("employe successfully Updated");load();});
	};
		
});

	