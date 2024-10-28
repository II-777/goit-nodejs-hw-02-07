---
title: README
date: 2024-10-28 16:25
author: II-777
gitea: none
include_toc: true
tags: goit-nodejs hw-03 expressjs, cors, pino, dotenv, mongoose
---

# goit-nodejs-hw-03

https://goit-nodejs-hw-02.onrender.com

## LINKS
- [faker (random data generator for testing and development)](https://www.npmjs.com/package/@faker-js/faker)
- [expressjs (web application framework for building APIs and web applications)](https://expressjs.com/)
- [cors (middleware for enabling Cross-Origin Resource Sharing)](https://www.npmjs.com/package/cors)
- [pino (fast logger for Node.js applications)](https://github.com/pinojs/pino-http)
- [pino-pretty (formatter for making Pino logs more readable)](https://www.npmjs.com/package/pino-pretty)
- [dotenv (module for loading environment variables from a .env file)](https://www.npmjs.com/package/dotenv)
- [mongoose (object data modeling library for MongoDB and Node.js)](https://mongoosejs.com/)
- [render.com](https://render.com/)


## EXAMPLE USAGE:
```bash
# 1. GET /contacts
curl https://goit-nodejs-hw-02.onrender.com/contacts
# 2. GET /contacts/66eb786fe0118050355c46b9
curl https://goit-nodejs-hw-02.onrender.com/contacts/66eb786fe0118050355c46b9
# 3. GET /contacts/66eb786fe0118050355c46b0 (invalid id)
curl https://goit-nodejs-hw-02.onrender.com/contacts/66eb786fe0118050355c46b0
# 4. GET /invalidEndPoint (invalid endpoint)
curl https://goit-nodejs-hw-02.onrender.com/invalidEndPoint
# 5. POST /contacts
curl -X POST https://goit-nodejs-hw-02.onrender.com/contacts -H "Content-Type: application/json" -d '{"name": "John Doe", "phoneNumber": "1234567890", "contactType": "personal"}'
# 6. PATCH /contacts/:contactId (valid id)
curl -X PATCH https://goit-nodejs-hw-02.onrender.com/contacts/671fda7127949b32ad04d2c5 -H "Content-Type: application/json" -d '{"phoneNumber": "0987654321"}'
# 7. DELETE /contacts/:contactId (valid id)
curl -X DELETE https://goit-nodejs-hw-02.onrender.com/contacts/671fda7127949b32ad04d2c5
```
