import express from "express";
import bodyParser from "body-parser"; // The bodyParser comes with Express, and it allows us to take in the incoming POST request body.

const app = express(); // we created an app using the express object.
const PORT = 5000;

app.use(bodyParser.json()); // TODO json 말고 다른 건 뭐?

app.listen(PORT, () =>
  console.log(`Server running on port: http://localhost:${PORT}`)
); // Once that was created, we used the listen method on the app to make our application listen for incoming requests.
// The method accepts two things: the PORT, which is where we would be listening for requests from our client side, and a callback function that will be triggered when our server is set up.
// then, on terminal, start the server by running this command(node index.js).

// 참고: https://www.freecodecamp.org/news/create-crud-api-project/
