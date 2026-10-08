/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1SizeError,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ZoneCode
 * @description
 *
 * Identifies location, routing, or tracking areas into which the subscriber is
 * allowed or not allowed to roam (regional subscription). Internal structure in
 * 3GPP TS 23.003. Two octets.
 *
 * (3GPP TS 29.002 V19.1.0 clauses 7.6.2.28 and 17.7.1).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ZoneCode  ::=  OCTET STRING (SIZE (2))
 * ```
 */
export
type ZoneCode = OCTET_STRING; // OctetStringType

/**
 * @summary Decodes an ASN.1 element into a(n) ZoneCode
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_ZoneCode = (el: _Element): ZoneCode => {
    const value = $._decodeOctetString(el);
    if (value.length < 2 || value.length > 2) {
        throw new ASN1SizeError("ZoneCode violates SIZE constraint");
    }
    return value;
};

/**
 * @summary Encodes a(n) ZoneCode into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ZoneCode, encoded as an ASN.1 Element.
 */
export const _encode_ZoneCode = $._encodeOctetString;


/* eslint-enable */
