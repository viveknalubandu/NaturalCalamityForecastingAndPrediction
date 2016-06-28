<?php
	define("__HOST__", "localhost");
	define("__USER__", "root");
	define("__PASS__", "Vinay1989");
	define("__BASE__", "mydb");

	class DB {
		private $con = false;
		private $mysqli;
		private $data = array();

		public function __construct() {
			$con=mysqli_connect("localhost", "root", "Vinay1989", "mydb");
			
			if(!$con) {
				die("DB connection failed:" . mysqli_connect_error());
			}
		}

		public function qryPop() {
			$sql = "select Provider_City from inpatient_diagnosis";
			$qry = $this->con->query($sql);
			if($qry->num_rows > 0) {
				while($row = $qry->fetch_object()) {
					$this->data[] = $row;
				}
			} else {
				$this->data[] = null;
			}
			$this->con->close();
		}

		public function qryFire($sql=null) {
			if($sql == null) {
				$this->qryPop();
			} else {
				$this->con->query($sql);
				$this->qryPop();	
			}
			$this->con->close();
			return $this->data;
		}
	}
?>
