module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-aws');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.initConfig({
    aws: grunt.file.readJSON("credentials.json"),
    concat: {
      shim: {
        src: ['vendor/html5shim.js'],
        dest: 'dist/shim.js'
      },
      polyfills: {
        src: ['vendor/rem.js', 'vendor/respond.js'],
        dest: 'dist/polyfills.js'
      }
    },
    uglify: {
      all: {
        files: [{
            expand: true,
            cwd: 'dist',
            src: '*.js',
            dest: 'dist'
        }]
      }
    },
    s3: {
      options: {
        accessKeyId: "<%= aws.accessKeyId %>",
        secretAccessKey: "<%= aws.secretAccessKey %>",
        bucket: "dvl-polyfills",
        access: 'public-read',
        region: 'us-west-2',
        gzip: true,
        options: {
          headers: {
            CacheControl: 600 // 10 minutes
          }
        }
      },
      dist: {
        cwd: "dist/",
        src: "**",
        dest: "dist/"
      }
    }
  });

  grunt.registerTask('default', ['concat', 'uglify', 's3']);
};
