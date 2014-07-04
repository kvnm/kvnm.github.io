module.exports = function (grunt) {
  "use strict";

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    watch: {
      scripts: {
        files: ['./angular/*.js', '!./app.gen.js'],
        tasks: ['jshint', 'concat:app', 'uglify:app']
      }
    },
    uglify: {
      options: {
        mangle: false
      },
      app: {
        files: {
          'app.min.js': ['app.gen.js']
        }
      }
    },
    concat: {
      app: {
        src: ['./angular/*.js', '!./app.gen.js'],
        dest: './app.gen.js'
      }
    },
    jshint: {
      options: {
        jshintrc: '.jshintrc'
      },
      all: [
        'angular/*.js',
        '!*.min.js'
      ]
    },
  });
  // Load tasks...
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  // Default task.
  grunt.registerTask('default', 'watch');
};