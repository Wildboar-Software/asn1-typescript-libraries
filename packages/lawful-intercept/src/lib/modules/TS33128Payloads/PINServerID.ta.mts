/* eslint-disable */
import {
    UTF8String
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary PINServerID
 * @description
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
