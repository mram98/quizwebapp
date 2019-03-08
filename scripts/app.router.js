/**
 * Created with IntelliJ IDEA.
 * User: sohail
 * Date: 11/4/13
 * Time: 5:28 PM
 * To change this template use File | Settings | File Templates.
 */
define(['app.logger', 'cookies', 'jquery', 'backbone'],
    function (LOGGER, cookies, $, Backbone) {
        'use strict';

        var AppRouter = Backbone.Router.extend({
            routes: {
                '': 'index'
            },

            initialize: function () {
                LOGGER.trace('app.router', 'initialize', 'Router Initialized');
            },

            index: function () {
                LOGGER.trace('app.router', 'index', 'Navigating to Index Page');
            }
        });

        return AppRouter;
    }
);
