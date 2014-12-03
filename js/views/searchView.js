

define([
    'jquery',
    'backbone',
    'underscore',
    'handlebars',
    'text!templates/search.html',
    'collections/repositoryCollection'
    ], function($, Backbone, _, Handlebars, searchTemplate, repositoyCollection ){

        var SearchView = Backbone.View.extend({
            events: {
                "keydown #search"  : "updateSearch"
            },

            el: $('body'),

            render: function(){
                var template = Handlebars.compile(searchTemplate);

                this.collection.fetch({
                    success: _.bind(function (data) {
                        var json = data.toJSON();
                        var html = template(json[0]);
                        $('#results').html( html );
                    }, this)
                });
            },

            updateSearch : function(e){
                //var q = e.target.val();
                this.collection = new repositoyCollection;
                this.collection.setQuery($(e.target).val());
                console.log($(e.target).val());

                this.render();
            }
        });

        return SearchView;

    });
