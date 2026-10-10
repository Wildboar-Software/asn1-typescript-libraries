/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1SizeError,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary KASME
 * @description
 *
 * Key for the Access Security Management Entity (32 octets). (3GPP TS 29.002
 * V19.1.0 clauses 7.6.7.5D and 17.7.1)
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * KASME  ::=  OCTET STRING (SIZE (32))
 * ```
 */
export
type KASME = OCTET_STRING; // OctetStringType

/**
 * @summary Decodes an ASN.1 element into a(n) KASME
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_KASME = (el: _Element): KASME => {
    const value = $._decodeOctetString(el);
    if (value.length < 32 || value.length > 32) {
        throw new ASN1SizeError("KASME violates SIZE constraint");
    }
    return value;
};

/**
 * @summary Encodes a(n) KASME into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The KASME, encoded as an ASN.1 Element.
 */
export const _encode_KASME = $._encodeOctetString;


/* eslint-enable */
