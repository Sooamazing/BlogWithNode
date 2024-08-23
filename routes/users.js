import express from "express";
import { v4 as uuidv4 } from "uuid";

const router = express.Router(); // creates a fresh router instance, stored in the variable router.

const users = [];

// GET
router.get("/", (req, res) => {
  // It gets executed when a request is made to the GET route.
  res.send(users); // to send a response back to the client
}); // sets up a route that responds to HTTP GET requests.
// when a user hits the GET URL, the server responds by sending the data inside the users variable in JSON format to the client.

// GET :id
// if not exist, just nothing.
router.get("/:id", (req, res) => {
  const { id } = req.params; // query string

  const foundUser = users.find((user) => user.id === id);

  res.send(foundUser);
});

// POST
// sets up a route that responds to HTTP POST requests
router.post("/", (req, res) => {
  const user = req.body;

  users.push({ ...user, id: uuidv4() });

  res.send(`${user.first_name} has been added to the Database`);
});

export default router;
