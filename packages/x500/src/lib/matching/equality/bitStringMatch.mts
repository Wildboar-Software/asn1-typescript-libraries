import EqualityMatcher from "../../types/EqualityMatcher.mjs";
import { ASN1Construction, ASN1Element, unpackBits } from "asn1-ts";
import { compareBitStrings } from "../../comparators/compareBitStrings.mjs";

function lastBits (
    numberOfTrailingBits: number,
    lastByte: number,
): Uint8ClampedArray {
    return unpackBits(new Uint8Array([ lastByte ]))
        .slice(0, -numberOfTrailingBits);
}


export
const bitStringMatch: EqualityMatcher = (
    assertion: ASN1Element,
    value: ASN1Element,
): boolean => {
    if (
        (assertion.construction === ASN1Construction.primitive)
        && (value.construction === ASN1Construction.primitive)
    ) {
        /**
         * Short-circuit if the bit strings are obviously not the same.
         */
        if (
            (assertion.value.length !== value.value.length)
            || (assertion.value[0] !== value.value[0]) // Different number of padding bits.
        ) {
            return false;
        }

        /**
         * We can compare whole bytes at a time until the final byte, which
         * might have trailing bits, which can be 1 or 0 in BER, so we can't
         * trust that the final byte will be the same to encode the same value
         * if trailing bits are present.
         */
        const wholeBytesComparison = Buffer.compare(
            assertion.value.subarray(0, -1),
            value.value.subarray(0, -1),
        );
        if (wholeBytesComparison) {
            return false;
        }

        /**
         * If there are no trailing bits, we can just compare the last byte
         * directly.
         */
        const numberOfTrailingBits = assertion.value[0];
        if (numberOfTrailingBits === 0) {
            return (assertion.value[assertion.value.length - 1] === value.value[value.value.length - 1]);
        } else {
            const abits = lastBits(numberOfTrailingBits, assertion.value[assertion.value.length - 1]);
            const vbits = lastBits(numberOfTrailingBits, value.value[value.value.length - 1]);
            const trailingBitsCompare = Buffer.compare(
                Buffer.from(abits.buffer),
                Buffer.from(vbits.buffer),
            );
            return (trailingBitsCompare === 0);
        }
    }

    const a = assertion.bitString;
    const b = value.bitString;
    return compareBitStrings(a, b);
}

export default bitStringMatch;
