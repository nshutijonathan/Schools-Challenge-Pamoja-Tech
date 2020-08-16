import express from "express";
import swaggerUI from "swagger-ui-express";
import swaggerJSDoc from "swagger-jsdoc";
import swaggerDocument from "../swagger.json";
import router from "./routes/routes";
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(router);
app.get("/", (req, res) => {
  return res.status(200).send({
    status: 200,
    message: "Welcome",
  });
});
const port = process.env.PORT || 5000;
app.use("/apis-docs", swaggerUI.serve, swaggerUI.setup(swaggerDocument));
app.listen(port, () => console.log("server started"));
export default app;
