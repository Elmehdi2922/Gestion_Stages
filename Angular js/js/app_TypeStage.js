 /*Restaurant*/

var app=angular.module("mnadm",[]);
app.controller("AdminController",function($scope,$http){
 
	$scope.stageTypes=[];
	  
	/*Charger*/
	console.log("id:"+sessionStorage.getItem('id')+" ff "+sessionStorage.getItem('type') );
	if(sessionStorage.getItem('id')=="null" || sessionStorage.getItem('type')!="admin"){window.location.href = "http://localhost:8080/login.html";}
	$scope.logout=function(){
		sessionStorage.setItem('id',null);
		sessionStorage.setItem('type',null);
		sessionStorage.setItem('nom',null);
		sessionStorage.setItem('prenom',null);
		sessionStorage.setItem('image',null);
		window.location.href = "http://localhost:8080/login.html";
	};
	
	load();
	function load()
	{
		$http.get("/api/stageTypes/All").success(function(data){$scope.stageTypes=data;console.log("Typestages");console.log(data);});
	}
	
	/*Ajouter*/
				
	$scope.save=function(){
		var body = {"nom":$scope.Nom};
		$http.post("/api/stageTypes/add",body).success(function(data){ load(); console.log("stageTypes successfully added"); });
	};
				
	/*Supprimer*/
	$scope.supprimer=function(res)
	{
		$http.delete("/api/stageTypes/delete/"+res.id) .success(function(data){ console.log("stageTypes "+res.id+" successfully deleted"); load(); }); 
	};
				
	/*update*/
	$scope.update=function(prodDel){
		document.getElementById("idindice").value=prodDel.id;
		document.getElementById("nomAu").value=prodDel.nom; 
	};
		
	/*SaveUpdate*/
	$scope.saveupdate=function(){
		var idindice=document.getElementById("idindice").value;
		var nomAu=document.getElementById("nomAu").value;
		var body={"id":idindice,"nom":nomAu};
		$http.put("/api/stageTypes/update/",body).success(function(data){load();console.log("stageTypes successfully Updated");});
	};
	 
});

	