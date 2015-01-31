module.exports = function(grunt) {
	require('load-grunt-tasks')(grunt);

	grunt.initConfig({

		jekyll: {
      dist: {
        options: {
          config: '_config.yml',
          serve: true,
          port: 5000,
          nowatch: true
        }
      }
    },
    imagemin: {
      static: {
        options: {
          optimizationLevel: 3
        },
        files: [{
          expand: true,
          cwd: 'img',
          src: '**/*.{png,PNG,jpg,JPG,gif,GIF,jpeg,JPEG}',
          dest: 'img'
        }]
      }
    },
    uncss: {
      dist: {
        options: {
          stylesheets: ['assets/style.css']
        },
        files: {
          'assets/style.css': ['*.html','_layouts/*.html','_site/*.html', 'irc/*.html']
        }
      }
    },
    cssmin: {
      dist: {
        expand: true,
        cwd: 'assets/',
        src: ['*.css'],
        dest: 'assets/'
      }
    },
    htmlmin: {
      dist: {
        options: {
          removeComments: true,
          collapseWhitespace: true,
          removeRedundantAttributes: true,
          removeScriptTypeAttributes: true,
          removeStyleLinkTypeAttributes: true
        },
        files: [
        {
          expand: true,
          cwd: '_site/',
          src: ['*.html','**/*.html'],
          dest: '_site/'
        },
        {
          expand: true,
          cwd: '_layouts/',
          src: ['*.html','**/*.html'],
          dest: '_layouts/'
        },
        {
          expand: true,
          cwd: 'irc/',
          src: ['*.html','**/*.html'],
          dest: 'irc/'
        },
        ]
      }
    },


  });

  grunt.registerTask('default', ['imagemin','uncss','cssmin','htmlmin','jekyll']);

};


