/* eslint-disable */
import {
    UTF8String
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary HSMFURI
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * HSMFURI  ::=  UTF8String
 * ```
 */
export
type HSMFURI = UTF8String; // UTF8String
export const _decode_HSMFURI: $.ASN1Decoder<HSMFURI> = $._decodeUTF8String;
export const _encode_HSMFURI: $.ASN1Encoder<HSMFURI> = $._encodeUTF8String;


/* eslint-enable */
