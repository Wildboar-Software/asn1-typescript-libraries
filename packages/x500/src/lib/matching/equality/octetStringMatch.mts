import { Buffer } from "node:buffer";
import { ASN1Element } from "@wildboar/asn1";
import type { AttributeType } from "../../modules/InformationFramework/index.mjs";
import { approximatelyEqualBytes } from "../approximate.mjs";
import {
    createEqualityMatcher,
    MATCH_FLAG_APPROXIMATE,
    type Matcher,
    type TypedEquationFunction,
} from "../../types/matching.mjs";

/**
 * Rec. ITU-T X.520 (10/2019), clause 8.2.5 `octetStringMatch`.
 *
 * TRUE iff the OCTET STRING values have the same length and
 * identical corresponding octets.
 *
 * @param assertion Presented octets.
 * @param value Stored `OCTET STRING`, or those octets already decoded.
 */
export
function octetStringMatchTyped (
    assertion: Uint8Array,
    value: Uint8Array | ASN1Element,
    _getEqualityMatcher?: (attributeType: AttributeType) => Matcher | undefined,
    flags: number = 0,
): boolean | undefined {
    const stored = ASN1Element.isElement(value) ? value.octetString : value;
    if (flags & MATCH_FLAG_APPROXIMATE) {
        return approximatelyEqualBytes(assertion, stored);
    }
    return Buffer.compare(assertion, stored) === 0;
}

octetStringMatchTyped satisfies TypedEquationFunction<Uint8Array>;

/**
 * `octetStringMatch` as a `Matcher`.
 */
export
const octetStringMatch: Matcher = createEqualityMatcher(
    (el) => el.octetString,
    octetStringMatchTyped,
);

export default octetStringMatch;
