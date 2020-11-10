/*Produit*/
var app=angular.module("MonProduit",[]);
app.controller("ProduitController",function($scope,$http){
	$scope.produits=[]; 
	$scope.produit=[]; 

	$scope.CountProduitnumber=0;
	$scope.CountRestaurantnumber=0;
	$scope.CountSuitenumber=0;
	$scope.CountCountnumber=0;
	
	$scope.idProduit=null;
	$scope.designationProduit=null;
	$scope.quantiteProduit=null;
	$scope.prixUnitaireProduit=null;
	
	$scope.designationProduitu=null;
	$scope.quantiteProduitu=null;
	$scope.prixUnitaireProduitu=null;
	var x=sessionStorage.getItem('id');
	console.log("session open1:"+x);
	
	if( x==null)
	{
		window.location.href = "http://localhost:8080/login.html";

	}
	
	$('upProduit').prop('disabled', true);
	

	
	console.log("Produits"+$scope.idProduit);
	
	/*Charger*/
		$http.get("/api/produits")
		.success(function(data){
			$scope.produits=data;

			console.log("produit");
			console.log(data); 
		}); 
		
	/*Deconnecter*/
		 
		$scope.myFunction=function(){

			console.log("deconnect1");
			sessionStorage.removeItem('id');
			console.log("session disco:"+sessionStorage.getItem('id'));
		//	sessionStorage.clear();

			window.location.href = "http://localhost:8080/login.html";
		};
		
	/*Ajouter*/
		
		$scope.saveprod=function(){
			
			$http.post("/api/saveproduit?quantite="+$scope.quantiteProduit+"&designation="+$scope.designationProduit+"&prix="+parseFloat($scope.prixUnitaireProduit))
			.success(function(data){
				$scope.produits=data;
				$http.get("/api/produits")
				.success(function(data){
					$scope.produits=data;

					console.log("produit");
					console.log(data); 
				});
				console.log("Product successfully added");
				console.log(data); 
			});
		};
		
	/*Supprimer*/
		
		$scope.deleteprod=function(prodDel){
			$http.post("/api/delete?ref="+prodDel.reference)
			.success(function(data){
				$scope.produits=data;
				console.log("Produits"+prodDel.reference);
				console.log("Product"+prodDel.reference+" successfully deleted");
				
				$http.get("/api/produits")
				.success(function(data){
					$scope.produits=data;

					console.log("produit");
					console.log(data); 
				});
			});
		};
		
	/*update*/
		$scope.updateprod=function(prodDel){
			document.getElementById("idprod").value=prodDel.reference;
			document.getElementById("designationprod").value=prodDel.designation;
			document.getElementById("quantiteprod").value=prodDel.quantite;
			document.getElementById("prixprod").value=prodDel.prix;
			 
		};
	/*SaveUpdate*/
		
		
		$scope.saveupdateprod=function(){

			var getindice=document.getElementById("idprod").value;
			var getdesignationprod=document.getElementById("designationprod").value;
			var getquantiteprod=document.getElementById("quantiteprod").value;
			var getprixprod=document.getElementById("prixprod").value;
			
			$http.post ("/api/update?reference="+getindice+"&quantite="+getquantiteprod+"&designation="+getdesignationprod+"&prix="+parseFloat(getprixprod))
			.success(function(data){
				$scope.produits=data;
				$http.get("/api/produits")
				.success(function(data){
					$scope.produits=data;

					console.log("produit");
					console.log(data); 
				});
				console.log("Product successfully added");
				console.log(data); 
			});
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


		
		
});


	
/*Notification*/

var appnotification=angular.module("MyNotification",[]);
appnotification.controller("NotificationController",function($scope,$http){
	$scope.notifications=[];
	console.log("Notifications");
	$http.get("/api/notifications")
		.success(function(data){
			$scope.notifications=data;
			console.log(data);
		});
});


	/*Ajouter*/
var app=angular.module("SaveNotification",[]);
app.controller("NotificationController",function($scope,$http){
	$scope.produits=[]; 
	$scope.messageNotificationProduit=null;
	var ladate=new Date();
	var date=ladate.getDate()+"-"+ladate.getMonth()+"-"+ladate.getFullYear();
	console.log("Save_Notification :"+$scope.messageNotificationProduit+" , "+date);
	$scope.savenotif=function(){
		$http.post("/api/save?message="+$scope.messageNotificationProduit+"&vu=false&date="+date)
		.success(function(data){
			$scope.produits=data;

			console.log("Notification successfully added");
			console.log(data); 
		});
	};
});

