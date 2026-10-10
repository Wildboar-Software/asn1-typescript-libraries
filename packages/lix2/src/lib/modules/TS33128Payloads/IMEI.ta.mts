/* eslint-disable */
import {
    ASN1Element as _Element,
    NumericString
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary IMEI
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IMEI  ::=  NumericString (SIZE(14))
 * ```
 */
export
type IMEI = NumericString; // NumericString

/**
 * @summary Decodes an ASN.1 element into a(n) IMEI
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_IMEI = $._decodeNumericString;

/**
 * @summary Encodes a(n) IMEI into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IMEI, encoded as an ASN.1 Element.
 */
export const _encode_IMEI = $._encodeNumericString;


/* eslint-enable */
