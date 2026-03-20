import db from "../db.js";

const deleteDetail = async (req,res) => {
    try {
        const applicantId = req.params.applicantId
        const deleteQuery = `delete from basic_details where applicant_id=?`
        const deleteData = await db.query(deleteQuery,[
            applicantId
        ]);
        res.redirect("/")
    } catch (error) {
        console.error(error);
    }
}
export default deleteDetail;