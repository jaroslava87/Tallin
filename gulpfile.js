import gulp from "gulp";

import { path } from "./gulp/config/path.js";
import { plugins } from "./gulp/config/plugins.js"

global.app = {
  isBuild: process.argv.includes('--build'),
  isDev: !process.argv.includes('--build'),
  path: path,
  gulp: gulp,
  plugins: plugins
}

import { copy } from "./gulp/tasks/copy.js";
import { reset } from "./gulp/tasks/reset.js"
import{ html } from "./gulp/tasks/html.js";
import{ server } from "./gulp/tasks/server.js"
import { scss } from "./gulp/tasks/scss.js"
import { styles } from "./gulp/tasks/css.js"
import { js } from "./gulp/tasks/js.js"
// import { images } from "./gulp/tasks/images.js"
import{ otfToTft, ttfToWoff } from "./gulp/tasks/fonts.js"
                    // , fontsStyle
function watcher() {
  gulp.watch(path.watch.files, copy);
  gulp.watch(path.watch.html, html);
  gulp.watch(path.watch.scss, scss);
  gulp.watch(path.watch.styles, styles);
  gulp.watch(path.watch.js, js);
  // gulp.watch(path.watch.images, images);
}

const fonts = gulp.series(otfToTft, ttfToWoff);
                                      // fontsStyle
const mainTasks = gulp.series(fonts, gulp.parallel(copy, html, styles, js)); 
                                                           //scss,    images,
const dev = gulp.series(reset, mainTasks, gulp.parallel(watcher, server));
const build = gulp.series(reset, mainTasks);

export{ dev }
export { build }

gulp.task('default', dev);
