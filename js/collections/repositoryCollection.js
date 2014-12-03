

define([
    'underscore',
    'backbone',
    'models/repositoryModel'
    ], function(_, Backbone, repositoryModel){
        var RepositoryCollection = Backbone.Collection.extend({
            model: repositoryModel,

            url : function(){
                return 'https://api.github.com/legacy/repos/search/:' + this.query
            },

            query : '',

            setQuery: function(q){
                this.query = q;
            }
        });

        return RepositoryCollection;
    });
