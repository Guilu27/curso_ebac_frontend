module.exports = function (grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON("package.json"),
    less: {
      development: {
        files: {
          "./dist/main.min.css": "./src/main.less",
        },
        options: {
          compress: true,
        },
      },
    },
    uglify: {
      target: {
        files: {
          "./dist/main.min.js": "./src/main.js",
        },
      },
    },
  });

  grunt.loadNpmTasks("grunt-contrib-less");
  grunt.loadNpmTasks("grunt-contrib-uglify");

  grunt.registerTask("default", ["less", "uglify"]);
};
