/* eslint-disable */
import {
    type UTF8String
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary RCSServerURI
 * @description
 * 
 * The identity of the RCS Server serving the user. Shall contain a SIP URI or
 * tel URI for the RCS Server.
 *
 * 3GPP TS 33.128, clause 7.13.3.1.2.1.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RCSServerURI  ::=  UTF8String
 * ```
 */
export
type RCSServerURI = UTF8String; // UTF8String
export const _decode_RCSServerURI: $.ASN1Decoder<RCSServerURI> = $._decodeUTF8String;
export const _encode_RCSServerURI: $.ASN1Encoder<RCSServerURI> = $._encodeUTF8String;


/* eslint-enable */
