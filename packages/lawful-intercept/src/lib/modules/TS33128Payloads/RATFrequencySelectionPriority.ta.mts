/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER,
    ASN1OverflowError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary RATFrequencySelectionPriority
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RATFrequencySelectionPriority  ::=  INTEGER (1..256)
 * ```
 */
export
type RATFrequencySelectionPriority = INTEGER;
export const _decode_RATFrequencySelectionPriority: $.ASN1Decoder<RATFrequencySelectionPriority> = (el: _Element): RATFrequencySelectionPriority => {
    const value = $._decodeInteger(el);
    const _n = typeof value === "bigint" ? value : BigInt(value);
    if (_n < 1n || _n > 256n) {
        throw new ASN1OverflowError("RATFrequencySelectionPriority violates INTEGER range");
    }
    return value;
};
export const _encode_RATFrequencySelectionPriority: $.ASN1Encoder<RATFrequencySelectionPriority> = $._encodeInteger;


/* eslint-enable */
