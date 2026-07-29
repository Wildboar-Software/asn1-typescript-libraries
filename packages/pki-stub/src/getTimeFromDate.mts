import type { Time } from "./lib/modules/PKI-Stub/Time.ta.mjs";

/**
 * @summary Convert a `Date` to an X.509 `Time`
 * @description
 *
 * Uses `UTCTime` for years 1950–2049 and `GeneralizedTime` otherwise,
 * matching the encoding rules in
 * [IETF RFC 5280](https://datatracker.ietf.org/doc/html/rfc5280#section-4.1.2.5).
 *
 * @param {Date} date The date to convert
 * @returns {Time} The corresponding `Time` value
 * @function
 */
export function getTimeFromDate(date: Date): Time {
    const year = date.getUTCFullYear();
    if (year >= 1950 && year <= 2049) {
        return { utcTime: date };
    }
    return { generalizedTime: date };
}

export default getTimeFromDate;
