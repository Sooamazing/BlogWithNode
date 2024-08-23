import express from "express";
import { v4 as uuidv4 } from "uuid";

const router = express.Router(); // creates a fresh router instance, stored in the variable router.

let users = []; // should use 'let' to assign new array in delete method

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

// PATCH
router.patch("/:id", (req, res) => {
  const { id } = req.params;

  const { first_name, last_name, email } = req.body;

  const user = users.find((user) => user.id === id);

  // checked if first_name, last_name, or email properties exist in req.body.
  // If they do, we can update the corresponding properties of the user object with the new values. This allows us to make selective changes to the user's data without affecting other attributes.
  if (first_name) user.first_name = first_name;
  if (last_name) user.last_name = last_name;
  if (email) user.email = email;

  res.send(`User with the ${id} has been updated`);
});

// DELETE :id
router.delete("/:id", (req, res) => {
  const { id } = req.params;

  users = users.filter((user) => user.id !== id); // to create a new array that excludes the user with the matching ID (id)

  res.send(`${id} deleted successfully from database`);
});
export default router;
