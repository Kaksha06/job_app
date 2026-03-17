import db from "../db.js"


const getLanguageType = async(req,res)=>{
    const[row] = await db.query(
        `Select lang_id, language_name from languages`
    )
    return row
}
export default getLanguageType