/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary FiveGTMSI
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FiveGTMSI  ::=  INTEGER (0..4294967295)
 * ```
 */
export
type FiveGTMSI = INTEGER;

/**
 * @summary Decodes an ASN.1 element into a(n) FiveGTMSI
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_FiveGTMSI = $._decodeInteger;

/**
 * @summary Encodes a(n) FiveGTMSI into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The FiveGTMSI, encoded as an ASN.1 Element.
 */
export const _encode_FiveGTMSI = $._encodeInteger;


/* eslint-enable */
