import concat from 'gulp-concat';
import autoprefixer from 'gulp-autoprefixer';
import cleanCss from 'gulp-clean-css';
import rename from 'gulp-rename';

export const styles = () => {
    return app.gulp.src(app.path.src.styles, { sourcemaps:app.isDev })
    .pipe(app.plugins.plumber(
        app.plugins.notify.onError({
            title: "CSS",
            message: "Error: <%= error.message %>"
        })
    ))
    .pipe(concat('main.css'))

    .pipe(
        app.plugins.if(
            app.isBuild,
        autoprefixer({
        cascade: true
    })))
    .pipe(app.gulp.dest(app.path.build.css))
    .pipe(
        app.plugins.if(
            app.isBuild,
        cleanCss({
        level: 2
    })))
    .pipe(rename({
        extname: ".min.css"
    }))
    .pipe(app.gulp.dest(app.path.build.css))
    .pipe(app.plugins.browsersync.stream());
}
