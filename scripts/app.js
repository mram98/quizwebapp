/**
 * User: Sohail Alam
 * Version: 1.0.0
 * Date: 21/8/13
 * Time: 10:45 PM
 */

/* Global Require */
'use strict';

requirejs.config({

    // By Default load any module IDs from the 'scripts' directory
    baseUrl: 'scripts',

    // Explicit path definitions for libraries lying outside of the baseUrl
    paths: {
        // App Logger
        "app.logger": './custom/app.logger',
        // Backbone
        backbone: '../libraries/backbone/backbone-min',
        // Twitter Bootstrap
        bootstrap: '../libraries/bootstrap/dist/js/bootstrap.min',
        // Cookies
        cookies : '../libraries/cookies-js/src/cookies.min',
        // Handlebars
        handlebars: '../libraries/handlebars/handlebars.min',
        // jQuery
        jquery: '../libraries/jquery/jquery.min',
        // jQuery UI
        jqueryUi: '../libraries/jquery-ui/minified/jquery-ui.min',
        // JSON2
        json2: '../libraries/json2/json2',
        // Backbone Local Storage
        localStorage: '../libraries/backbone.localStorage/backbone.localStorage-min',
        // Log4js Logger
        log4js: './custom/log4js',
        // Modernizr
        modernizr: '../libraries/modernizr/modernizr',
        // Require
        require: '../libraries/requirejs/require',
        // Respond
        respond: '../libraries/respond/respond.min',
        // Require Text
        text: '../libraries/requirejs-text/text',
        // Underscore
        underscore: '../libraries/underscore/underscore-min',

        /* Application Specific Paths for files other than Java Scripts */

        // The path where all the documents are kept
        documents: '../resources/documents',
        // The path where all the images are kept
        images: '../resources/images',
        // The path where all the media are kept
        media: '../resources/media',
        // The path where all the styles are kept
        styles: '../resources/styles',
        // The path where all the templates are kept
        templates: '../resources/templates'
    },

    // Using shim config for Non-AMD Scripts
    // The shim config allows us to configure dependencies for
    // scripts that do not call define() to register a module
    shim: {
        'backbone': {
            // The script dependencies should be loaded before loading backbone.js
            deps: ['underscore', 'jquery'],
            // Once loaded, use the global 'Backbone' as the module value
            exports: 'Backbone'
        },
        'bootstrap': {
            deps: ['jquery'],
            exports: 'Bootstrap'
        },
        cookies: {
            exports: 'Cookies',
            // FIXME: Find a proper way of getting Log4js reference
            init: function () {
                this.cookies = Cookies;
                return this.cookies;
            }
        },
        'jquery': {
            exports: '$'
        },
        'jqueryUi': {
            deps: ['jquery'],
            exports: '$Ui'
        },
        'localStorage': {
            deps: ['backbone'],
            exports: 'LocalStorage'
        },
        log4js: {
            exports: 'Log4js',
            // FIXME: Find a proper way of getting Log4js reference
            init: function () {
                this.Log4js = Log4js;
                return this.Log4js;
            }
        },
        'underscore': {
            exports: '_'
        }
    },

    // Give a waiting period for loading all the libraries
    waitSeconds: 15
});

// Start the main app logic
requirejs(['app.logger', 'backbone', 'app.config', 'app.router'],
    function (LOGGER, Backbone, AppConfig, AppRouter) {

        'use strict';

        // Log the Application Specific Info
        console.log("\n-----------------------------------------------------------------------");
        console.log("Application Name             : " + AppConfig.app_name);
        console.log("Application Version          : " + AppConfig.app_version);
        console.log("Application Release Date     : " + AppConfig.app_release_date);
        console.log("Application Author           : " + AppConfig.app_author);
        console.log("Application Description      : " + AppConfig.app_description);
        console.log("Application License          : " + AppConfig.app_license);
        console.log("Application Storage NS       : " + AppConfig.app_storage_namespace());
        console.log("-----------------------------------------------------------------------\n");

        // Enable Trace/Debug Mode when in Development
        AppLogger.OQA.enableTraceMode(true);

        // Start the Application Router
        new AppRouter();

        // Start the Backbone History
        Backbone.history.start();

        // Initialize the Application View
//        new AppView();
    }
);
