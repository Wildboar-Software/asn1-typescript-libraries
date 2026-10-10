/* eslint-disable */
import {
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary EPSRANNASCause
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EPSRANNASCause  ::=  OCTET STRING
 * ```
 */
export
type EPSRANNASCause = OCTET_STRING; // OctetStringType

/**
 * @summary Decodes an ASN.1 element into a(n) EPSRANNASCause
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_EPSRANNASCause = $._decodeOctetString;

/**
 * @summary Encodes a(n) EPSRANNASCause into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EPSRANNASCause, encoded as an ASN.1 Element.
 */
export const _encode_EPSRANNASCause = $._encodeOctetString;


/* eslint-enable */
