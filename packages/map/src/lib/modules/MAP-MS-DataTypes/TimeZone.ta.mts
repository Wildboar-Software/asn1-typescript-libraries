/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1SizeError,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary TimeZone
 * @description
 *
 * Time zone of the visited-network location where the UE is attached, including
 * daylight-saving adjustment. 2..3 octets; details in 3GPP TS 29.272.
 *
 * (3GPP TS 29.002 V19.1.0 clauses 8.11.2.3 and 17.7.1).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TimeZone  ::=  OCTET STRING (SIZE (2..3))
 * ```
 */
export
type TimeZone = OCTET_STRING; // OctetStringType

/**
 * @summary Decodes an ASN.1 element into a(n) TimeZone
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_TimeZone = (el: _Element): TimeZone => {
    const value = $._decodeOctetString(el);
    if (value.length < 2 || value.length > 3) {
        throw new ASN1SizeError("TimeZone violates SIZE constraint");
    }
    return value;
};

/**
 * @summary Encodes a(n) TimeZone into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TimeZone, encoded as an ASN.1 Element.
 */
export const _encode_TimeZone = $._encodeOctetString;


/* eslint-enable */
