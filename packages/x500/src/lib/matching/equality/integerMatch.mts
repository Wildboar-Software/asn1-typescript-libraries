import { Buffer } from "node:buffer";
import {
    ASN1Construction,
    ASN1ConstructionError,
    ASN1PaddingError,
    ASN1SizeError,
    type ASN1Element,
    type INTEGER,
} from "@wildboar/asn1";
import type { AttributeType } from "../../modules/InformationFramework/index.mjs";
import { approximatelyEqualBigInts } from "../approximate.mjs";
import { readInteger } from "../readValue.mjs";
import { bytesEqual } from "../constantTime.mjs";
import {
    createEqualityMatcher,
    MATCH_FLAG_APPROXIMATE,
    MATCH_FLAG_ASSERTION_VALIDATED,
    MATCH_FLAG_CONSTANT_TIME,
    MATCH_FLAG_VALUE_VALIDATED,
    type Matcher,
    type TypedEquationFunction,
} from "../../types/matching.mjs";

/**
 * Rec. ITU-T X.520 (10/2019), clause 8.2.2 `integerMatch`.
 *
 * TRUE iff a presented INTEGER or ENUMERATED value equals the
 * stored INTEGER or ENUMERATED value.
 *
 * @param assertion Presented INTEGER.
 * @param value Stored INTEGER, or that integer already decoded.
 */
export
function integerMatchTyped (
    assertion: INTEGER,
    value: INTEGER | ASN1Element,
    _getEqualityMatcher?: (attributeType: AttributeType) => Matcher | undefined,
    flags: number = 0,
): boolean | undefined {
    const a = readInteger(assertion);
    const v = readInteger(value);
    if (flags & MATCH_FLAG_APPROXIMATE) {
        return approximatelyEqualBigInts(a, v);
    }
    return a === v;
}

integerMatchTyped satisfies TypedEquationFunction<INTEGER>;

/**
 * Validates an encoded INTEGER assertion without decoding it.
 *
 * X.690 requires INTEGER content octets to be the minimal two's
 * complement encoding, so a valid encoding of a given integer is
 * unique. Rejecting non-minimal assertions is what makes the
 * octet-for-octet comparison in `integerMatch` correct.
 *
 * @param assertion Encoded INTEGER (or ENUMERATED) assertion.
 * @param flags `MATCH_FLAG_ASSERTION_VALIDATED` skips validation.
 * @returns The content octets of the assertion.
 */
function integerAssertionOctets (assertion: ASN1Element, flags: number = 0): Uint8Array {
    if (flags & MATCH_FLAG_ASSERTION_VALIDATED) {
        return assertion.value;
    }
    if (assertion.construction !== ASN1Construction.primitive) {
        throw new ASN1ConstructionError("INTEGER cannot be constructed.", assertion);
    }
    const octets = assertion.value;
    if (octets.length === 0) {
        throw new ASN1SizeError("INTEGER or ENUMERATED encoded on zero bytes", assertion);
    }
    if (
        octets.length > 1
        && (
            (octets[0] === 0x00 && octets[1] < 0x80)
            || (octets[0] === 0xFF && octets[1] >= 0x80)
        )
    ) {
        throw new ASN1PaddingError("Unnecessary padding bytes on INTEGER or ENUMERATED.", assertion);
    }
    return octets;
}

/**
 * Compares the content octets of a validated assertion with those of
 * a stored INTEGER or ENUMERATED value. A non-minimally encoded value
 * cannot equal a minimally encoded assertion, so the value is not
 * validated, except for approximate matching, which decodes it.
 * `MATCH_FLAG_VALUE_VALIDATED` skips that validation.
 */
function integerMatchOctets (
    assertion: Uint8Array,
    value: ASN1Element,
    _getEqualityMatcher?: (attributeType: AttributeType) => Matcher | undefined,
    flags: number = 0,
): boolean | undefined {
    const equal = bytesEqual(assertion, value.value, flags & MATCH_FLAG_CONSTANT_TIME);
    if (equal || !(flags & MATCH_FLAG_APPROXIMATE)) {
        return equal;
    }
    const vOctets = (flags & MATCH_FLAG_VALUE_VALIDATED)
        ? value.value
        : integerAssertionOctets(value);
    const aVal = BigInt.asIntN(assertion.length * 8, BigInt("0x" + Buffer.from(assertion).toString("hex")));
    const vVal = BigInt.asIntN(vOctets.length * 8, BigInt("0x" + Buffer.from(vOctets).toString("hex")));
    return approximatelyEqualBigInts(aVal, vVal);
}

integerMatchOctets satisfies TypedEquationFunction<Uint8Array>;

/**
 * `integerMatch` as a `Matcher`. Neither the assertion nor the stored
 * values are decoded: content octets are compared directly.
 */
export
const integerMatch: Matcher = createEqualityMatcher(
    integerAssertionOctets,
    integerMatchOctets,
);

export default integerMatch;
