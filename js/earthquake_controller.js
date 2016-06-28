/*Author : Vinay Janardhanan*/
var mod = angular.module('earthcontrol',['ui.bootstrap', 'ngRoute','psTweetService'])

mod.controller('earthController', ['$scope', '$rootScope', '$uibModal', '$http', '$log', function($scope, $rootScope, $uibModal, $http, $log) {
	
	
	//HttpContext.Current.Response.AddHeader("Access-Control-Allow-Origin", "*");
	

	$scope.launchAuth = function(){
		var modalInstance = $uibModal.open({
			templateUrl: '/NaturalCalamityProj/reg.html',
			controller: 'regCtrl',
			size: 'sm'
		});

		modalInstance.result.then(function (user) {
			$rootScope.user = user;
			$scope.user = user;
		}, function () {

		});
	};
	
	google.charts.load('current', {'packages':['bar','corechart','geochart','table']});
	var firstGeoRun = 1;
	setInterval(function() { 
	  if (firstGeoRun) {
	    firstGeoRun = 0;
	    google.charts.setOnLoadCallback(load_page);
	  }
	}, 500);
	//google.charts.setOnLoadCallback(load_page);
	//google.charts.load('current', {'packages':['corechart']});  
	//google.charts.setOnLoadCallback(drawNewData);


	
	//google.charts.setOnLoadCallback(drawNewData);
	
	
	 
	
	/*------------------XHR-------------------------
	var theUrl="http://api.openhazards.com/GetEarthquakeProbability?q=SAN%JOSE,CA&m=6&r=100";
	var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() { 
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
            callback(xmlHttp.responseText);
    }
    xmlHttp.open("GET", theUrl);
    xmlHttp.setRequestHeader("Content-Type", "text/xml");
    //xmlHttp.send(null);	
    console.log(xmlHttp);
    ----------------------------------------------------*/
	/*var xhr = new XMLHttpRequest();
	xhr.open('GET', "http://api.openhazards.com/GetEarthquakeCatalog?t0=2000/1/1&m0=5.8&x0=-125&x1=-113&y0=32&y1=42", true);
	console.log(xhr);*/
	 
	$scope.frmToggle = function() {
		$('#blogForm').slideToggle();
	}

	$http.get('./js/popData.php')
		.success(function(data) {		
			var blogs = [];
			for(var i=0;i<data.length;i++){
				blogs.push(data[i]);
			}
			console.log("Data from base:"+ blogs);
			
			//drawStuff(blogs);
		})
		.error(function(err) {
			console.log("ERRRRRRRRRRRRRRRRRRORRRRRRRRRRRRR");
			$log.error(err);
		})
		
	
		
	$scope.valueOfEar="";
	$scope.checkdata={};
	$scope.update = function(check){
		console.log("hhhhhhhhhhhhh");
		$scope.checkdata=angular.copy(check);
		
		
		
		
		$.get('http://api.openhazards.com/GetEarthquakeProbability?q='+$scope.checkdata.city.split(" ").join("%").toUpperCase()+',CA&m='+$scope.checkdata.mag+'&r=100',function(data){
			var loc=$scope.checkdata.city.toUpperCase();
			console.log(String(data));
			/*var txt = "<?xml version='1.0' encoding='UTF-8'?>"+data;
			console.log(txt);
			
			console.log(xmlDoc);
			console.log(xmlDoc.getElementsByTagName("prob")[0]);
			console.log("yello");
			*/
			var fl="C:/Users/Vinay/Downloads/caldata.txt";
			var file = new File([new Blob()],fl);
			var xmlstr = data.xml ? data.xml : (new XMLSerializer()).serializeToString(data);
			
			parser = new DOMParser();
			xmlDoc = parser.parseFromString(xmlstr,"text/xml");
			var len = xmlDoc.getElementsByTagName("prob")[0].childNodes[0].nodeValue.length;
			console.log(xmlDoc.getElementsByTagName("prob")[0].childNodes[0].nodeValue.substring(0, len - 1));
			var sent = "The Probability of earthquake occurence at "+loc+" is "+ xmlDoc.getElementsByTagName("prob")[0].childNodes[0].nodeValue+" in the coming year within 100 kms";
			document.getElementById("to").innerHTML  = "The Probability of earthquake occurence at "+loc+ " is "+ xmlDoc.getElementsByTagName("prob")[0].childNodes[0].nodeValue+" in the coming year within 100 kms";
			//console.log($scope.valueOfEar);
			//writeToFile(sent);
			
			
			var content = sent;
			
			
			var link = document.createElement('a');
			var blob = new Blob(["\ufeff", content]);
			var url = URL.createObjectURL(blob);
			link.href = url;
			link.setAttribute('download', 'caldata.txt');
			link.click();
			
			//file.open("w"); // open file with write access
			//file.writeln("First line of text");
			//file.writeln("Second line of text " + content);
			//file.write(content);
			//file.close();
			/*$(function () {
		        //var str = "hi,file";
		        createDownloadLink("#export",sent,"naturalcalam.txt");
		    });*/
			
		});
	
		
	}
	
	var blobObject = null;
	/*
	function createDownloadLink(anchorSelector, str, fileName){
		
		if(window.navigator.msSaveOrOpenBlob) {
			var fileData = [str];
			blobObject = new Blob(fileData);
			$(anchorSelector).click(function(){
				window.navigator.msSaveOrOpenBlob(blobObject, fileName);
			});
		} else {
			var url = "data:text/plain;charset=utf-8," + encodeURIComponent(str);
			$(anchorSelector).attr("href", url);
		}
	}*/

	
	

	/*
	function writeToFile(cont){
	    var fso = new ActiveXObject("Scripting.FileSystemObject");
	    var fh = fso.OpenTextFile("data.txt", 8, false, 0);
	    fh.WriteLine(cont);
	    fh.Close();
	}*/
		
	function load_page(){
		
	    $.ajax({
	        url: './js/earthquake/earthquake.php',
	        async: false,
	        success: function(data){
	            if(data){
	            	console.log("Controller:"+data);
	                //chart_data = $.parseJSON(data);
	                //drawStuff(data);
	            }
	        },
	    });
	    
	    $.ajax({
	        url: './js/earthquake/earthquake_data.php',
	        async: false,
	        success: function(data){
	            if(data){
	                //chart_data = $.parseJSON(data);
	                //drawNewData(data);
	            }
	        },
	    });
	    
	    $.ajax({
	        url: './js/earthquake/earthquakefive.php',
	        async: false,
	        success: function(data){
	            if(data){
	                //chart_data = $.parseJSON(data);
	                drawFinal(data,5);
	            }
	        },
	    });
	    
	    $.ajax({
	        url: './js/earthquake/earthquakefour.php',
	        async: false,
	        success: function(data){
	            if(data){
	                //chart_data = $.parseJSON(data);
	                drawFinal(data,4);
	            }
	        },
	    });
	    
	    $.ajax({
	        url: './js/earthquake/earthquakethree.php',
	        async: false,
	        success: function(data){
	            if(data){
	                //chart_data = $.parseJSON(data);
	                drawFinal(data,3);
	            }
	        },
	    });
	    
	}/*
	$http.get('./js/storm_data.php')
		.success(function(data) {		
			var blogs = [];
			
			for(var i=0;i<data.length;i++){
				blogs.push(data[i]);
			}
			console.log("Data from base:"+ blogs);
			
			drawStuff(blogs);
		})
		.error(function(err) {
			console.log("ERRRRRRRRRRRRRRRRRRORRRRRRRRRRRRR");
			$log.error(err);
		})*/

	$scope.pushData = function($params) {
		$http.post('./js/pushData.php',{'title':$params.title, 'description':$params.description})
			.success(function(data) {
				$scope.blogs = data;
			})
			.error(function(err) {
				$log.error(err);
			})
	}

	$scope.removeData = function($params) {
		var cnfrm = confirm("Are you sure to delete?");
		if(cnfrm) {
			$http.post('./js/removeData.php', {'id':$params})
			.success(function(data) {
				$scope.blogs = data;
			})
			.error(function(err) {
				$log.error(err);
			})
		} else {
			// 
		}
		
	}
	/*
	$scope.launchAuth = function(){
		var modalInstance = $uibModal.open({
			templateUrl: '/reg.html',
			controller: 'authCtrl',
			size: 'sm'
		});

		modalInstance.result.then(function (user) {
			$rootScope.user = user;
			$scope.user = user;
		}, function () {

		});
	};*/
	
	

}]);

