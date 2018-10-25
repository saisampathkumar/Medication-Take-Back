
module.exports = function (app, db) {
    let users_model = db.model('users');
    //api to search user details
    app.get('/users/search',(req,res)=>{
        let search_text = req.query.searchtext;
        let search_by = req.query.searchby;
        let query = {};
        query[search_by] = { $regex: search_text, $options: 'i' };
        users_model.find(query).exec((err, users) => {
            if (!err) {
                res.send({
                    result: "Success",
                    data: users
                });
            } else {
                res.status(400).send({
                    result: "Failure",
                    message: "Error in fetching users list",
                    error: err.message
                });
            }
        });
    });
    //api to create user details
    app.post('/product/create',(req,res) => {
        let users_info = req.body;
        let users = new users_model({
            created_on:new Date(),
            updated_on:new Date()
        });
        users.save((err, users_res) => {
            if (!err) {
                res.send({
                    result: "Success",
                    message: "Details saved successfully"
                });
            } else {
                res.status(400).send({
                    result: "Failure",
                    message: "Error in creating user",
                    error: err.message
                });
            }
        })
    });
};