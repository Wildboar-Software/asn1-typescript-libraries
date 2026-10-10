/* eslint-disable */
import {
    BOOLEAN
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary FiveGSInterworkingWithoutN26
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FiveGSInterworkingWithoutN26  ::=  BOOLEAN
 * ```
 */
export
type FiveGSInterworkingWithoutN26 = BOOLEAN; // BooleanType

/**
 * @summary Decodes an ASN.1 element into a(n) FiveGSInterworkingWithoutN26
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_FiveGSInterworkingWithoutN26 = $._decodeBoolean;

/**
 * @summary Encodes a(n) FiveGSInterworkingWithoutN26 into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The FiveGSInterworkingWithoutN26, encoded as an ASN.1 Element.
 */
export const _encode_FiveGSInterworkingWithoutN26 = $._encodeBoolean;


/* eslint-enable */
