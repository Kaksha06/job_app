import express from "express";
import insertData from "../controllers/insertDetail.js";
import getEducationType from "../controllers/getEducationType.js";
import getLanguageType from "../controllers/getLanguageType.js";
import getTechnologyType from "../controllers/getTechnologyType.js";
import readDetails from "../controllers/readDetail.js";
import deleteDetail from "../controllers/deleteDetail.js";
import {displayData} from "../controllers/displayData.js"
import { updateData } from "../controllers/updateDetail.js";
import { editApplicant } from "../controllers/editDetail.js";

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
      // basicDetails
    },
  );
});  
router.get("/display",displayData);
router.post("/insert", insertData);
router.get("/view/:applicantId", readDetails);
router.post("/delete/:applicantId",deleteDetail);

router.get("/edit/:applicantId",editApplicant)
router.post("/update/:applicantId",updateData)

export default router;
