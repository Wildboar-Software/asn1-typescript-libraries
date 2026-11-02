import { Buffer } from "node:buffer";
import type { ASN1Element, BIT_STRING } from "@wildboar/asn1";
import type { AttributeType } from "../../modules/InformationFramework/index.mjs";
import { bytesEqual } from "../constantTime.mjs";
import {
    createEqualityMatcher,
    MATCH_FLAG_CONSTANT_TIME,
    type Matcher,
    type TypedEquationFunction,
} from "../../types/matching.mjs";

/**
 * Rec. ITU-T X.520 (10/2019), clause 8.2.4 `bitStringMatch`.
 *
 * TRUE iff both BIT STRING values have the same number of bits and
 * the bits match bitwise. If the syntax is defined with a
 * `NamedBitList`, trailing zero bits in either value are ignored.
 * Constructed encodings are deconstructed while reading.
 *
 * @param assertion Presented bits.
 * @param value Stored `BIT STRING`, or those bits already decoded.
 */
export
function bitStringMatchTyped (
    assertion: BIT_STRING,
    value: BIT_STRING | ASN1Element,
    _getEqualityMatcher?: (attributeType: AttributeType) => Matcher | undefined,
    flags: number = 0,
): boolean | undefined {
    const stored = value instanceof Uint8ClampedArray ? value : value.bitString;
    return bytesEqual(
        Buffer.from(assertion.buffer, assertion.byteOffset, assertion.byteLength),
        Buffer.from(stored.buffer, stored.byteOffset, stored.byteLength),
        flags & MATCH_FLAG_CONSTANT_TIME,
    );
}

bitStringMatchTyped satisfies TypedEquationFunction<BIT_STRING>;

/**
 * `bitStringMatch` as a `Matcher`.
 */
export
const bitStringMatch: Matcher = createEqualityMatcher(
    (el) => el.bitString,
    bitStringMatchTyped,
);

export default bitStringMatch;
