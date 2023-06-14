/*
 * pwix:plus-button/test/js/index.js
 */

// Import Tinytest from the tinytest Meteor package.
import { Tinytest } from "meteor/tinytest";

// Import and rename a variable exported by the package.
import { name as packageName } from "meteor/pwix:plus-button";

// Write your tests here!
// Here is an example.
Tinytest.add('plusButton - example', function( test ){
  test.equal( packageName, "plus-button" );
});
