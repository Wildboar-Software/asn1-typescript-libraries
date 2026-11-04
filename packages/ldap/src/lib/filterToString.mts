import type { Filter } from "./modules/Lightweight-Directory-Access-Protocol-V3/Filter.ta.mjs";
import {
    ldapString,
    rfc4515Value,
} from "./textual.mjs";

/**
 * @summary Stringify a filter according to RFC 4515.
 * @description
 * 
 * This function stringifies a filter according to
 * [IETF RFC 4515](https://www.rfc-editor.org/rfc/rfc4515).
 * 
 * @param filter The filter to stringify.
 * @returns The stringified filter.
 * @function
 */
export
function stringifyFilter (filter: Filter): string {
    if ("and" in filter) {
        return `(&${filter.and.map(stringifyFilter).join("")})`;
    } else if ("or" in filter) {
        return `(|${filter.or.map(stringifyFilter).join("")})`;
    } else if ("not" in filter) {
        return `(!${stringifyFilter(filter.not)})`;
    } else if ("equalityMatch" in filter) {
        return `(${filter.equalityMatch.toString()})`;
    } else if ("substrings" in filter) {
        return filter.substrings.toString();
    } else if ("greaterOrEqual" in filter) {
        const normAttr = ldapString(filter.greaterOrEqual.attributeDesc);
        const normValue = rfc4515Value(filter.greaterOrEqual.assertionValue);
        return `(${normAttr}>=${normValue})`;
    } else if ("lessOrEqual" in filter) {
        const normAttr = ldapString(filter.lessOrEqual.attributeDesc);
        const normValue = rfc4515Value(filter.lessOrEqual.assertionValue);
        return `(${normAttr}<=${normValue})`;
    } else if ("present" in filter) {
        return `(${ldapString(filter.present)}=*)`;
    } else if ("approxMatch" in filter) {
        const normAttr = ldapString(filter.approxMatch.attributeDesc);
        const normValue = rfc4515Value(filter.approxMatch.assertionValue);
        return `(${normAttr}~=${normValue})`;
    } else if ("extensibleMatch" in filter) {
        return filter.extensibleMatch.toString();
    } else {
        return "";
    }
}

export default stringifyFilter;

