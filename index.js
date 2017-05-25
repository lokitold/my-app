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

	var image = [
		'',
		'',
		'',
		'',
		'',
		'',
	]
	
    res.render('index', { image: 'Hey', message: 'Hello there!'});
});


app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(app.get('port'));
