const express = require("express");
const app = express();
require("dotenv").config();
const PORT = process.env.PORT || 4000;
const mongoose = require("mongoose");
const taskRouter = require("./router/task");
const cors = require("cors");
//Cross origin resource sharing cors

//MIDDLEWARE
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//ROUTER
app.use("/tasks", taskRouter);

//MONGOOSE CONNECTION
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`app is listening on port ${PORT}`);
    });
  })
  .catch((err) => console.log(err));


app.use((req, res)=>{
  res.send(`Route not found, try '/tasks'`)
})