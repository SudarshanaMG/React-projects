const express = require('express');
const router = express.Router();
const User = require('../models/User');
const { body, validationResult } = require('express-validator');

// Create a User using: POST "/api/auth/". Doesn't require Auth
router.post('/',[
    body('name','enter a valid name').isLength({ min: 3 }),
    body('email','enter a valid email').isEmail(),
    body('password','enter a valid password of length greater than 5').isLength({ min: 5 }),
], (req, res)=>{
    const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({errors: errors.array() })
  }
//   res.send(req.body);
  User.create({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  }).then(user => res.json(user))
  .catch(err => {console.log(err)
    res.json({error:"please enter unique value for email",message: err.message})})
})
module.exports = router