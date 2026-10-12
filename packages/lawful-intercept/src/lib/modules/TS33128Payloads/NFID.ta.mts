/* eslint-disable */
import {
    ASN1Element as _Element,
    UTF8String
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary NFID
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NFID  ::=  UTF8String
 * ```
 */
export
type NFID = UTF8String; // UTF8String
export const _decode_NFID: $.ASN1Decoder<NFID> = $._decodeUTF8String;
export const _encode_NFID: $.ASN1Encoder<NFID> = $._encodeUTF8String;


/* eslint-enable */
