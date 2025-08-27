const express = require('express');
const router = express.Router();


let users = [
  {
    firstName: "John",
    lastName: "wick",
    email: "johnwick@gamil.com",
    DOB: "22-01-1990",
  },
  {
    firstName: "John",
    lastName: "smith",
    email: "johnsmith@gamil.com",
    DOB: "21-07-1983",
  },
  {
    firstName: "Joyal",
    lastName: "white",
    email: "joyalwhite@gamil.com",
    DOB: "21-03-1989",
  },
];

// GET request: Retrieve all users
router.get("/", (req, res) => {
  // Copy the code here
  return res.send(users)//This line is to be replaced with actual return value
});

// GET by specific ID request: Retrieve a single user with email ID
router.get("/:email", (req, res) => {
  // Copy the code here
  return res.send(users.filter(item => item.email === req.params.email))//This line is to be replaced with actual return value
});


// POST request: Create a new user
router.post("/", (req, res) => {
  users.push({ firstName: req.query.firstName, lastName: req.query.lastName, email: req.query.email, DOB: req.query.DOB })
  return res.send("User created!")
});


// PUT request: Update the details of a user by email ID
router.put("/:email", (req, res) => {
  let user = users.find(user => user.email === req.params.email)
  if (user && Object.keys(user).length) {
    user.firstName = req.query.firstName
    user.lastName = req.query.lastName
    user.DOB = req.query.DOB
    return res.send("User updated!")
  }

  return res.send("Couldn't find that user!")
});


// DELETE request: Delete a user by email ID
router.delete("/:email", (req, res) => {
  users = users.filter(item => item.email !== req.params.email)
  return res.send("User deleted!")
});

module.exports = router;
