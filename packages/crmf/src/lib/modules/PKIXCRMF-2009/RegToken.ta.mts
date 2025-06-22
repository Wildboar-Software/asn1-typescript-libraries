/* eslint-disable */
import { ASN1Element as _Element, UTF8String } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";


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
