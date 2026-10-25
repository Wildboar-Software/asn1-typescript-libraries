/* eslint-disable */
import {
    type UTF8String
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary SMFID
 * @description
 * 
 * Identifier of the SMF associated with the target UE for that that PDU
 * Session.
 *
 * 3GPP TS 33.128, clause 7.7.2.1.2.
 * https://www.3gpp.org/DynaReport/33128.htm
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
