Package.describe({
    name: 'pwix:plus-button',
    version: '0.11.1',
    summary: 'A Blaze component which provides a circled-(+) button',
    git: 'https://github.com/trychlos/pwix-plus-button',
    documentation: 'README.md'
});

Package.onUse( function( api ){
    configure( api );
    api.export([
        'PlusButton'
    ]);
    api.mainModule( 'src/client/js/index.js', 'client' );
});

Package.onTest( function( api ){
    configure( api );
    api.use( 'tinytest' );
    api.use( 'pwix:plus-button' );
    api.mainModule( 'test/js/index.js' );
});

function configure( api ){
    api.versionsFrom( '2.9.0' );
    api.use( 'blaze-html-templates@2.0.0', 'client' );
    api.use( 'ecmascript', 'client' );
    api.use( 'less@4.0.0', 'client' );
    api.addFiles( 'src/client/components/plusButton/plusButton.js', 'client' );
}

// NPM dependencies are checked in /src/server/js/check_npms.js
// See also https://guide.meteor.com/writing-atmosphere-packages.html#npm-dependencies
