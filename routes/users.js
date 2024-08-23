import express from "express";

const router = express.Router(); // creates a fresh router instance, stored in the variable router.

// Mock database
const users = [
  {
    first_name: "John",
    last_name: "Doe",
    email: "johndoe@example.com",
  },
  {
    first_name: "Alice",
    last_name: "Smith",
    email: "alicesmith@example.com",
  },
];

// Getting the list of users from the mock database
router.get("/", (req, res) => {
  // It gets executed when a request is made to the GET route.
  res.send(users); // to send a response back to the client
}); // sets up a route that responds to HTTP GET requests.
// when a user hits the GET URL, the server responds by sending the data inside the users variable in JSON format to the client.

export default router;
