/*google.charts.load('current', {'packages':['bar']});
  
google.charts.setOnLoadCallback(drawStuff);

  function drawStuff(data) {
	  
	var chartData = prepareChartData(data);
	
	var data = new google.visualization.DataTable();
	
	data.addColumn('string','Quater');
	data.addColumn('number','Cost');
	
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
	
	

/*
var options = {
  title: 'Table Chart',
  width: 900,
  legend: { position: 'none' },
  chart: { subtitle: 'popularity by percentage' },
  axes: {
    x: {
      0: { side: 'top', label: 'White to move'} // Top x-axis.
    }
  },
  bar: { groupWidth: "90%" }
};

	
	
var chart = new google.charts.Bar(document.getElementById('top_x_div'));
// Convert the Classic options to Material options.
chart.draw(data, google.charts.Bar.convertOptions(options));

};
  
  
  
 function prepareChartData(data){
	 var chart = [];
	 for(int i=0;i<data.length;i++){
		 var temp = [data[i][0], parseDouble(data[i][1])];
		 chart.push(temp);
	 }
	 
	 return chart;
 }
 */