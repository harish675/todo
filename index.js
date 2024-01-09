
const express = require('express');
const app = express();
const port = 8000;


app.get('/', function(req,res){
      
     res.send('<h1>"Well come to homepage"<h1>');
})

app.listen(port , function(err){
    
     if(err){
         console.log("Error in running the server");
     }
     console.log("Server is running on port ",port);
});