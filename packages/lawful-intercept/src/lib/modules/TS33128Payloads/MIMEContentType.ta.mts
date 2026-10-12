/* eslint-disable */
import {
    UTF8String
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary MIMEContentType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MIMEContentType  ::=  UTF8String
 * ```
 */
export
type MIMEContentType = UTF8String; // UTF8String
export const _decode_MIMEContentType: $.ASN1Decoder<MIMEContentType> = $._decodeUTF8String;
export const _encode_MIMEContentType: $.ASN1Encoder<MIMEContentType> = $._encodeUTF8String;


/* eslint-enable */
