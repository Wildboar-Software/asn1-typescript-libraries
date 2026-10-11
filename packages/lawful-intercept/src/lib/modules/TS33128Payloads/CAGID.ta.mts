/* eslint-disable */
import {
    UTF8String
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary CAGID
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CAGID  ::=  UTF8String
 * ```
 */
export
type CAGID = UTF8String; // UTF8String

export const _decode_CAGID: $.ASN1Decoder<CAGID> = $._decodeUTF8String;

export const _encode_CAGID: $.ASN1Encoder<CAGID> = $._encodeUTF8String;

/* eslint-enable */
