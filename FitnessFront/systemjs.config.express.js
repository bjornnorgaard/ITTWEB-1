/**
 * System configuration for Angular samples
 * Adjust as necessary for your application needs.
 */
(function (global) {
    System.config({
        paths: {
            // paths serve as alias
            'npm:': 'node_modules /',
        },
        // map tells the System loader where to look for things
        map: {
            // our app is within the app folder
            app: 'app/js',
            // angular bundles
            '@angular/core': 'angular/core/bundles/core.umd.js',
            '@angular/common': 'angular/common/bundles/common.umd.js',
            '@angular/compiler': 'angular/compiler/bundles/compiler.umd.js',
            '@angular/platform-browser': 'angular/platform-browser/bundles/platform-browser.umd.js',
            '@angular/platform-browser-dynamic': 'angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
            '@angular/http': 'angular/http/bundles/http.umd.js',
            '@angular/router': 'angular/router/bundles/router.umd.js',
            '@angular/forms': 'angular/forms/bundles/forms.umd.js',
            '@angular/upgrade': 'angular/upgrade/bundles/upgrade.umd.js',
            // other libraries
            'rxjs': 'rxjs',
            'angular-in-memory-web-api': 'scripts/in-memory-web-api.umd.js'
        },
        // packages tells the System loader how to load when no filename and/or no extension
        packages: {
            app: {
                main: './main.js',
                defaultExtension: 'js'
            },
            rxjs: {
                defaultExtension: 'js'
            }
        }
    });
})(this);
