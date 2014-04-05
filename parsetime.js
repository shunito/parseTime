/*global env: true */
/**
    @overview
    @author Shunsuke Ito <shunsuke.ito@gmail.com>
    @license Distributed under the MIT License.
 */
'use strict';

/**
    Parse Time string to seconds(float)
    @class
    @classdesc Parse String
    @param {string} time
    @param {string=} op
    @return {number} Number or NaN
 */
function parseTime(time, op){
    var unit, h, min, sc , re,
        result = parseFloat(time);
    if( typeof time === 'number') { return time; }
    if( typeof time !== 'string' ) { return NaN; }
    if( typeof op === 'string' ){
        op = op.toLowerCase();
    }
    
    re = time.match(/([0-9\.]+)(h|min|s|ms)/i);
    if(re){
        result = parseFloat(re[1]);
        if( re[2] ==='h' ){ result = result * 3600; }
        if( re[2] ==='min' ){ result = result * 60; }
        if( re[2] ==='ms' ){ result = result / 1000; }
    }

    re = time.match(/([0-9]+):([0-9]+):([0-9\.]+)/i);
    if(re){
        h = parseInt(re[1],10);
        min = parseInt(re[2],10);
        sc = parseFloat(re[3]);
        result = h * 3600 + min * 60 + sc;        
    }
    else{
        re = time.match(/([0-9]+):([0-9\.]+)/i);
        if(re){
            min = parseInt(re[1],10);
            sc = parseFloat(re[2]);
            result = min * 60 + sc;
        }
    }
    
    if( op === 'h' ) { result = result / 3600; }
    else if( op === 'min' ) { result = result / 60; }
    else if( op === 'ms' ) { result = result * 1000; }

    return result;    
};
