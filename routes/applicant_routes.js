import express from "express";
import insertData from "../controllers/insertDetail.js";
import getEducationType from "../controllers/getEducationType.js";
import getLanguageType from "../controllers/getLanguageType.js";
import getTechnologyType from "../controllers/getTechnologyType.js";
import readDetails from "../controllers/readDetail.js";

const router = express.Router();
router.get("/", async (req, res) => {
  const edDetails = await getEducationType();
  const languages = await getLanguageType();
  const techDetails = await getTechnologyType();
  res.render(
    "jobForm",
    {
      edDetails,
      languages,
      techDetails,
      viewDetails,
      // basicDetails
    },
  );
});
router.post("/insert", insertData);
router.get("/view/:applicantId", readDetails);

export default router;
