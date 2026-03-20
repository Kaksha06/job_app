import db from "../db.js";

const readDetails = async (req, res) => {
//   let conn;
  try {
    const applicantId = req.params.applicantId;
    console.log(applicantId);
    // conn = await db.getConnection();
    // await conn.beginTransaction();

    //basic
    const basicQuery = `select * from basic_details where applicant_id = ?`;
    const [basicDetails] = await db.query(basicQuery, [applicantId]);
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
    const [eduDetails] = await db.query(educationQuery, [applicantId]);
    // console.log(eduDetails[0]);

    //languages
    const langQuery = `select l.student_lang_id,l.applicant_id,l.can_read,l.can_write,l.can_speak,lang.lang_id
    from student_languages l
    join languages lang
    on l.lang_id = lang.lang_id
    where l.applicant_id = ? `
const [langDetails] = await db.query(langQuery, [applicantId]);
    // console.log(langDetails[0]);

    //work expirience
    const workQuery = `select work_id,applicant_id,company_name,designation,from_date,to_date from work_experience where applicant_id=?`
    const [workDetails] = await db.query(workQuery,[applicantId])
    // console.log(workDetails[0]);

    //technologies
    const techQuery = `select t.student_tech_id,t.applicant_id,tech.tech_name,t.is_beginner,t.is_intermediate,t.is_expert from student_technologies t join technologies tech on t.tech_id = tech.tech_id where t.applicant_id=?`
    const [techDetails] = await db.query(techQuery,[applicantId])
    // console.log(techDetails[0]);

    //references
    const refQuery = `select ref_id,applicant_id,ref_name,contact_number,relation from reference_contacts where applicant_id=?`
    const [refDeails] = await db.query(refQuery,[applicantId])
    // console.log(refDeails[0]);

    //preferences
    const prefQuery = `select pref_id,applicant_id,preferred_location,notice_period,department,expected_ctc,current_ctc from preferences where applicant_id=?`
    const [prefDetails] = await db.query(prefQuery,[applicantId])
    // console.log(prefDetails[0]);
    
    res.render("readDetails",{
        basic:basicDetails[0],
        edu:eduDetails[0],
        lan:langDetails[0],
        work:workDetails[0],
        tec:techDetails[0],
        ref:refDeails[0],
        pref:prefDetails[0]
    })
  } catch (err) {
    console.error(err);
    res.status(500).send(err.message);
  }
};
export default readDetails;
