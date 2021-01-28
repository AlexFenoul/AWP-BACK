const auth = require('express').Router();

const register = require('./register');
const login = require('./login');

const RegisterValidation = require.main.require('./app/validation/auth/register');
const LoginValidation = require.main.require('./app/validation/auth/login');


auth.post('/register', RegisterValidation, register);
auth.post('/login', LoginValidation, login);

module.exports = auth;
