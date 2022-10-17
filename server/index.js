const express = require('express')
const mysql = require('mysql')
const cors = require('cors');


const app = express()
app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "root",
    database: "loginsystem"
    
});

app.post("/register", (req, res) => {

    const name = req.body.name;
    const password = req.body.password;

    db.query(
        "INSERT INTO users (name, password) VALUES (?,?)",
        [name, password],
        (err, result) => {
            console.log(err)
            
            
        })
})

app.post("/login", (req, res) =>{
    const name = req.body.name;
    const password = req.body.password;

    db.query(
        "SELECT * FROM users WHERE name = ? AND password = ?",
        [name, password],
        (err, result) =>{
            if(err){
                res.send({err: err})
            } 
                if(result.lenght > 0){
                    res.send(result)
                }else{
                    res.send({message : "Wrong username/password combination"});
                }
        }
    );
})

app.listen(3001, () => {
    console.log("Bruder es läuft")
});