

define([
    'jquery',
    'backbone',
    'underscore',
    'handlebars',
    'text!templates/search.html',
    'collections/repositoryCollection',
    'bootstrap'
    ], function($, Backbone, _, Handlebars, searchTemplate, repositoyCollection, bootstrap ){

        var SearchView = Backbone.View.extend({
            initialize : function(){
                $('#search').val('');
            },
            events: {
                "keydown #search"  : "updateSearch"
            },

            el: $('body'),

            render: function(){
                var template = Handlebars.compile(searchTemplate);

                this.collection.fetch({
                    error: function(){
                        $('#loader').hide();
                        $('#results').html('<p class="label label-danger">Something goes wrong...try later</p>');
                    },
                    beforeSend: function(){
                        $('#loader').show();
                    },
                    success: _.bind(function (data) {
                        var json = data.toJSON();

                        if (json[0].repositories.length > 0){
                            var html = template(json[0]);
                        }else{
                            var html = '<p class="label label-warning">No results for this search</p>';
                        }
                        $('#results').html( html );
                        $('.collapse').collapse();
                        $('#loader').hide();
                    }, this)
                });
            },

            updateSearch : function(e){
                var query = $(e.target).val();

                if(query.length > 0){
                    this.delay(_.bind(function(){
                        this.collection = new repositoyCollection;
                        this.collection.setQuery(query);
                        this.render();

                    }, this), 1500 );
                }
            },

            delay : (function(){
                var timer = 0;
                return function(callback, ms){
                    clearTimeout (timer);
                    timer = setTimeout(callback, ms);
                };
            })()
        });

        return SearchView;

    });
