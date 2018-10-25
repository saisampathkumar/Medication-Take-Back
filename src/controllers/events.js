
module.exports = function (app, db) {
    let events_model = db.model('events');
    //api to search events details
    app.get('/events/search',(req,res)=>{
        let search_text = req.query.searchtext;
        let search_by = req.query.searchby;
        let query = {};
        query[search_by] = { $regex: search_text, $options: 'i' };
        events_model.find(query).exec((err, events) => {
            if (!err) {
                res.send({
                    result: "Success",
                    data: events
                });
            } else {
                res.status(400).send({
                    result: "Failure",
                    message: "Error in fetching events list",
                    error: err.message
                });
            }
        });
    });
    //api to create event details
    app.post('/product/create',(req,res) => {
        let events_info = req.body;
        let events = new events_model({
            created_on:new Date(),
            updated_on:new Date()
        });
        events.save((err, events_res) => {
            if (!err) {
                res.send({
                    result: "Success",
                    message: "Details saved successfully"
                });
            } else {
                res.status(400).send({
                    result: "Failure",
                    message: "Error in creating event",
                    error: err.message
                });
            }
        })
    });
};