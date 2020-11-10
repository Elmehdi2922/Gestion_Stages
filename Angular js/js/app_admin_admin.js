 /*Restaurant*/

var app=angular.module("mnadm",[]);
app.controller("AdminController",function($scope,$http){
 
 
	$scope.admins=[];
	$scope.stage=[];
	$scope.niveaux=[];
   	$scope.reclamations=[];
   	$scope.rh;
 
   	$scope.reclamation=0;
   	$scope.Departementnumber=0;
	$scope.Stagenumber=0;
	$scope.Stagiairesnumber=0;
	$scope.CountCountnumber=0; 
	var xx=0;
	console.log("Ad");
	
	/*Charger*/
 
	$scope.login2=function(){ window.location.href =  "http://localhost:8080/Suites_Client.html" ;};

	$http.get("/api/personnes/countComptes").success(function(data){$scope.CountCountnumber=data;console.log("admin");console.log(data);}); 
	
	$http.get("/api/reclamations/All").success(function(data){$scope.reclamations=data;$scope.reclamation=data.length;console.log("admin");console.log(data);}); 
	
	$http.get("/api/departements/countDepartements").success(function(data){$scope.Departementnumber=data;console.log("Departementnumber");console.log(data);}); 
	
	$http.get("/api/stages/countStages").success(function(data){$scope.Stagenumber=data;console.log("Stagenumber");console.log(data);}); 
	
	$http.get("/api/stagiaires/All").success(function(data){$scope.Stagiairesnumber=data.length;console.log("Stagenumber");console.log(data);}); 
	
	$http.get("/api/niveau/All").success(function(data){$scope.niveaux=data;console.log("niveaux");console.log(data);}); 
	
	$http.get("/api/departements/countDepartements").success(function(data){$scope.Departementnumber=data;console.log("Departementnumber");console.log(data);}); 
	
	
	
	$scope.logout=function(){
		sessionStorage.setItem('id',null);
		sessionStorage.setItem('type',null);
		sessionStorage.setItem('nom',null);
		sessionStorage.setItem('prenom',null);
		sessionStorage.setItem('image',null);
		window.location.href = "http://localhost:8080/login.html"
			
	
	};
	$scope.login=function(){
		console.log("login");
		$http.get("/api/personnes/All")
		.success(function(data){
			$scope.personnes=data;  
			var type="",logi="", passe="";			 
			for (var i = 0; i <$scope.personnes.length; i++) {			 
				type=$scope.personnes[i].typecompte;
				logi=$scope.personnes[i].login;
				passe=$scope.personnes[i].motpasse;
				if(type=="rh")
				{ 	console.log("Login 'rh' failed 1");
					if(logi==$scope.log && passe==$scope.pass){
						console.log("***Nom*** :"+$scope.personnes[i].nom+" => "+logi);
						sessionStorage.setItem('id',$scope.personnes[i].id);
						sessionStorage.setItem('type',$scope.personnes[i].typecompte);
						sessionStorage.setItem('nom',$scope.personnes[i].nom);
						sessionStorage.setItem('prenom',$scope.personnes[i].prenom);
						sessionStorage.setItem('image',$scope.personnes[i].image);
						window.location.href =  "http://localhost:8080/RH_index.html" ;
						window.close();
					}else
					{console.log("Login 'rh' failed");}
				}
				if(type=="admin")
				{
					if(logi==$scope.log && passe==$scope.pass)
					{
						console.log("***Nom*** :"+$scope.personnes[i].nom+" => "+logi);
						console.log("***Passe*** :"+$scope.personnes[i].motpasse);
						console.log("***Image*** :"+$scope.personnes[i].image);
						console.log("Login 'Admin' successfully");

						sessionStorage.setItem('id',$scope.personnes[i].id);
						sessionStorage.setItem('type',$scope.personnes[i].typecompte);

						sessionStorage.setItem('nom',$scope.personnes[i].nom);
						sessionStorage.setItem('prenom',$scope.personnes[i].prenom);
						sessionStorage.setItem('image',$scope.personnes[i].image);
						console.log("ddd :"+$scope.personnes[i].typecompte);
						window.location.href = "http://localhost:8080/index.html" ;
						window.close();
					}else{console.log("Login 'Admin' failed");}
				}	
				if(type=="employe")
				{
					if(logi==$scope.log && passe==$scope.pass)
						{
							console.log("***Nom*** :"+$scope.personnes[i].nom+" => "+logi);
							console.log("***Passe*** :"+$scope.personnes[i].motpasse);
							console.log("***Image*** :"+$scope.personnes[i].image);
							console.log("Login 'Admin' successfully");

							sessionStorage.setItem('id',$scope.personnes[i].id);
							sessionStorage.setItem('type',$scope.personnes[i].typecompte);

							sessionStorage.setItem('nom',$scope.personnes[i].nom);
							sessionStorage.setItem('prenom',$scope.personnes[i].prenom);
							sessionStorage.setItem('image',$scope.personnes[i].image);
							console.log("ddd :"+$scope.personnes[i].typecompte);
							window.location.href = "http://localhost:8080/Employe_index.html" ;
							window.close();
						}else{console.log("Login 'Employes' failed");}
				}
				if(type=="stagiaire")
				{
					if(logi==$scope.log && passe==$scope.pass)
						{
							console.log("***Nom*** :"+$scope.personnes[i].nom+" => "+logi);
							console.log("***Passe*** :"+$scope.personnes[i].motpasse);
							console.log("***Image*** :"+$scope.personnes[i].image);
							console.log("Login 'Admin' successfully");

							sessionStorage.setItem('id',$scope.personnes[i].id);
							sessionStorage.setItem('type',$scope.personnes[i].typecompte);

							sessionStorage.setItem('nom',$scope.personnes[i].nom);
							sessionStorage.setItem('prenom',$scope.personnes[i].prenom);
							sessionStorage.setItem('image',$scope.personnes[i].image);
							console.log("ddd :"+$scope.personnes[i].typecompte);
							window.location.href = "http://localhost:8080/Espace_Stagiaire.html" ;
							window.close();
						}else{console.log("Login 'Employes' failed");}
				}else{ console.log("Login failed");}	
			}				
			console.log(data); 
		});
	};
	
	 
	/*Ajouter*/
				
	$scope.saveAdmin=function(){
		var imageDes=document.getElementById("imageZone").value;

		var etata=document.getElementById("etatA").value;
	 	console.log("etata : "+etata);
		if(etata=="on"){xx=1;}else{xx=0;}
		$http.post("/api/saveadmin?adresse="+$scope.adresseA+"&nom="+$scope.nomA+"&prenom="+$scope.prenomA+"&cin="+$scope.cinA+"&tele="+$scope.teleA+"&email="+$scope.emailA+"&etat="+xx+"&login="+$scope.loginA+"&motpasse="+$scope.motpasseA+"&image="+imageDes)
		.success(function(data){
			$scope.admins=data;
			$http.get("/api/admins")
			.success(function(data){
				$scope.admins=data;
				console.log("admin");
				console.log(data); 
			});
			console.log("Admin successfully added");
			console.log(data); 
		});
 	};				
	
	$scope.addcompte=function(){ 
		var select=document.getElementById("selectn").value;
		console.log("addStagiaire "+select);
		var body= {"cin": $scope.Cin,"nom": $scope.Nom,"prenom": $scope.Prenom,"adresse": $scope.Adresse,"tele": $scope.Tele,"email": $scope.Email,"image": "images/icon/avatar-02.jpg","ecole":$scope.Ecole,"login": $scope.Login,"motpasse": $scope.Motpasse,"etat": true,"typecompte": "stagiaire","idniveau": select};
		 
		$http.post("/api/stagiaires/add/",body )
		.success(function(data){console.log("Stagiaire successfully added");console.log(data);window.location.href = "http://localhost:8080/login.html";});
	};		   
				
});

	