function drawFinal(data,num) {
	//console.log(data);  
	//debugger;
	 
	//google.charts.setOnLoadCallback(drawStuff);
	var chartData = prepareLineChartData(data);
	console.log(chartData);
	
	
	var data = new google.visualization.DataTable();
	data.addColumn('string','Name');
	data.addColumn('number','Value');
	data.addRows(chartData);
	
	
	
	
	  
	/*
    var data = new google.visualization.arrayToDataTable([
      ['Move', 'Percentage'],
  ["King's pawn (e4)", 44],
  ["Queen's pawn (d4)", 31],
  ["Knight to King 3 (Nf3)", 12],
  ["Queen's bishop pawn (c4)", 10],
  ['Other', 3]
]);*/

	
	var options = {
	          title: 'Algorithms Vs Score',
	          curveType: 'function',
	          legend: { position: 'bottom' }
	        };
	
	var sent='line_chart'+num
	console.log(sent);
    var chart = new google.visualization.LineChart(document.getElementById(sent));

    chart.draw(data, options);
    
    var tab='table_div'+num
    
    var table = new google.visualization.Table(document.getElementById(tab));

    table.draw(data, {showRowNumber: true, width: '80%', height: '100%'});




};

function drawStuff(data) {
	//console.log(data);  
	//debugger;
	 
	//google.charts.setOnLoadCallback(drawStuff);
	var chartData = prepareChartData(data);
	
	console.log(chartData);
	
	var data = new google.visualization.DataTable();
	data.addColumn('string','City');
	data.addColumn('number','AirPressure');
	data.addColumn('number','MoistureDensity');
	data.addRows(chartData);
	
	
	
	
	  
	/*
    var data = new google.visualization.arrayToDataTable([
      ['Move', 'Percentage'],
  ["King's pawn (e4)", 44],
  ["Queen's pawn (d4)", 31],
  ["Knight to King 3 (Nf3)", 12],
  ["Queen's bishop pawn (c4)", 10],
  ['Other', 3]
]);*/

	
	


	var options = {
	          chart: {
	            title: 'Company Performance',
	            subtitle: 'Sales, Expenses, and Profit: 2014-2017',
	          },
	          bars: 'horizontal' // Required for Material Bar Charts.
	        };

	        var chart = new google.charts.Bar(document.getElementById('geo_chart_div'));

	        chart.draw(data, options);

};


