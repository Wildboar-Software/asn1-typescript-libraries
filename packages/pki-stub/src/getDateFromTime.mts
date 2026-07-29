import type { Time } from "./lib/modules/PKI-Stub/Time.ta.mjs";

/**
 * @summary Get a native ECMAScript `Date` from an X.509 `Time` value
 * @param {Time} time The `Time` to be converted
 * @returns {Date} A native ECMAScript `Date`
 * @function
 */
export
function getDateFromTime (time: Time): Date {
    if ("utcTime" in time) {
        return time.utcTime;
    } else {
        return time.generalizedTime;
    }
}

export default getDateFromTime;
