module.exports = function(grunt) {
	grunt.initConfig({
		jshint : {
			all: [ 'cc.js' ]
		},
		qunit: {
			options: {
				'--web-security': 'no',
				coverage: {
					src: ['cc.js'],
					instrumentedFiles: 'report/instrumented',
					htmlReport: 'report/coverage',
					coberturaReport: 'report',
					linesThressholdPct: 80
				}
			},
			all: [ 'index.html' ]
		}
	});

	grunt.loadNpmTasks( 'grunt-contrib-jshint' );
	grunt.loadNpmTasks( 'grunt-qunit-istanbul' );

	grunt.registerTask( 'default', [ 'jshint', 'qunit' ] );
};
