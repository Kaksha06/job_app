import db from "../db.js"

const getCities = async (req,res) => {
    const stateId = req.params.stateId;
    const [row] = await db.query(
        `select city_id,city_name from cities where state_id = ?`,[stateId]
    )
    return row;

}
export default getCities;