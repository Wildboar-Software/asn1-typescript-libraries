/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER,
    ASN1OverflowError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary FiveGTMSI
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FiveGTMSI  ::=  INTEGER (0..4294967295)
 * ```
 */
export
type FiveGTMSI = INTEGER;

/**
 * @summary Decodes an ASN.1 element into a(n) FiveGTMSI
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_FiveGTMSI = (el: _Element): FiveGTMSI => {
    const value = $._decodeInteger(el);
    const _n = typeof value === "bigint" ? value : BigInt(value);
    if (_n < 0n || _n > 4294967295n) {
        throw new ASN1OverflowError("FiveGTMSI violates INTEGER range constraint");
    }
    return value;
};

/**
 * @summary Encodes a(n) FiveGTMSI into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The FiveGTMSI, encoded as an ASN.1 Element.
 */
export const _encode_FiveGTMSI = $._encodeInteger;


/* eslint-enable */
