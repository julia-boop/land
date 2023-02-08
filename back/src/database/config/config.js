require('dotenv').config();


module.exports = {
  "development": {
    "username": process.env.DB_USERNAME_DEV,
    "password": process.env.DB_PASSWORD_DEV,
    "database": process.env.DB_DATABASE,
    "port": process.env.DB_PORT_DEV,
    "host": process.env.DB_HOST,
    "dialect": "mysql",
    "timezone": "-03:00"
  },
  "test": {
    "username": process.env.DB_USERNAME,
    "password": process.env.DB_PASSWORD,
    "database": process.env.DB_DATABASE,
    "host": process.env.DB_HOST,
    "port": process.env.DB_PORT_DEV,
    "dialect": "mysql",
    "timezone": "-03:00"
  },
  "production": {
    "username": process.env.DB_USERNAME,
    "password": process.env.DB_PASSWORD,
    "database": process.env.DB_DATABASE,
    "host": process.env.DB_HOST,
    "port": process.env.DB_PORT,
    "dialect": "mysql",
    "timezone": "-03:00"
  }
}