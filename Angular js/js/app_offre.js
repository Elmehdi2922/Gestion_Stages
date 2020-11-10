
var app=angular.module("mnadm",[]);
app.controller("AdminController",function($scope,$http){
 
	$scope.offres=[];
	 
	console.log("id:"+sessionStorage.getItem('id')+" ff "+sessionStorage.getItem('type') );
	if(sessionStorage.getItem('id')=="null" || sessionStorage.getItem('type')!="rh"){window.location.href = "http://localhost:8080/login.html";}
	$scope.image=sessionStorage.getItem('image'); 
	$scope.nom=sessionStorage.getItem('nom'); 
	$scope.prenom=sessionStorage.getItem('prenom'); 
	$scope.logout=function(){
		sessionStorage.setItem('id',null);
		sessionStorage.setItem('type',null);
		sessionStorage.setItem('nom',null);
		sessionStorage.setItem('prenom',null);
		sessionStorage.setItem('image',null);
		window.location.href = "http://localhost:8080/login.html";
	};

	/*Charger*/
	load();
	function load()
	{
		$http.get("/api/offres/All").success(function(data){$scope.offres=data;console.log("Offres");console.log(data); });
	}
	
	 
	/*Ajouter*/
	$scope.save=function(){
		var date=document.getElementById("dateoffre").value; 
		var imageDes=document.getElementById("imageZone").value;
		console.log("+$scope.image"+$scope.image);
		var d = new Date(date);
		var n = d.toLocaleDateString();
		
		var body={"date":n,"image":imageDes,"message":$scope.message,"titre":$scope.titre};

		$http.post("/api/offres/add",body).success(function(data){load();console.log("Offres successfully added");vider();window.location.href = "http://localhost:8080/RH_offre.html"});
	}
				
	/*Supprimer*/
	$scope.supprimer=function(res)
	{
		$http.delete("/api/offres/delete/"+res.id).success(function(data){ load(); console.log(res.id+" successfully deleted"); });
	};
				
	/*update*/
	$scope.update=function(prodDel){
		document.getElementById("idindice").value=prodDel.id;
		document.getElementById("dateu").value=prodDel.date; 
		document.getElementById("titreu").value=prodDel.titre; 
		document.getElementById("messageu").value=prodDel.message; 
		document.getElementById("messageu").value=prodDel.message; 
		document.getElementById("imageZoneu").value=prodDel.image;	
		document.getElementById("ssu").src=prodDel.image;
	};
	
	/*SaveUpdate*/
	$scope.saveupdate=function(){
		var idindice=document.getElementById("idindice").value;
		var date=document.getElementById("dateu").value; 
		var titre=document.getElementById("titreu").value; 
		var message=document.getElementById("messageu").value;
		var imageDes=document.getElementById("imageZoneu").value;

		var body={"id":idindice,"date":date,"image":imageDes,"message":message,"titre":titre};
		
		$http.put("api/offres/update",body).success(function(data){load();console.log("Offres successfully Updated");vider();window.location.href = "http://localhost:8080/RH_offre.html"});
	};

	/*vider*/
	function vider(){
		document.getElementById("idindice").value="";
		document.getElementById("titre").value=""; 
		document.getElementById("message").value=""; 
		document.getElementById("message").value=""; 
		document.getElementById("imageZone").value="";	
		document.getElementById("ss").src="";
		
	}
});

	