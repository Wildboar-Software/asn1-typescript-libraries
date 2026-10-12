/* eslint-disable */
import {
    UTF8String
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary RCSServerURI
 * @description
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
