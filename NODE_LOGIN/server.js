const express = require('express');
const app = express()

const PORT = process.env.PORT || 4000; // environment variable

app.get('/', (req, res) => {
    res.render("index");
})

app.get('/users/register')
app.listen(PORT, ()=>{
    console.log(`${PORT}`)
});
