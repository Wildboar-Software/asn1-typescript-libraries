/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1SizeError,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary E_UTRAN_CGI
 * @description
 *
 * E-UTRAN Cell Global Identification. Size 7 octets, coded as described in 3GPP
 * TS 29.118.
 *
 * (3GPP TS 29.002 V19.1.0 clause 17.7.8).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * E-UTRAN-CGI  ::=  OCTET STRING (SIZE (7))
 * ```
 */
export
type E_UTRAN_CGI = OCTET_STRING; // OctetStringType

/**
 * @summary Decodes an ASN.1 element into a(n) E_UTRAN_CGI
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_E_UTRAN_CGI = (el: _Element): E_UTRAN_CGI => {
    const value = $._decodeOctetString(el);
    if (value.length < 7 || value.length > 7) {
        throw new ASN1SizeError("E_UTRAN_CGI violates SIZE constraint");
    }
    return value;
};

/**
 * @summary Encodes a(n) E_UTRAN_CGI into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The E_UTRAN_CGI, encoded as an ASN.1 Element.
 */
export const _encode_E_UTRAN_CGI = $._encodeOctetString;


/* eslint-enable */
