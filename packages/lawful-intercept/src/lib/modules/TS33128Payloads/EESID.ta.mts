/* eslint-disable */
import {
    type UTF8String
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary EESID
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EESID  ::=  UTF8String
 * ```
 */
export
type EESID = UTF8String; // UTF8String
export const _decode_EESID: $.ASN1Decoder<EESID> = $._decodeUTF8String;
export const _encode_EESID: $.ASN1Encoder<EESID> = $._encodeUTF8String;


/* eslint-enable */
