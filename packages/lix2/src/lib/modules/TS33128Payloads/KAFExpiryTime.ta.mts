/* eslint-disable */
import {
    GeneralizedTime
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary KAFExpiryTime
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * KAFExpiryTime  ::=  GeneralizedTime
 * ```
 */
export
type KAFExpiryTime = GeneralizedTime; // GeneralizedTime

/**
 * @summary Decodes an ASN.1 element into a(n) KAFExpiryTime
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_KAFExpiryTime = $._decodeGeneralizedTime;

/**
 * @summary Encodes a(n) KAFExpiryTime into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The KAFExpiryTime, encoded as an ASN.1 Element.
 */
export const _encode_KAFExpiryTime = $._encodeGeneralizedTime;


/* eslint-enable */
