let express = require('express')
let bodyParser = require('body-parser')

let app = express()

var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.set('view engine', 'ejs');
app.use('/public', express.static('public'));

app.get('/', function (req, res) {
    res.render('index');
})

app.get('/about', function (req, res) {
    res.render('about');
})

app.post('/about', urlencodedParser, function (req, res) {
    if (!req.body) return res.sendStatus(400);
    console.log(req.body)
    res.render('about-success', { data: req.body });
})


app.get('/news/:id', function (req, res) {
    let obj = { title: "Новость", id: 4, paragraphs: ['Параграф1', 'Параграф2', 'Параграф3'] };
    res.render('news', { newsId: req.params.id, newParam: 234, obj: obj });
    // res.render('news');
})

// app.get('/news/', function (req, res) {
//     let obj = { title: "Новость", id: 4, paragraphs: ['Параграф1', 'Параграф2', 'Параграф3'] };
//     // res.render('news', { newsId: req.params.id, newParam: 234, obj: obj });
//     res.render('news');
// })

app.listen(3000)