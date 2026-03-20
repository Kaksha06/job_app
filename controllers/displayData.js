import db from "../db.js";

export const displayData = async (req, res) => {
  const limit = 20;
  const page = parseInt(req.query.page || 1);
  const offset = (page - 1) * limit;
  


  const[countResult] = await db.query(`Select count(*) as total from basic_details`)
  const totalRows = countResult[0].total;
  const totalPages = Math.ceil(totalRows/limit)

  const[rows,fields] = await db.query(`select * from basic_details limit ? offset ?`,[limit,offset])
        res.render("displayDetail", {
          basic_details: rows,
          currentPage: page,
          totalPages: totalPages,
          totalRows: totalRows,
          fields
        });
      }
