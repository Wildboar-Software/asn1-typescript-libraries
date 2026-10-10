/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1SizeError,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary VSTK_RAND
 * @description
 *
 * 5 octets: 36-bit value in bit 7 of octet 1 to bit 4 of octet 5; bits 3–0 of
 * octet 5 padded with zeros (3GPP TS 29.002 V19.1.0 clause 17.7.12).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * VSTK-RAND  ::=  OCTET STRING (SIZE (5))
 * ```
 */
export
type VSTK_RAND = OCTET_STRING; // OctetStringType

/**
 * @summary Decodes an ASN.1 element into a(n) VSTK_RAND
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_VSTK_RAND = (el: _Element): VSTK_RAND => {
    const value = $._decodeOctetString(el);
    if (value.length !== 5) {
        throw new ASN1SizeError("VSTK_RAND violates SIZE constraint");
    }
    return value;
};

/**
 * @summary Encodes a(n) VSTK_RAND into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The VSTK_RAND, encoded as an ASN.1 Element.
 */
export const _encode_VSTK_RAND = $._encodeOctetString;


/* eslint-enable */
