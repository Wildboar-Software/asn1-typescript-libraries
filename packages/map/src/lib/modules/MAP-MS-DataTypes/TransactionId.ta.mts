/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1SizeError,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary TransactionId
 * @description
 *
 * Value part of the session-management transaction identifier on the access
 * interface. Encoding in 3GPP TS 24.008.
 *
 * (3GPP TS 29.002 V19.1.0 clause 17.7.1).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TransactionId  ::=  OCTET STRING (SIZE (1..2))
 * ```
 */
export
type TransactionId = OCTET_STRING; // OctetStringType

/**
 * @summary Decodes an ASN.1 element into a(n) TransactionId
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_TransactionId = (el: _Element): TransactionId => {
    const value = $._decodeOctetString(el);
    if (value.length < 1 || value.length > 2) {
        throw new ASN1SizeError("TransactionId violates SIZE constraint");
    }
    return value;
};

/**
 * @summary Encodes a(n) TransactionId into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TransactionId, encoded as an ASN.1 Element.
 */
export const _encode_TransactionId = $._encodeOctetString;


/* eslint-enable */
