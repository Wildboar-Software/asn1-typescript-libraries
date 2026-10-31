import { ASN1CharactersError, ASN1Element } from "@wildboar/asn1";
import { prepString } from "../../utils/prepString.mjs";
import { caseIgnoreMatchTyped } from "./caseIgnoreMatch.mjs";
import { dnsNameMatchTyped, prepareDnsAssertion } from "./dnsNameMatch.mjs";
import {
    createEqualityMatcher,
    type Matcher,
    type TypedEquationFunction,
} from "../../types/matching.mjs";

/** Prepared local-part and prepared domain-part. */
export type PreparedIntEmail = readonly [local: string, domain: string];

/**
 * Split on the last `@` and prepare both parts. `undefined` means
 * the address has no local-part or no domain-part, which is FALSE.
 * A local-part or domain that cannot be prepared throws.
 */
function prepareIntEmail (
    raw: string,
    el?: ASN1Element,
): PreparedIntEmail | undefined {
    const at = raw.lastIndexOf("@");
    if (at <= 0 || at >= raw.length - 1) {
        return undefined;
    }
    const local = prepString(raw.slice(0, at), { caseFold: true });
    if (local === undefined) {
        throw new ASN1CharactersError(
            "intEmailMatch assertion failed string preparation",
            el,
        );
    }
    return [ local, prepareDnsAssertion(raw.slice(at + 1), el) ];
}

/**
 * Rec. ITU-T X.520 (10/2019), clause 8.9.3 `intEmailMatch`.
 *
 * Equality of `IntEmail`: both local-part and domain-part must
 * match. The local-part uses `caseIgnoreMatch`; the domain-part
 * uses `dnsNameMatch` (clause 8.9.2).
 *
 * @param assertion Presented address. A `[local, domain]` pair is
 *  already prepared. A string or element is split and prepared here.
 * @param value Stored address, or that address already decoded.
 */
export
function intEmailMatchTyped (
    assertion: PreparedIntEmail | string | ASN1Element,
    value: string | ASN1Element,
): boolean | undefined {
    const presented = typeof assertion === "string"
        ? prepareIntEmail(assertion)
        : ASN1Element.isElement(assertion)
            ? prepareIntEmail(assertion.utf8String)
            : assertion;
    if (!presented) {
        return false;
    }
    const stored = typeof value === "string" ? value : value.utf8String;
    // The domain cannot contain `@`, so the last `@` is the separator.
    const vAt: number = stored.lastIndexOf("@");
    if (vAt <= 0 || vAt >= stored.length - 1) {
        return false;
    }
    const localsMatch = caseIgnoreMatchTyped(presented[0], stored.slice(0, vAt));
    if (localsMatch !== true) {
        return localsMatch;
    }
    return dnsNameMatchTyped(presented[1], stored.slice(vAt + 1));
}

intEmailMatchTyped satisfies TypedEquationFunction<PreparedIntEmail | string | ASN1Element>;

function decodeIntEmail (el: ASN1Element): PreparedIntEmail | string {
    return prepareIntEmail(el.utf8String, el) ?? el.utf8String;
}

/**
 * `intEmailMatch` as a `Matcher`.
 */
export
const intEmailMatch: Matcher = createEqualityMatcher(
    decodeIntEmail,
    intEmailMatchTyped,
);

export default intEmailMatch;
