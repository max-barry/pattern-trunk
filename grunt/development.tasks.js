/**
The best version bumping I can find for Grunt.
@example
  npm install grunt-bump --save-dev
@link https://github.com/vojtajina/grunt-bump
*/
bump: {
    options: {
        push: false,
        pushTo: "origin",
        files: [
            "package.json"
        ]
    }
}

grunt.loadNpmTasks('grunt-bump');