import db from "../db.js"


const getTechnologyType = async (req,res) => {
    const[row] = await db.query(
        `select * from technologies`
    )
    console.log(row);
    
    return row
}
export default getTechnologyType