/* eslint-disable */
import {
    BOOLEAN
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary FiveGSInterworkingIndicator
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FiveGSInterworkingIndicator  ::=  BOOLEAN
 * ```
 */
export
type FiveGSInterworkingIndicator = BOOLEAN; // BooleanType

/**
 * @summary Decodes an ASN.1 element into a(n) FiveGSInterworkingIndicator
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_FiveGSInterworkingIndicator = $._decodeBoolean;

/**
 * @summary Encodes a(n) FiveGSInterworkingIndicator into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The FiveGSInterworkingIndicator, encoded as an ASN.1 Element.
 */
export const _encode_FiveGSInterworkingIndicator = $._encodeBoolean;


/* eslint-enable */
