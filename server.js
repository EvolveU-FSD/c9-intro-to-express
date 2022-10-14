const express = require("express");

const app = express();
const PORT = 4000;
app.use(express.json());

app.post("/hello", (request, response) => {
  console.log(request.body);

  response.send(request.body);
});

app.get("/forest", (request, response) => {
  console.log("request is", request);
  console.log("query is", request.query);

  let daylight = request.query.daylight;

  if (daylight === "true") {
    response.send("You are in a deep, decently lit wood...");
  } else {
    response.send("You are in a deep, dark wood...");
  }
});

app.get("/hello", (request, response) => {
  console.log("reached this endpoint");
  const messageJSON = { message: "Hello World!" };
  response.json(messageJSON);
});
app.get("/currentDate", function (request, response) {
  // response.send(new Date());
  let currentDate = new Date().toLocaleDateString("en-us", {
    month: "long",
    day: "2-digit",
    year: "numeric",
    weekday: "long",
    hour: "2-digit",
    hour12: true,
    second: "2-digit",
    minute: "2-digit",
  });
  response.send(currentDate);
});
app.listen(PORT, function () {
  console.log(`Listening on port ${PORT}`);
});
