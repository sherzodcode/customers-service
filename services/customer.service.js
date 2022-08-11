import { client } from "../configs/database.js";

export function allCustomers(){
    const getAll = `SELECT * FROM customers;`
    return client.query(getAll)
}


export function findCostumer(id){
    const getOne = ` SELECT * FROM customers Where id = $1;`

    return client.query(getOne, [id])
}


export function findCostumerByName(name){
    const getOne = ` SELECT * FROM customers WHERE name = $1;`

    return client.query(getOne, [name])
}


export function updateCustomer( city, id){

    
    const updateCustomer = `
    UPDATE customers
    SET  city = $1 WHERE id = $2; 
    `

    client.query(updateCustomer,[city,id])
}


export function addCustomer(ust_code, name, city, working_area, country, grade, opening_amt, receive_amt, payment_amt, outstanding_amt,phone){
    
    const addCustomer = `   INSERT INTO customers(ust_code, name, city, working_area, country, grade, opening_amt, receive_amt, payment_amt, outstanding_amt,phone)
    VALUES($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11);
    `
    client.query(addCustomer,[ust_code, name, city, working_area, country, grade, opening_amt, receive_amt, payment_amt, outstanding_amt,phone])
}