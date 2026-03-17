import express from "express";
import applicantRoutes from "./routes/applicant_routes.js"
const app = express();
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");

app.use(express.static("public"));
app.use("/",applicantRoutes)
// app.use("/combos")
app.listen(3000, () => {
  console.log("Express server running at http://localhost:3000/");
});
