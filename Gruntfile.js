'use strict';

var exec = require('child_process').exec;

module.exports = function (grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    release: {},
    jshint: {
      options: {
        jshintrc: '.jshintrc'
      },
      lib: ['lib/**/*.js', 'Gruntfile.js'],
      test: 'test/**/*.js'
    },
    jsbeautifier: {
      options: {
        js: {
          indent_size: 2,
          jslintHappy: true,
          keepArrayIndentation: true,
          wrapLineLength: 0
        }
      },
      files: ['lib/**/*.js', 'test/**/*.js', 'Gruntfile.js', 'package.json']
    },
    simplemocha: {
      options: {
        reporter: 'dot'
      },
      mixins: {
        src: ['test/mixins/**/*.test.js']
      },
      providers: {
        src: ['test/providers/**/*.test.js']
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-release');
  grunt.loadNpmTasks('grunt-jsbeautifier');
  grunt.loadNpmTasks('grunt-simple-mocha');

  grunt.registerTask('default', ['jsbeautifier', 'jshint', 'simplemocha']);
};
