module.exports = function (grunt) {

    require('load-grunt-tasks')(grunt);     //auto-load tasks
    require('time-grunt')(grunt);           //keep track of task execution times

    grunt.initConfig({

        concat: {
            node: {
                files: [{
                    src: 'index.js',
                    dest: 'dist/json-schema-deref-node.js'
                }],
                options: {
                    process: function (content) {
                        return content + '\n\n' + 'module.exports = deref;';
                    }
                }
            },
            browser: {
                files: [{
                    src: 'index.js',
                    dest: 'dist/json-schema-deref-browser.js'
                }],
                options: {
                    process: function (content) {
                        var out = '';

                        out += '(function (window) {';
                        out += '\n\n';
                        out += content;
                        out += '\n\n';
                        out += 'window.JSON_SCHEMA_DEREF = deref;';
                        out += '\n\n';
                        out += '}(this));';

                        return out;
                    }
                }
            },
            angular: {
                files: [{
                    src: 'index.js',
                    dest: 'dist/json-schema-deref-angular.js'
                }],
                options: {
                    process: function (content) {
                        var out = '';

                        out += 'angular.module(\'jsonSchemaDeref\', []).factory(\'jsonSchemaDeref\', function () {';
                        out += '\n\n';
                        out += content;
                        out += '\n\n';
                        out += 'return deref;';
                        out += '\n\n';
                        out += '});';

                        return out;
                    }
                }
            }
        }

    });

    grunt.registerTask('build', ['concat']);
};
