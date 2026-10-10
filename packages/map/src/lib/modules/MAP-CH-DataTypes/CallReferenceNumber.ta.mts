/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1SizeError,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary CallReferenceNumber
 * @description
 *
 * OCTET STRING (1..8). Use and presence as in 3GPP TS 23.078, Use and presence
 * as in 3GPP TS 23.079 and Use and presence as in 3GPP TS 23.018 (3GPP TS
 * 29.002 V19.1.0 clauses 10.1.3 and 17.7.3).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CallReferenceNumber  ::=  OCTET STRING (SIZE (1..8))
 * ```
 */
export
type CallReferenceNumber = OCTET_STRING; // OctetStringType

/**
 * @summary Decodes an ASN.1 element into a(n) CallReferenceNumber
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_CallReferenceNumber = (el: _Element): CallReferenceNumber => {
    const value = $._decodeOctetString(el);
    if (value.length < 1 || value.length > 8) {
        throw new ASN1SizeError("CallReferenceNumber violates SIZE constraint");
    }
    return value;
};

/**
 * @summary Encodes a(n) CallReferenceNumber into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CallReferenceNumber, encoded as an ASN.1 Element.
 */
export const _encode_CallReferenceNumber = $._encodeOctetString;


/* eslint-enable */
