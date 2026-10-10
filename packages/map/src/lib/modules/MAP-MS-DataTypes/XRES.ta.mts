/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1SizeError,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary XRES
 * @description
 *
 * Response to a UMTS authentication request. 4..16 octets.
 *
 * (3GPP TS 29.002 V19.1.0 clauses 7.6.7.5 and 17.7.1).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * XRES  ::=  OCTET STRING (SIZE (4..16))
 * ```
 */
export
type XRES = OCTET_STRING; // OctetStringType

/**
 * @summary Decodes an ASN.1 element into a(n) XRES
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_XRES = (el: _Element): XRES => {
    const value = $._decodeOctetString(el);
    if (value.length < 4 || value.length > 16) {
        throw new ASN1SizeError("XRES violates SIZE constraint");
    }
    return value;
};

/**
 * @summary Encodes a(n) XRES into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The XRES, encoded as an ASN.1 Element.
 */
export const _encode_XRES = $._encodeOctetString;


/* eslint-enable */
