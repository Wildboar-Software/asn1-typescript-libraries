/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1SizeError,
    OCTET_STRING,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary AES_IV
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AES-IV  ::=  OCTET STRING (SIZE(16))
 * ```
 */
export
type AES_IV = OCTET_STRING; // OctetStringType

/**
 * @summary Decodes an ASN.1 element into a(n) AES_IV
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_AES_IV = (el: _Element): AES_IV => {
    const value = $._decodeOctetString(el);
    if (value.length !== 16) {
        throw new ASN1SizeError("AES_IV violates SIZE constraint");
    }
    return value;
};

/**
 * @summary Encodes a(n) AES_IV into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AES_IV, encoded as an ASN.1 Element.
 */
export const _encode_AES_IV = $._encodeOctetString;


/* eslint-enable */
