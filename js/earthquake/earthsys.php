<?php
/*Author : Vinay Janardhanan*/
$email = $_POST['email'];

$name = $_POST['name'];

$phone = $_POST['phone'];


$con = mysql_connect("localhost","root","Vinay1989");

//$row_chk = file_get_contents("php://input");

//$rows = json_decode($row_chk);


if (!$con) {
	die('Could not connect: ' . mysql_error());
}

//mysql_select_db("mydb", $con);

//$result = mysql_query("select case CAST(SUBSTRING_INDEX(date, '/', -3) as UNSIGNED) when 1 then 'Quarter 1' when 2 then 'Quarter 1' when 3 then 'Quarter 1' when 4 then 'Quarter 2' when 5 then 'Quarter 2' when 6 then 'Quarter 2' when 7 then 'Quarter 3' when 8 then 'Quarter 3' when 9 then 'Quarter 3' when 10 then 'Quarter 4' when 11 then 'Quarter 4' when 12 then 'Quarter 4' end as Quarter,CAST(SUM(TotalCost) as decimal(53,2)) as Cost from test group by Quarter");

//$result = mysql_query("select CAST(LT as CHAR(50)), SUM(MoistureDensity) as TMD from nc_weather group by LT order by TMD desc limit 10");
		
//$rows = array();

$sql = 'INSERT INTO userDetails (email,name, phone) VALUES ( "'.$email.'","'.$name.'", "'.$phone.'" )';

mysql_select_db('mydb');
$retval = mysql_query( $sql, $con );
 
if(! $retval ) {
	die('Could not enter data: ' . mysql_error());
}
 
echo "Entered data successfully\n";
 
mysql_close($con);

/*
while($r = mysql_fetch_array($result)) {
	$row[0] = $r[0];
	$row[1] = $r[1];
	//$row[2] = $r[2];
	array_push($rows,$row);
}

header('Content-Type: application/json');
$data=json_encode($rows);
echo json_encode($rows);

mysql_close($con);*/
	?>