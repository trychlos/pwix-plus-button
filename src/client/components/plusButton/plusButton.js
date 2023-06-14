/*
 * pwix:plus-button/src/client/components/plusButton/plusButton.js
 *
 * Usage: see README
 */

import { ReactiveVar } from 'meteor/reactive-var';

import './plusButton.html';
import './plusButton.less';

Template.plusButton.helpers({
    disabled(){
        const rv = Template.currentData().enabled;
        let disabled = "";
        if( rv && rv instanceof ReactiveVar && !rv.get()){
            disabled = 'disabled';
        }
        return disabled;
    }
});
