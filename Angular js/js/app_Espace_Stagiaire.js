 /*Restaurant*/

var app=angular.module("mnadm",[]);
app.controller("AdminController",function($scope,$http){
 
	$scope.employes=[];
	$scope.offres=[];
	$scope.departements=[];
	$scope.stages=[];

	$scope.stagiaire=[];

	
		
   	//$scope.CountProduitnumber=0;
	
	var xx=0;
	console.log("Suitses");
	console.log("dd");
	console.log("id:"+sessionStorage.getItem('id')+" ff "+sessionStorage.getItem('type') );
	if(sessionStorage.getItem('id')=='null' || sessionStorage.getItem('type')!='stagiaire'){window.location.href = "http://localhost:8080/login.html";}
	$scope.image=sessionStorage.getItem('image'); 
	$scope.nom=sessionStorage.getItem('nom'); 
	$scope.prenom=sessionStorage.getItem('prenom');
	console.log("id:"+sessionStorage.getItem('id')+" ff "+sessionStorage.getItem('type')+ " " +$scope.prenom+" " +$scope.nom+" "+$scope.image);
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
		window.location.href = "http://localhost:8080/login.html";
		
	
	};
	$http.get("/api/departements")
	.success(function(data){
		$scope.departements=data;
		console.log("departements");
		console.log(data); 
	});	
	$http.get("/api/employes")
	.success(function(data){
		$scope.employes=data;
		console.log("employes");
		console.log(data); 
	});
	$http.get("/api/Offres")
	.success(function(data){
		$scope.offres=data;
		console.log("offres");
		console.log(data); 
	});
		var ccc=0;
	$http.get("/api/stages")
	.success(function(data){
		for(i=0;i<data.length;i++)
			{
				if(data[i].idstagiaire==sessionStorage.getItem('id'))
					{
						$scope.stages[ccc]=data[i];
						ccc++;
					}
			}
		
		console.log("stages");
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
				$scope.updatestage2=function(prodDel){
					document.getElementById("idindiceimporte").value=prodDel.id;
				
				};
				
				$scope.importer=function(){
					var idindice=document.getElementById("idindiceimporte").value ; 
					var doc=document.getElementById("imageZoneu2").value ;	 
					$http.get("http://localhost/update_stage_stagiaire.php?indice="+idindice+"&doc="+doc)
					.success(function(data){ 
						console.log("importer");
						ccc=0;
						$http.get("/api/stages")
						.success(function(data){
							for(i=0;i<data.length;i++)
								{
									if(data[i].idstagiaire==sessionStorage.getItem('id'))
										{
											$scope.stages[ccc]=data[i];
											ccc++;
										}
								}
							
							console.log("stages");
							console.log(data); 
						});
					});
				};
					
				/*update*/ 
				$scope.ProfileUpdate=function(){
					$http.get("/api/stagiaires")
					.success(function(data){
						for(i=0;i<data.length;i++)
							{
								if(data[i].id==sessionStorage.getItem('id'))
									{
									$scope.stagiaire[0]=data[i];
									 document.getElementById("idindice4").value=data[i].id;
 									document.getElementById("adresseAu4").value=data[i].adresse;
									document.getElementById("nomAu4").value=data[i].nom; 
									document.getElementById("cinAu4").value=data[i].cin; 
									document.getElementById("prenomAu4").value=data[i].prenom;
									document.getElementById("teleAu4").value=data[i].tele; 
									document.getElementById("emailAu4").value=data[i].email; 
									document.getElementById("loginAu4").value=data[i].login; 
									document.getElementById("motpasseAu4").value=data[i].motpasse;   
									document.getElementById("imageZoneu4").value=data[i].image;	
									document.getElementById("cv").src=data[i].cv;	
									document.getElementById("ssu4").src=data[i].image;
									console.log("stagiaire");
									console.log($scope.stagiaire[0]); 
									}
							}
						$scope.offres=data;
						console.log("stagiaire");
						console.log($scope.stagiaire[0]); 
					});
				 
				};
				
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
				
			 
				
				
				$scope.findbyindice=function(){
					var idindice=document.getElementById("indicateur").value;
					$http.get("http://localhost/get_offre_byIndice.php?indice="+idindice)
					.success(function(data){
						$scope.offres=data;
						console.log("offres");
						console.log(data); 
					});
				}; 



				$scope.saveStagiaireupdate=function(){
 
 									 
					var idindice=document.getElementById("idindice4").value;
					var adresseAu=document.getElementById("adresseAu4").value;
					var nomAu=document.getElementById("nomAu4").value;
					var cinAu=document.getElementById("cinAu4").value;
					var prenomAu=document.getElementById("prenomAu4").value;
					var teleAu=document.getElementById("teleAu4").value;
					var emailAu=document.getElementById("emailAu4").value; 
					var loginAu=document.getElementById("loginAu4").value; 
					var motpasseAu=document.getElementById("motpasseAu4").value;
					
					//if(document.getElementById("etatAu").checked==true){xx=1;}
					//else{xx=0;}
					
					var imageDes=document.getElementById("imageZoneu4").value;
					var cv=document.getElementById("cvZoneu4").value;
 					 console.log(cv);
					$http.post ("/api/updatestagiaire?id="+idindice+"&adresse="+adresseAu +"&nom="+ nomAu+"&prenom="+prenomAu +"&cin="+cinAu +"&tele="+teleAu +"&email="+ emailAu+"&etat=1&login="+loginAu +"&typecompte=stagiaire&motpasse="+motpasseAu +"&image="+imageDes+"&cv="+cv)
					.success(function(data){
						$scope.admins=data;
						$http.get("/api/offres")
						.success(function(data){
							$scope.offres=data;

							console.log("offres");
							console.log(data); 
						});
						console.log("demande successfully Updated");
						console.log(data); 
					});
				};



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
						$http.get("/api/offres")
						.success(function(data){
							$scope.offres=data;

							console.log("offres");
							console.log(data); 
						});
						console.log("demande successfully Updated");
						console.log(data); 
					});
				};
				
				
				
				$scope.savedemande=function(){


					var dated=document.getElementById("dated").value;
					var datef=document.getElementById("datef").value;
					var duree=document.getElementById("duree").value; 
					var selectu=document.getElementById("selectu").value; 
			  
					var demande=document.getElementById("imageZoneu").value;
 
					$http.post ("/api/addstage?etat=en attente&duree="+duree+"&datedebut="+dated +"&datefin="+ datef+"&demande="+demande +"&idstagiaire="+sessionStorage.getItem('id')+"&iddepartement="+selectu)
					.success(function(data){ 
						$http.get("/api/employes")
						.success(function(data){
							$scope.employes=data;

							console.log("employes");
							console.log(data); 
						});
						console.log("employe successfully Updated");
						console.log(data); 
					});
					window.location.href = "http://localhost:8080/Espace_Stagiaire.html";
				};
				
				
				/*Statistique*/
				
				 
				
			
				
				
				

	
});

	