/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1SizeError,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary LCS_Priority
 * @description
 *
 * One octet: 0 highest, 1 normal; all other values treated as 1 (3GPP TS 29.002
 * V19.1.0 clauses 7.6.11.7 and 17.7.13).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * LCS-Priority  ::=  OCTET STRING (SIZE (1))
 * ```
 */
export
type LCS_Priority = OCTET_STRING; // OctetStringType

/**
 * @summary Decodes an ASN.1 element into a(n) LCS_Priority
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_LCS_Priority = (el: _Element): LCS_Priority => {
    const value = $._decodeOctetString(el);
    if (value.length < 1 || value.length > 1) {
        throw new ASN1SizeError("LCS_Priority violates SIZE constraint");
    }
    return value;
};

/**
 * @summary Encodes a(n) LCS_Priority into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The LCS_Priority, encoded as an ASN.1 Element.
 */
export const _encode_LCS_Priority = $._encodeOctetString;


/* eslint-enable */
