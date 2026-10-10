/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1SizeError,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary MSRadioAccessCapability
 * @description
 *
 * Value part of the MS Radio Access Capability IE in 3GPP TS 24.008 (SIZE
 * 1..50). (3GPP TS 29.002 V19.1.0 clause 17.7.1)
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MSRadioAccessCapability  ::=  OCTET STRING (SIZE (1..50))
 * ```
 */
export
type MSRadioAccessCapability = OCTET_STRING; // OctetStringType

/**
 * @summary Decodes an ASN.1 element into a(n) MSRadioAccessCapability
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_MSRadioAccessCapability = (el: _Element): MSRadioAccessCapability => {
    const value = $._decodeOctetString(el);
    if (value.length < 1 || value.length > 50) {
        throw new ASN1SizeError("MSRadioAccessCapability violates SIZE constraint");
    }
    return value;
};

/**
 * @summary Encodes a(n) MSRadioAccessCapability into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MSRadioAccessCapability, encoded as an ASN.1 Element.
 */
export const _encode_MSRadioAccessCapability = $._encodeOctetString;


/* eslint-enable */
