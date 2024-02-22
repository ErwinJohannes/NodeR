const express = require('express');
const Sequelize = require('sequelize');
const app = express();


app.use(expess.json());

const dbUrl = 'postgres://webadmin:MAIgsf81141@node58996-ball-comeback.proen.app.ruk-com.cloud:11882/Books'

const sequelize  = new Sequelize(dbUrl);