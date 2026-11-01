import {
    ASN1Construction,
    ASN1ConstructionError,
    ASN1PaddingError,
    ASN1SizeError,
    type ASN1Element,
    type INTEGER,
} from "@wildboar/asn1";
import { readInteger } from "../readValue.mjs";
import {
    createOrderingMatcher,
    type Matcher,
    type TypedOrderingFunction,
} from "../../types/matching.mjs";

/**
 * Throws unless `el` is a primitive INTEGER encoded on the fewest octets
 * possible, as ITU-T X.690, clause 8.3.2 requires.
 */
function validateEncodedInteger (el: ASN1Element): void {
    if (el.construction !== ASN1Construction.primitive) {
        throw new ASN1ConstructionError("INTEGER cannot be constructed.", el);
    }
    const bytes = el.value;
    if (bytes.length === 0) {
        throw new ASN1SizeError("INTEGER encoded on zero bytes", el);
    }
    if (
        bytes.length > 1
        && (
            (bytes[0] === 0x00 && bytes[1] < 0x80)
            || (bytes[0] === 0xFF && bytes[1] >= 0x80)
        )
    ) {
        throw new ASN1PaddingError("Unnecessary padding bytes on INTEGER.", el);
    }
}

/**
 * Compares two minimally-encoded INTEGERs without decoding them.
 *
 * A negative value is less than a non-negative one; among values of the
 * same sign, more octets mean a larger magnitude; and two's complement
 * values of the same sign and width order the same way as their unsigned
 * octets.
 *
 * @returns A negative number, zero, or a positive number as `a` is less
 *  than, equal to, or greater than `b`.
 */
function compareEncodedIntegers (a: Uint8Array, b: Uint8Array): number {
    const aNegative = a[0] >= 0x80;
    if (aNegative !== (b[0] >= 0x80)) {
        return aNegative ? -1 : 1;
    }
    const len = a.length;
    if (len !== b.length) {
        return ((len > b.length) !== aNegative) ? 1 : -1;
    }
    for (let i = 0; i < len; i++) {
        const diff = a[i] - b[i];
        if (diff !== 0) {
            return diff;
        }
    }
    return 0;
}

/**
 * Rec. ITU-T X.520 (10/2019), clause 8.2.3 `integerOrderingMatch`.
 *
 * Signed comparison of a presented INTEGER with a stored INTEGER.
 * Positive when the stored value is less than the presented value.
 * When both are encoded, their content octets are compared directly
 * without decoding either. Otherwise, the difference is taken in `bigint`
 * so values outside `Number.MAX_SAFE_INTEGER` keep their order.
 *
 * @param assertion Presented INTEGER, encoded or already decoded. An encoded
 *  assertion is not validated here, so the caller must have already checked
 *  that it is a primitive, minimally-encoded INTEGER.
 * @param value Stored INTEGER, encoded or already decoded.
 */
export
function integerOrderingMatchTyped (
    assertion: INTEGER | ASN1Element,
    value: INTEGER | ASN1Element,
): number | undefined {
    if (typeof assertion === "object" && typeof value === "object") {
        validateEncodedInteger(value);
        return compareEncodedIntegers(assertion.value, value.value);
    }
    return Number(readInteger(assertion) - readInteger(value));
}

integerOrderingMatchTyped satisfies TypedOrderingFunction<INTEGER>;

/**
 * `integerOrderingMatch` as a `Matcher`. TRUE iff the stored INTEGER
 * is less than the presented INTEGER. `MATCH_FLAG_ORDERING_GREATER`
 * and `MATCH_FLAG_ORDERING_OR_EQUAL` select the other orderings.
 */
export
const integerOrderingMatch: Matcher = createOrderingMatcher<INTEGER | ASN1Element>(
    (el) => {
        validateEncodedInteger(el);
        return el;
    },
    integerOrderingMatchTyped,
);

export default integerOrderingMatch;
