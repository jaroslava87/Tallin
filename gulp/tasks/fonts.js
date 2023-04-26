import fs from 'fs';
import fonter from 'gulp-fonter';
import ttf2woff2 from 'gulp-ttf2woff2';

export const otfToTft = () => {
    return app.gulp.src(`${app.path.srcFolder}/fonts/*.otf`, {})
        .pipe(app.plugins.plumber(
            app.plugins.notify.onError({
                title: "FONTS",
                message: "Error: <%= error.message %>"
            })
        ))
        .pipe(fonter({
            formats: ['ttf']
        }))
        .pipe(app.gulp.dest(`${app.path.srcFolder}/fonts/`))
}

export const ttfToWoff = () => {
    return app.gulp.src(`${app.path.srcFolder}/fonts/*.ttf`, {})
        .pipe(app.plugins.plumber(
            app.plugins.notify.onError({
                title: "FONTS",
                message: "Error: <%= error.message %>"
            })
        ))
        .pipe(fonter({
            formats: ['woff']
        }))
        .pipe(app.gulp.dest(`${app.path.build.fonts}`))
        .pipe(app.gulp.src(`${app.path.srcFolder}/fonts/*.ttf`))
        .pipe(ttf2woff2())
        .pipe(app.gulp.dest(`${app.path.build.fonts}`))
}

// export const fontsStyle = () => {
//     let fontFiles = `${app.path.srcFolder}/style/fonts.css`;
//     fs.readdir(app.path.build.fonts, function (err, fontFiles) {
//         if(fontFiles) {
//             if(!fs.existsSync(fontFiles)) {
//                 fs.writeFile(fontFiles, '', cb);
//                 let newFileOnly;
//                 for (var i = 0; i < fontFiles.length; i++) {
//                     let fontFileName = fontFiles[i].split('.')[0];
//                     if (newFileOnly !== fontFileName) {
//                         let fontName = fontFileName.split('-')[0] ? fontFileName.split('-')[0] : fontFileName;
//                         let fontWeight = fontFileName.split('-')[1] ? fontFileName.split('-')[1] : fontFileName;
//                         if (fontWeight.toLowerCase() === 'thin') {
//                             fontWeight = 100;
//                         } else if (fontWeight.toLowerCase() === 'extraLight') {
//                             fontWeight = 200;
//                         } else if (fontWeight.toLowerCase() === 'light') {
//                             fontWeight = 300;
//                         } else if (fontWeight.toLowerCase() === 'medium') {
//                             fontWeight = 500;
//                         } else if (fontWeight.toLowerCase() === 'semibold') {
//                             fontWeight = 600;
//                         } else if (fontWeight.toLowerCase() === 'bold') {
//                             fontWeight = 700;
//                         } else if (fontWeight.toLowerCase() === 'extraBold' || fontWeight.toLowerCase() === 'heavy') {
//                             fontWeight = 800;
//                         } else if (fontWeight.toLowerCase() === 'black') {
//                             fontWeight = 900;
//                         } else {
//                             fontWeight = 400;
//                         }

//                         fs.appendFile(fontFiles,
//                             `@font-face {
//                                 font-family: ${fontName};
//                                 font-display: swap;
//                                 src: url("../fonts/${fontFileName}.woff2") format("woff2"), url("../fonts/${fontFileName}.woff") format("woff");
//                                 font-weight: ${fontWeight};
//                                 font-style: normal;
//                             }\r\n`, cb);
//                             newFileOnly = fontFileName;     
//                     }
//                 }
//         } else {
//             console.log("Файл уже существует")
//         }
//     }
// });
// return app.gulp.src(`$(app.path.srcFolder)`);
// function cb() {}
// }