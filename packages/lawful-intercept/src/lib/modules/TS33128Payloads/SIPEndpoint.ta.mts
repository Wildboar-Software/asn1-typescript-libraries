/* eslint-disable */
import {
    UTF8String
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary SIPEndpoint
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SIPEndpoint  ::=  UTF8String
 * ```
 */
export
type SIPEndpoint = UTF8String; // UTF8String
export const _decode_SIPEndpoint: $.ASN1Decoder<SIPEndpoint> = $._decodeUTF8String;
export const _encode_SIPEndpoint: $.ASN1Encoder<SIPEndpoint> = $._encodeUTF8String;


/* eslint-enable */
