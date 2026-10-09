/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1SizeError,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ReportingTrigger
 * @description
 *
 * OCTET STRING (SIZE 1). Coded as in 3GPP TS 32.422 (3GPP TS 29.002 V19.1.0
 * clause 17.7.2).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ReportingTrigger  ::=  OCTET STRING (SIZE (1))
 * ```
 */
export
type ReportingTrigger = OCTET_STRING; // OctetStringType

/**
 * @summary Decodes an ASN.1 element into a(n) ReportingTrigger
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_ReportingTrigger = (el: _Element): ReportingTrigger => {
    const value = $._decodeOctetString(el);
    if (value.length < 1 || value.length > 1) {
        throw new ASN1SizeError("ReportingTrigger violates SIZE constraint");
    }
    return value;
};

/**
 * @summary Encodes a(n) ReportingTrigger into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ReportingTrigger, encoded as an ASN.1 Element.
 */
export const _encode_ReportingTrigger = $._encodeOctetString;


/* eslint-enable */
