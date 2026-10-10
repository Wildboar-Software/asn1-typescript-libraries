/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1SizeError,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary Vertical_Accuracy
 * @description
 *
 * bit 8 = 0; bits 7–1 = 7-bit Vertical Uncertainty Code as in 3GPP TS 23.032,
 * 67% confidence (3GPP TS 29.002 V19.1.0 clauses 7.6.11.8 and 17.7.13).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Vertical-Accuracy  ::=  OCTET STRING (SIZE (1))
 * ```
 */
export
type Vertical_Accuracy = OCTET_STRING; // OctetStringType

/**
 * @summary Decodes an ASN.1 element into a(n) Vertical_Accuracy
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_Vertical_Accuracy = (el: _Element): Vertical_Accuracy => {
    const value = $._decodeOctetString(el);
    if (value.length < 1 || value.length > 1) {
        throw new ASN1SizeError("Vertical_Accuracy violates SIZE constraint");
    }
    return value;
};

/**
 * @summary Encodes a(n) Vertical_Accuracy into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Vertical_Accuracy, encoded as an ASN.1 Element.
 */
export const _encode_Vertical_Accuracy = $._encodeOctetString;


/* eslint-enable */
