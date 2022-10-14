const express =reqire("express")
const mysql = reqire("mysql")

const app = express();
app.use(express.json());

const db = mysql.createConnetion({
    user: "root",
    host: "localhost",
    password: "password",
    database:"LoginSystem",
});

app.listen(3001, ()=>{
    console.log("running server")
})