(function() {
    angular.module('testApp', ['ngMaterial'])
        .config(function($mdThemingProvider) {

          $mdThemingProvider.definePalette('primaryPalette', {
            '50': 'c8e6c9',
            '100': 'a5d6a7',
            '200': '81c784',
            '300': '81c784',
            '400': '66bb6a',
            '500': '4caf50',
            '600': '43a047',
            '700': '388e3c',
            '800': '2e7d32',
            '900': '1b5e20',
            'A100': 'b9f6ca',
            'A200': '69f0ae',
            'A400': '00e676',
            'A700': '00c853',
            'contrastDefaultColor': 'light',    // whether, by default, text (contrast)
                                                // on this palette should be dark or light

            'contrastDarkColors': ['50', '100', //hues which contrast should be 'dark' by default
             '200', '300', '400', 'A100'],
            'contrastLightColors': undefined    // could also specify this if default was 'dark'
          });
        
        
           $mdThemingProvider.definePalette('secondaryPalette', {
            '50': 'f1f8e9',
            '100': 'dcedc8',
            '200': 'c5e1a5',
            '300': 'aed581',
            '400': '9ccc65',
            '500': '8bc34a',
            '600': '7cb342',
            '700': '689f38',
            '800': '558b2f',
            '900': '33691e',
            'A100': 'ccff90',
            'A200': 'b2ff59',
            'A400': '76ff03',
            'A700': '64dd17',
            'contrastDefaultColor': 'light',    // whether, by default, text (contrast)
                                                // on this palette should be dark or light

            'contrastDarkColors': ['50', '100', //hues which contrast should be 'dark' by default
             '200', '300', '400', 'A100'],
            'contrastLightColors': undefined    // could also specify this if default was 'dark'
          });
        
        
        
           $mdThemingProvider.definePalette('warnPalette', {
            '50': 'fbe9e7',
            '100': 'ffccbc',
            '200': 'ffab91',
            '300': 'ff8a65',
            '400': 'ff7043',
            '500': 'ff5722',
            '600': 'f4511e',
            '700': 'e64a19',
            '800': 'd84315',
            '900': 'bf360c',
            'A100': 'ff9e80',
            'A200': 'ff6e40',
            'A400': 'ff3d00',
            'A700': 'dd2c00',
            'contrastDefaultColor': 'light',    // whether, by default, text (contrast)
                                                // on this palette should be dark or light

            'contrastDarkColors': ['50', '100', //hues which contrast should be 'dark' by default
             '200', '300', '400', 'A100'],
            'contrastLightColors': undefined    // could also specify this if default was 'dark'
          });
        
        
        

          $mdThemingProvider.theme('default')
            .primaryPalette('primaryPalette')
            .accentPalette('secondaryPalette')
            .warnPalette('warnPalette');

        });
})()
















