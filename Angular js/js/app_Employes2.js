 /*Restaurant*/

var app=angular.module("mnadm",[]);
app.controller("AdminController",function($scope,$http){
 
	$scope.employes=[];
	$scope.departements=[];
		
   	//$scope.CountProduitnumber=0;
	
	var xx=0;
	console.log("Suites");
	console.log("dd");
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
	$http.get("/api/employes")
	.success(function(data){
		$scope.employes=data;
		console.log("employes");
		console.log(data); 
	});
	$http.get("/api/departements")
	.success(function(data){
		$scope.departements=data;
		console.log("departements");
		console.log(data); 
	});
		
	 
	/*Ajouter*/
				
				$scope.save=function(){
					var imageDes=document.getElementById("imageZone").value;
					var selec=document.getElementById("select").value;

			   		//var etata=document.getElementById("etatA").value;
					//console.log("etata : "+etata);
			   		//if(etata=="on"){xx=1;}else{xx=0;}
		   		  $http.post("/api/addemploye?adresse="+$scope.Adresse+"&nom="+$scope.Nom+"&prenom="+$scope.Prenom+"&cin="+$scope.Cin+"&tele="+$scope.Tele+"&email="+$scope.Email+"&etat=1&login="+$scope.Login+"&motpasse="+$scope.Motpasse+"&image="+imageDes+"&iddepartement="+selec)
					.success(function(data){
						$scope.employes=data;
						$http.get("/api/employes")
						.success(function(data){
							$scope.employes=data;
							console.log("employes");
							console.log(data); 
						});
						console.log("Admin successfully added");
						console.log(data); 
					});
				};
				
				/*Supprimer*/
				
				$scope.deletePersonne=function(res){
					$http.post("/api/deleteemploye?id="+res.id)
					.success(function(data){
						$scope.admins=data;
						console.log("deletePersonne"+res.id);
						console.log("deletePersonne "+res.id+" successfully deleted");
						$http.get("/api/employes")
						.success(function(data){
							$scope.employes=data;
							console.log("employes");
							console.log(data); 
						});
						 
					});
					
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
					//if(prodDel.etat==true){document.getElementById("etatAu").checked=true;}
					//else{document.getElementById("etatAu").checked=false;}
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
			 
					//if(document.getElementById("etatAu").checked==true){xx=1;}
					//else{xx=0;}
					
					var imageDes=document.getElementById("imageZoneu").value;
 
					$http.post ("/api/updateemploye?id="+idindice+"&adresse="+adresseAu +"&nom="+ nomAu+"&prenom="+prenomAu +"&cin="+cinAu +"&tele="+teleAu +"&email="+ emailAu+"&etat=1&login="+loginAu +"&typecompte=employe&motpasse="+motpasseAu +"&image="+imageDes+"&iddepartement="+selectu)
					.success(function(data){
						$scope.admins=data;
						$http.get("/api/employes")
						.success(function(data){
							$scope.employes=data;

							console.log("employes");
							console.log(data); 
						});
						console.log("employe successfully Updated");
						console.log(data); 
					});
				};
				
				
				/*Statistique*/
				
				 
				
			
				
				
				

	
});

	