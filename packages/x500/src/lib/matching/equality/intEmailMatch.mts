import type { ASN1Element } from "@wildboar/asn1";
import type { EqualityMatcherGetter } from "../../types/MatchFlags.mjs";
import { caseIgnoreMatchTyped } from "./caseIgnoreMatch.mjs";
import { dnsNameMatchTyped } from "./dnsNameMatch.mjs";

/**
 * Rec. ITU-T X.520 (10/2019), clause 8.9.3 `intEmailMatch`.
 *
 * Equality of `IntEmail`: both local-part and domain-part must
 * match. The local-part uses `caseIgnoreMatch`; the domain-part
 * uses `dnsNameMatch` (clause 8.9.2).
 *
 * Each argument may be an `ASN1Element` or a string.
 */
export
function intEmailMatch (
    assertion: ASN1Element | string,
    value: ASN1Element | string,
    _getEqualityMatcher?: EqualityMatcherGetter,
    flags: number = 0,
): boolean {
    return intEmailMatchTyped(
        typeof assertion === "string" ? assertion : assertion.utf8String,
        typeof value === "string" ? value : value.utf8String,
        flags,
    );
}

/**
 * `intEmailMatch` on two internationalized email addresses.
 *
 * @param assertion Presented address.
 * @param value Stored address.
 * @returns `true` when the local-part and domain both match.
 */
export
function intEmailMatchTyped (
    assertion: string,
    value: string,
    flags: number = 0,
): boolean {
    // The domain cannot contain `@`, so the last `@` is the separator.
    const aAt: number = assertion.lastIndexOf("@");
    const vAt: number = value.lastIndexOf("@");
    if (aAt <= 0 || vAt <= 0 || aAt >= assertion.length - 1 || vAt >= value.length - 1) {
        return false;
    }
    const localsMatch: boolean = caseIgnoreMatchTyped(
        assertion.slice(0, aAt),
        value.slice(0, vAt),
        flags,
    );
    if (!localsMatch) {
        return false;
    }
    return dnsNameMatchTyped(assertion.slice(aAt + 1), value.slice(vAt + 1), flags);
}

export default intEmailMatch;
