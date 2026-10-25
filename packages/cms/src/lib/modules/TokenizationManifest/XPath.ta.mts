/* eslint-disable */
import { ASN1Element as _Element, type UTF8String } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";


/**
 * @summary XPath
 * @description
 *
 * UTF8String XPath 2.0 expression (ITU-T X.894 | ISO/IEC 24824-4 clause 8.3).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * XPath  ::=  UTF8String (CONSTRAINED BY { -- XML Path Language 2.0 -- })
 * ```
 */
export type XPath = UTF8String; // UTF8String




export const _decode_XPath: $.ASN1Decoder<string> = $._decodeUTF8String;




export const _encode_XPath: $.ASN1Encoder<string> = $._encodeUTF8String;


/* eslint-enable */
