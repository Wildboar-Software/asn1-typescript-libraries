/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1SizeError,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary TraceReference
 * @description
 *
 * OCTET STRING (1..2). GSM-only tracing as in 3GPP TS 52.008; managed by OMC/EM
 * (3GPP TS 29.002 V19.1.0 clauses 7.6.10.2 and 17.7.2).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TraceReference  ::=  OCTET STRING (SIZE (1..2))
 * ```
 */
export
type TraceReference = OCTET_STRING; // OctetStringType

/**
 * @summary Decodes an ASN.1 element into a(n) TraceReference
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_TraceReference = (el: _Element): TraceReference => {
    const value = $._decodeOctetString(el);
    if (value.length < 1 || value.length > 2) {
        throw new ASN1SizeError("TraceReference violates SIZE constraint");
    }
    return value;
};

/**
 * @summary Encodes a(n) TraceReference into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TraceReference, encoded as an ASN.1 Element.
 */
export const _encode_TraceReference = $._encodeOctetString;


/* eslint-enable */
