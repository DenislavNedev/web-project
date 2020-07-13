<?php 

class DatabaseConnection {

	private $connection;

	public function __construct() {
		$this->connection = new PDO('mysql:host=localhost;dbname=web-planner', 'debian-sys-maint', 'KC04tFxqpPh4JypZ', [
            PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES utf8",
			PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC
		]);
	}

	public function getConnection() {
		return $this->connection;
	}
}

?>