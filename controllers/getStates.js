import db from "../db.js"

const getStates = async (req,res) => {
    const countryId = req.params.countryId;
    const [row] = await db.query(
        `select state_id,state_name from states where country_id= ?`,[countryId]
    )
    res.send(row);
}
export default getStates