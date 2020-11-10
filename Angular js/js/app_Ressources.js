 /*Restaurant*/

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
	
	/*Charger*/
 
	console.log("id:"+sessionStorage.getItem('id')+" ff "+sessionStorage.getItem('type') );
	if(sessionStorage.getItem('id')=="null" || sessionStorage.getItem('type')!="rh"){window.location.href = "http://localhost:8080/login.html";}
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
	
	$scope.login2=function(){ window.location.href =  "http://localhost:8080/Suites_Client.html" ;};
	
	 
	$http.get("/api/departements/countDepartements").success(function(data){$scope.Departementnumber=data;console.log("Departementnumber");	console.log(data); }); 
	
	$http.get("/api/stages/countStages").success(function(data){$scope.Stagenumber=data;console.log("Stagenumber");console.log(data); }); 
	
	$http.get("/api/personnes/countComptes").success(function(data){$scope.CountCountnumber=data;  console.log("Nbrcomptes");console.log(data);});
	
	$http.get("/api/stagiaires/countStagiaires").success(function(data){$scope.Stagiairesnumber=data;  console.log("countStagiaires");console.log(data);});
				
	$scope.logout=function(){
		sessionStorage.setItem('id',null);
		sessionStorage.setItem('type',null);
		sessionStorage.setItem('nom',null);
		sessionStorage.setItem('prenom',null);
		sessionStorage.setItem('image',null);
		window.location.href = "http://localhost:8080/login.html"
	};
	
			
	/*Statistique*/			
	$http.get("/api/stages/get_stage_bymonth").success(function(data){$scope.stage=data;loadChart(data);}); 
	
	function loadChart(datas)
	{
		var ctx = document.getElementById('myChart').getContext('2d');
		var myChart = new Chart(ctx, {
			type: 'bar',
			data: {
				labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
				datasets: [{
					label: 'nombre',
					data: datas,
					backgroundColor:['rgba(255, 99, 132, 0.2)','rgba(54, 162, 235, 0.2)','rgba(255, 206, 86, 0.2)','rgba(75, 192, 192, 0.2)','rgba(153, 102, 255, 0.2)','rgba(255, 159, 64, 0.2)'],
					borderColor: ['rgba(255, 99, 132, 1)','rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)','rgba(75, 192, 192, 1)','rgba(153, 102, 255, 1)','rgba(255, 159, 64, 1)'],
					borderWidth: 1
				}]
			},
			options: {
				maintainAspectRatio: false,
				layout: { padding: { left: 10, right: 25, top: 25, bottom: 0 }},
				scales: { 
					xAxes: [{time: {unit: 'date'  },gridLines: { display: false, drawBorder: false }, ticks: {maxTicksLimit: 7 } }],
					yAxes: [{ticks: { maxTicksLimit: 5, padding: 10,callback: function(value, index, values) {return '$' + number_format(value);} },gridLines: { color: "rgb(234, 236, 244)", zeroLineColor: "rgb(234, 236, 244)", drawBorder: false, borderDash: [2], zeroLineBorderDash: [2]}}],
				},
				legend: { display: false},
				tooltips: {
					backgroundColor: "rgb(255,255,255)",bodyFontColor: "#858796",titleMarginBottom: 10,titleFontColor: '#6e707e', titleFontSize: 14,
					borderColor: '#dddfeb', borderWidth: 1,xPadding: 15, yPadding: 15, displayColors: false, intersect: false,mode: 'index',
					caretPadding: 10, callbacks: {label: function(tooltipItem, chart) {var datasetLabel = chart.datasets[tooltipItem.datasetIndex].label || '';
					return datasetLabel + ':' + number_format(tooltipItem.yLabel);}}
				}
			}
		});
	}
});

	