function drawNewData(data) {
	//console.log(data);  
	//debugger;
	 
	//google.charts.setOnLoadCallback(drawStuff);
	var chartData = prepareChartData(data);
	
	
	
	var data = new google.visualization.DataTable();
	data.addColumn('string','Year');
	data.addColumn('number','MoistureDensity');
	data.addRows(chartData);
	
	
	
	
	  
	/*
    var data = new google.visualization.arrayToDataTable([
      ['Move', 'Percentage'],
  ["King's pawn (e4)", 44],
  ["Queen's pawn (d4)", 31],
  ["Knight to King 3 (Nf3)", 12],
  ["Queen's bishop pawn (c4)", 10],
  ['Other', 3]
]);*/

	
	


	var options = {
	          title: 'My Daily Activities',
	          pieHole: 0.4,
	        };
	
	
	var chart = new google.visualization.PieChart(document.getElementById('donutchart'));
    chart.draw(data, options);

};

function prepareChartData(data){
	 
	 //console.log(data);
	 var chart = [];
	 for(var i=0;i<data.length;i++){
		 //data[i][0]="Quarter 1";
		 //console.log(parseInt(data[i][1]));
		 //data[i][1]=12312312312;//data[i][1]*10000;
		 var temp = [data[i][0], parseInt(data[i][1]),parseInt(data[i][2])];
		 //var temp = [data[i][0], data[i][1]];
		 //console.log(temp);
		 chart.push(temp);
	 }
	 //console.log(chart);
	 
	 return chart;
}

function prepareLineChartData(data){
	 
	 //console.log(data);
	 var chart = [];
	 for(var i=0;i<data.length;i++){
		 //data[i][0]="Quarter 1";
		 //console.log(parseInt(data[i][1]));
		 //data[i][1]=12312312312;//data[i][1]*10000;
		 data[i][1]=data[i][1]*100;
		 var temp = [data[i][0], parseInt(data[i][1])];
		 //var temp = [data[i][0], data[i][1]];
		 //console.log(temp);
		 chart.push(temp);
	 }
	 //console.log(chart);
	 
	 return chart;
}
//google.load('visualization', '1', {packages:['controls'], callback: drawStuff});


mod.controller('regCtrl', function($scope, $http, $uibModalInstance, $window){

	$scope.user = {
			username : '',
			name : '',
			phone : ''
			
	};
	
	//$scope.logging = false;
	$scope.doLogin = function(){
		
		console.log($scope.user.username);
		console.log($scope.user.name);
		console.log($scope.user.phone);
		
		
		$.ajax({
			type: "POST",
			data: 'email='+$scope.user.username+'&name='+$scope.user.name+'&phone='+$scope.user.phone,
	        url: './js/earthquake/earthsys.php',
	        async: false,
	        success: function(data){
	            console.log(data);
	            $uibModalInstance.close();
	        },
	    })
		
		
		/*$http.post('/authApi/signup', {email: $scope.user.username, 
				password : $scope.user.password,
				name : $scope.user.name
			}
		).success(function(data){
			if(data.error)
				alert(data.error);
			else
				$modalInstance.close(data.user);
		});*/
	};

	

});
  

