/* eslint-disable */
import {
    ASN1Element as _Element,
    OCTET_STRING,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary IPv6Address
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IPv6Address  ::=  OCTET STRING (SIZE(16))
 * ```
 */
export
type IPv6Address = OCTET_STRING; // OctetStringType

/**
 * @summary Decodes an ASN.1 element into a(n) IPv6Address
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_IPv6Address = (el: _Element): IPv6Address => {
    const value = $._decodeOctetString(el);
    if (value.length < 16 || value.length > 16) {
        throw new ASN1SizeError("IPv6Address violates SIZE constraint");
    }
    return value;
};

/**
 * @summary Encodes a(n) IPv6Address into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IPv6Address, encoded as an ASN.1 Element.
 */
export const _encode_IPv6Address = $._encodeOctetString;


/* eslint-enable */
