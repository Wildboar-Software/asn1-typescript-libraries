/* eslint-disable */
import {
    UTF8String
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary TELURI
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TELURI  ::=  UTF8String
 * ```
 */
export
type TELURI = UTF8String; // UTF8String
export const _decode_TELURI: $.ASN1Decoder<TELURI> = $._decodeUTF8String;
export const _encode_TELURI: $.ASN1Encoder<TELURI> = $._encodeUTF8String;


/* eslint-enable */
