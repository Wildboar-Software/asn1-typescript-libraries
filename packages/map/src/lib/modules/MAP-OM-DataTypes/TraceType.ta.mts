/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary TraceType
 * @description
 *
 * INTEGER (0..255). Fully defined in 3GPP TS 52.008 (3GPP TS 29.002 V19.1.0
 * clauses 7.6.10.3 and 17.7.2).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TraceType  ::=  INTEGER
 *     (0..255)
 * ```
 */
export
type TraceType = INTEGER;

/**
 * @summary Decodes an ASN.1 element into a(n) TraceType
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_TraceType = $._decodeInteger;

/**
 * @summary Encodes a(n) TraceType into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TraceType, encoded as an ASN.1 Element.
 */
export const _encode_TraceType = $._encodeInteger;


/* eslint-enable */
