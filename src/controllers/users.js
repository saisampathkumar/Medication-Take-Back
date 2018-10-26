
module.exports = function (app, db) {
    let users_model = db.model('users');
    let users_seq_model = db.model('users_seq');
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
    app.post('/users/create',(req,res) => {
        let users_info = req.body;
        let users = new users_model({
            user_id:getNextSequenceValue("userid"),
            email_id:users_info.email,
            first_name:users_info.firstName,
            last_name:users_info.lastName,
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
    function getNextSequenceValue(sequenceName){
        users_seq_model.findOneAndUpdate({ _id : sequenceName },{$inc:{sequence_value:1}},{new:true,useFindAndModify:false},(err,item) => {
                if(err) throw err;
                console.log(item);
                if(item){
                    let seq = new users_seq_model({_id:"userid",sequence_value:1});
                    seq.save((err,obj)=>{
                        if(err) throw err;
                        console.log('obj',obj);
                        return obj;
                    })
                }else{
                    return item;
                }
            });
    }
};