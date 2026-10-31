import type { ASN1Element } from "@wildboar/asn1";
import { prepString } from "../../utils/prepString.mjs";
import { caseIgnoreMatchTyped } from "./caseIgnoreMatch.mjs";
import { dnsNameMatchTyped } from "./dnsNameMatch.mjs";
import {
    createEqualityMatcher,
    type Matcher,
    type TypedEquationFunction,
} from "../../types/matching.mjs";

/**
 * Rec. ITU-T X.520 (10/2019), clause 8.9.3 `intEmailMatch`.
 *
 * Equality of `IntEmail`: both local-part and domain-part must
 * match. The local-part uses `caseIgnoreMatch`; the domain-part
 * uses `dnsNameMatch` (clause 8.9.2).
 *
 * @param assertion Presented address.
 * @param value Stored address, or that address already decoded.
 */
export
function intEmailMatchTyped (
    assertion: string,
    value: string | ASN1Element,
): boolean | undefined {
    const stored = typeof value === "string" ? value : value.utf8String;
    // The domain cannot contain `@`, so the last `@` is the separator.
    const aAt: number = assertion.lastIndexOf("@");
    const vAt: number = stored.lastIndexOf("@");
    if (aAt <= 0 || vAt <= 0 || aAt >= assertion.length - 1 || vAt >= stored.length - 1) {
        return false;
    }
    const preparedLocal = prepString(assertion.slice(0, aAt), { caseFold: true });
    if (preparedLocal === undefined) {
        return undefined;
    }
    const localsMatch = caseIgnoreMatchTyped(preparedLocal, stored.slice(0, vAt));
    if (localsMatch !== true) {
        return localsMatch;
    }
    return dnsNameMatchTyped(assertion.slice(aAt + 1), stored.slice(vAt + 1));
}

intEmailMatchTyped satisfies TypedEquationFunction<string>;

/**
 * `intEmailMatch` as a `Matcher`.
 */
export
const intEmailMatch: Matcher = createEqualityMatcher(
    (el) => el.utf8String,
    intEmailMatchTyped,
);

export default intEmailMatch;
