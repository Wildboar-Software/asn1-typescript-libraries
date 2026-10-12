/* eslint-disable */
import {
    ASN1Element as _Element,
    UTF8String
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary HomeNetworkIdentifier
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * HomeNetworkIdentifier  ::=  UTF8String
 * ```
 */
export
type HomeNetworkIdentifier = UTF8String; // UTF8String
export const _decode_HomeNetworkIdentifier: $.ASN1Decoder<HomeNetworkIdentifier> = $._decodeUTF8String;
export const _encode_HomeNetworkIdentifier: $.ASN1Encoder<HomeNetworkIdentifier> = $._encodeUTF8String;


/* eslint-enable */
