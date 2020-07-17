<?php 

class User {

	private $username;
	private $name;
	private $email;
	private $role;
	private $facultyNumber;
	private $password;

	public function __construct($username, $name, $email, 
								$role, $facultyNumber, $password) {
		$this->username = $username;
		$this->name = $name;
		$this->email = $email;
		$this->role = $role;
		$this->facultyNumber = $facultyNumber;
		$this->password = $password;
	}

	public function persistUser() {
		require_once "DatabaseConnection.php";

		$dbHandle = new DatabaseConnection();
		$connection = $dbHandle->getConnection();

		$sqlInsertStatement = "INSERT INTO `Users` (`id`, `username`, `name`, `email`, `role`, `facultyNumber`, `passoword`) VALUES (NULL, :username, :name, :email, :role, :facultyNumber, :passoword)";
		$prepareStatement = $connection->prepare($sqlInsertStatement);
		$result = $prepareStatement->execute([
			'username' => $this->username,
			'name' => $this->name,
			'email' => $this->email,
			'role' => $this->role,
			'facultyNumber' => (int)$this->facultyNumber,
			'passoword' => $this->password
		]);

		$response = null;

		if ($result) {
			$response = array(
		        "status" => true
		    );
		} else {
			$error = $prepareStatement->errorInfo();
			$response = array(
		        "status" => false,
		        "message" => "There was an error saving your data to the database: " . $error[2],
		        "errorCode" => $error[0]
		    );
		}

		return $response;
	}
}

?>