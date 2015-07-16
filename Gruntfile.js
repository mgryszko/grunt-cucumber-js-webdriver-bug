module.exports = function (grunt) {
  grunt.loadNpmTasks('grunt-cucumber');
  grunt.initConfig({
    cucumberjs: {
      src: 'features',
      options: {
          steps: 'step_definitions'
      }
    }
  });
};
