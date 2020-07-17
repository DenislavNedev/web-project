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

