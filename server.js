const express = require ('express');
const app = express();
app.use(express.json());

let users = [
    {id: 1, nama: 'adam', email: 'test123@gmail.com'},
    {id: 1, nama: 'adam', email: 'test123@gmail.com'},
    {id: 1, nama: 'adam', email: 'test123@gmail.com'},
    {id: 1, nama: 'adam', email: 'test123@gmail.com'},
    {id: 1, nama: 'adam', email: 'test123@gmail.com'},
];

app.get('/api/users',(req,res)=>{
    res.json(users);
});

const port = process.env.port || 3000;
app.listen(port,()=>{
    console.log(`server berjalan di http://localhost:${port}`)
});