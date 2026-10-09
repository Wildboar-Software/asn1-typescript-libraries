/* eslint-disable */
import { UTF8String } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary MMSString
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MMSString  ::=  UTF8String
 * ```
 */
export
type MMSString = UTF8String; // UTF8String
export const _decode_MMSString = $._decodeUTF8String;
export const _encode_MMSString = $._encodeUTF8String;


/* eslint-enable */
