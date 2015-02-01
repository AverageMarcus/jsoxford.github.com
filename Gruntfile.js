var jpegRecompress = require('imagemin-jpeg-recompress');

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
          optimizationLevel: 7,
          use: [jpegRecompress()]
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
          removeComments: true,
          removeEmptyAttributes: true,
          removeRedundantAttributes: true,
          removeScriptTypeAttributes: true,
          removeStyleLinkTypeAttributes: true,
          minifyJS: true,
          minifyCSS: true
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
    connect: {
      server: {
        options: {
          port: 5000,
          base: '_site',
          keepalive: true,
          hostname: '*'
        }
      }
    }
  });

  grunt.registerTask('build', ['jekyll:build']);
  grunt.registerTask('optimize', ['imagemin','uncss','cssmin','htmlmin']);
  grunt.registerTask('default', ['build','optimize','connect']);

};


