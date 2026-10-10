/* eslint-disable */
import {
    NumericString
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary MMEGI
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MMEGI  ::=  NumericString
 * ```
 */
export
type MMEGI = NumericString; // NumericString

/**
 * @summary Decodes an ASN.1 element into a(n) MMEGI
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_MMEGI = $._decodeNumericString;

/**
 * @summary Encodes a(n) MMEGI into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MMEGI, encoded as an ASN.1 Element.
 */
export const _encode_MMEGI = $._encodeNumericString;


/* eslint-enable */
