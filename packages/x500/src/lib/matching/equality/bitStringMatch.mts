import EqualityMatcher from "../../types/EqualityMatcher.mjs";
import { ASN1Construction, ASN1Element } from "@wildboar/asn1";
import { compareBitStrings } from "../../comparators/compareBitStrings.mjs";
import { Buffer } from "node:buffer";

function significantLastByte (unusedBits: number, lastByte: number): number {
    if (unusedBits === 0) {
        return lastByte;
    }
    const mask = (0xFF << unusedBits) & 0xFF;
    return lastByte & mask;
}

/**
 * Rec. ITU-T X.520 (10/2019), clause 8.2.4 `bitStringMatch`.
 *
 * TRUE iff both BIT STRING values have the same number of bits and
 * the bits match bitwise. Unused BER padding bits in the last
 * octet are ignored. NamedBitList trailing zeros are only omitted
 * when the attribute syntax defines a NamedBitList; this matcher
 * does not have that schema, so trailing content bits are compared.
 */
export
const bitStringMatch: EqualityMatcher = (
    assertion: ASN1Element,
    value: ASN1Element,
): boolean => {
    if (
        (assertion.construction === ASN1Construction.primitive)
        && (value.construction === ASN1Construction.primitive)
    ) {
        if (
            (assertion.value.length !== value.value.length)
            || (assertion.value[0] !== value.value[0])
        ) {
            return false;
        }
        const unusedBits = assertion.value[0];
        const wholeBytesComparison = Buffer.compare(
            assertion.value.subarray(1, -1),
            value.value.subarray(1, -1),
        );
        if (wholeBytesComparison) {
            return false;
        }
        const aLast = assertion.value[assertion.value.length - 1] ?? 0;
        const vLast = value.value[value.value.length - 1] ?? 0;
        return significantLastByte(unusedBits, aLast) === significantLastByte(unusedBits, vLast);
    }

    return compareBitStrings(assertion.bitString, value.bitString);
}

export default bitStringMatch;
