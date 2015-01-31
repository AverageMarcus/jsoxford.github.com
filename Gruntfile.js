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


  });

  grunt.registerTask('default', ['imagemin','uncss','jekyll']);

};


