import db from "../db.js";
const insertData = async (req, res) => {
  const {
    fname,
    lname,
    des,
    add1,
    email,
    add2,
    phone,
    city,
    state,
    zip,
    relstatus,
    gender = gender === "Male" ? "M" : "F",
    dob,
  } = req.body;

  let conn;

  try {
    conn = await db.getConnection();
    await conn.beginTransaction();
    const query = `INSERT INTO basic_details(first_name,last_name,designation,email,contact,gender,dob,relationship,address1,address2,city,state,zipcode) values (?,?,?,?,?,?,?,?,?,?,?,?,?)`;

    console.log(req.body);
    const [result] = await db.query(query, [
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
    ]);

    const applicantId = result.insertId;

    //education
    console.log(req.body.education);

    for (const edu of req.body.education)
      await conn.query(
        `insert into education_details(applicant_id,ed_id,board_name,passing_year,percentage) values (?,?,?,?,?)`,
        [applicantId, edu.ed_id, edu.board_name, edu.pass_year, edu.percent],
      );

    //work expirience
    console.log(req.body.work);
    for (const w of req.body.work)
      await conn.query(
        `insert into work_expirience(applicant_id,company_name,designation,from_date,to_date) values (?,?,?,?,?)`,
        [applicantId, w.company_name, w.from_date, w.to_date],
      );

    //languages
      console.log(req.body.languages);
      for(const l of req.body.languages)
        await conn.query(
      `insert into student_languages(applicant_id, can_read, can_write, can_speak) values (?,?,?,?)`,
      [
        applicantId,
        l.lang_id,
        l.can_read ? 1:0,
        l.can_write ? 1:0,
        l.can_speak ? 1:0,
      ]
      );

      //technologies
      console.log(req.body.technologies);
      for(const t of req.body.technologies)
        await conn.query(
          `insert into student_technologies (applicant_id,tech_id,is_beginner,is_intermediate,is_expert) VALUES ?`,
          [
            applicantId,
            t.tech_id,
            t.is_beginner ? 1 : 0,
            t.is_intermediate ? 1 : 0,
            t.is_expert ? 1 : 0,
          ]
        );
      
        //references
        await conn.query(
          `insert into references(applicant_id,ref_name,contact_number,relation) values ? `,
          [
            applicantId,
            req.body.rname,
            req.body.rphn,
            req.body.rrel
          ]
        );

        //preferences
        await conn.query(
          `insert into references(applicant_id,preferred_location,notice_period,department,expecred_ctc,current_ctc) values ? `,
          [
            applicantId,
            req.body.loc,
            req.body.np,
            req.body.dep,
            req.body.ectc,
            req.body.cctc
          ]
        );
    await conn.commit();

    res.send("Application saved");
  } catch (err) {
    if (conn) await conn.rollback();

    // console.log(err);
    console.error(err);
    res.status(500).send(err.message);
  } finally {
    if (conn) conn.release();
  }
};
export default insertData;
