 
var app=angular.module("mnadm",[]);
app.controller("AdminController",function($scope,$http){
 
	$scope.admins=[];
	$scope.stage=[];
		
   	$scope.Departementnumber=0;
	$scope.Stagenumber=0;
	$scope.Stagiairesnumber=0;
	$scope.CountCountnumber=0; 

	$scope.image=""; 
	$scope.nom=""; 
	$scope.prenom=""; 
	var xx=0;
	  
	console.log("id:"+sessionStorage.getItem('id')+" ff "+sessionStorage.getItem('type') );
	if(sessionStorage.getItem('id')=="null" || sessionStorage.getItem('type')!="employe"){window.location.href = "http://localhost:8080/login.html";}
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
	$http.get("/api/personnes/countComptes").success(function(data){$scope.CountCountnumber=data;console.log("admin");console.log(data);}); 
	
	$http.get("/api/stages/countStages").success(function(data){$scope.Stagenumber=data;console.log("Stagenumber");console.log(data);}); 
	
	$http.get("/api/stagiaires/All").success(function(data){$scope.Stagiairesnumber=data.length;console.log("Stagenumber");console.log(data);}); 
	
	$http.get("/api/niveau/All").success(function(data){$scope.niveaux=data;console.log("niveaux");console.log(data);}); 
	
	$http.get("/api/departements/countDepartements").success(function(data){$scope.Departementnumber=data;console.log("Departementnumber");console.log(data);}); 
	
});

	