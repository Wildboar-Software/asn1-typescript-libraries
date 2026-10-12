/* eslint-disable */
import {
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
export const _decode_ABNFRuleLocation: $.ASN1Decoder<ABNFRuleLocation> = $._decodeUTF8String;
export const _encode_ABNFRuleLocation: $.ASN1Encoder<ABNFRuleLocation> = $._encodeUTF8String;


/* eslint-enable */
