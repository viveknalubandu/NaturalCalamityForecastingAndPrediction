<?php
/*Author : Vinay Janardhanan*/
/*
	$data = file_get_contents("php://input");

	include('config.php');

	$db = new DB();

	$data = $db->qryFire();
	
	header('Content-Type: application/json');

	echo ($data);
	*/

$con = mysql_connect("localhost","root","Vinay1989");

//$row_chk = file_get_contents("php://input");

//$rows = json_decode($row_chk);


if (!$con) {
	die('Could not connect: ' . mysql_error());
}

mysql_select_db("mydb", $con);

//$result = mysql_query("select case CAST(SUBSTRING_INDEX(date, '/', -3) as UNSIGNED) when 1 then 'Quarter 1' when 2 then 'Quarter 1' when 3 then 'Quarter 1' when 4 then 'Quarter 2' when 5 then 'Quarter 2' when 6 then 'Quarter 2' when 7 then 'Quarter 3' when 8 then 'Quarter 3' when 9 then 'Quarter 3' when 10 then 'Quarter 4' when 11 then 'Quarter 4' when 12 then 'Quarter 4' end as Quarter,CAST(SUM(TotalCost) as decimal(53,2)) as Cost from test group by Quarter");

$result = mysql_query("select name,pydata from earthquakefive");


$rows = array();
while($r = mysql_fetch_array($result)) {
	$row[0] = $r[0];
	$row[1] = $r[1];
	//$row[2] = $r[2];
	array_push($rows,$row);
}

header('Content-Type: application/json');
$data=json_encode($rows);
echo json_encode($rows);

mysql_close($con);
	?>