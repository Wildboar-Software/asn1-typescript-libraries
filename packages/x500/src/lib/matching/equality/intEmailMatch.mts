import { ASN1CharactersError, ASN1Element, ASN1Error } from "@wildboar/asn1";
import type { AttributeType } from "../../modules/InformationFramework/index.mjs";
import { prepString } from "../../utils/prepString.mjs";
import { caseIgnoreMatchTyped } from "./caseIgnoreMatch.mjs";
import { dnsNameMatchTyped, prepareDnsAssertion } from "./dnsNameMatch.mjs";
import {
    createEqualityMatcher,
    MATCH_FLAG_CONSTANT_TIME,
    MATCH_FLAG_DEBUG,
    type Matcher,
    type TypedEquationFunction,
} from "../../types/matching.mjs";

/**
 * Local-part and domain-part. `intEmailMatchTyped` expects both to be
 * prepared by `normalizeIntEmailMatchAssertion`.
 */
export type PreparedIntEmail = readonly [local: string, domain: string];

/**
 * Split on the last `@`. `undefined` means the address has no
 * local-part or no domain-part.
 */
function splitIntEmail (raw: string): PreparedIntEmail | undefined {
    const at = raw.lastIndexOf("@");
    if (at <= 0 || at >= raw.length - 1) {
        return undefined;
    }
    return [ raw.slice(0, at), raw.slice(at + 1) ];
}

/**
 * Prepare the local-part as for `caseIgnoreMatch` and the domain-part
 * as for `dnsNameMatch`. A part that cannot be prepared throws.
 */
export
function normalizeIntEmailMatchAssertion (
    assertion: PreparedIntEmail,
    el?: ASN1Element,
): PreparedIntEmail {
    const local = prepString(assertion[0], { caseFold: true });
    if (local === undefined) {
        throw new ASN1CharactersError(
            "intEmailMatch assertion failed string preparation",
            el,
        );
    }
    return [ local, prepareDnsAssertion(assertion[1], el) ];
}

/**
 * Split on the last `@` and prepare both parts. `undefined` means
 * the address has no local-part or no domain-part, which is FALSE.
 * A local-part or domain that cannot be prepared throws.
 */
function prepareIntEmail (raw: string): PreparedIntEmail | undefined {
    const split = splitIntEmail(raw);
    return split && normalizeIntEmailMatchAssertion(split);
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
    getEqualityMatcher?: (attributeType: AttributeType) => Matcher | undefined,
    flags: number = 0,
): boolean | undefined {
    const presented = typeof assertion === "string"
        ? prepareIntEmail(assertion)
        : ASN1Element.isElement(assertion)
            ? prepareIntEmail(assertion.utf8String)
            : assertion;
    if (!presented) {
        if (flags & MATCH_FLAG_DEBUG) {
            console.error(
                "@wildboar/x500: debug: intEmailMatch: assertion is not an IntEmail",
            );
        }
        return false;
    }
    const stored = typeof value === "string" ? value : value.utf8String;
    // The domain cannot contain `@`, so the last `@` is the separator.
    const vAt: number = stored.lastIndexOf("@");
    if (vAt <= 0 || vAt >= stored.length - 1) {
        if (flags & MATCH_FLAG_DEBUG) {
            console.error(
                "@wildboar/x500: debug: intEmailMatch: stored value is not an IntEmail",
            );
        }
        return false;
    }
    const localsMatch = caseIgnoreMatchTyped(
        presented[0],
        stored.slice(0, vAt),
        getEqualityMatcher,
        flags,
    );
    if (localsMatch !== true && !(flags & MATCH_FLAG_CONSTANT_TIME)) {
        return localsMatch;
    }
    const domainsMatch = dnsNameMatchTyped(
        presented[1],
        stored.slice(vAt + 1),
        getEqualityMatcher,
        flags,
    );
    if (localsMatch === undefined || domainsMatch === undefined) {
        return undefined;
    }
    return localsMatch && domainsMatch;
}

intEmailMatchTyped satisfies TypedEquationFunction<PreparedIntEmail | string | ASN1Element>;

/**
 * Split the presented address into its local-part and domain-part
 * without preparing them. A missing local-part or domain-part is a
 * malformed assertion. Returning the raw string would send it through
 * `prepareIntEmail` again.
 */
export
function decodeIntEmailMatchAssertion (el: ASN1Element): PreparedIntEmail {
    const split = splitIntEmail(el.utf8String);
    if (!split) {
        throw new ASN1Error("intEmailMatch assertion is not an IntEmail", el);
    }
    return split;
}

/**
 * `intEmailMatch` as a `Matcher`.
 * `MATCH_FLAG_ASSERTION_NORMALIZED` skips preparation of the assertion.
 */
export
const intEmailMatch: Matcher = createEqualityMatcher(
    decodeIntEmailMatchAssertion,
    intEmailMatchTyped,
    undefined,
    false,
    normalizeIntEmailMatchAssertion,
);

export default intEmailMatch;
