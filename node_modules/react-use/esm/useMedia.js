import { useEffect, useState } from 'react';
import { isBrowser } from './misc/util';
var useMedia = function (query, defaultState) {
    if (defaultState === void 0) { defaultState = false; }
    var _a = useState(isBrowser ? function () { return window.matchMedia(query).matches; } : defaultState), state = _a[0], setState = _a[1];
    useEffect(function () {
        var mounted = true;
        var mql = window.matchMedia(query);
        var onChange = function () {
            if (!mounted) {
                return;
            }
            setState(!!mql.matches);
        };
        mql.addListener(onChange);
        setState(mql.matches);
        return function () {
            mounted = false;
            mql.removeListener(onChange);
        };
    }, [query]);
    return state;
};
export default useMedia;
