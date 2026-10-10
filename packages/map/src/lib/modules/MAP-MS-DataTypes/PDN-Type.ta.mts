/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1SizeError,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary PDN_Type
 * @description
 *
 * PDN type of an EPS APN configuration. One octet: bits 3-1 are `001` IPv4,
 * `010` IPv6, `011` IPv4v6, `100` IPv4_or_IPv6; bits 8-4 shall be zero. Details
 * in 3GPP TS 29.272.
 *
 * (3GPP TS 29.002 V19.1.0 clause 17.7.1).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PDN-Type  ::=  OCTET STRING (SIZE (1))
 * ```
 */
export
type PDN_Type = OCTET_STRING; // OctetStringType

/**
 * @summary Decodes an ASN.1 element into a(n) PDN_Type
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_PDN_Type = (el: _Element): PDN_Type => {
    const value = $._decodeOctetString(el);
    if (value.length < 1 || value.length > 1) {
        throw new ASN1SizeError("PDN_Type violates SIZE constraint");
    }
    return value;
};

/**
 * @summary Encodes a(n) PDN_Type into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PDN_Type, encoded as an ASN.1 Element.
 */
export const _encode_PDN_Type = $._encodeOctetString;


/* eslint-enable */
