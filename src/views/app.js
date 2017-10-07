var Backbone = require('backbone');
var $ = require('jquery');
var _ = require('underscore');

require("./app.scss");


var App = Backbone.View.extend({
    el: $('body'),

    initialize: function() {
        _.bindAll(this, 'render')

        $(this.el).append("<p>Hello world!</p>")

        this.render()
    },

    render: function() {
        return this;
    }

});


module.exports = App;
