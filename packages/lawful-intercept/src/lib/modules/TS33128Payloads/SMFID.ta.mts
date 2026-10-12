/* eslint-disable */
import {
    UTF8String
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary SMFID
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SMFID  ::=  UTF8String
 * ```
 */
export
type SMFID = UTF8String; // UTF8String
export const _decode_SMFID: $.ASN1Decoder<SMFID> = $._decodeUTF8String;
export const _encode_SMFID: $.ASN1Encoder<SMFID> = $._encodeUTF8String;


/* eslint-enable */
