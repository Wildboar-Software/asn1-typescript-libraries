/* eslint-disable */
import { ASN1Element as _Element, UTF8String } from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";


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
