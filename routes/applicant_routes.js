import express from "express";
import insertData from "../controllers/insertDetail.js";
import getEducationType from "../controllers/getEducationType.js";
import getLanguageType from "../controllers/getLanguageType.js";
import getTechnologyType from "../controllers/getTechnologyType.js";

const router = express.Router();
router.get("/", async (req, res) => {
  const edDetails = await getEducationType();
  // console.log(edDetails);
  const languages = await getLanguageType();
  const [technologies] = await getTechnologyType();
  console.log(technologies);
  
  res.render(
    "jobForm",
    {
      edDetails,
      languages,
      technologies
    },
    // {
    //   async: true,
    // },
  );
});
router.post("/insert", insertData);

export default router;
