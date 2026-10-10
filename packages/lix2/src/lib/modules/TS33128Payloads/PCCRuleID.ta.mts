/* eslint-disable */
import {
    ASN1Element as _Element,
    UTF8String
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary PCCRuleID
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PCCRuleID  ::=  UTF8String
 * ```
 */
export
type PCCRuleID = UTF8String; // UTF8String

/**
 * @summary Decodes an ASN.1 element into a(n) PCCRuleID
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_PCCRuleID = $._decodeUTF8String;

/**
 * @summary Encodes a(n) PCCRuleID into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PCCRuleID, encoded as an ASN.1 Element.
 */
export const _encode_PCCRuleID = $._encodeUTF8String;


/* eslint-enable */
