/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1SizeError,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary Time
 * @description
 *
 * Four octets coded according to IETF RFC 3588.
 *
 * (3GPP TS 29.002 V19.1.0 clause 17.7.8).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Time  ::=  OCTET STRING (SIZE (4))
 * ```
 */
export
type Time = OCTET_STRING; // OctetStringType

/**
 * @summary Decodes an ASN.1 element into a(n) Time
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_Time = (el: _Element): Time => {
    const value = $._decodeOctetString(el);
    if (value.length < 4 || value.length > 4) {
        throw new ASN1SizeError("Time violates SIZE constraint");
    }
    return value;
};

/**
 * @summary Encodes a(n) Time into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Time, encoded as an ASN.1 Element.
 */
export const _encode_Time = $._encodeOctetString;


/* eslint-enable */
