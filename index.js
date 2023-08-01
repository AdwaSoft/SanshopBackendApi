import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";

import managmentRoutes from "./routes/managmentRoutes.js";

dotenv.config();
const app = express();
app.use(helmet());
app.use(morgan("common"));
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));

app.use(bodyParser.json({ limit: "50mb" }));
app.use(
  bodyParser.urlencoded({
    limit: "50mb",
    extended: true,
    parameterLimit: 50000,
  })
);
app.use(express.json({ limit: "5mb" }));
app.use(cors());

const PORT = process.env.PORT || 5000;
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`server running on port : ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });

app.use("/managment", managmentRoutes);
