/* eslint-disable */
import {
    UTF8String
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary NFID
 * @description
 * 
 * Identifies the AUSF instance which generated the
 * AuthenticationInformatoinRequest. Shall be included if known.
 *
 * 3GPP TS 33.128, clause 7.2.2.3.8.
 * https://www.3gpp.org/DynaReport/33128.htm
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
