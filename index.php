<?php ?>
<!DOCTYPE html>
<html lang="en" data-ng-app="controller">
<!-- Author: Vinay Janardhanan -->
<head>

    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="">
    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.5.3/angular.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.4.0/angular-route.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.4.0/angular-route.min.js"></script>
    <script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
	<script src="ngtweet/dist/ngtweet.min.js"></script>
    <title>NCO Dashboard</title>

    <!-- Bootstrap Core CSS -->
    <link href="css/bootstrap.min.css" rel="stylesheet">

    <!-- Custom CSS -->
    <link href="css/sb-admin.css" rel="stylesheet">

    <!-- Morris Charts CSS -->
    <link href="css/plugins/morris.css" rel="stylesheet">

    <!-- Custom Fonts -->
    <link href="font-awesome/css/font-awesome.min.css" rel="stylesheet" type="text/css">

    <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
        <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
        <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
    <![endif]-->

</head>

<body data-ng-controller='tabController'>
	
    
    
    <div id="wrapper">

        <!-- Navigation -->
        <nav class="navbar navbar-inverse navbar-fixed-top" role="navigation">
            <!-- Brand and toggle get grouped for better mobile display -->
            <div class="navbar-header">
                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <a class="navbar-brand" href="index.php">Natural Calamity Dashboard</a>
                <button class="btn btn-primary" data-ng-click="launchAuth()" style="position:absolute; top:8px; right:0;">
						<i class="fa fa-user"></i> <span class="mobile-hidden">Register</span>
				</button>
            </div>
            <!-- Top Menu Items -->
            			
            <ul class="nav navbar-right top-nav">
               
            </ul>
            <!-- Sidebar Menu Items - These collapse to the responsive navigation menu on small screens -->
            <div class="collapse navbar-collapse navbar-ex1-collapse">
                <ul class="nav navbar-nav side-nav">
                    <li class="active">
                       <!--  --> <a href="index.php"><i class="fa fa-fw fa-dashboard"></i> Storm </a>
                    </li>
                    <li>
                      <!--  --> <a href="charts.html"><i class="fa fa-fw fa-bar-chart-o"></i> Earthquake</a>
                    </li>
                    <li>
                       <!-- tables.html --> <a href="tweets.html"><i class="fa fa-fw fa-table"></i>Tweets </a>
                    </li>
                    <!--<li>
                      <a href=""><i class="fa fa-fw fa-edit"></i> Forms</a>
                    </li>-->
                    <!--  
                    <li>
                     <!-- bootstrap-elements.html   <a href=""><i class="fa fa-fw fa-desktop"></i> Bootstrap Elements</a>
                    </li>
                    <li>
                      <!-- bootstrap-grid.html <a href=""><i class="fa fa-fw fa-wrench"></i> Bootstrap Grid</a>
                    </li>
                    <li>
                        <a href="javascript:;" data-toggle="collapse" data-target="#demo"><i class="fa fa-fw fa-arrows-v"></i> Dropdown <i class="fa fa-fw fa-caret-down"></i></a>
                        <ul id="demo" class="collapse">
                            <li>
                                <a href="#">Dropdown Item</a>
                            </li>
                            <li>
                                <a href="#">Dropdown Item</a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="blank-page.html"><i class="fa fa-fw fa-file"></i> Blank Page</a>
                    </li>
                    <li>
                        <a href="index-rtl.html"><i class="fa fa-fw fa-dashboard"></i> RTL Dashboard</a>
                    </li>-->
                </ul>
            </div>
            <!-- /.navbar-collapse -->
        </nav>
		
        <div id="page-wrapper">
			<div data-ng-repeat="blog in blogs track by $index">
				{{blog}}
			</div>
            <div class="container-fluid">
				
                <!-- Page Heading -->
                <div class="row">
                    <div class="col-lg-12">
                        <h1 class="page-header">
                            Dashboard <small>Statistics Overview</small>
                        </h1>
                        <ol class="breadcrumb">
                            <li class="active">
                                <i class="fa fa-dashboard"></i> Dashboard
                            </li>
                        </ol>
                    </div>
                </div>
                <!-- /.row -->

                
                <!-- /.row -->

                <!--  <div class="row">
                    
                <!-- /.row -->
				<!-- <div class="row">
                    <div class="col-lg-12">
                        <div class="panel panel-default">
                            <div class="panel-heading">
                                <h3 class="panel-title"><i class="fa fa-bar-chart-o fa-fw"></i> Bar Chart</h3>
                            </div>
							<div>
								 <center><div id="top_x_div" style="width: 900px; height: 600px;"></div></center>
							</div>
						</div>
					</div>
				</div> -->
				<div class="row">
                    <div class="col-lg-12">
                        <div class="panel panel-default">
                            <div class="panel-heading">
                                <h3 class="panel-title"><i class="fa fa-bar-chart-o fa-fw"></i> Prediction Chart</h3>
                            </div>
							<div>
								 <center><div id="line_curve_chart" style="width: 900px; height: 600px;"></div></center>
							</div>
						</div>
					</div>
				</div>
				<!-- <div class="row">
                    <div class="col-lg-7">
                        <div class="panel panel-default">
                            <div class="panel-heading">
                                <h3 class="panel-title"><i class="fa fa-bar-chart-o fa-fw"></i> Area Chart</h3>
                            </div>
							<div>
								 <div id="chart_div" style="width: 900px; height: 600px;"></div>
							</div>
						</div>
					</div>
					<div class="col-lg-5">
                        <div class="panel panel-default">
                            <div class="panel-heading">
                                <h3 class="panel-title"><i class="fa fa-bar-chart-o fa-fw"></i> Donut Chart</h3>
                            </div>
							<div>
    							<div id="donutchart" style="width: 600px; height: 500px;"></div>
  							</div>
						</div>
					</div> 
				</div>  -->
				<div class="row">
					<div class="col-lg-12">
						<div class="panel panel-primary">
							<div class="panel-heading">
	                                <h3 class="panel-title"><i class="fa fa-bar-chart-o fa-fw"></i> Factors considered are "AirPressure","WindSpeed", "Moisture" ,"Moisure Density","Snow", "Hail Size", "Dust Size" </h3>
	                        </div>
						</div>
					</div>
					<div class="col-lg-6">
						<div class="panel panel-red">
	                            <div class="panel-heading">
	                                <h3 class="panel-title"><i class="fa fa-bar-chart-o fa-fw"></i> Final Result Tab </h3>
	                            </div>
	      						<div class="row">
				                    <center><div id="table_div7" style="width: 700px; height: 500px"></div></center>
								</div>
						</div>
					</div>
					<div class="col-lg-6">
	                        <div class="panel panel-red">
	                            <div class="panel-heading">
	                                <h3 class="panel-title"><i class="fa fa-bar-chart-o fa-fw"></i> Final Result Chart</h3>
	                            </div>
								<div class="row">
				                    <center><div id="line_chart7" style="width: 700px; height: 500px"></div></center>
								</div>
							</div>
					</div>
					
				</div>
				<div class="row">
					<div class="col-lg-12">
						<div class="panel panel-primary">
							<div class="panel-heading">
	                                <h3 class="panel-title"><i class="fa fa-bar-chart-o fa-fw"></i> Factors considered are "AirPressure","WindSpeed", "Moisture" ,"Moisure Density","Snow", "Hail Size"</h3>
	                        </div>
						</div>
					</div>
					<div class="col-lg-6">
						<div class="panel panel-red">
	                            <div class="panel-heading">
	                                <h3 class="panel-title"><i class="fa fa-bar-chart-o fa-fw"></i> Final Result Tab </h3>
	                            </div>
	      						<div class="row">
				                    <center><div id="table_div6" style="width: 700px; height: 500px"></div></center>
								</div>
						</div>
					</div>
					<div class="col-lg-6">
	                        <div class="panel panel-red">
	                            <div class="panel-heading">
	                                <h3 class="panel-title"><i class="fa fa-bar-chart-o fa-fw"></i> Final Result Chart </h3>
	                            </div>
								<div class="row">
				                    <center><div id="line_chart6" style="width: 700px; height: 500px"></div></center>
								</div>
							</div>
					</div>
					
				</div>
				<div class="row">
					<div class="col-lg-12">
						<div class="panel panel-primary">
							<div class="panel-heading">
	                                <h3 class="panel-title"><i class="fa fa-bar-chart-o fa-fw"></i> Factors considered are "AirPressure","WindSpeed", "Moisture" ,"Moisure Density","Snow"</h3>
	                        </div>
						</div>
					</div>
					<div class="col-lg-6">
						<div class="panel panel-red">
	                            <div class="panel-heading">
	                                <h3 class="panel-title"><i class="fa fa-bar-chart-o fa-fw"></i> Final Result Tab </h3>
	                            </div>
	      						<div class="row">
				                    <center><div id="table_div5" style="width: 700px; height: 500px"></div></center>
								</div>
						</div>
					</div>
					<div class="col-lg-6">
	                        <div class="panel panel-red">
	                            <div class="panel-heading">
	                                <h3 class="panel-title"><i class="fa fa-bar-chart-o fa-fw"></i> Final Result Chart </h3>
	                            </div>
								<div class="row">
				                    <center><div id="line_chart5" style="width: 700px; height: 500px"></div></center>
								</div>
							</div>
					</div>
					
				</div>
				<!--  
                <div class="row">
                    <div class="col-lg-12">
                        <div class="panel panel-default">
                            <div class="panel-heading">
                                <h3 class="panel-title"><i class="fa fa-bar-chart-o fa-fw"></i> Area Chart</h3>
                            </div>
                            <div class="panel-body">
                                <div id="morris-area-chart"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- /.row -->
				<!--  
                <div class="row">
                    <div class="col-lg-4">
                        <div class="panel panel-default">
                            <div class="panel-heading">
                                <h3 class="panel-title"><i class="fa fa-long-arrow-right fa-fw"></i> Donut Chart</h3>
                            </div>
                            <div class="panel-body">
                                <div id="morris-donut-chart"></div>
                                <div class="text-right">
                                    <a href="#">View Details <i class="fa fa-arrow-circle-right"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="col-lg-4">
                        <div class="panel panel-default">
                            <div class="panel-heading">
                                <h3 class="panel-title"><i class="fa fa-clock-o fa-fw"></i> Tasks Panel</h3>
                            </div>
                            <div class="panel-body">
                                <div class="list-group">
                                    <a href="#" class="list-group-item">
                                        <span class="badge">just now</span>
                                        <i class="fa fa-fw fa-calendar"></i> Calendar updated
                                    </a>
                                    <a href="#" class="list-group-item">
                                        <span class="badge">4 minutes ago</span>
                                        <i class="fa fa-fw fa-comment"></i> Commented on a post
                                    </a>
                                    <a href="#" class="list-group-item">
                                        <span class="badge">23 minutes ago</span>
                                        <i class="fa fa-fw fa-truck"></i> Order 392 shipped
                                    </a>
                                    <a href="#" class="list-group-item">
                                        <span class="badge">46 minutes ago</span>
                                        <i class="fa fa-fw fa-money"></i> Invoice 653 has been paid
                                    </a>
                                    <a href="#" class="list-group-item">
                                        <span class="badge">1 hour ago</span>
                                        <i class="fa fa-fw fa-user"></i> A new user has been added
                                    </a>
                                    <a href="#" class="list-group-item">
                                        <span class="badge">2 hours ago</span>
                                        <i class="fa fa-fw fa-check"></i> Completed task: "pick up dry cleaning"
                                    </a>
                                    <a href="#" class="list-group-item">
                                        <span class="badge">yesterday</span>
                                        <i class="fa fa-fw fa-globe"></i> Saved the world
                                    </a>
                                    <a href="#" class="list-group-item">
                                        <span class="badge">two days ago</span>
                                        <i class="fa fa-fw fa-check"></i> Completed task: "fix error on sales page"
                                    </a>
                                </div>
                                <div class="text-right">
                                    <a href="#">View All Activity <i class="fa fa-arrow-circle-right"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="panel panel-default">
                            <div class="panel-heading">
                                <h3 class="panel-title"><i class="fa fa-money fa-fw"></i> Transactions Panel</h3>
                            </div>
                            <div class="panel-body">
                                <div class="table-responsive">
                                    <table class="table table-bordered table-hover table-striped">
                                        <thead>
                                            <tr>
                                                <th>Order #</th>
                                                <th>Order Date</th>
                                                <th>Order Time</th>
                                                <th>Amount (USD)</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>3326</td>
                                                <td>10/21/2013</td>
                                                <td>3:29 PM</td>
                                                <td>$321.33</td>
                                            </tr>
                                            <tr>
                                                <td>3325</td>
                                                <td>10/21/2013</td>
                                                <td>3:20 PM</td>
                                                <td>$234.34</td>
                                            </tr>
                                            <tr>
                                                <td>3324</td>
                                                <td>10/21/2013</td>
                                                <td>3:03 PM</td>
                                                <td>$724.17</td>
                                            </tr>
                                            <tr>
                                                <td>3323</td>
                                                <td>10/21/2013</td>
                                                <td>3:00 PM</td>
                                                <td>$23.71</td>
                                            </tr>
                                            <tr>
                                                <td>3322</td>
                                                <td>10/21/2013</td>
                                                <td>2:49 PM</td>
                                                <td>$8345.23</td>
                                            </tr>
                                            <tr>
                                                <td>3321</td>
                                                <td>10/21/2013</td>
                                                <td>2:23 PM</td>
                                                <td>$245.12</td>
                                            </tr>
                                            <tr>
                                                <td>3320</td>
                                                <td>10/21/2013</td>
                                                <td>2:15 PM</td>
                                                <td>$5663.54</td>
                                            </tr>
                                            <tr>
                                                <td>3319</td>
                                                <td>10/21/2013</td>
                                                <td>2:13 PM</td>
                                                <td>$943.45</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div class="text-right">
                                    <a href="#">View All Transactions <i class="fa fa-arrow-circle-right"></i></a>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
                -->
                <!-- /.row -->

            </div>
            <!-- /.container-fluid -->

        </div>
        <!-- /#page-wrapper -->

    </div>
    <!-- /#wrapper -->
	
    <!-- jQuery -->
    <script src="js/jquery.js"></script>
	
    <!-- Bootstrap Core JavaScript -->
    <script src="js/bootstrap.min.js"></script>

    <!-- Morris Charts JavaScript -->
    <script src="js/plugins/morris/raphael.min.js"></script>
    <script src="js/plugins/morris/morris.min.js"></script>
    <script src="js/plugins/morris/morris-data.js"></script>
    
    <!-- JavaScript Controllers -->
    <script src="js/app.js"></script>
    <script src="js/controller.js"></script>
    
    <script src="https://angular-ui.github.io/bootstrap/ui-bootstrap-tpls-0.14.3.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.2.7/angular-resource.min.js"></script>
    
   

</body>

</html>
		
