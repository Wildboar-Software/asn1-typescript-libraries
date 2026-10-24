/* eslint-disable */
import {
    type UTF8String
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary FQDN
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FQDN  ::=  UTF8String
 * ```
 */
export
type FQDN = UTF8String; // UTF8String
export const _decode_FQDN: $.ASN1Decoder<FQDN> = $._decodeUTF8String;
export const _encode_FQDN: $.ASN1Encoder<FQDN> = $._encodeUTF8String;


/* eslint-enable */
