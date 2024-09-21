---
title: README
date: 2024-09-18 19:52
author: II-777
tags: goit-nodejs hw-02
---

# goit-nodejs-hw-02

https://goit-nodejs-hw-02.onrender.com

## EXAMPLE USAGE:
```bash
# output: all contacts
curl https://goit-nodejs-hw-02.onrender.com/contacts
# output: contact id 66eb786fe0118050355c46b9
curl https://goit-nodejs-hw-02.onrender.com/contacts/66eb786fe0118050355c46b9
# output: contact not found (invalid id)
curl https://goit-nodejs-hw-02.onrender.com/contacts/66eb786fe0118050355c46b9
# output: not found
curl https://goit-nodejs-hw-02.onrender.com/
```

## PROJECT STRUCTURE:
```plaintext
.
├── eslint.config.js
├── package.json
├── package-lock.json
├── README.md
└── src
    ├── data
    │   └── contacts.json
    ├── db
    │   └── initMongoConnection.js
    ├── index.js
    ├── models
    │   └── contact.js
    ├── server.js
    ├── services
    │   └── contacts.js
    └── utils

6 directories, 10 files
```

## SOFTWARE USED:
- [faker (random data generator for testing and development)](https://www.npmjs.com/package/@faker-js/faker)
- [expressjs (web application framework for building APIs and web applications)](https://expressjs.com/)
- [cors (middleware for enabling Cross-Origin Resource Sharing)](https://www.npmjs.com/package/cors)
- [pino (fast logger for Node.js applications)](https://github.com/pinojs/pino-http)
- [pino-pretty (formatter for making Pino logs more readable)](https://www.npmjs.com/package/pino-pretty)
- [dotenv (module for loading environment variables from a .env file)](https://www.npmjs.com/package/dotenv)
- [mongoose (object data modeling library for MongoDB and Node.js)](https://mongoosejs.com/)
