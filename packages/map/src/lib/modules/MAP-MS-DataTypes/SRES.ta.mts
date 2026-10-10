/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1SizeError,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary SRES
 * @description
 *
 * GSM authentication response (SRES). 4 octets.
 *
 * (3GPP TS 29.002 V19.1.0 clauses 7.6.7.3 and 17.7.1).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SRES  ::=  OCTET STRING (SIZE (4))
 * ```
 */
export
type SRES = OCTET_STRING; // OctetStringType

/**
 * @summary Decodes an ASN.1 element into a(n) SRES
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_SRES = (el: _Element): SRES => {
    const value = $._decodeOctetString(el);
    if (value.length < 4 || value.length > 4) {
        throw new ASN1SizeError("SRES violates SIZE constraint");
    }
    return value;
};

/**
 * @summary Encodes a(n) SRES into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SRES, encoded as an ASN.1 Element.
 */
export const _encode_SRES = $._encodeOctetString;


/* eslint-enable */
