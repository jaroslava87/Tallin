import * as nodePath from 'path';
const rootFolder = nodePath.basename(nodePath.resolve());

const buildFolder = `./dist`;
const srcFolder = `./src`;

export const path = {
  build: {
    js: `${buildFolder}/js/`,
    css: `${buildFolder}/css/`,
    html: `${buildFolder}/`,
    images: `${buildFolder}/img/`,
    fonts: `${srcFolder}/fonts/`,
    files: `${buildFolder}/files/`,
  },
  src:{
    js: `${srcFolder}/js/*.js`,
    images: `${srcFolder}/img/**/*.{jpg,jpeg,png,gif,webp,}`,
    svg: `${srcFolder}/img/**/.svg`,
    scss: `${srcFolder}/scss/style.scss`,
    styles: `${srcFolder}/styles/*.css`,
    html: `${srcFolder}/*.html`,
    files: `${srcFolder}/files/**/*.*`,
  },
  watch: {
    js: `${srcFolder}/js/**/*.js`,
    scss: `${srcFolder}/scss/**/*.scss`,
    styles: `${srcFolder}/styles/**/*.css`,
    html: `${srcFolder}/**/*.html`,
    images: `${srcFolder}/img/**/*.{jpg,jpeg,png,gif,webp,svg,ico}`,
    files: `${srcFolder}/files/**/*.*`,
  },
  clean: buildFolder,
  buildFolder: buildFolder,
  srcFolder: srcFolder,
  rootFolder: rootFolder,
  ftp: ``
}

