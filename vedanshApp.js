const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.json({extended: true}));

const PORT = 1001;
app.listen(PORT);
console.log("Server is up & running on PORT: "+PORT);

//GET
app.get("/testApp",(req,res)=>{
    res.status(200).send({
    "PORT": PORT,
    app_name: "vedanshApp",
    developer: "Vedansh Airen"
    
});
})

//POST
app.post("/createList",(req,res)=>{
   res.status(200).send({type: "post", success: true});
})

//PUT
app.put("/updateList",(req,res)=>{
    
    const myname = req.query;
    const updateList = {
        name : myname,
        type : "put",
        success : true
    }    
    console.log(myname);
    res.status(200).send(updateList);
})

//DELETE
app.delete("/deleteData",(req,res)=>{

})


