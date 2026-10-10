/* eslint-disable */
import {
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary NGAPCauseGroupInt
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NGAPCauseGroupInt  ::=  INTEGER
 * ```
 */
export
type NGAPCauseGroupInt = INTEGER;

/**
 * @summary Decodes an ASN.1 element into a(n) NGAPCauseGroupInt
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_NGAPCauseGroupInt = $._decodeInteger;

/**
 * @summary Encodes a(n) NGAPCauseGroupInt into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NGAPCauseGroupInt, encoded as an ASN.1 Element.
 */
export const _encode_NGAPCauseGroupInt = $._encodeInteger;


/* eslint-enable */
