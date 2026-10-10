/* eslint-disable */
import {
    ASN1Element as _Element,
    NumericString
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary IMEISV
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IMEISV  ::=  NumericString (SIZE(16))
 * ```
 */
export
type IMEISV = NumericString; // NumericString

/**
 * @summary Decodes an ASN.1 element into a(n) IMEISV
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_IMEISV = $._decodeNumericString;

/**
 * @summary Encodes a(n) IMEISV into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IMEISV, encoded as an ASN.1 Element.
 */
export const _encode_IMEISV = $._encodeNumericString;


/* eslint-enable */
