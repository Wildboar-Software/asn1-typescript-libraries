/* eslint-disable */
import {
    type UTF8String
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary SIPEndpoint
 * @description
 * 
 * The SIP instance identifying a specific endpoint. Shall contain the contents
 * of the the Contact header.
 *
 * 3GPP TS 33.128, clause 7.13.3.1.2.1.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SIPEndpoint  ::=  UTF8String
 * ```
 */
export
type SIPEndpoint = UTF8String; // UTF8String
export const _decode_SIPEndpoint: $.ASN1Decoder<SIPEndpoint> = $._decodeUTF8String;
export const _encode_SIPEndpoint: $.ASN1Encoder<SIPEndpoint> = $._encodeUTF8String;


/* eslint-enable */
