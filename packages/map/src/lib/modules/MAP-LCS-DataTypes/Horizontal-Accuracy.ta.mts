/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1SizeError,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary Horizontal_Accuracy
 * @description
 *
 * bit 8 = 0; bits 7–1 = 7-bit Uncertainty Code as in 3GPP TS 23.032. Horizontal
 * error should be less than that with 67% confidence (3GPP TS 29.002 V19.1.0
 * clauses 7.6.11.8 and 17.7.13).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Horizontal-Accuracy  ::=  OCTET STRING (SIZE (1))
 * ```
 */
export
type Horizontal_Accuracy = OCTET_STRING; // OctetStringType

/**
 * @summary Decodes an ASN.1 element into a(n) Horizontal_Accuracy
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_Horizontal_Accuracy = (el: _Element): Horizontal_Accuracy => {
    const value = $._decodeOctetString(el);
    if (value.length < 1 || value.length > 1) {
        throw new ASN1SizeError("Horizontal_Accuracy violates SIZE constraint");
    }
    return value;
};

/**
 * @summary Encodes a(n) Horizontal_Accuracy into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Horizontal_Accuracy, encoded as an ASN.1 Element.
 */
export const _encode_Horizontal_Accuracy = $._encodeOctetString;


/* eslint-enable */
