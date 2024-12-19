// CREATE DATABASE practica_db;

// CREATE TABLE estudiantes (
//     //     id SERIAL PRIMARY KEY,
//     //     nombres VARCHAR(50) NOT NULL,
//     //     apellidos VARCHAR(50) NOT NULL, 
//     //     n_identificacion INT NOT NULL.}
//     //     edad numeric
//     // );

// INSERT INTO Estudiantes (nombres, apellidos, n_identificacion, edad)
// VALUES
//     ('jorge', 'Contreras', 134534562, 18),
//     ('Maria', 'Dugarte', 736534562, 21),
//     ('Pedro', 'Valera', 52453462, 26),
//     ('Juan', 'Valenzuela', 854534562, 22),
//     ('Gerardo', 'Camacho', 524534562, 42),
//     ('Valentina', 'Vielma', 452114874, 26),
//     ('Cristina', 'De Jesus', 528934562, 28),
//     ('Betis', 'Camargo', 52434562, 32),
//     ('Lisbeth', 'Gutierrez', 15234554, 27),
//     ('Alfredo', 'Camacaro', 45212547, 39);

// / CREATE TABLE cursos (
//     id SERIAL PRIMARY KEY,
//     titulo VARCHAR(50) NOT null,
//     descripcion VARCHAR(200) NOT NULL
// );

// INSERT INTO cursos (titulo, descripcion) VALUES
//     ('Progamacion 1', 'Descipcion de programcion 1'),
//     ('Progamacion 2', 'Descipcion de programcion 2'),
//     ('Progamacion 3', 'Descipcion de programcion 3'),
//     ('Base de datos 1', 'Descipcion de bases de datos 1'),
//     ('Base de datos 2', 'Descipcion de bases de datos 2'),
//     ('Base de datos 3', 'Descipcion de bases de datos 3'),
//     ('Bootcamp IA', 'Descipcion de bootcamp IA');

const { Pool } = require('pg')
require('dotenv').config()

const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
});

pool.query('SELECT * FROM Estudiantes WHERE edad < 25', (err, res) => {
    if (err) {
        console.error('error en la consulta:', err.message)
    } else {
        console.log('Resultado usando Callback:', res.rows)
    }
})

pool.query('SELECT * FROM Estudiantes ORDER BY apellidos DESC', (err, res) => {
    if (err) {
        console.error('error en la consulta:', err.message)
    } else {
        console.log('Resultado usando Callback:', res.rows)
    }
})

pool.query('SELECT * FROM cursos', (err, res) => {
    if (err) {
        console.error('error en la consulta:', err.message)
    } else {
        console.log('Resultado usando Callback:', res.rows)
    }
})