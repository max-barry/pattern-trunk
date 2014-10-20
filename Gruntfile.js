module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        shell: {
            updatesubmodules: {
                "command": "git submodule foreach --recursive git pull"
            }
        }
    });

    grunt.loadNpmTasks('grunt-shell');

    grunt.registerTask("update", "shell:updatesubmodules");
};