/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1SizeError,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary TraceReference2
 * @description
 *
 * OCTET STRING (SIZE 3). UMTS tracing as in 3GPP TS 32.421 and 32.422; managed
 * by EM (3GPP TS 29.002 V19.1.0 clauses 7.6.10.2A and 17.7.2).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TraceReference2  ::=  OCTET STRING (SIZE (3))
 * ```
 */
export
type TraceReference2 = OCTET_STRING; // OctetStringType

/**
 * @summary Decodes an ASN.1 element into a(n) TraceReference2
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_TraceReference2 = (el: _Element): TraceReference2 => {
    const value = $._decodeOctetString(el);
    if (value.length < 3 || value.length > 3) {
        throw new ASN1SizeError("TraceReference2 violates SIZE constraint");
    }
    return value;
};

/**
 * @summary Encodes a(n) TraceReference2 into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TraceReference2, encoded as an ASN.1 Element.
 */
export const _encode_TraceReference2 = $._encodeOctetString;


/* eslint-enable */
