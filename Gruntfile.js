module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        shell: {
            updatesubmodules: {
                "command": "git submodule foreach --recursive git pull"
            }
        },
        bump: {
            options: {
                pushTo: "origin"
            }
        }
    });

    grunt.loadNpmTasks('grunt-shell');
    grunt.loadNpmTasks('grunt-bump');

    grunt.registerTask("update", "shell:updatesubmodules");
};