import db from "../db.js"

const getCountries = async (req,res) => {
    const [row] = await db.query(
        `select country_id,country_name from countries`
    )
    return row;
   
}
export default getCountries