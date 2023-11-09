const express = require("express");
const app = express();
const port = 3000;

const productsRouter = require("./routes/products.router");
const connect = require("./schemas/index");
connect();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});
//네 아 네!!!! 이해했어요
app.use("/api", productsRouter);

app.listen(port, () => {
  console.log(port, "포트로 서버가 열렸어요!");
});
