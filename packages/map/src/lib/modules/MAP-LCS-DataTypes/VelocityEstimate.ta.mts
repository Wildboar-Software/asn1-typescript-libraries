/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1SizeError,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary VelocityEstimate
 * @description
 *
 * 3GPP TS 23.032 velocity types: horizontal; horizontal with vertical; with
 * uncertainty; both. Other type-of-velocity invalid (3GPP TS 29.002 V19.1.0
 * clauses 7.6.11.27 and 17.7.13).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * VelocityEstimate  ::=  OCTET STRING (SIZE (4..7))
 * ```
 */
export
type VelocityEstimate = OCTET_STRING; // OctetStringType

/**
 * @summary Decodes an ASN.1 element into a(n) VelocityEstimate
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_VelocityEstimate = (el: _Element): VelocityEstimate => {
    const value = $._decodeOctetString(el);
    if (value.length < 4 || value.length > 7) {
        throw new ASN1SizeError("VelocityEstimate violates SIZE constraint");
    }
    return value;
};

/**
 * @summary Encodes a(n) VelocityEstimate into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The VelocityEstimate, encoded as an ASN.1 Element.
 */
export const _encode_VelocityEstimate = $._encodeOctetString;


/* eslint-enable */
