CREATE TABLE usuario (
 id SERIAL CONSTRAINT pk_id_usuario PRIMARY KEY,
 nome varchar(150) NOT NULL, 
 idade integer NOT NULL,
 estado varchar(30) NOT NULL,
 cidade varchar(50) NOT NULL
);