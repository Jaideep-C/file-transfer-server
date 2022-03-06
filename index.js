const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const fileRoutes = require("./routes/file_route");
const upload = require("./util/multer");

async function serverStart() {
  const app = express();
  const port = 3000;

  app.use(bodyParser.json());
  app.use(cors());
  app.use("/file", upload.single("fileData"), fileRoutes);

  app.get("/", (req, res) => res.json("alpha"));

  app.listen(port);
}
serverStart();
