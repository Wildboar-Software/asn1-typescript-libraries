/* eslint-disable */
import {
    UTF8String,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary WAGFID
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * WAGFID  ::=  UTF8String
 * ```
 */
export
type WAGFID = UTF8String; // UTF8String

export const _decode_WAGFID: $.ASN1Decoder<WAGFID> = $._decodeUTF8String;

export const _encode_WAGFID: $.ASN1Encoder<WAGFID> = $._encodeUTF8String;

/* eslint-enable */
