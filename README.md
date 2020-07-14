# web-project

### Project Architecture:

```markdown
.
├── css
│   ├── index.css
│   ├── login-register.css
│   ├── radio-buttons.css
│   ├── screen1.css
│   └── screen2.css
├── endpoints
│   ├── login.php
│   ├── logout.php
│   └── register.php
├── js
│   ├── index.js
│   ├── login.js
│   ├── logout.js
│   └── register.js
├── php
│   ├── class1.php
│   ├── class2.php
│   ├── config.php
│   └── DatabaseConnection.php
├── sql
│   └── database_scheme.sql
├── views
│   ├── login.html
│   ├── register.html
│   ├── screen1.html
│   └── screen2.html
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

