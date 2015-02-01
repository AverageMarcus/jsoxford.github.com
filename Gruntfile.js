module.exports = function(grunt) {
	require('load-grunt-tasks')(grunt);

	grunt.initConfig({

		jekyll: {
      build: {
        options: {
          config: '_config.yml',
          serve: false
        }
      },
      serve: {
        options: {
          config: '_config.yml',
          serve: true,
          port: 5000,
          nowatch: true
        }
      },
    },
    imagemin: {
      static: {
        options: {
          optimizationLevel: 3
        },
        files: [{
          expand: true,
          cwd: '_site/img',
          src: '**/*.{png,PNG,jpg,JPG,gif,GIF,jpeg,JPEG}',
          dest: '_site/img'
        }]
      }
    },
    uncss: {
      dist: {
        options: {
          stylesheets: ['_site/assets/style.css']
        },
        files: {
          '_site/assets/style.css': ['*.html','**/*.html']
        }
      }
    },
    cssmin: {
      dist: {
        expand: true,
        cwd: '_site/assets/',
        src: ['*.css'],
        dest: '_site/assets/'
      }
    },
    htmlmin: {
      dist: {
        options: {
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
        }
        ]
      }
    },
    'gh-pages': {
      options: {
        base: '_site',
        push: false
      },
      src: ['**']
    },
  });

  grunt.registerTask('build', ['jekyll:build']);
  grunt.registerTask('optimize', ['imagemin','uncss','cssmin','htmlmin']);
  grunt.registerTask('branch', ['gh-pages']);
  grunt.registerTask('default', ['build','optimize','branch']);

};


