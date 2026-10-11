/* eslint-disable */
import {
    UTF8String
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary MMSSubject
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MMSSubject  ::=  UTF8String
 * ```
 */
export
type MMSSubject = UTF8String; // UTF8String

export const _decode_MMSSubject: $.ASN1Decoder<MMSSubject> = $._decodeUTF8String;

export const _encode_MMSSubject: $.ASN1Encoder<MMSSubject> = $._encodeUTF8String;

/* eslint-enable */
