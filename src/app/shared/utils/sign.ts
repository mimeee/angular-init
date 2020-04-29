import isObject from 'hy-libs/isObject';
import now from 'hy-libs/now';
import md5 from 'hy-libs/md5';
import assign from 'hy-libs/assign';
import isAndroid from 'hy-libs/isAndroid';

const paramsOrder = (val) => {
    if (isAndroid()) { val._ = now() }
    const keys = Object.keys(val);
    keys.sort();
    return keys.map((ele) => `${ele}=${val[ele]}`).join('&');
}

export const sign = function (settings) {
    const salt = '30d6c51f4643e6effeb40eb8637b2db5';

    function transformRequest(data) {
        const iniObj = isObject(data) ? {} : { _: now() };
        const wrapData = assign(iniObj, data);
        const str = paramsOrder(wrapData);
        const signVal = md5(`${str}${salt}`);
        return assign(wrapData, { sign: signVal });
    };
    settings.data = transformRequest(settings.data);
    return settings;
}