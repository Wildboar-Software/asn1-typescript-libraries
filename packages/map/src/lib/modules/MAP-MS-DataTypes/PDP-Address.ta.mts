/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1SizeError,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary PDP_Address
 * @description
 *
 * Address of the data protocol as in 3GPP TS 23.060. Octets follow 3GPP TS
 * 29.060: 1-7 octets X.25, 4 octets IPv4, 16 octets IPv6.
 *
 * (3GPP TS 29.002 V19.1.0 clauses 7.6.2.45 and 17.7.1).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PDP-Address  ::=  OCTET STRING (SIZE (1..16))
 * ```
 */
export
type PDP_Address = OCTET_STRING; // OctetStringType

/**
 * @summary Decodes an ASN.1 element into a(n) PDP_Address
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_PDP_Address = (el: _Element): PDP_Address => {
    const value = $._decodeOctetString(el);
    if (value.length < 1 || value.length > 16) {
        throw new ASN1SizeError("PDP_Address violates SIZE constraint");
    }
    return value;
};

/**
 * @summary Encodes a(n) PDP_Address into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PDP_Address, encoded as an ASN.1 Element.
 */
export const _encode_PDP_Address = $._encodeOctetString;


/* eslint-enable */
