const mysql = require('mysql2/promise')

export async function getConnection() {
    return mysql.createConnection({
        host: '',
        port: "",
        user: '',
        password: '',
        database: ''
    });
}