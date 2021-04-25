import EqualityMatcher from "../../types/EqualityMatcher";
import { ASN1Construction, ASN1Element, unpackBits } from "asn1-ts";

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
        for (let i = 0; i < (assertion.value.length - 1); i++) {
            if (assertion.value[i] !== value.value[i]) {
                return false;
            }
        }

        /**
         * If there are no trailing bits, we can just compare the last byte
         * directly.
         */
        if (assertion.value[0] === 0) {
            return (assertion.value[assertion.value.length - 1] === value.value[value.value.length - 1]);
        } else {
            const lastBits = function (lastByte: number): Uint8ClampedArray {
                return unpackBits(new Uint8Array([ lastByte ])).slice(0, assertion.value[0]);
            };
            const abits = lastBits(assertion.value[assertion.value.length - 1]);
            const vbits = lastBits(value.value[value.value.length - 1]);
            for (let i = 0; i < abits.length; i++) {
                if (abits[i] !== vbits[i]) {
                    return false;
                }
            }
            return true;
        }
    }

    const a = assertion.bitString;
    const b = value.bitString;
    if (a.length !== b.length) {
        return false;
    }
    for (let i = 0; i < a.length; i++) {
        if (a[i] !== b[i]) {
            return false;
        }
    }
    return true;
}

export default bitStringMatch;
