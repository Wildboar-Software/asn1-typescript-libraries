/* eslint-disable */
import {
    BOOLEAN
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary RoamingIndicator
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RoamingIndicator  ::=  BOOLEAN
 * ```
 */
export
type RoamingIndicator = BOOLEAN; // BooleanType

/**
 * @summary Decodes an ASN.1 element into a(n) RoamingIndicator
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_RoamingIndicator = $._decodeBoolean;

/**
 * @summary Encodes a(n) RoamingIndicator into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RoamingIndicator, encoded as an ASN.1 Element.
 */
export const _encode_RoamingIndicator = $._encodeBoolean;


/* eslint-enable */
