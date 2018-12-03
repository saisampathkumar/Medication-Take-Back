
module.exports = function (app, db) {
    let product_model = db.model('products');
    //api to retrieve barchart details
    app.get('/reports/barchart',(req,res)=>{
        let name  = req.query.name;
        if(name === "place"){
            var query = [
                { $group:{
                        _id:"$eventAddress",
                        quantity:{$sum:"$quantityCollected"}
                    }
                }
            ];
        }else if(name === "event"){
            var query = [
                { $group:{
                        _id:"$eventName",
                        quantity:{$sum:"$quantityCollected"}
                    }
                }
            ];
        }

        product_model.aggregate(query).exec((err, data) => {
            if (!err) {
                let labels = [];
                let values = [];
                for(let i=0;i<data.length;i++){
                    labels.push(data[i]._id);
                    values.push(data[i].quantity);
                }
                let finaldata = {labels:labels,values:values};
                res.send({
                    result: "Success",
                    data: finaldata
                });
            } else {
                res.status(400).send({
                    result: "Failure",
                    message: "Error in fetching report",
                    error: err.message
                });
            }
        });
    });
    //api to retrieve piechart details
    app.get('/reports/piechart',(req,res)=>{
        let name  = req.query.name;
        if(name === "name"){
            var query = [
                { $group:{
                        _id:"$drugname",
                        quantity:{$sum:1}
                    }
                }
            ];
        }else if(name === "class"){
            var query = [
                { $group:{
                        _id:"$class",
                        quantity:{$sum:1}
                    }
                }
            ];
        }

        product_model.aggregate(query).exec((err, data) => {
            if (!err) {
                let labels = [];
                let values = [];
                for(let i=0;i<data.length;i++){
                    labels.push(data[i]._id);
                    values.push(data[i].quantity);
                }
                let finaldata = {labels:labels,values:values};
                res.send({
                    result: "Success",
                    data: finaldata
                });
            } else {
                res.status(400).send({
                    result: "Failure",
                    message: "Error in fetching report",
                    error: err.message
                });
            }
        });
    });
};