/* eslint-disable */
import { ASN1Element as _Element, UTF8String } from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";


/**
 * @summary RegToken
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RegToken  ::=  UTF8String
 * ```
 */
export type RegToken = UTF8String; // UTF8String




export const _decode_RegToken = $._decodeUTF8String;




export const _encode_RegToken = $._encodeUTF8String;


/* eslint-enable */
