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
 * Offset of the first significant content octet of an encoded INTEGER.
 *
 * Rejects exactly what `ASN1Element.integer` rejects, which tolerates one
 * redundant sign octet in a two-octet encoding (e.g. `00 05`), so that
 * octet is skipped rather than rejected.
 */
function significantOffset (el: ASN1Element): number {
    if (el.construction !== ASN1Construction.primitive) {
        throw new ASN1ConstructionError("INTEGER cannot be constructed.", el);
    }
    const bytes = el.value;
    const len = bytes.length;
    if (len === 0) {
        throw new ASN1SizeError("INTEGER encoded on zero bytes", el);
    }
    if (len === 1) {
        return 0;
    }
    const b0 = bytes[0];
    const b1 = bytes[1];
    if ((b0 === 0x00 && b1 < 0x80) || (b0 === 0xFF && b1 >= 0x80)) {
        if (len > 2) {
            throw new ASN1PaddingError("Unnecessary padding bytes on INTEGER.", el);
        }
        return 1;
    }
    return 0;
}

/**
 * Compares two encoded INTEGERs without decoding them.
 *
 * Once the redundant sign octet is skipped, both encodings are minimal, so
 * a negative value is less than a non-negative one; among values of the same
 * sign, more octets mean a larger magnitude; and two's complement values of
 * the same sign and width order the same way as their unsigned octets.
 *
 * @returns A negative number, zero, or a positive number as `a` is less
 *  than, equal to, or greater than `b`.
 */
function compareEncodedIntegers (a: ASN1Element, b: ASN1Element): number {
    const aStart = significantOffset(a);
    const bStart = significantOffset(b);
    const aBytes = a.value;
    const bBytes = b.value;
    const aNegative = aBytes[aStart] >= 0x80;
    if (aNegative !== (bBytes[bStart] >= 0x80)) {
        return aNegative ? -1 : 1;
    }
    const aLen = aBytes.length - aStart;
    const bLen = bBytes.length - bStart;
    if (aLen !== bLen) {
        return ((aLen > bLen) !== aNegative) ? 1 : -1;
    }
    for (let i = 0; i < aLen; i++) {
        const diff = aBytes[aStart + i] - bBytes[bStart + i];
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
 * @param assertion Presented INTEGER, encoded or already decoded.
 * @param value Stored INTEGER, encoded or already decoded.
 */
export
function integerOrderingMatchTyped (
    assertion: INTEGER | ASN1Element,
    value: INTEGER | ASN1Element,
): number | undefined {
    if (typeof assertion === "object" && typeof value === "object") {
        return compareEncodedIntegers(assertion, value);
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
        significantOffset(el);
        return el;
    },
    integerOrderingMatchTyped,
);

export default integerOrderingMatch;
