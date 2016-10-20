const app = require('express')();
const expressSetup = require('./middleware/expressSetup');

expressSetup(app);

app.get('*', (req, res) => {
    res.render('scripts', {});
});

app.listen('3004', () => {
    console.log('server ready and listening on port 3000');
});
