/* eslint-disable */
import {
    NumericString
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary MMEC
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MMEC  ::=  NumericString
 * ```
 */
export
type MMEC = NumericString; // NumericString

/**
 * @summary Decodes an ASN.1 element into a(n) MMEC
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_MMEC = $._decodeNumericString;

/**
 * @summary Encodes a(n) MMEC into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MMEC, encoded as an ASN.1 Element.
 */
export const _encode_MMEC = $._encodeNumericString;


/* eslint-enable */
