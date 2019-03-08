/**
 * This file contains all the application specific information.
 *
 * Any module that requires access to application specific configurations must
 * require this app.config module.
 *
 * User: Sohail Alam
 * Version: 1.0.0
 * Date: 22/8/13
 * Time: 3:15 PM
 */
define('app.config', ['require'], {
    // Keep it a single word
    app_name: 'OQA',
    app_version: '0.0.1',
    app_release_date: '04th Nov, 2013',
    // Comman Separated Values
    app_author: 'Sohail Alam',
    app_description: 'A simple Online Quizzing Application',
    app_license: 'Apache License Version 2',

    // A unique name for the Local Storage used by this App
    app_storage_namespace: function () {
        return (this.app_name + ' ' + this.app_version).toString();
    }
});
