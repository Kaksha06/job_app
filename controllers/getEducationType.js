import db from "../db.js"


const getEducationType = async (req,res) => {
    const[row] = await db.query(
        `select ed_id,ed_name from education`
    )    
    return row
}
export default getEducationType
