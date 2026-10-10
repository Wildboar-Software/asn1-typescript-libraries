/* eslint-disable */
import {
    GeneralizedTime
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary Timestamp
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Timestamp  ::=  GeneralizedTime
 * ```
 */
export
type Timestamp = GeneralizedTime; // GeneralizedTime

/**
 * @summary Decodes an ASN.1 element into a(n) Timestamp
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_Timestamp = $._decodeGeneralizedTime;

/**
 * @summary Encodes a(n) Timestamp into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Timestamp, encoded as an ASN.1 Element.
 */
export const _encode_Timestamp = $._encodeGeneralizedTime;


/* eslint-enable */
