import db from "../db.js";

const readDetails = async (req, res) => {
  let conn;
  try {
    const applicantId = req.params.applicantId;
    console.log(applicantId);
    conn = await db.getConnection();
    await conn.beginTransaction();

    //basic
    const basicQuery = `select * from basic_details where applicant_id = ?`;
    const basicDetails = await db.query(basicQuery, [applicantId]);
    console.log(basicDetails[0]);

    //education
    const educationQuery = `
    SELECT 
        e.education_id,
        e.applicant_id,
        e.board_name,
        e.passing_year,
        e.percentage,
        ed.ed_id,
        ed.ed_name 
    FROM 
        education_details e 
    JOIN 
        education ed 
    ON 
        e.ed_id = ed.ed_id 
    WHERE 
        e.applicant_id = ?`;
    const eduDetails = await db.query(educationQuery, [applicantId]);
    console.log(eduDetails[0]);

    //languages
    const langQuery = `select l.student_lang_id,l.applicant_id,l.can_read,l.can_write,l.can_speak,lang.lang_name
    from student_languages l
    join languages lang
    on l.lang_id = lang.lang_id
    where l.applicant_id = ? `


    res.render("readDetails.ejs",{
        eduDetails,
        basicDetails
    })
  } catch (error) {}
};
export default readDetails;
