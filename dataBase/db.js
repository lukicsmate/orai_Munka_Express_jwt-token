import mysql from 'mysql2/promise'
import 'dotenv/config'
const conn = {
    host: process.env.DB_HOST ?? "localhost",
    port: Number(process.env.DB_PORT) ?? 3307,
    password: process.env.DB_PASSWORD ?? "",
    user: process.env.DB_USER ?? "root",
    database: process.env.DB_NAME ?? "auth",
    datestring: true
}
const db = mysql.createPool(conn);
export default db;