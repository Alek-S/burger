CREATE DATABASE burgers_db;

USE burgers_db;


--!!!!IMPORTANT USING SEQUELIZE INSTEAD - SEE config/connection.js
CREATE TABLE burgers (
  id INT  NOT NULL AUTO_INCREMENT,
  burger_name VARCHAR(50) NOT NULL,
  devoured BOOLEAN,
  DATE TIMESTAMP,
  PRIMARY KEY (id)
);