module.exports = function(grunt) {

    // load tasks
    [
        'grunt-contrib-qunit',
        'grunt-contrib-watch',
        'grunt-contrib-clean',
        'grunt-contrib-copy',
        'grunt-contrib-concat',
        'grunt-contrib-cssmin',
        'grunt-contrib-concat',
        'grunt-contrib-less',
        'grunt-usemin',
        'grunt-filerev'
    ].forEach(function(task) { grunt.loadNpmTasks(task); });


    // setup init config
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        // clean up the `dist/` directory, i.e., delete files
        clean: {
            dist: {
                src: [
                    'dist/*',

                    // funny dance to keep old versioned dist/css/*.pkg.*.css
                    '!dist/css/**',
                    'dist/css/*',
                    '!dist/css/*.pkg.*.css',

                    // funny dance to keep old versioned dist/css/*.pkg.*.js
                    '!dist/js/**',
                    'dist/js/*',
                    '!dist/js/*.pkg.*.js'
                ]
            }
        },

        // copy over `src/` files to `dist/`
        copy: {
            dist: {
                files: [{
                    expand: true,
                    dot: true,
                    cwd: 'src/',
                    dest: 'dist/',
                    src: [
                        '*',
                        'css/**',
                        'js/**',
                        'ico/**',
                        'img/**',
                        'templates/**'
                    ],
                    filter: 'isFile'
                }]
            }
        },

        // compile LESS files in `src/less/` into CSS files
        less: {
            css: {
                options: {
                    paths: ["src/less"]
                },
                files: [
                    {
                        expand: true,
                        cwd: 'src/less',
                        src: ['*.less'],
                        dest: 'src/',
                        ext: '.css'
                    }
                ]
            }
        },

        // prep call for usemin (target all html files)
        useminPrepare: {
            html: [
                'dist/*.html'
            ]
        },

        // final call for usemin (target all html files)
        usemin: {
            html: [
                'dist/*.html'
            ],
            options: {
                dirs: ['dist/']
            }
        },

        // revision a specific set of static files, this can be
        // extended to do more files and images too
        filerev: {
            files: {
                src: [
                    'dist/css/*.pkg.css',
                    'dist/js/*.pkg.js'
                ]
            }
        },

        // TODO - support qunit
        qunit: {
            files: ['test/**/*.html']
        },


        // watch command to auto-compile files that have changed
        watch: {
            less: {
                files: ['src/**/*.less'],
                tasks: ['less']
            }
        }
    });

    // Composite tasks...

    // run tests
    grunt.registerTask('test', ['qunit']);

    // like watch, but build stuff at start too!
    grunt.registerTask('dev', ['less', 'watch']);

    // full build of project to `dist/`
    grunt.registerTask('default', ['less', 'clean', 'copy',
                                   'useminPrepare',
                                   'concat', 'cssmin',
                                   'filerev',
                                   'usemin']);
};
