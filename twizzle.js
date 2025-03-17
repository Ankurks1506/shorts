const express = require('express');
const fs = require('fs');
const path = require('path');
const multer  = require('multer')


const app = express();

app.use( express.static("public"));
app.use( express.static("uploads"));



const port = 1000;

app.set('view engine', 'ejs');



app.get('/', async (req, res) => {
  res.render("index")
})




app.get('/uploadfile',async(req,res)=>{
  res.render("upload")
})


const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename:(req, file, cb) => {
    // Use the original file name or a custom name
  
    cb(null,Date.now()+" "+file.originalname); 
  },
});

// Create the multer instance
const upload = multer({ storage: storage })

app.post('/upload', upload.array('video'), async(req, res) => {


  res.send(`File uploaded successfully`);
});




app.listen(3000,()=>{console.log("http://localhost:3000")})