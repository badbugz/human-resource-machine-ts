module.exports = function(grunt) {
    grunt.initConfig({
        files: {
            tests: 'test/*.spec.ts',
            solutions: 'solutions/*.ts',
            ts: '**/*.ts',
            node_modules: 'node_modules/**/*',
            config: {
                prettier: '.prettierrc',
                grunt: 'Gruntfile.js',
                tsconfig: 'tsconfig.json',
            },
        },
        watch: {
            files: ['<%= files.tests %>', '<%= files.solutions %>'],
            tasks: ['exec:test'],
            options: {
                atBegin: true,
            },
        },
        exec: {
            test:
                'npx ts-mocha --require mocha-clean/brief --bail --colors --reporter min -p ./tsconfig.json <%= files.tests %>',
        },
        prettier: {
            options: {
                trailingComma: 'es5',
                tabWidth: 4,
                semi: true,
                singleQuote: true,
                bracketSpacing: true,
                arrowParens: 'always',
            },
            files: {
                src: [
                    '<%= files.ts %>',
                    '!<%= files.node_modules %>',
                    '<%= files.config.prettier %>',
                    '<%= files.config.grunt %>',
                    '<%= files.config.tsconfig %>',
                ],
            },
        },
    });

    grunt.loadNpmTasks('grunt-exec');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-prettier');

    grunt.registerTask('default', ['test']);
    grunt.registerTask('test', ['prettier', 'exec:test']);
};
