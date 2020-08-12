var express = require('express');
var router = express.Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Mini Message Board', messages });
});

router.get('/new', function(req, res, next) {
  res.render('form', { title: 'New Message', messages })
});

router.post('/new', function(req, res, next) {
  var message = 
    {
        text: req.body.text,
        user: req.body.user,
        added: new Date()
    };
  messages.push(message);
  res.redirect('/');

/*   message.save(function (err) {
    if (err) { return next(err); }
    // Successful - redirect to new author record.
    res.redirect('/');
  }); */
})


module.exports = router;
