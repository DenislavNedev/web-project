# web-project

### Project Architecture:

```markdown
.
├── css
│   ├── add-event.css
│   ├── calendar.css
│   ├── index.css
│   ├── login-register.css
│   ├── profile.css
│   ├── radio-buttons.css
│   ├── select-time-box.css
│   └── snackbar.css
├── endpoints
│   ├── changePassword.php
│   ├── checkLogin.php
│   ├── getProfile.php
│   ├── login.php
│   ├── logout.php
│   └── register.php
├── img
│   ├── 66-512.png
│   └── logo.png
├── js
│   ├── addEventModal.js
│   ├── index.js
│   ├── login.js
│   ├── logout.js
│   ├── profile.js
│   └── register.js
├── php
│   ├── config.php
│   ├── DatabaseConnection.php
│   ├── Profile.php
│   └── User.php
├── sql
│   ├── database_scheme.sql
│   ├── events_changelog.sql
│   └── users_changelog.sql
├── views
│   ├── add-event.html
│   ├── calendar.html
│   ├── login.html
│   ├── profile.html
│   └── register.html
├── index.html
└── README.md

```

### Main directories:

```json
// css       -> includes all screens styles in as many different files as possible
// endpoints -> main BE php calls
// img       -> external image and icon resources
// js        -> main scripts per pages
// php       -> includes halper common classes and configuration files
// sql		 -> all sql queries needed to have a working database
// views     -> main screen layout files
```

All of the configurations like database access credentials, usernames and passwords should be saved in different configuration files.

DatabaseConnection.php contains the desired code to use PDO library with connection to the database out of the box. To use that class you should only create an instance and invoke the getConnection() method on it as follows:

```php
$database = new DatabaseConnection();
$connection = $database->getConnection();
```

**In order to use DatabaseConnection class properly, there should be a config.php file in the php/ foder. It's content should be:**

```php
<?php 

$dbUser = 'your phpMyAdmin username';
$dbPass = 'your phpMyAdmin password';

?>
```

