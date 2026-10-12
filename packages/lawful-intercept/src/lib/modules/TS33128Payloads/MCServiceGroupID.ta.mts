/* eslint-disable */
import {
    ASN1Element as _Element,
    UTF8String
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary MCServiceGroupID
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MCServiceGroupID  ::=  UTF8String
 * ```
 */
export
type MCServiceGroupID = UTF8String; // UTF8String
export const _decode_MCServiceGroupID: $.ASN1Decoder<MCServiceGroupID> = $._decodeUTF8String;
export const _encode_MCServiceGroupID: $.ASN1Encoder<MCServiceGroupID> = $._encodeUTF8String;


/* eslint-enable */
