/* eslint-disable */
import {
    ASN1Element as _Element,
    UTF8String
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary MCServiceID
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MCServiceID  ::=  UTF8String
 * ```
 */
export
type MCServiceID = UTF8String; // UTF8String

export const _decode_MCServiceID: $.ASN1Decoder<MCServiceID> = $._decodeUTF8String;

export const _encode_MCServiceID: $.ASN1Encoder<MCServiceID> = $._encodeUTF8String;


/* eslint-enable */
