/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1SizeError,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary APN_OI_Replacement
 * @description
 *
 * APN Operator Identifier replacement, coded as an APN Operator Identifier
 * according to 3GPP TS 23.003. UE-level replacement appears in GPRS/EPS
 * subscription data; APN-level replacement in a PDP-Context or
 * APN-Configuration has higher priority (3GPP TS 29.002 V19.1.0 clauses 17.7.1
 * and 7.6.2.42).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * APN-OI-Replacement  ::=   OCTET STRING (SIZE (9..100))
 * ```
 */
export
type APN_OI_Replacement = OCTET_STRING; // OctetStringType

/**
 * @summary Decodes an ASN.1 element into a(n) APN_OI_Replacement
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_APN_OI_Replacement = (el: _Element): APN_OI_Replacement => {
    const value = $._decodeOctetString(el);
    if (value.length < 9 || value.length > 100) {
        throw new ASN1SizeError("APN_OI_Replacement violates SIZE constraint");
    }
    return value;
};

/**
 * @summary Encodes a(n) APN_OI_Replacement into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The APN_OI_Replacement, encoded as an ASN.1 Element.
 */
export const _encode_APN_OI_Replacement = $._encodeOctetString;


/* eslint-enable */
