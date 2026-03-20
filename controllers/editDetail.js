import db from "../db.js";

export const editApplicant = async (req, res) => {
  try {

    const applicantId = req.params.applicantId;

    const [basic_data] = await db.query(
      "SELECT * FROM basic_details WHERE applicant_id = ?",
      [applicantId]
    );
    console.log(basic_data);
    
    const [education] = await db.query(
      "SELECT * FROM education_details WHERE applicant_id = ?",
      [applicantId]
    );

    const [work] = await db.query(
      "SELECT * FROM work_experience WHERE applicant_id = ?",
      [applicantId]
    );

    const [languages] = await db.query(
      "SELECT * FROM student_languages WHERE applicant_id = ?",
      [applicantId]
    );

    const [technologies] = await db.query(
      "SELECT * FROM student_technologies WHERE applicant_id = ?",
      [applicantId]
    );
    
    const [reference_contacts] = await db.query("SELECT * FROM reference_contacts WHERE applicant_id = ?",[applicantId]);
    const [preferences] = await db.query("SELECT * FROM preferences WHERE applicant_id = ?",[applicantId])

    const [edDetails] = await db.query("SELECT * FROM education");
    const [techDetails] = await db.query("SELECT * FROM technologies");
    const [langDetails] = await db.query("SELECT * FROM languages");

    res.render("editForm", {
      basic: basic_data[0],
      edu:education,
      work:work,
      lan:languages,
      tec:technologies,
      ref:reference_contacts,
      pref:preferences,
      edDetails:edDetails,
      techDetails:techDetails,
      langDetails:langDetails
    });

  } catch (error) {
    console.log(error);
  }
};