/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1SizeError,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary TraceRecordingSessionReference
 * @description
 *
 * OCTET STRING (SIZE 2) (3GPP TS 29.002 V19.1.0 clause 17.7.2).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TraceRecordingSessionReference  ::=  OCTET STRING (SIZE (2))
 * ```
 */
export
type TraceRecordingSessionReference = OCTET_STRING; // OctetStringType

/**
 * @summary Decodes an ASN.1 element into a(n) TraceRecordingSessionReference
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_TraceRecordingSessionReference = (el: _Element): TraceRecordingSessionReference => {
    const value = $._decodeOctetString(el);
    if (value.length < 2 || value.length > 2) {
        throw new ASN1SizeError("TraceRecordingSessionReference violates SIZE constraint");
    }
    return value;
};

/**
 * @summary Encodes a(n) TraceRecordingSessionReference into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TraceRecordingSessionReference, encoded as an ASN.1 Element.
 */
export const _encode_TraceRecordingSessionReference = $._encodeOctetString;


/* eslint-enable */
