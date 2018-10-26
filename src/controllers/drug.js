
module.exports = function (app, db) {
    let drug_model = db.model('drug');
    let product_model = db.model('products');
    //api to search drug details
    app.get('/drug/search',(req,res)=>{
        let search_text = req.query.searchtext;
        console.log(search_text)
        let query = {};
        query = {name:search_text}
        drug_model.find(query).exec((err, drug) => {
            if (!err) {
                res.send({
                    result: "Success",
                    data: drug
                });
            } else {
                res.status(400).send({
                    result: "Failure",
                    message: "Error in fetching drug list",
                    error: err.message
                });
            }
        });
    });

    //api to create Product details
    app.post('/product/create',(req,res) => {
        let product_info = req.body;
        console.log(product_info)
        console.log("hey", product_info.drugName)
        let product = new product_model({
            drugname: product_info.drugName ,
            drugdescription: product_info.drugDescription,
            class: product_info.classificationClass,
            subclass: product_info.classificationSubclass,
            formofdosage: product_info.dosageForm,
            strength: product_info.strength,
            absorption: product_info.absorption,
            quantityWhenNew: product_info.quantityWhenNew,
            quantityCollected: product_info.quantityCollected,
            eventName: product_info.eventName,
            eventDate: product_info.eventdate,
            eventAddress: product_info.eventaddress,
            eventZipcode: product_info.eventzipccode,
            created_on:new Date(),
            updated_on:new Date()
        });

        product.save((err, prod_res) => {
            if (!err) {
                res.send({
                    result: "Success",
                    message: "Details saved successfully"
                });
            } else {
                res.status(400).send({
                    result: "Failure",
                    message: "Error in creating product",
                    error: err.message
                });
            }
        })
    });
};