/**
 * Created by victor on 18/05/17.
 */
const express = require('express');
const path = require('path');
const app = express();

app.set('port', (process.env.PORT || 5000));
app.set('view engine', 'jade');

app.use(express.static(path.join(__dirname, 'build')));


app.get('/dynamic', function (req, res) {

	// var url = "http://wowcrush.com/images/"
	// var random = function (min, max) {
	//   return Math.random() * (max - min) + min;
	// }
    //
	// var number = parseInt(random(1,31241));
    //
	// var image = url + number + '.jpg';


    var image = [
        'http://wowcrush.com/images/358425.jpg',
        'http://wowcrush.com/images/656436.jpg',
        'http://wowcrush.com/images/684020.jpg',
        'http://wowcrush.com/images/182168.jpg',
        'http://wowcrush.com/images/267959.jpg'
    ];

    var rand = image[Math.floor(Math.random() * image.length)];

    res.render('index', { image: rand, message: 'Hello there!'});
});


app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(app.get('port'));
