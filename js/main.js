
requirejs.config({

    paths: {
        jquery: 'http://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.1/jquery.min',
        underscore: 'http://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.7.0/underscore-min',
        backbone: 'http://cdnjs.cloudflare.com/ajax/libs/backbone.js/1.1.2/backbone-min',
        handlebars : 'http://cdnjs.cloudflare.com/ajax/libs/handlebars.js/2.0.0/handlebars.min',
        bootstrap : 'http://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.1/js/bootstrap.min',
        templates: '../templates'
    },
    shim: {
        'bootstrap':
        {
            deps: ['jquery']
        },
        'backbone':
        {
            deps: ['underscore']
        }

    }

});

require(['app'], function (App) {
    App.initialize();
});
