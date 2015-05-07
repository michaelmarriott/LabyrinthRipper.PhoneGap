(function () {
    'use strict';
    angular.module('mPlatform', ['mPlatform.services', 'mPlatform.controllers', 'mPlatform.directives', 'mPlatform.configuration']);
    angular.module('mPlatform.directives', []);
    angular.module('mPlatform.controllers', []);
    angular.module('mPlatform.configuration', []);
    angular.module('mPlatform.services', ['ngResource', 'mPlatform.configuration']);
})();