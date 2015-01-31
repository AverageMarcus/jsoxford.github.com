module.exports = function(grunt) {
	require('load-grunt-tasks')(grunt);

	grunt.initConfig({

		jekyll: {
      dist: {
        options: {
          config: '_config.yml',
          serve: true,
          port: 5000,
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


  });

  grunt.registerTask('default', ['imagemin','jekyll']);

};


