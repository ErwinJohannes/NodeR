const express = require('express');
const Sequelize = require('sequelize');
const app = express();


app.use(expess.json());

const dbUrl = ' https://node58996-ball-comeback.proen.app.ruk-com.cloud'

const sequelize  = new Sequelize(dbUrl);