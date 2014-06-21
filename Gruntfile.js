module.exports = function (grunt) {
    grunt.initConfig({
        hub: {
            nofiles: {
                src: ['path/to/nowhere/Gruntfile.js'],
                tasks: ['default']
            },
            hasfiles: {
                src: ['*/Gruntfile.js'],
                tasks: ['default']
            },
            somefiles: {
                src: ['path/to/nowhere/Gruntfile.js', '*/Gruntfile.js', 'path/to/nowhere/Gruntfile.js'],
            }
        }
    });

    grunt.loadNpmTasks('grunt-hub');
}
