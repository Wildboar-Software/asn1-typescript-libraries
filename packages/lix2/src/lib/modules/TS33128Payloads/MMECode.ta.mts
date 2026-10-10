/* eslint-disable */
import {
    ASN1Element as _Element,
    OCTET_STRING,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary MMECode
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MMECode  ::=  OCTET STRING (SIZE(1))
 * ```
 */
export
type MMECode = OCTET_STRING; // OctetStringType

/**
 * @summary Decodes an ASN.1 element into a(n) MMECode
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_MMECode = (el: _Element): MMECode => {
    const value = $._decodeOctetString(el);
    if (value.length < 1 || value.length > 1) {
        throw new ASN1SizeError("MMECode violates SIZE constraint");
    }
    return value;
};

/**
 * @summary Encodes a(n) MMECode into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MMECode, encoded as an ASN.1 Element.
 */
export const _encode_MMECode = $._encodeOctetString;


/* eslint-enable */
