import { Buffer } from "node:buffer";
import { ASN1Element } from "@wildboar/asn1";
import {
    createOrderingMatcher,
    type Matcher,
    type TypedOrderingFunction,
} from "../../types/matching.mjs";

/**
 * Rec. ITU-T X.520 (10/2019), clause 8.2.6
 * `octetStringOrderingMatch`.
 *
 * Octets are compared left-to-right, MSB to LSB within an octet.
 * The first differing bit decides order (0 precedes 1). If one
 * string is a prefix of the other, the shorter precedes the
 * longer. The signed result is negative when the presented octets
 * precede the stored octets.
 *
 * @param assertion Presented octets.
 * @param value Stored `OCTET STRING`, or those octets already decoded.
 */
export
function octetStringOrderingMatchTyped (
    assertion: Uint8Array,
    value: Uint8Array | ASN1Element,
): number | undefined {
    const stored = ASN1Element.isElement(value) ? value.octetString : value;
    return Buffer.compare(assertion, stored);
}

octetStringOrderingMatchTyped satisfies TypedOrderingFunction<Uint8Array>;

/**
 * `octetStringOrderingMatch` as a `Matcher`. TRUE iff the stored
 * octets precede the presented octets. `MATCH_FLAG_ORDERING_GREATER`
 * and `MATCH_FLAG_ORDERING_OR_EQUAL` select the other orderings.
 */
export
const octetStringOrderingMatch: Matcher = createOrderingMatcher(
    (el) => el.octetString,
    octetStringOrderingMatchTyped,
);

export default octetStringOrderingMatch;
