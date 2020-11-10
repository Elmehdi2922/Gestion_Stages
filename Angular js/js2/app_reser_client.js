 /*Restaurant*/
var app=angular.module("MaSuite",[]);
app.controller("SuiteController",function($scope,$http){
	$scope.restaurants=[]; 
	$scope.suites=[];
	$scope.villes=[];
	$scope.admins=[]; 
	$scope.restauUp=[];
	$scope.adresseSuite=null;
   	$scope.villeSuite=null;
   	$scope.resSuite=null;
   	$scope.degreSuite=null;
   	
   	
   	$scope.CountProduitnumber=0;
	$scope.CountRestaurantnumber=0;
	$scope.CountSuitenumber=0;
	$scope.countPrincipal=0; 	
	$scope.countDesserts=0; 	
	$scope.countBoissons=0; 
	
	var inadresse="all";
	
	 
	var x=sessionStorage.getItem('id');
	var t=sessionStorage.getItem('type');
	

	$scope.perNom=sessionStorage.getItem('nom');
	$scope.perPreNom=sessionStorage.getItem('prenom');
	$scope.pimage="images/anais.png";
	console.log("serveurs");

	console.log("session open1:"+x);
	console.log("session type:"+t);
	console.log("session nom:"+$scope.perNom);	
	console.log("session prenom:"+$scope.perPreNom); 
	console.log("session image:"+$scope.pimage);
	
	
	if( (x=="null" || x==null) && t!=="client")
	{
		window.location.href = "http://localhost:8080/login.html";

	}
	
	$scope.Disconnect=function(){
		sessionStorage.setItem('id',null);
		sessionStorage.setItem('type',null);
		sessionStorage.setItem('nom',null);
		sessionStorage.setItem('prenom',null);
		sessionStorage.setItem('image',null);
		window.location.reload();
		
	}
	
	
	$scope.voirmenu=function(r){
		sessionStorage.setItem('idsuite',r.id);
		sessionStorage.setItem('imagesuite',r.image);
		sessionStorage.setItem('adressesuite',r.adresse);
		sessionStorage.setItem('villesuite',r.ville);

		console.log("idsuite"+r.id);
		console.log("imagesuite"+r.image);
		console.log("adressesuite"+r.adresse);
		console.log("villesuite"+r.ville);
		window.location.href = "http://localhost:8080/menu.html";
		
	}
	$scope.reserverTable=function(r){
		sessionStorage.setItem('idsuite',r.id);
		sessionStorage.setItem('imagesuite',r.image);
		sessionStorage.setItem('adressesuite',r.adresse);
		sessionStorage.setItem('villesuite',r.ville);

		console.log("idsuite"+r.id);
		console.log("imagesuite"+r.image);
		console.log("adressesuite"+r.adresse);
		console.log("villesuite"+r.ville);
		window.location.href = "http://localhost:8080/res.html";
		
	}
	
	
	console.log("Suites");
	
	/*Charger*/
	$http.get("/api/RestaurantsSui")
	.success(function(data){
		$scope.restaurants=data;
		console.log("restaurant");
		console.log(data); 
	}); 
	
	$http.get("/api/admins")
	.success(function(data){
		$scope.admins=data;
		console.log("admin");
		console.log(data); 
	}); 
		
		/*Charger*/
	$http.get("/api/suites")
	.success(function(data){
		$scope.suites=data;

		console.log("suites");
		console.log(data); 
	});
	
	
	
	
	$http.get("/api/allCitys")
	.success(function(data){
		$scope.villes=data;

		console.log("allCitys");
		console.log(data); 
	    });
		   	$scope.adresseSuite
		   	$scope.villeSuite
		   	$scope.resSuite
		   	$scope.degreSuite
		   	/*Ajouter*/
		   	$scope.findbyindice=function(){
		   		var indicateur=document.getElementById("indicateur").value ;
		   		 inadresse=document.getElementById("inadresse").value ;
		   		 
		   		 if(inadresse=="? undefined:undefined ?"){inadresse="all";}
   				console.log("ville:"+inadresse +",indicateur:"+ indicateur);
			   		if(indicateur=="" && inadresse=="all")
			   			{
				   			$http.get("/api/suites")
				   			.success(function(data){
				   				$scope.suites=data;
				   				console.log("suites");
				   				console.log(data); 
				   			});
			   			}else{
			   				if(indicateur==""  && inadresse!="all")
				   			{

			   					$http.get("/api/getByVille?x="+inadresse)
						   		.success(function(data){
						   			$scope.suites=data;
						   			console.log("suites");
						   			console.log(data); 
						   		});
				   			}else{
				   					if(indicateur!=""  && inadresse=="all")
				   						{
					   						$http.get("/api/getByIndice?x="+indicateur)
									   		.success(function(data){
									   			$scope.suites=data;
									   			console.log("suites");
									   			console.log(data); });
				   						}else{
				   							
				   							$http.get("/api/getByVilleIndice?x="+indicateur+"&y="+inadresse)
									   		.success(function(data){
									   			$scope.suites=data;
									   			console.log("suites");
									   			console.log(data); });
				   							
				   						}
					   		
					   	}
			   		}
			};
		   	
			$scope.findbycity=function(){
				var indicateur=document.getElementById("indicateur").value ;
		   		  inadresse=document.getElementById("inadresse").value ;

   				console.log("ville:"+inadresse +",indicateur:"+ indicateur);
			   		if(indicateur=="" && inadresse=="all")
			   			{
				   			$http.get("/api/suites")
				   			.success(function(data){
				   				$scope.suites=data;
				   				console.log("suites");
				   				console.log(data); 
				   			});
			   			}else{
			   				if(indicateur==""  && inadresse!="all")
				   			{

			   					$http.get("/api/getByVille?x="+inadresse)
						   		.success(function(data){
						   			$scope.suites=data;
						   			console.log("suites");
						   			console.log(data); 
						   		});
				   			}else{
				   					if(indicateur!=""  && inadresse=="all")
				   						{
					   						$http.get("/api/getByIndice?x="+indicateur)
									   		.success(function(data){
									   			$scope.suites=data;
									   			console.log("suites");
									   			console.log(data); });
				   						}else{
				   							
				   							$http.get("/api/getByVilleIndice?x="+indicateur+"&y="+inadresse)
									   		.success(function(data){
									   			$scope.suites=data;
									   			console.log("suites");
									   			console.log(data); });
				   							
				   						}
					   		
					   	}
			   		}
			};
				
				
			
			
				
				/*Statistique*/
				
				 
				$http.get("/api/countProduits")
				.success(function(data){
					$scope.CountProduitnumber=data;
					console.log("Nbrproduit");
					console.log(data); 
				});
				
				$http.get("/api/countProduits")
				.success(function(data){
					$scope.CountRestaurantnumber=data;
		            console.log("Nbrrestaurant");
					console.log(data); 
				});
				
				$http.get("/api/countSuites")
				.success(function(data){
					$scope.CountSuitenumber=data;
		            console.log("Nbrsuite");
					console.log(data); 
				});
				$http.get("/api/countComptes")
				.success(function(data){
					$scope.CountCountnumber=data;
		            console.log("Nbrcomptes");
					console.log(data); 
				});
				
				$http.get("/api/countPrincipals")
				.success(function(data){
					$scope.countPrincipal=data;
		            console.log("countPrincipal");
					console.log(data); 
				});
				$http.get("/api/countDesserts")
				.success(function(data){
					$scope.countDesserts=data;
		            console.log("countDesserts");
					console.log(data); 
				});
				$http.get("/api/countBoisson")
				.success(function(data){
					$scope.countBoissons=data;
		            console.log("countBoisson");
					console.log(data); 
				});

	
});

	