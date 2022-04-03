const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const { result } = require('lodash');
const blogRouter = require('./routes/blogRoutes');

const app = express();

//register the view engine
app.set('view engine', 'ejs');

//connect to the database and start listening
const dbURI = 'mongodb+srv://tuts_user:1moP2CaOP1btKzB5@cluster0.hzeql.mongodb.net/node_tuts?retryWrites=true&w=majority'
mongoose.connect(dbURI, {useNewUrlParser: true, useUnifiedTopology: true})
.then((result) => {
    console.log('Connected to the db...');
    app.listen(3000);
}).catch(err => {

});

app.use(express.static('public'));
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.redirect('/blogs');
});

app.get('/about', (req, res) => {
    res.render('about', { title: 'About' });
});


//routing for the blogs
app.use('/blogs', blogRouter);


app.get('/about-us', (req, res) => {
    res.redirect('/about');
});

app.use((req, res) => {
    res.render('404', { title: '404' });
});
