const express = require('express');
const exphbs = require('express-handlebars');

const hbs = exphbs.create({
    layoutsDir: `${__dirname}/../views/layouts`,
    partialsDir: `${__dirname}/../views/partials`,
    defaultLayout: 'main'
});

module.exports = (app) => {
    app.engine('handlebars', hbs.engine);
    app.set('view engine', 'handlebars');
    app.set('views', `${__dirname}/../views`);

    app.use(express.static('build'));
};
