/* eslint-disable */
import {
    UTF8String
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary TNGFID
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TNGFID  ::=  UTF8String
 * ```
 */
export
type TNGFID = UTF8String; // UTF8String
export const _decode_TNGFID: $.ASN1Decoder<TNGFID> = $._decodeUTF8String;
export const _encode_TNGFID: $.ASN1Encoder<TNGFID> = $._encodeUTF8String;


/* eslint-enable */
