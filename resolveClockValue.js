/**
    @overview
    @author Shunsuke Ito <shunsuke.ito@gmail.com>
    @license Distributed under the MIT License.
    
    for readium-chrome-extension
 */
'use strict';

/**
    Parse Time string to seconds(float)
    @class
    @classdesc Parse String
    @param {string} time
    @return {number} Number
 */
function resolveClockValue(time) {
    var h, min, sc , re,
        result = parseFloat(time);
    if( typeof time === 'number') { return time; }
    if( typeof time !== 'string' ) { return 0; }
    
    re = time.match(/([0-9\.]+)(h|min|s|ms)/i);
    if(re){
        result = parseFloat(re[1]);
        if( re[2] ==='h' ){ result = result * 3600; }
        else if( re[2] ==='min' ){ result = result * 60; }
        else if( re[2] ==='ms' ){ result = result / 1000; }
        return result;
    }

    re = time.match(/([0-9]+):([0-9]+):([0-9\.]+)/i);
    if(re){
        h = parseInt(re[1],10);
        min = parseInt(re[2],10);
        sc = parseFloat(re[3]);
        result = h * 3600 + min * 60 + sc;
        return result;
    }
    else{
        re = time.match(/([0-9]+):([0-9\.]+)/i);
        if(re){
            min = parseInt(re[1],10);
            sc = parseFloat(re[2]);
            result = min * 60 + sc;
            return result;
        }
    }
    return result;
};
