/* eslint-disable */
import {
    UTF8String
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary PINClientID
 * @description
 * 
 * Identity assigned by the 5G PIN Server to the PIN client, if available.
 *
 * 3GPP TS 33.128, clause 7.18.2.2.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PINClientID  ::=  UTF8String
 * ```
 */
export
type PINClientID = UTF8String; // UTF8String
export const _decode_PINClientID: $.ASN1Decoder<PINClientID> = $._decodeUTF8String;
export const _encode_PINClientID: $.ASN1Encoder<PINClientID> = $._encodeUTF8String;


/* eslint-enable */
