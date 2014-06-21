module.exports = function(grunt) {
    grunt.registerTask('default', 'prints some stuff', function() {
        grunt.log.writeln('This message is coming from ' + process.cwd());
        grunt.log.writeln('grunt-hub is awesome!!');
    });
}
