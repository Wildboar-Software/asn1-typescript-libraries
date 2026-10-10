/* eslint-disable */
import {
    ASN1Element as _Element,
    OCTET_STRING,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary RAC
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RAC  ::=  OCTET STRING (SIZE(2))
 * ```
 */
export
type RAC = OCTET_STRING; // OctetStringType

/**
 * @summary Decodes an ASN.1 element into a(n) RAC
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_RAC = (el: _Element): RAC => {
    const value = $._decodeOctetString(el);
    if (value.length < 2 || value.length > 2) {
        throw new ASN1SizeError("RAC violates SIZE constraint");
    }
    return value;
};

/**
 * @summary Encodes a(n) RAC into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RAC, encoded as an ASN.1 Element.
 */
export const _encode_RAC = $._encodeOctetString;


/* eslint-enable */
