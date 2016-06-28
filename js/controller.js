/*Author : Vinay Janardhanan*/



var cont=angular.module('controller',['ui.bootstrap', 'ngRoute'])

cont.controller('tabController', ['$scope', '$rootScope', '$uibModal' , '$http', '$log', function($scope, $rootScope, $uibModal, $http, $log) {
	
	
	google.charts.load('current', {'packages':['bar','corechart','table']});
	google.charts.setOnLoadCallback(load_page);
	//google.charts.load('current', {'packages':['corechart']});  
	//google.charts.setOnLoadCallback(drawNewData);


	
	//google.charts.setOnLoadCallback(drawNewData);
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
		
	function load_page(){
	   $.ajax({
	        url: './js/storm/storm_data.php',
	        async: false,
	        success: function(data){
	            if(data){
	                //chart_data = $.parseJSON(data);
	                //drawStuff(data);
	            }
	        },
	    });
	    /*
	    $.ajax({
	        url: './js/storm/storm_data_moist.php',
	        async: false,
	        success: function(data){
	            if(data){
	                //chart_data = $.parseJSON(data);
	                drawNewData(data);
	            }
	        },
	    });*/
	    
	    $.ajax({
	        url: './js/storm/predict.php',
	        async: false,
	        success: function(data){
	            if(data){
	                //chart_data = $.parseJSON(data);
	                drawPredict(data);
	            }
	        },
	    });
	    
	    $.ajax({
	        url: './js/storm/stormfinal.php',
	        async: false,
	        success: function(data){
	            if(data){
	                //chart_data = $.parseJSON(data);
	                drawFinal(data,7);
	            }
	        },
	    });
	    
	    $.ajax({
	        url: './js/storm/stormfinalfive.php',
	        async: false,
	        success: function(data){
	            if(data){
	                //chart_data = $.parseJSON(data);
	                drawFinal(data,5);
	            }
	        },
	    });
	    
	    $.ajax({
	        url: './js/storm/stormfinalsix.php',
	        async: false,
	        success: function(data){
	            if(data){
	                //chart_data = $.parseJSON(data);
	                drawFinal(data,6);
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
	
	

}]);



function drawStuff(data) {
	//console.log(data);  
	//debugger;
	 
	//google.charts.setOnLoadCallback(drawStuff);
	var chartData = prepareChartData(data);
	
	
	
	var data = new google.visualization.DataTable();
	data.addColumn('string','Year');
	data.addColumn('number','AirPressure');
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
  title: 'Column Chart',
  width: 900,
  legend: { position: 'none' },
  chart: { subtitle: 'popularity by percentage' },
  axes: {
    x: {
      0: { side: 'top', label: 'Air Pressure'} // Top x-axis.
    }
  },
  bar: { groupWidth: "90%" }
};

var options2 = {
          title: 'Area Chart',
          chartArea: {backgroundColor: 'red'},
          hAxis: {title: 'Year',  titleTextStyle: {color: '#FFF'}},
          vAxis: {minValue: 0}
        };

	
	
var chart = new google.charts.Bar(document.getElementById('top_x_div'));
// Convert the Classic options to Material options.
chart.draw(data, options);


var areachart = new google.visualization.AreaChart(document.getElementById('chart_div'));
// Convert the Classic options to Material options.
areachart.draw(data, options2);

};

function drawPredict(data,num) {
	//console.log(data);  
	//debugger;
	 
	//google.charts.setOnLoadCallback(drawStuff);
	var chartData = prepareLineMulData(data);
	console.log(chartData);
	
	
	var data = new google.visualization.DataTable();
	data.addColumn('string','id');
	data.addColumn('number','Predict Val');
	data.addColumn('number','Y Test');
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
	          title: 'Line chart Prediction',
	          curveType: 'function',
	          legend: { position: 'bottom' }
	        };

	var chart = new google.visualization.LineChart(document.getElementById('line_curve_chart'));

	chart.draw(data, options);



};

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
		 var temp = [data[i][0], parseInt(data[i][1])];
		 //var temp = [data[i][0], data[i][1]];
		 //console.log(temp);
		 chart.push(temp);
	 }
	 //console.log(chart);
	 
	 return chart;
}

function prepareLineMulData(data){
	 
	 //console.log(data);
	 var chart = [];
	 for(var i=0;i<data.length;i++){
		 //data[i][0]="Quarter 1";
		 //console.log(parseInt(data[i][1]));
		 //data[i][1]=12312312312;//data[i][1]*10000;
		 //data[i][1]=data[i][1]*100;
		 var temp = [data[i][0], parseInt(data[i][1]), parseInt(data[i][2])];
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

cont.controller('regCtrl', function($scope, $http, $uibModalInstance, $window){

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
  
  

