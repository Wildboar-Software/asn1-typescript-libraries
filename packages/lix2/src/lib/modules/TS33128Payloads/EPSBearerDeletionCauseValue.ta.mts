/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER,
    ASN1OverflowError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary EPSBearerDeletionCauseValue
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EPSBearerDeletionCauseValue  ::=  INTEGER (0..255)
 * ```
 */
export
type EPSBearerDeletionCauseValue = INTEGER;

/**
 * @summary Decodes an ASN.1 element into a(n) EPSBearerDeletionCauseValue
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_EPSBearerDeletionCauseValue = (el: _Element): EPSBearerDeletionCauseValue => {
    const value = $._decodeInteger(el);
    const _n = typeof value === "bigint" ? value : BigInt(value);
    if (_n < 0n || _n > 255n) {
        throw new ASN1OverflowError("EPSBearerDeletionCauseValue violates INTEGER range constraint");
    }
    return value;
};

/**
 * @summary Encodes a(n) EPSBearerDeletionCauseValue into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EPSBearerDeletionCauseValue, encoded as an ASN.1 Element.
 */
export const _encode_EPSBearerDeletionCauseValue = $._encodeInteger;


/* eslint-enable */
