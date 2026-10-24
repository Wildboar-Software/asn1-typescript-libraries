/* eslint-disable */
import {
    type UTF8String
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary NEFID
 * @description
 * 
 * NEF identity handling the PDU session.
 *
 * 3GPP TS 33.128, clause 7.7.2.1.2.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NEFID  ::=  UTF8String
 * ```
 */
export
type NEFID = UTF8String; // UTF8String
export const _decode_NEFID: $.ASN1Decoder<NEFID> = $._decodeUTF8String;
export const _encode_NEFID: $.ASN1Encoder<NEFID> = $._encodeUTF8String;


/* eslint-enable */
