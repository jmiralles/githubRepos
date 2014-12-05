


define([
    'jquery',
    'underscore',
    'backbone',
    'handlebars',
    'views/searchView'
    ], function($, _, Backbone, Handlebars, SearchView ){
        var initialize = function(){
            var searchView = new SearchView();
            $('#search').val('');
        };

        return {
            initialize: initialize
        };
    });



/*
    # Endpoint URL #

    https://api.github.com/legacy/repos/search/{query}

    https://api.github.com/legacy/repos/search/:angular

    Note: Github imposes a rate limit of 60 request per minute. Documentation can be found at http://developer.github.com/v3/.

    # Example Response JSON #

    {
      "meta": {...},
      "data": {
        "repositories": [
          {
            "type": string,
            "watchers": number,
            "followers": number,
            "username": string,
            "owner": string,
            "created": string,
            "created_at": string,
            "pushed_at": string,
            "description": string,
            "forks": number,
            "pushed": string,
            "fork": boolean,
            "size": number,
            "name": string,
            "private": boolean,
            "language": number
          },
          {...},
          {...}
        ]
      }
    }
*/
