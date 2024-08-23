import express from "express";
import bodyParser from "body-parser"; // The bodyParser comes with Express, and it allows us to take in the incoming POST request body.
import userRoutes from "./routes/users.js";

const app = express(); // we created an app using the express object.
const PORT = 5000;

app.use(bodyParser.json()); // TODO json 말고 다른 건 뭐?
app.use("/users", userRoutes);

// GET
app.get("/", (req, res) => {
  // path, callback function
  // req can contain the request query string, parameters, body, and HTTP headers.
  console.log("[GET ROUTE]");
  res.send("HELLO FROM HOMEPAGE");
});
// 여기서, get 추가 전의 코드에서 get 추가 후 저장, 브라우저 새로 고침하면 왜 이 코드는 반영이 안 되는 걸까? 프론트에서는 바로 변경됐는데! 서버라는 것의 특성인가? 그렇다면, 왜? (터미널 종료 후, 다시 run해야 get 출력됨.) ->  Node.js 서버가 파일의 변경을 자동으로 감지하지 않기 때문입니다. 즉, 코드를 수정한 후 서버를 재시작해야만 새로운 코드가 반영됨. 이는 서버가 메모리에 로드된 상태로 계속 실행되기 때문에, 변경된 파일을 다시 로드하지 않는 것이 원인입니다. 프론트엔드 코드에서는 브라우저가 페이지를 새로고침하면 변경된 HTML, CSS, JavaScript 파일을 자동으로 로드하지만, 서버는 실행 중인 동안에는 코드 변경 사항을 자동으로 반영하지 않습니다. nodemon으로 해결 가능.
// app.get("/", (req, res)); // ReferenceError 발생
// ReferenceError: req is not defined -> 콜백 함수를 제공해 req를 처리하고, res를 반환해야 함. -> TODO 왜 req is noe defined라고 설명할까? 콜백 함수를 제공하라는 게 아니라?

app.listen(PORT, () =>
  console.log(`Server running on port: http://localhost:${PORT}`)
); // Once that was created, we used the listen method on the app to make our application listen for incoming requests.
// The method accepts two things: the PORT, which is where we would be listening for requests from our client side, and a callback function that will be triggered when our server is set up.
// then, on terminal, start the server by running this command(node index.js).

// 참고: https://www.freecodecamp.org/news/create-crud-api-project/
