/*
 * @forgerock/javascript-sdk
 *
 * url.ts
 *
 * Copyright (c) 2020 ForgeRock. All rights reserved.
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file for details.
 */
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
import { getRealmUrlPath } from '../util/realm';
/**
 * Returns the base URL including protocol, hostname and any non-standard port.
 * The returned URL does not include a trailing slash.
 */
function getBaseUrl(url) {
    var isNonStandardPort = (url.protocol === 'http:' && ['', '80'].indexOf(url.port) === -1) ||
        (url.protocol === 'https:' && ['', '443'].indexOf(url.port) === -1);
    var port = isNonStandardPort ? ":" + url.port : '';
    var baseUrl = url.protocol + "//" + url.hostname + port;
    return baseUrl;
}
function getEndpointPath(endpoint, realmPath, customPaths) {
    var realmUrlPath = getRealmUrlPath(realmPath);
    var defaultPaths = {
        authenticate: "json/" + realmUrlPath + "/authenticate",
        authorize: "oauth2/" + realmUrlPath + "/authorize",
        accessToken: "oauth2/" + realmUrlPath + "/access_token",
        endSession: "oauth2/" + realmUrlPath + "/connect/endSession",
        userInfo: "oauth2/" + realmUrlPath + "/userinfo",
        revoke: "oauth2/" + realmUrlPath + "/token/revoke",
        sessions: "json/" + realmUrlPath + "/sessions/",
    };
    if (customPaths && customPaths[endpoint]) {
        // TypeScript is not correctly reading the condition above
        // It's thinking that customPaths[endpoint] may result in undefined
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        return customPaths[endpoint];
    }
    else {
        return defaultPaths[endpoint];
    }
}
function resolve(baseUrl, path) {
    var url = new URL(baseUrl);
    if (path.startsWith('/')) {
        return "" + getBaseUrl(url) + path;
    }
    var basePath = url.pathname.split('/');
    var destPath = path.split('/').filter(function (x) { return !!x; });
    var newPath = __spreadArrays(basePath.slice(0, -1), destPath).join('/');
    return "" + getBaseUrl(url) + newPath;
}
function parseQuery(fullUrl) {
    var url = new URL(fullUrl);
    var query = {};
    url.searchParams.forEach(function (v, k) { return (query[k] = v); });
    return query;
}
function stringify(data) {
    var pairs = [];
    for (var k in data) {
        if (data[k]) {
            pairs.push(k + '=' + encodeURIComponent(data[k]));
        }
    }
    return pairs.join('&');
}
export { getBaseUrl, getEndpointPath, parseQuery, resolve, stringify };
//# sourceMappingURL=url.js.map