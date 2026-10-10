/* eslint-disable */
import {
    ASN1Element as _Element,
    UTF8String
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ABNFRuleLocation
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ABNFRuleLocation  ::=  UTF8String
 * ```
 */
export
type ABNFRuleLocation = UTF8String; // UTF8String

/**
 * @summary Decodes an ASN.1 element into a(n) ABNFRuleLocation
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_ABNFRuleLocation = $._decodeUTF8String;

/**
 * @summary Encodes a(n) ABNFRuleLocation into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ABNFRuleLocation, encoded as an ASN.1 Element.
 */
export const _encode_ABNFRuleLocation = $._encodeUTF8String;


/* eslint-enable */
