module.exports = function(grunt) {

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		jshint: {
			files: ['Gruntfile.js', 'app/**/*.js'],
			options: {
				debug: true
			}
		},

		jasmine: {
			default: {
				src: 'app/**/*.js',
				options: {
					specs: 'test/**/*Test.js',
					summary: true
				}
			}
		},

		watch: {
			files: ['Gruntfile.js', 'app/**/*.js', 'test/**/*.js'],
			tasks: ['jshint', 'jasmine']
		}
	});

	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-jasmine');

	grunt.registerTask('default', ['jshint', 'jasmine', 'watch']);
};