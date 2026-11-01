import { Buffer } from "node:buffer";
import { ASN1Element } from "@wildboar/asn1";
import {
    createEqualityMatcher,
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
): boolean | undefined {
    const stored = ASN1Element.isElement(value) ? value.octetString : value;
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
