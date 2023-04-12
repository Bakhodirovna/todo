const {pg} = require('../utils/pg');
const pagination = async(req,res) =>{
        try {
         const {list} = req.params;
         const paginationList = await pg(`select * from todo offset $1 limit 10 `, list);
         res.status(200).json({ paginationList });
        } catch (error) {
         console.log(error);
        }
}
const filterByData = async (req, res) =>{
    try {
        const {list} = req.params;
        const {dan, gacha} = req.body;
        const getData = await pg(`select * from todo where todo_created_at between $2 and $3 `, list, dan, gacha);
        res.status(200).json({ getData});
       } catch (error) {
        console.log(error);
       }
}
module.exports = {pagination, filterByData};
