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
import getCountries from "../controllers/getCountries.js";
import getStates from "../controllers/getStates.js";
import getCities from "../controllers/getCities.js";

const router = express.Router();
router.get("/addform", async (req, res) => {
  const edDetails = await getEducationType();
  const languages = await getLanguageType();
  const techDetails = await getTechnologyType();

  const countries = await getCountries();
  console.log(countries);
  
 
  res.render(
    "jobForm",
    {
      edDetails,
      languages,
      techDetails,
      countries,
    },
  );
});  
router.get("/state/:countryId",getStates)
router.get("/city/:stateId",getCities)
router.get("/",displayData);
router.post("/insert", insertData);
router.get("/view/:applicantId", readDetails);
router.get("/delete/:applicantId",deleteDetail);

router.get("/edit/:applicantId",editApplicant)
router.post("/update/:applicantId",updateData)

export default router;
