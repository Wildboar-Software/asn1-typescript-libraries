/* eslint-disable */
import {
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary NGAPCauseValueInt
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NGAPCauseValueInt  ::=  INTEGER
 * ```
 */
export
type NGAPCauseValueInt = INTEGER;

/**
 * @summary Decodes an ASN.1 element into a(n) NGAPCauseValueInt
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_NGAPCauseValueInt = $._decodeInteger;

/**
 * @summary Encodes a(n) NGAPCauseValueInt into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NGAPCauseValueInt, encoded as an ASN.1 Element.
 */
export const _encode_NGAPCauseValueInt = $._encodeInteger;


/* eslint-enable */
