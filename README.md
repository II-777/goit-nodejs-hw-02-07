---
title: README
date: 2024-10-28 16:13
author: II-777
gitea: none
include_toc: true
tags: goit nodejs hw-02
---

# goit-nodejs-hw-02

https://goit-nodejs-hw-02.onrender.com

## LINKS
- [contacts.json file](https://drive.google.com/file/d/13baA584rRyDY8L_Axqi2Ii_qD9lUG-Hw/view?usp=sharing)
- [render.com](https://render.com/)
- [cors (middleware for enabling Cross-Origin Resource Sharing)](https://www.npmjs.com/package/cors)
- [pino (fast logger for Node.js applications)](https://github.com/pinojs/pino-http)
- [pino-pretty (formatter for making Pino logs more readable)](https://www.npmjs.com/package/pino-pretty)
- [mongoose (object data modeling library for MongoDB and Node.js)](https://mongoosejs.com/)

## EXAMPLE USAGE:
```bash
# 1. GET /contacts
curl https://goit-nodejs-hw-02.onrender.com/contacts
# 2. GET /contacts/66eb786fe0118050355c46b6
curl https://goit-nodejs-hw-02.onrender.com/contacts/66eb786fe0118050355c46b6
# 3. GET /contacts/66eb786fe0118050355c46b0 (invalid id)
curl https://goit-nodejs-hw-02.onrender.com/contacts/66eb786fe0118050355c46b0
# 4. GET /contacts/66eb786fe0118050355c46b0 (invalid invalid endpoint)
curl https://goit-nodejs-hw-02.onrender.com/invalidEndPoint 
```
