const express = require("express");
const app = express();
const { createServer } = require("http");
const cors = require("cors");
const mongoose = require("mongoose");
const { Server } = require('socket.io');
const { Certificate } = require("crypto");
const { stringify } = require("querystring");
const bodyParser = require('body-parser');
app.use(bodyParser.json()); 

const server = createServer(app);
const io = new Server(4000, {
  cors: [{ origin: "http://localhost:3000", methods: ["GET", "POST"] }],
});

// Connect to MongoDB (replace with your connection string from a secure source)
mongoose.connect("mongodb+srv://hari:hari@edu-data-db.69ed6hw.mongodb.net/?retryWrites=true&w=majority&appName=edu-data-db")
  .then(() => {
    console.log("Connected Successfully");
  })
  .catch((err) => {
    console.error("Error:", err);
  });

app.use(cors());
app.use(express.json()); // Parse incoming JSON data

const UserDetails = new mongoose.Schema({
  Firstname: {
    type: String,
    required: true,
  },
  Lastname: {
    type: String,
    required: true,
  },
});

const collections = mongoose.model("UserDetails", UserDetails);

app.post("/postdata", async (req, res) => {
  try {
    const { Firstname, Lastname } = req.body; 
    console.log(Firstname);
    console.log(Lastname);
    if (!Firstname || !Lastname) {
      return res.status(400).json({ error: "Firstname and Lastname are required" });
    }

    const newUser = new collections({ Firstname, Lastname });
    await newUser.save();
    res.status(201).json(newUser);
  } catch (err) {
    console.error("Error saving user:", err);
    res.status(500).json({ error: "Internal Server Error" }); // More specific error handling
  }
});

const UserData = new mongoose.Schema({
    Firstname: {
      type: String,
      required: true,
    },
    Lastname: {
      type: String,
      required: true,
    },
    Age : {
        type : String,
        require : true,
    },
    Email : {
        type : String,
        require : true,
    },
    Password : {
        type : String, 
        require : true,
    }, 
    EducationStatus : {
        type: String, 
        require : true,
    }, 
    Gender : {
        type : String,
        require : true,
    },
    Nationality : {
        type : String,
        require : true,
    },
    Aadhar : {
        type : String, 
        require : true,
    },
    Certificate : {
        type : String,
        require : true,
    }
  });

  var UserDataCollection = mongoose.model("UserData",UserData);

app.get("/storedata", async (req, res) => {
    try {
        // var {firstname, lastname, age, email, password, educationStatus, gender, Nationality, aadhar, certificate} = req.body;
        var firstname = req.query.firstname;
        var lastname = req.query.lastname;
        var age = req.query.age;
        var email = req.query.email;
        var password = req.query.password;
        var educationStatus = req.query.education;
        var gender = req.query.gender;
        var Nationality = req.query.Nationality;
        var aadhar = req.query.aadhar;
        var Certificate = req.query.Certificate;
        console.log(firstname);
        console.log(Certificate);
        var userDetails = new UserDataCollection( {Firstname : firstname,Lastname :  lastname,Age : age,Email : email,Password:  password,EducationStatus :  educationStatus,Gender :  gender,Nationality :  Nationality,Aadhar : aadhar,Certificate : Certificate} );
        await userDetails.save();
        res.status(201).json(userDetails);
    }catch(err) {
        console.error("Error saving user:", err);
        res.status(500).json({ error: "Internal Server Error" }); 
    }
});

app.get("/login", async (req, res) => {
    try{
        var username = req.query.username;
        var password = req.query.password;
        var result = await UserDataCollection.findOne({ Email : username,Password :  password });
        if(result){
            console.log(result.Firstname);
            console.log(result.Lastname);
            res.json({success : true, firstname : result.Firstname, lastname : result.Lastname});
        }else{
            res.json({success : false});
        }
    }catch(err){
        console.log(err);
    }
})


app.listen(3001, () => {
  console.log("Server is listening");
});
