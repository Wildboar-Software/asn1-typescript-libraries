/* eslint-disable */
import {
    ASN1Element as _Element,
    NumericString
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary MSISDN
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MSISDN  ::=  NumericString (SIZE(1..15))
 * ```
 */
export
type MSISDN = NumericString; // NumericString

/**
 * @summary Decodes an ASN.1 element into a(n) MSISDN
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_MSISDN = $._decodeNumericString;

/**
 * @summary Encodes a(n) MSISDN into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MSISDN, encoded as an ASN.1 Element.
 */
export const _encode_MSISDN = $._encodeNumericString;


/* eslint-enable */
