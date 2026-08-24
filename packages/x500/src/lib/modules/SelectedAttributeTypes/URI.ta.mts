/* eslint-disable */
import { ASN1Element as _Element, UTF8String } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary URI
 * @description
 *
 * RFC 3986 UTF8String. `uriMatch` normalizes (percent hex uppercase;
 * decode unreserved; `.`/`..` path; drop empty/default scheme components).
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
