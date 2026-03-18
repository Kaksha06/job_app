import db from "../db.js"


const getTechnologyType = async (req,res) => {
    const[row] = await db.query(
        `select * from technologies`
    )
    return row
}
export default getTechnologyType