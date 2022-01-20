const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const fs = require("fs");
const { resolve } = require("path");

app.use(bodyParser.json({ extended: true }));

const PORT = 1002;
app.listen(PORT);
console.log("Server is up & running on PORT: " + PORT);
let mydata = "";

//GET
app.get("/readData", (req, res) => {
  fs.readFile("mytest.json", (err, data) => {
    mydata = JSON.parse(data);
    res.status(200).send({ mydata, getRequest: "success" });
    console.log(mydata);
  });
});

//POST
app.post("/changeData", (req, res) => {
  //    let newName = req.query.name;
  //    let newAge = req.query.age;
  //    let newDob = req.query.dob;
  //    let newEmail = req.query.email;

  // http://localhost:1002/changeData/?name=Veer&age=23&dob=22/03/1999&email=vedairen@gmail.com
  let newData = {
    name: req.query.name,
    age: req.query.age,
    dob: req.query.dob,
    email: req.query.email,
  };
  console.log(newData);

  fs.writeFile("mytest.json", JSON.stringify(newData), (err) => {
    console.log("Error: " + err);
  });

  res.status(200).send({ type: "post", success: true });
});

//PUT
app.put("/updateData", (req, res) => {
  // http://localhost:1002/updateData/?name=Vansh&age=15&email=vansh@abcd.com&dob=29-10-2006
  let newData = {
    name: req.query.name,
    age: req.query.age,
    dob: req.query.dob,
    email: req.query.email,
  };

  let mydata = fs.readFileSync('mytest.json');
  let myObject = JSON.parse(mydata);

  console.log(newData);
  myObject.users.push(newData);

  fs.writeFile("mytest.json", JSON.stringify(myObject), (err) => {
    console.log("Error: " + err);
  });

  res.status(200).send({ type: "post", success: true });
});

//DELETE
app.delete("/deleteData", (req, res) => {
  // http://localhost:1002/deleteData
  console.log("Deleted method called");
  fs.unlink("mytest-del.json", (err) => {
    res.send("File deleted successfully");
    console.log("Error: " + err);
  });
});

//PATCH (Update Data)
app.patch("/updateData/:name",(req,res,next)=>{
    const myName = req.params.name;
    // const replaceEmail = req.body;

    readMyFile().then(data=>{
      console.log(data);
      res.status(200).send(data);
    })
    .catch(error=>{
      throw error;
    });


})

function readMyFile(){
  return new Promise((resolve,reject) => {
    fs.readFile("mytest.json", (err, data) => {
        // const temp = JSON.stringify(data);
        mydata = JSON.parse(data);
        return resolve(mydata);
      })});
}