/*
 * pwix:plus-button/src/client/components/plusButton/plusButton.js
 *
 * Usage: see README
 */

import { ReactiveVar } from 'meteor/reactive-var';

import './plusButton.html';
import './plusButton.less';

Template.plusButton.onCreated( function(){
    const self = this;
    self.PCK = {
        defaults: {
            classes: 'btn btn-primary'
        }
    };
});

Template.plusButton.helpers({
    // set button classes
    disabled(){
        const classes = Template.instance().PCK.defaults.classes;
        if( Object.keys( Template.currentData()).includes( 'classes' )){
            classes = Template.currentData().classes;
        }
        return classes;
    },

    // enable/disable the button
    disabled(){
        const rv = Template.currentData().enabled;
        let disabled = '';
        if( rv && rv instanceof ReactiveVar && !rv.get()){
            disabled = 'disabled';
        }
        return disabled;
    }
});
