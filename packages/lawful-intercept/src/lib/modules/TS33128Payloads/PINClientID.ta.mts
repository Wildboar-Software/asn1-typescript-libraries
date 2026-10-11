/* eslint-disable */
import {
    UTF8String,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary PINClientID
 * @description
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
