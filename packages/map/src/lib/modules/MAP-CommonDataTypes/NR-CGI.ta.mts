/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1SizeError,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary NR_CGI
 * @description
 *
 * NR Cell Global Identification. Size 8 octets, coded as described in 3GPP TS
 * 38.413.
 *
 * (3GPP TS 29.002 V19.1.0 clause 17.7.8).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NR-CGI  ::=  OCTET STRING (SIZE (8))
 * ```
 */
export
type NR_CGI = OCTET_STRING; // OctetStringType

/**
 * @summary Decodes an ASN.1 element into a(n) NR_CGI
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_NR_CGI = (el: _Element): NR_CGI => {
    const value = $._decodeOctetString(el);
    if (value.length < 8 || value.length > 8) {
        throw new ASN1SizeError("NR_CGI violates SIZE constraint");
    }
    return value;
};

/**
 * @summary Encodes a(n) NR_CGI into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NR_CGI, encoded as an ASN.1 Element.
 */
export const _encode_NR_CGI = $._encodeOctetString;


/* eslint-enable */
