const express = require('express');

const app = express();
const userData = require('./userdata');
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/create', async (req, res) => {
   const data= await userData.create({
        name:"adarsh",
        username:"adash34",
        email: "adarsh9670tiwari@gamil.com",
        age: 20
    })
    res.send(data);

  });
// app.get('/create', async (req, res) => {
//     const data= await userData.create({
//          name:"amit",
//          username:"amit34",
//          email: "amit45@gamil.com",
//          age: 21
//      })
//      res.send(data);
 
//    });



app.get('/update',async (req, res) => {
    let updateData= await userData.findOneAndUpdate({age:20},{age:19})
    res.send(updateData);
   
  });


app.get('/read', async (req, res) => {

   let user= await userData.find({name:"adarsh tiwari"})
    res.send(user);
  });


app.get('/delete', async (req, res) => {
    let userr=await userData.findOneAndDelete({age:19});
    res.send(`user of age ${userr
        .age} is deleted`);
    
   
  });


app.listen(3000)