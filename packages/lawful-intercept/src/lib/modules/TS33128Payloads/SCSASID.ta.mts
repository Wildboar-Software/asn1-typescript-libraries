/* eslint-disable */
import {
    UTF8String
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary SCSASID
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SCSASID  ::=  UTF8String
 * ```
 */
export
type SCSASID = UTF8String; // UTF8String
export const _decode_SCSASID: $.ASN1Decoder<SCSASID> = $._decodeUTF8String;
export const _encode_SCSASID: $.ASN1Encoder<SCSASID> = $._encodeUTF8String;


/* eslint-enable */
