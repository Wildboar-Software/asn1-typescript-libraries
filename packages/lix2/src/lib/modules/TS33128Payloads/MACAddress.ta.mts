/* eslint-disable */
import {
    ASN1Element as _Element,
    OCTET_STRING,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary MACAddress
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MACAddress  ::=  OCTET STRING (SIZE(6))
 * ```
 */
export
type MACAddress = OCTET_STRING; // OctetStringType

/**
 * @summary Decodes an ASN.1 element into a(n) MACAddress
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_MACAddress = (el: _Element): MACAddress => {
    const value = $._decodeOctetString(el);
    if (value.length < 6 || value.length > 6) {
        throw new ASN1SizeError("MACAddress violates SIZE constraint");
    }
    return value;
};

/**
 * @summary Encodes a(n) MACAddress into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MACAddress, encoded as an ASN.1 Element.
 */
export const _encode_MACAddress = $._encodeOctetString;


/* eslint-enable */
