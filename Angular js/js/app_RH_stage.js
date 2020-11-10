

var app=angular.module("mnadm",[]);
app.controller("AdminController",function($scope,$http){
 
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
 	
	$http.get("/api/stages/All").success(function(data){$scope.stage=data;console.log("stage");console.log(data); });

	 
});

	