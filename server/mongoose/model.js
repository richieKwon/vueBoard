const mongoose = require("mongoose")
const schema = require("./schema")
require ('dotenv').config()

const db = mongoose.connection
const model = (() => {
    db.on("error", console.error)
    db.on("open", () => { console.log("connected") })

    mongoose.connect(`mongodb+srv://${process.env.DB_ID}:${process.env.DB_PASSWORD}@vueboard.gctvi.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`,
    {useNewUrlParser: true, useUnifiedTopology : true })


const model = {};

for (let key in schema){
    model[key] = mongoose.model(key, schema[key])
} 
return model 

})()

module.exports = model