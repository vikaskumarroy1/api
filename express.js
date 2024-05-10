const express = require('express');
const axios = require('axios');

const app = express();



app.get("/get-user", async (req, res) => {
    try {
        
        const response = await axios.get('https://official-joke-api.appspot.com/random_joke');
        const joke = response.data;
        
        res.json(joke);
    } catch (error) {
        console.log(error);
        
    }
});


app.listen(8080, () => {
    console.log("server is running")
});
