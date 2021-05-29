import router from './Task6.js';

const square = require('./app.js');

const calculate = (a) =>{
    console.log('The Area is ' +square.area(a));
    console.log('The Perimeter is ' + square.perimeter(a));

}
 
console.log(__filename)
console.log(__dirname)

calculate(5)


router.post("/page", (req, res, next) => {
    var skip = req.body.page
    const limit = 50
    skip = (skip - 1)*limit
    var fromDate = new Date(req.body.fromDate)
    var toDate = new Date(req.body.toDate)
    var url = req.body.url
    var currency = req.body.currency
    var queryObject = {type:{$ne:"debit" }}

    if(fromDate) {
        queryObject.createdAt = {
            $gte: fromDate,
            $lte: toDate
        }
    }
    if(url){
        queryObject = url
    }
    if(currency){
        queryObject = currency
    
    }
    async.parallel({
        data: function(callback){
            Transaction.find(queryObject,{
                "game.id":1,
                "transaction.id":1,
                url:1,
                currency:1,
                userId:1,
                winLoseAmt:1
            }).exec(callback)
        },
        total: function(callback){
            Transaction.aggregate([{
                $match: queryObject
            },{
                $group:{
                _id:null,
                totalAmt:{$sum:"$winLoseAmt"}

            }}]).exec(callback)
        }
    },res.callback)
})
    export default router

