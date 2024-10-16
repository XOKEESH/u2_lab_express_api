const mongoose = require('mongoose')

mongoose
.connect('mongodb+srv://XOKEESH:Anoire7117@cluster7.yf6pw.mongodb.net/moviesDatabase?retryWrites=true&w=majority&appName=Cluster7')
.then(() => {
    console.log('Successfully connected to Mongodb.')
})
.catch((e) => {
    console.error('Connection Error', e,message)
})

mongoose.set('debug', true)

const db = mongoose.connection

module.exports = db