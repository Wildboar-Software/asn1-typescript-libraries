/* eslint-disable */
import { ASN1Element as _Element, UTF8String } from "asn1-ts";
import * as $ from "@wildboar/asn1/functional";


/**
 * @summary XPath
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * XPath  ::=  UTF8String (CONSTRAINED BY { -- XML Path Language 2.0 -- })
 * ```
 */
export type XPath = UTF8String; // UTF8String




export const _decode_XPath = $._decodeUTF8String;




export const _encode_XPath = $._encodeUTF8String;


/* eslint-enable */
