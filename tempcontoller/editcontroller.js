// controllers/editApplicant.js

import db from "../config/db.js";

export const editApplicant = async (req, res) => {
  try {

    const id = req.params.id;

    const [basic] = await db.query(
      "SELECT * FROM applicant_basic_details WHERE applicant_id = ?",
      [id]
    );

    const [education] = await db.query(
      "SELECT * FROM applicant_education WHERE applicant_id = ?",
      [id]
    );

    const [work] = await db.query(
      "SELECT * FROM applicant_work_experience WHERE applicant_id = ?",
      [id]
    );

    const [languages] = await db.query(
      "SELECT * FROM applicant_languages WHERE applicant_id = ?",
      [id]
    );

    const [technologies] = await db.query(
      "SELECT * FROM applicant_technologies WHERE applicant_id = ?",
      [id]
    );

    const [edDetails] = await db.query("SELECT * FROM education_type");
    const [techDetails] = await db.query("SELECT * FROM technologies");
    const [langDetails] = await db.query("SELECT * FROM languages");

    res.render("editForm", {
      basic: basic[0],
      education,
      work,
      languages,
      technologies,
      edDetails,
      techDetails,
      langDetails
    });

  } catch (error) {
    console.log(error);
  }
};