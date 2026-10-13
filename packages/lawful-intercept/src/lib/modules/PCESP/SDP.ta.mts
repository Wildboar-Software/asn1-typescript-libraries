/* eslint-disable */
import {
    UTF8String
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary SDP
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SDP  ::=  UTF8String
 * ```
 */
export
type SDP = UTF8String; // UTF8String
export const _decode_SDP: $.ASN1Decoder<SDP> = $._decodeUTF8String;
export const _encode_SDP: $.ASN1Encoder<SDP> = $._encodeUTF8String;


/* eslint-enable */
