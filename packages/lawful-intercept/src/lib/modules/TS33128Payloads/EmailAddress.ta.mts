/* eslint-disable */
import {
    ASN1Element as _Element,
    UTF8String
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary EmailAddress
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EmailAddress  ::=  UTF8String
 * ```
 */
export
type EmailAddress = UTF8String; // UTF8String

export const _decode_EmailAddress: $.ASN1Decoder<EmailAddress> = $._decodeUTF8String;

export const _encode_EmailAddress: $.ASN1Encoder<EmailAddress> = $._encodeUTF8String;


/* eslint-enable */
