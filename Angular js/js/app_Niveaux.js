var app=angular.module("mnadm",[]);
app.controller("AdminController",function($scope,$http){
 
	$scope.niveaux=[];
	 
	var xx=0;
	console.log("");
	
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
		$http.get("/api/niveau/All").success(function(data){$scope.niveaux=data;console.log("niveaux");console.log(data);});
	} 
	 
	/*Ajouter*/			
	$scope.save=function(){	
		var body={"nom":$scope.Nom};
		$http.post("/api/niveau/add",body).success(function(data){load();console.log("niveau successfully added"); });
	};
				
	/*Supprimer*/
	$scope.supprimer=function(res)
	{
		$http.delete("/api/niveau/delete/"+res.id).success(function(data){console.log(res.id+" successfully deleted");load();});
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
					
		$http.put("/api/niveau/update",body).success(function(data){load();console.log("niveau successfully Updated");});
	};
});

	