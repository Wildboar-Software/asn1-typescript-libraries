/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1SizeError,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary SS_Status
 * @description
 *
 * One octet: bits 8–5 unused; bits 4–1 are Q, P, R, A bits of SS state as in
 * 3GPP TS 23.011 (3GPP TS 29.002 V19.1.0 clauses 7.6.4.2 and 17.7.4).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SS-Status  ::=  OCTET STRING (SIZE (1))
 * ```
 */
export
type SS_Status = OCTET_STRING; // OctetStringType

/**
 * @summary Decodes an ASN.1 element into a(n) SS_Status
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_SS_Status = (el: _Element): SS_Status => {
    const value = $._decodeOctetString(el);
    if (value.length < 1 || value.length > 1) {
        throw new ASN1SizeError("SS_Status violates SIZE constraint");
    }
    return value;
};

/**
 * @summary Encodes a(n) SS_Status into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SS_Status, encoded as an ASN.1 Element.
 */
export const _encode_SS_Status = $._encodeOctetString;


/* eslint-enable */
