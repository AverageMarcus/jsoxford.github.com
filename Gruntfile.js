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

  });

  grunt.registerTask('default', ['jekyll']);

};


