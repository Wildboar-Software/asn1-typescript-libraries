/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1SizeError,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary AgeIndicator
 * @description
 *
 * Used by the HLR to determine the validity of subscription data retained by
 * the serving network entity in a Super-Charged network. Internal structure is
 * implementation specific (3GPP TS 29.002 V19.1.0 clauses 7.6.3.72 and 17.7.1).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AgeIndicator  ::=  OCTET STRING (SIZE (1..6))
 * ```
 */
export
type AgeIndicator = OCTET_STRING; // OctetStringType

/**
 * @summary Decodes an ASN.1 element into a(n) AgeIndicator
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_AgeIndicator = (el: _Element): AgeIndicator => {
    const value = $._decodeOctetString(el);
    if (value.length < 1 || value.length > 6) {
        throw new ASN1SizeError("AgeIndicator violates SIZE constraint");
    }
    return value;
};

/**
 * @summary Encodes a(n) AgeIndicator into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AgeIndicator, encoded as an ASN.1 Element.
 */
export const _encode_AgeIndicator = $._encodeOctetString;


/* eslint-enable */
