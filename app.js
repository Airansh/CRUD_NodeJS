const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json({ extended: true }));

const PORT = 1000;
app.listen(PORT);
console.log('Server is up & running on PORT : ' + PORT);


app.get('/test',(req,res)=>{
    res.status(200).send({name: 'Vedansh', developer : true});
})

//  HTTP METHODS - GET, POST, DELETE, PATCH, PUT
//  HTTP STATUS CODES - 200, 400, 404, 500

// Assume we have to create - patient profile 

// CRUD, Create - POST, Read - GET, Update - PUT/PATCH, Delete - DELETE
// Captial names refer to HTTP Method Types

// Task - Create API's to work with Patient Profile Creation, Updation, Reading & Deleting. Make use of file-system

// Create Patient Profile
app.post('/createPatientProfile', (req,res)=>{
    // Logic to create a patient 
    const patient = req.body;
    console.log(patient);
    // Write this to a file.
    res.status(200).send({success: true})
})

// Update Patient Profile, PUT - Complete Overwrite / Complete Update , PATCH - Partial Update
app.put('/updatePatientProfile', (req,res)=>{
    const updatedPatientData = 
        {
            name : 'Vedansh',
            location : 'Mumbai',
            mobileNumber : '78977',
            emailId : 'test@test.com',
            dob : ''
        }
        res.status(200).send({success: true})
});

// Fetch Patient Profile - Read, GET
app.get('/getPatientProfile',(req,res)=>{

});

// Delete Patient Profile - DELETE
app.delete('/deletePatientProfile',(req,res)=>{

});


// Query, Body, Params

// API Definition
app.get('/test-api-working', (req,res)=>{
    // API Body - Logic
    try{
        
        // Access QueryString Data
        // const queryString = req.query;
        // res.status(200).send(queryString);

        // Access data present in Body
        // const body = req.body;
        // res.status(200).send(body);

        // Access data in URL Params example /test-api-working/:name
        // const params = req.params;
        // res.status(200).send(params);

        const inputData = req.body.name;
        if(inputData){
         res.status(200).send(inputData);
        }
        else {
           res.status(400).send('MissingMandatoryFieldsException')
        }
    }
    catch(e){
        const errorMessage = e && e.message ? e.message : e;
        res.status(500).send(errorMessage);
    
}
})

// Compile Run Time
// Run time
