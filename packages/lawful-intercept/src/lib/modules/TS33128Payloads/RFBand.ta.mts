/* eslint-disable */
import {
    UTF8String,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary RFBand
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RFBand  ::=  UTF8String
 * ```
 */
export
type RFBand = UTF8String; // UTF8String

export const _decode_RFBand: $.ASN1Decoder<RFBand> = $._decodeUTF8String;

export const _encode_RFBand: $.ASN1Encoder<RFBand> = $._encodeUTF8String;

/* eslint-enable */
