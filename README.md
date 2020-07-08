# web-project

### Project Architecture:

```markdown
.
├── css				// includes all views in different css files
│   ├── index.css
│   └── screen1.css
│   └── screen2.css
├── endpoints		// includes all BE endpoints
│   ├── login.php
│   └── register.php
├── img				// includes all image resources
├── js				// includes all js scripts - every view has a js file
│   ├── index.js
│   └── login.js
│   └── register.js
├── php				// includes all php classes and configurations
│   ├── class1.php
│   └── class2.php
├── views			// includes all html screens
│   ├── screen1.html
│   └── screen2.html
└── index.html
```

All of the configurations like database access credentials, usernames and passwords should be saved in different configuration files.