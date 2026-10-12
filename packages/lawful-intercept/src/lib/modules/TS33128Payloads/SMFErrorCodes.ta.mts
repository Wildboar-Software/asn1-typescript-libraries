/* eslint-disable */
import {
    ASN1Element as _Element,
    UTF8String
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary SMFErrorCodes
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SMFErrorCodes  ::=  UTF8String
 * ```
 */
export
type SMFErrorCodes = UTF8String; // UTF8String
export const _decode_SMFErrorCodes: $.ASN1Decoder<SMFErrorCodes> = $._decodeUTF8String;
export const _encode_SMFErrorCodes: $.ASN1Encoder<SMFErrorCodes> = $._encodeUTF8String;


/* eslint-enable */
