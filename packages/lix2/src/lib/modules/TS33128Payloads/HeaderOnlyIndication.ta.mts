/* eslint-disable */
import {
    BOOLEAN
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary HeaderOnlyIndication
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * HeaderOnlyIndication  ::=  BOOLEAN
 * ```
 */
export
type HeaderOnlyIndication = BOOLEAN; // BooleanType

/**
 * @summary Decodes an ASN.1 element into a(n) HeaderOnlyIndication
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_HeaderOnlyIndication = $._decodeBoolean;

/**
 * @summary Encodes a(n) HeaderOnlyIndication into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The HeaderOnlyIndication, encoded as an ASN.1 Element.
 */
export const _encode_HeaderOnlyIndication = $._encodeBoolean;


/* eslint-enable */
