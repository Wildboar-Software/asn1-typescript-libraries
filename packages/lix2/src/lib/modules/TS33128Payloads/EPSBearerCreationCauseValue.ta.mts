/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER,
    ASN1OverflowError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary EPSBearerCreationCauseValue
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EPSBearerCreationCauseValue  ::=  INTEGER (0..255)
 * ```
 */
export
type EPSBearerCreationCauseValue = INTEGER;

/**
 * @summary Decodes an ASN.1 element into a(n) EPSBearerCreationCauseValue
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_EPSBearerCreationCauseValue = (el: _Element): EPSBearerCreationCauseValue => {
    const value = $._decodeInteger(el);
    const _n = typeof value === "bigint" ? value : BigInt(value);
    if (_n < 0n || _n > 255n) {
        throw new ASN1OverflowError("EPSBearerCreationCauseValue violates INTEGER range constraint");
    }
    return value;
};

/**
 * @summary Encodes a(n) EPSBearerCreationCauseValue into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EPSBearerCreationCauseValue, encoded as an ASN.1 Element.
 */
export const _encode_EPSBearerCreationCauseValue = $._encodeInteger;


/* eslint-enable */
