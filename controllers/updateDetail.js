import db from "../db.js";

export const updateData = async (req, res) => {
  try {
    const applicantId = req.params.applicantId;

    const {
      fname,
      lname,
      des,
      email,
      phone,
      gender,
      dob,
      relstatus,
      add1,
      add2,
      city,
      state,
      zip,
    } = req.body;

    //update basic details

    await db.query(
      `update basic_details set first_name=?,last_name=?,designation=?,email=?,contact=?,gender=?,dob=?,relationship=?,address1=?,address2=?,city=?,state=?,zipcode=? where applicant_id=?`,
      [
        fname,
        lname,
        des,
        email,
        phone,
        gender,
        dob,
        relstatus,
        add1,
        add2,
        city,
        state,
        zip,
        applicantId
      ],
    );

    //education
    await db.query(`delete from education_details where applicant_id=?`, [
      applicantId,
    ]);

    for (const edu of req.body.education)
      await db.query(
        `insert into education_details(applicant_id,ed_id,board_name,passing_year,percentage) values (?,?,?,?,?)`,
        [applicantId, edu.ed_id, edu.board_name, edu.pass_year, edu.percent],
      );

    //work experience
    await db.query(`delete from work_experience where applicant_id=?`, [
      applicantId,
    ]);
    for (const w of req.body.work)
      await db.query(
        `insert into work_experience(applicant_id,company_name,designation,from_date,to_date) values (?,?,?,?,?)`,
        [applicantId, w.company_name, w.designation, w.from_date, w.to_date],
      );

    //languages
    await db.query(`delete from student_languages where applicant_id=?`, [
      applicantId,
    ]);
      // console.log(req.body.languages);
    for (const l of req.body.languages)
      await db.query(
        `insert into student_languages(applicant_id,lang_id, can_read, can_write, can_speak) values (?,?,?,?,?)`,
        [
          applicantId,
          l.lang_id,
          l.read ? 1 : 0,
          l.write ? 1 : 0,
          l.speak ? 1 : 0,
        ],
      );
    //technologies
    await db.query(`delete from student_technologies where applicant_id=?`, [
      applicantId,
    ]);
      // console.log(req.body.technologies);
    for (const t of req.body.technologies)
      await db.query(
        `insert into student_technologies (applicant_id,tech_id,is_beginner,is_intermediate,is_expert) VALUES (?,?,?,?,?)`,
        [
          applicantId,
          t.tech_id,
          t.proficiency_level=="beginner" ? 1 : 0,
          t.proficiency_level=="intermediate"  ? 1 : 0,
          t.proficiency_level=="expert"  ? 1 : 0,
        ],
      );
    //references
    await db.query(`delete from reference_contacts where applicant_id=?`, [
      applicantId,
    ]);
    //  console.log(req.body.references);
    await db.query(
      `insert into reference_contacts(applicant_id,ref_name,contact_number,relation) values (?,?,?,?) `,
      [applicantId, req.body.rname, req.body.rphn, req.body.rrel],
    );

    //preferences
    await db.query(`delete from preferences where applicant_id=?`, [
      applicantId,
    ]);
    //  console.log(req.body.preferences);
     await db.query(
      `insert into preferences(applicant_id,preferred_location,notice_period,department,expected_ctc,current_ctc) values (?,?,?,?,?,?) `,
      [
        applicantId,
        req.body.loc,
        req.body.np,
        req.body.dep,
        req.body.ectc,
        req.body.cctc,
      ],
    );
    res.redirect("/display",`${applicantId}`)
  } catch (err) {
    console.error(err);
    res.status(500).send(err.message);
  }
};
