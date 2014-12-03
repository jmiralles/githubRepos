
requirejs.config({

    paths: {
        jquery: 'libs/jquery',
        underscore: 'libs/underscore',
        backbone: 'libs/backbone',
        handlebars : 'libs/handlebars',
        templates: '../templates'
    }

});

require(['app'], function (App) {
    App.initialize();
});
