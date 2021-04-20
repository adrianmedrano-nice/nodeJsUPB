const mongoose = require('mongoose')
const URI = ('mongodb+srv://admin:admin@test.dhchp.mongodb.net/webStore?retryWrites=true&w=majority')

mongoose.connect(URI,{
    useNewUrlParser : true,
    useUnifiedTopology : true,
    useCreateIndex : true,
    useFindAndModify :false
}).then (db => console.log('Base de datos conectada'))
.catch (err => console.log (err))

module.exports = mongoose