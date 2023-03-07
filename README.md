## Built With
* Node.js
* Nest.js
* MySql
* TypeScript

## Installation

```bash
using SSH:
$ git clone git@github.com:knrbokhari/NestJS_MySQL.git
or using HTTPS:
$ git clone https://github.com/knrbokhari/NestJS_MySQL.git
$ cd NestJS_MySQL
$ npm install
```

## Requirements
For development, you will need Node.js v16+ , MySql installed in your environnement..

## create database and table

Open your terminal and run this code & give your password:

```bash
$ mysql -u root -p
```

create new database:
```bash
$ CREATE DATABASE nestjs;
```

```bash
$ use nestjs;
```

```bash
$ exit;
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```