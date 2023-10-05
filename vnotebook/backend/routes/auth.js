const express = require('express');
const router = express.Router();
const User = require('../models/User');
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
var fetchuser = require('../middleware/fetchuser');

const JWT_SEC = 'reactprojects$@48';

// ROUTE 1: create a user using : POST "/api/auth/createuser" . No login required
router.post('/createuser', [
  body("name", 'Enter a valid name').isLength({min : 3}),
  body("email", 'Enter a valid email').isEmail(),
  body("password", 'password must be atleast 5 characters').isLength({min : 5}),
], async (req, res)=>{
  // If there are errors, return bad request and errors
  const errors = validationResult(req);
  if(!errors.isEmpty()) {
    return res.status(400).json({ errors : errors.array() })
  }
// check whether the user with this email exists already
    try {
      
      let user = await User.findOne({email: req.body.email});
      if(user){
        return res.status(400).json({error: "sorry user with this email already exists"})
      }
      const salt = await bcrypt.genSalt(10);
      const secPass = await bcrypt.hash(req.body.password, salt)
      // create a new user
      user = await User.create({
      name: req.body.name,
      email: req.body.email,
      password: secPass,
    });
    const data = {
      user:{
        id: user.id
      }
    }
    const authToken = jwt.sign(data, JWT_SEC);
    res.json({authToken})
    } 
  catch (error) {
      console.error(error.message);
      res.status(400).send("Internal Server Error");
  }
})


// ROUTE 2: Authenticate a user using : POST "/api/auth/login" . No login required
router.post('/login', [
  body("email", 'Enter a valid email').isEmail(),
  body("password", 'password cannot be blank').exists(),
], async (req, res)=>{
  // If there are errors, return bad request and errors
  const errors = validationResult(req);
  if(!errors.isEmpty()) {
    return res.status(400).json({ errors : errors.array() })
  }
  const {email, password} = req.body;
  try {
    let user = await User.findOne({email});
    if(!user){
      return res.status(400).json({error: "please try to login with correct credentials"});
    }
    const passwordCompare = await bcrypt.compare(password, user.password);
    if(!passwordCompare){
      return res.status(400).json({error: "please try to login with correct credentials"});
    }
    const data = {
      user:{
        id: user.id
      }
    }
    const authToken = jwt.sign(data, JWT_SEC);
    res.json({authToken})
  } catch (error) {
    console.error(error.message);
    res.status(400).send("Internal Server Error");
  }
})


// ROUTE 3: Get loggedin user details using : POST "/api/auth/getuser" . Login required
router.post('/getuser', fetchuser, async (req, res)=>{
  try {
    let userID = req.user.id;
    const user = await User.findById(userID).select("-password");
    res.send(user)
  } catch (error) {
    console.error(error.message);
    res.status(400).send("Internal Server Error");
  }
})

module.exports = router