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
            classes: 'btn btn-primary',
            shape: PlusButton.C.Shape.CIRCLE
        }
    };
});

Template.plusButton.helpers({
    // set button classes
    classes(){
        let classes = Template.instance().PCK.defaults.classes;
        if( Object.keys( Template.currentData()).includes( 'classes' )){
            classes = Template.currentData().classes;
        }
        console.debug( 'returning', classes );
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
    },

    // choose the shape of the button, providing an ad-hoc class
    shape(){
        let shape = Template.instance().PCK.defaults.shape;
        if( Object.keys( Template.currentData()).includes( 'shape' )){
            const value = Template.currentData().shape;
            let found = false;
            Object.keys( PlusButton.C.Shape ).every(( k ) => {
                if( PlusButton.C.Shape[k] === value ){
                    found = true;
                    return false;
                }
                return true;
            });
            if( found ){
                shape = value;
            } else {
                console.error( 'pwix:plus-button unknown shape \''+value+'\'' );
            }
        }
        return shape;
    }
});
