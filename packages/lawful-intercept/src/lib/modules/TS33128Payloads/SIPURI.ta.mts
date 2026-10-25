/* eslint-disable */
import {
    type UTF8String
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary SIPURI
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SIPURI  ::=  UTF8String
 * ```
 */
export
type SIPURI = UTF8String; // UTF8String
export const _decode_SIPURI: $.ASN1Decoder<SIPURI> = $._decodeUTF8String;
export const _encode_SIPURI: $.ASN1Encoder<SIPURI> = $._encodeUTF8String;


/* eslint-enable */
