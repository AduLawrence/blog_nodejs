const Blog = require('../models/blog');

const blog_index = (req, res) => {
    Blog.find().sort({createdAt: -1}).then(result => {
        res.render('index', { title: 'Home', blogs: result});
    }).catch(err => {
        res.render('index', { title: 'Home', blogs: []});
    });
}

const blog_create = (req, res) => {
    res.render('create', { title: 'New Blog' });
}

const blog_add = (req, res) => {
    const blog = new Blog(req.body);

    blog.save().then(result => {
        res.redirect('/blogs');
    }).catch(err => {
        res.send(err);
    });
}

const blog_details = (req, res) => {
    const id = req.params.id;

    Blog.findById(id).then(result => {
        res.render('details', {title: 'Blog details', blog: result});
    }).catch(err => {
        res.send(err);
    });
}


module.exports = {
    blog_index,
    blog_create,
    blog_add,
    blog_details
};