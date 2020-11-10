
var app=angular.module("mnadm",[]);
app.controller("AdminController",function($scope,$http){
 
	$scope.employes=[];
	$scope.departements=[];

	$scope.goble;
	$scope.stage=[];
	console.log("id:"+sessionStorage.getItem('id')+" ff "+sessionStorage.getItem('type') );
	if(sessionStorage.getItem('id')=='null' || sessionStorage.getItem('type')!='rh'){window.location.href = "http://localhost:8080/login.html";}
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
	$scope.logout=function(){
		sessionStorage.setItem('id',null);
		sessionStorage.setItem('type',null);
		sessionStorage.setItem('nom',null);
		sessionStorage.setItem('prenom',null);
		sessionStorage.setItem('image',null);
		window.location.href = "http://localhost:8080/login.html"
	
	};

	/*Charger*/

	var c=0;

	load();
	function load()
	{
		c=0;
		$scope.stage=[];
		$http.get("/api/stages/All").success(function(data){for(i=0;i<data.length;i++){if(data[i].etat=="en attente"){$scope.stage[c]=data[i];c++;console.log("demande= "+data[i].demande);}}console.log("stage");console.log(data); });
	}

	$http.get("/api/employes/All").success(function(data){ $scope.employes =data ;console.log("employes");console.log(data);});
	 
	/*update*/
	$scope.valider=function(prodDel){
		var idindice=prodDel.id; 
		var iddepartement=prodDel.iddepartement;
		$http.get("/api/employes/All")
		.success(function(data){
			$scope.employes =data ;
			for(i=0;i<data.length;i++)
				{ 
					if(iddepartement.id==data[i].iddepartement.id)
					{
						$http.get("/api/stages/getOne/"+idindice)
						.success(function(data){
							$scope.goble =data ;
							$scope.goble.etat="valide" ;
							$scope.goble.encadrant.id=$scope.employes[i].id;
							 $http.put("/api/stages/update",data).success(function(data){	 
								console.log("stages successfully Updated");
								
							});
						});
					 	 
					}
				}
			load();
		});
		
	};
				
	$scope.rejete=function(prodDel){
		var idindice=prodDel.id; 
		$http.get("/api/stages/getOne/"+idindice)
						.success(function(data){
							$scope.goble =data ;
							$scope.goble.etat="rejete" ; 
							 $http.put("/api/stages/update",data).success(function(data){	 
								console.log("stages successfully Updated");
							});
						});
		load();
	};
});

	