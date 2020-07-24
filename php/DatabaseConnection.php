<?php 

class DatabaseConnection {

	private $connection;

	public function __construct() {
		require_once("config.php");
		$this->connection = new PDO('mysql:host=' . $host . ';dbname=' . $dbName, $dbUser, $dbPass, [
            PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES utf8",
			PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC
		]);
	}

	public function getConnection() {
		return $this->connection;
	}
}

?>