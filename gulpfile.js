var gulp          = require('gulp');
var notify        = require('gulp-notify');
var source        = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var browserify    = require('browserify');
var babelify      = require('babelify');
var ngAnnotate    = require('browserify-ngannotate');
var browserSync   = require('browser-sync').create();
var sourcemaps    = require('gulp-sourcemaps');
var rename        = require('gulp-rename');
var templateCache = require('gulp-angular-templatecache');
var uglify        = require('gulp-uglify');
var merge         = require('merge-stream');

// Where our files are located
var jsFiles   = "src/js/**/*.js";
var viewFiles = "src/js/**/*.html";

var interceptErrors = function(error) {
	var args = Array.prototype.slice.call(arguments);

	// Send error to notification center with gulp-notify
	notify.onError({
		title: 'Compile Error',
		message: '<%= error.message %>'
	}).apply(this, args);

	// Keep gulp from hanging on this task
	this.emit('end');
};


gulp.task('browserify', ['views'], function() {
	return browserify({entries : './src/js/app.js' , debug : true})
		.transform(babelify, {presets: ["es2015"]})
		.transform(ngAnnotate)
		.bundle()
		.on('error', interceptErrors)
		//Pass desired output filename to vinyl-source-stream
		.pipe(source('./build/main.js'))
		.pipe(buffer())
		.pipe(sourcemaps.init({ loadMaps: true }))
		.pipe(uglify())// create sourcemap before running edit commands so we know which file to reference
		.pipe(rename("main.js")) // rename file
		.pipe(sourcemaps.write('./', {sourceRoot: './'})) // sourcemap gets written and references wherever sourceRoot is specified to be
		.pipe(gulp.dest('./build'));
});

gulp.task('html', function() {
	return gulp.src("src/index.html")
		.on('error', interceptErrors)
		.pipe(gulp.dest('./build/'));
});

gulp.task('views', function() {
	return gulp.src(viewFiles)
		.pipe(templateCache({
			standalone: true
		}))
		.on('error', interceptErrors)
		.pipe(rename("app.templates.js"))
		.pipe(gulp.dest('./src/js/config/'));
});



gulp.task('default', ['html', 'browserify'], function() {

	browserSync.init(['./build/**/**.**'], {
		server: "./build",
		port: 4000,
		notify: true,
		host: 'mymacbookpro.etrade.com',
		open: 'local',
		logLevel: 'debug',
		ui: {
			port: 4001
		}
	});

	gulp.watch("src/index.html", ['html']);
	gulp.watch(viewFiles, ['views']);
	gulp.watch(jsFiles, ['browserify']);
});


gulp.task('prod', ['html', 'browserify'], function() {

	browserSync.init(['./dist/**/**.**'], {
		server: "./dist",
		port: 9000,
		notify: false,
		ui: {
			port: 9001
		}
	});
});
