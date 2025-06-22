/* eslint-disable */
import { ASN1Element as _Element, UTF8String } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";


/**
 * @summary SimpleString
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SimpleString     ::=  UTF8String(SIZE(1..MAX))
 * ```
 */
export type SimpleString = UTF8String; // UTF8String




export const _decode_SimpleString = $._decodeUTF8String;




export const _encode_SimpleString = $._encodeUTF8String;


/* eslint-enable */
