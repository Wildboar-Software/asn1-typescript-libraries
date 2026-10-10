/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER,
    ASN1OverflowError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary EPSBearerModificationCauseValue
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EPSBearerModificationCauseValue  ::=  INTEGER (0..255)
 * ```
 */
export
type EPSBearerModificationCauseValue = INTEGER;

/**
 * @summary Decodes an ASN.1 element into a(n) EPSBearerModificationCauseValue
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_EPSBearerModificationCauseValue = (el: _Element): EPSBearerModificationCauseValue => {
    const value = $._decodeInteger(el);
    const _n = typeof value === "bigint" ? value : BigInt(value);
    if (_n < 0n || _n > 255n) {
        throw new ASN1OverflowError("EPSBearerModificationCauseValue violates INTEGER range constraint");
    }
    return value;
};

/**
 * @summary Encodes a(n) EPSBearerModificationCauseValue into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EPSBearerModificationCauseValue, encoded as an ASN.1 Element.
 */
export const _encode_EPSBearerModificationCauseValue = $._encodeInteger;


/* eslint-enable */
