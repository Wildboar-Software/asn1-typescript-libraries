/* eslint-disable */
import {
    ASN1Element as _Element,
    OCTET_STRING,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary EUI64
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EUI64  ::=  OCTET STRING (SIZE(8))
 * ```
 */
export
type EUI64 = OCTET_STRING; // OctetStringType

/**
 * @summary Decodes an ASN.1 element into a(n) EUI64
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_EUI64 = (el: _Element): EUI64 => {
    const value = $._decodeOctetString(el);
    if (value.length < 8 || value.length > 8) {
        throw new ASN1SizeError("EUI64 violates SIZE constraint");
    }
    return value;
};

/**
 * @summary Encodes a(n) EUI64 into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EUI64, encoded as an ASN.1 Element.
 */
export const _encode_EUI64 = $._encodeOctetString;


/* eslint-enable */
