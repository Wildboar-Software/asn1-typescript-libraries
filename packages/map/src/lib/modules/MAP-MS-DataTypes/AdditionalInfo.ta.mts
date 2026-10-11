/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1SizeError,
    BIT_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary AdditionalInfo
 * @description
 *
 * VGCS/VBS additional information as specified in 3GPP TS 43.068 (3GPP TS
 * 29.002 V19.1.0 clause 17.7.1).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AdditionalInfo  ::=  BIT STRING (SIZE (1..136))
 * ```
 */
export
type AdditionalInfo = BIT_STRING;

/**
 * @summary Decodes an ASN.1 element into a(n) AdditionalInfo
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_AdditionalInfo = (el: _Element): AdditionalInfo => {
    const value = $._decodeBitString(el);
    if (value.length < 1 || value.length > 136) {
        throw new ASN1SizeError("AdditionalInfo violates SIZE constraint");
    }
    return value;
};

/**
 * @summary Encodes a(n) AdditionalInfo into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AdditionalInfo, encoded as an ASN.1 Element.
 */
export const _encode_AdditionalInfo = $._encodeBitString;


/* eslint-enable */
