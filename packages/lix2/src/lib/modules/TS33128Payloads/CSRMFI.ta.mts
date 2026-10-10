/* eslint-disable */
import {
    BOOLEAN
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary CSRMFI
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CSRMFI  ::=  BOOLEAN
 * ```
 */
export
type CSRMFI = BOOLEAN; // BooleanType

/**
 * @summary Decodes an ASN.1 element into a(n) CSRMFI
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_CSRMFI = $._decodeBoolean;

/**
 * @summary Encodes a(n) CSRMFI into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CSRMFI, encoded as an ASN.1 Element.
 */
export const _encode_CSRMFI = $._encodeBoolean;


/* eslint-enable */
