//promise allows you to use a sink ans a weight 
import mysql from 'mysql2/promise';
import {config} from 'dotenv';
config();

// promise to get connection from pool
const pool = mysql.createPool({
    hostname:process.env.HOSTNAME,
    user:process.env.USER,
    password:process.env.PASSWORD,
    database:process.env.DATABASE

});

const getUsers = async() => {
    let data = await pool.query('SELECT * FROM users')
    return data;
};

console.log(await getUsers());

const getProducts = async() => {
    let data = await pool.query('SELECT * FROM products')
    return data;
};

console.log(await getProducts());

//delete a product
const delProducts = async() => {
    let data = await pool.query('DELETE FROM products WHERE id = baro')
    return data;
}
//inert your favourite food
const addProducts = async() => {
    let data = await pool.query('INSERT INTO products (product_code,product_name, product_price,product_quantity) VALUES (?,?,?,?)', ['soda1','Fanta', 20, 100])
    return data;
}

console.log(await addProducts());

const updateProducts = async() => {
    let data = await pool.query('UPDATE products SET product_name = ? WHERE product_code = soda1', ['Coke'])
    return data;
}
