/* eslint-disable */
import { ASN1Element as _Element, UTF8String } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary URI
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * URI  ::=  UTF8String
 * ```
 */
export type URI = UTF8String; // UTF8String


export const _decode_URI = $._decodeUTF8String;


export const _encode_URI = $._encodeUTF8String;


/* eslint-enable */
