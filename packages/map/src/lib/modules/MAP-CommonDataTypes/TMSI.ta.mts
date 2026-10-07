/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1SizeError,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary TMSI
 * @description
 *
 * Temporary Mobile Subscriber Identity as in 3GPP TS 23.003. Size 1..4 octets.
 *
 * (3GPP TS 29.002 V19.1.0 clauses 7.6.2.2 and 17.7.8).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TMSI  ::=  OCTET STRING (SIZE (1..4))
 * ```
 */
export
type TMSI = OCTET_STRING; // OctetStringType

/**
 * @summary Decodes an ASN.1 element into a(n) TMSI
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_TMSI = (el: _Element): TMSI => {
    const value = $._decodeOctetString(el);
    if (value.length < 1 || value.length > 4) {
        throw new ASN1SizeError("TMSI violates SIZE constraint");
    }
    return value;
};

/**
 * @summary Encodes a(n) TMSI into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TMSI, encoded as an ASN.1 Element.
 */
export const _encode_TMSI = $._encodeOctetString;


/* eslint-enable */
