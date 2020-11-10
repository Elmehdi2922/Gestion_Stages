
var app=angular.module("mnadm",[]);
app.controller("AdminController",function($scope,$http){
 
	$scope.employes=[];
	$scope.offres=[];
	$scope.departements=[];
	$scope.stages=[];

	$scope.stagiaire=[];
	var ccc=0;

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

	$scope.logout=function(){
		sessionStorage.setItem('id',null);
		sessionStorage.setItem('type',null);
		sessionStorage.setItem('nom',null);
		sessionStorage.setItem('prenom',null);
		sessionStorage.setItem('image',null);
		window.location.href = "http://localhost:8080/login.html";
		
	
	};

	/*Charger*/
	$http.get("/api/departements/All").success(function(data){$scope.departements=data;console.log("departements");console.log(data); });	
	
	$http.get("/api/stageTypes/All").success(function(data){$scope.types=data;console.log("types");console.log(data);});	
	
	$http.get("/api/employes/All").success(function(data){$scope.employes=data;console.log("employes");console.log(data);});
	
	$http.get("/api/stages/All").success(function(data){for(i=0;i<data.length;i++){if(data[i].idstagiaire.id==sessionStorage.getItem('id')){$scope.stages[ccc]=data[i];ccc++;}}console.log("stages");console.log(data); });
	
	load();
	function load()
	{
		$http.get("/api/offres/All").success(function(data){$scope.offres=data;console.log("offres");console.log(data);});
	}
	/*Ajouter*/
	$scope.updatestage2=function(prodDel){
		document.getElementById("idindiceimporte").value=prodDel.id;
	
	};
	$scope.importer=function(){
		var idindice=document.getElementById("idindiceimporte").value ; 
		var doc=document.getElementById("imageZoneu2").value ;	 
		$http.get("/api/stages/getOne/"+idindice)
		.success(function(data){
			$scope.goble =data ;
			$scope.goble.rapport=doc ; 
			 $http.put("/api/stages/update",data).success(function(data){	 
				console.log("stages successfully Updated");
			});
		});
		window.location.href = "http://localhost:8080/Espace_Stagiaire.html";
	};		
				
	/*update*/ 
	$scope.ProfileUpdate=function(){
		$http.get("/api/stagiaires/getOne/"+sessionStorage.getItem('id'))
		.success(function(data){
			$scope.stagiaire[0]=data;
			document.getElementById("idindice4").value=data.id;
			document.getElementById("adresseAu4").value=data.adresse;
			document.getElementById("nomAu4").value=data.nom; 
			document.getElementById("cinAu4").value=data.cin; 
			document.getElementById("prenomAu4").value=data.prenom;
			document.getElementById("teleAu4").value=data.tele; 
			document.getElementById("emailAu4").value=data.email; 
			document.getElementById("loginAu4").value=data.login; 
			document.getElementById("motpasseAu4").value=data.motpasse;   
			document.getElementById("imageZoneu4").value=data.image;	
			document.getElementById("cv").src=data.cv;	
			document.getElementById("ssu4").src=data.image;
			console.log("upload stagiaire");			 
				 
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
		document.getElementById("imageZoneu").value=prodDel.image;	
		document.getElementById("ssu").src=prodDel.image;
	};			
				
	/*SaveUpdate*/			
	$scope.findbyindice=function(){
		var idindice=document.getElementById("indicateur").value;

		$http.get("api/offres/get_offre_byIndice/"+idindice)
		.success(function(data){
			$scope.offres=data;
			if(data.length==0){load();}
			console.log("offres");
			console.log(data); 
		});
	}; 		 
				
	$scope.saveStagiaireupdate=function(){							 
		var idindice=document.getElementById("idindice4").value;
	
		$http.get("/api/stagiaires/getOne/"+idindice)
		.success(function(data){
			$scope.goble =data ;
			$scope.goble.cv=document.getElementById("cvZoneu4").value;
			$scope.goble.nom=document.getElementById("nomAu4").value;
			$scope.goble.prenom=document.getElementById("prenomAu4").value;
			$scope.goble.cin=document.getElementById("cinAu4").value;
			$scope.goble.adresse=document.getElementById("adresseAu4").value;; 
			$scope.goble.tele=document.getElementById("teleAu4").value;
			$scope.goble.email=document.getElementById("emailAu4").value; 
			$scope.goble.image=document.getElementById("imageZoneu4").value;
			$scope.goble.login=document.getElementById("loginAu4").value; 
			$scope.goble.motpasse=document.getElementById("motpasseAu4").value;
			
			$http.put("/api/stagiaires/update/",$scope.goble)
			.success(function(data){
				$scope.admins=data;
				load();
				console.log("cv and infos stagiaires successfully Updated");
				console.log(data); 
			});
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
		var selectu2=document.getElementById("selectu2").value; 
  
		var demande=document.getElementById("imageZoneu").value;

		var body={"duree": duree,"datedebut":dated ,"datefin": datef,"demande":demande,"iddepartement": {"id":selectu },"idtypestage": {"id":selectu2 },"idstagiaire": {"id": sessionStorage.getItem('id')},"mois":"10","etat": "en attente"};

		$http.post ("/api/stages/add",body)
		.success(function(data){ 
			console.log("stages successfully added");
			console.log(data); 
		});
		window.location.href = "http://localhost:8080/Espace_Stagiaire.html";
	};
				

});

	