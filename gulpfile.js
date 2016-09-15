//This gulpfile uses the gulp-headerfooter module to assemble our files. 
//See https://www.npmjs.com/package/gulp-headerfooter
//To run it, simply type   gulp   on the command line.

var gulp = require('gulp');
var headerfooter = require('gulp-headerfooter'); 
gulp.task('default', function () {	
	    gulp.src('./content/*.html')
					.pipe(headerfooter.header('./includes/header.html'))
					.pipe(headerfooter.footer('./includes/footer.html'))
	        .pipe(gulp.dest('./'));
});
