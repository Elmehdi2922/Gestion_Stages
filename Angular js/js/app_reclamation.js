var app=angular.module("mnadm",[]);
app.controller("AdminController",function($scope,$http){
 
	$scope.reclamations=[]; 

	console.log("id:"+sessionStorage.getItem('id')+" ff "+sessionStorage.getItem('type') );
	if(sessionStorage.getItem('id')=='null'){window.location.href = "http://localhost:8080/login.html";}
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
	var cc=0;
	load();
	function load()
	{
		$http.get("/api/reclamations/All")
		.success(function(data){
			for(i=0;i<data.length;i++)
			{
				 if($scope.nom==data[i].nom){ $scope.reclamations[i]=data[i];console.log("reclamations");console.log(data); cc++;} 
			}
			console.log("employes");
			console.log(data); 
		});	
	}
		
	/*Ajouter*/		
	$scope.save=function(){
		var body={"nom":$scope.nom,"objet":$scope.objet,"message":$scope.message};
		$http.post("/api/reclamations/add",body).success(function(data){console.log("Admin successfully added");load();});
	};

});

	