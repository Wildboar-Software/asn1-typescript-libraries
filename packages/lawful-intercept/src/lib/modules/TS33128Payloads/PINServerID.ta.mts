/* eslint-disable */
import {
    UTF8String
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary PINServerID
 * @description
 * 
 * Identifies the 5G PIN Server.
 *
 * 3GPP TS 33.128, clause 7.18.2.2.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PINServerID  ::=  UTF8String
 * ```
 */
export
type PINServerID = UTF8String; // UTF8String
export const _decode_PINServerID: $.ASN1Decoder<PINServerID> = $._decodeUTF8String;
export const _encode_PINServerID: $.ASN1Encoder<PINServerID> = $._encodeUTF8String;


/* eslint-enable */
