/* eslint-disable */
import { ASN1Element as _Element, UTF8String } from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";

/**
 * @summary AttributeDescription
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AttributeDescription  ::=  UTF8String(SIZE (1..MAX))
 * ```
 */
export type AttributeDescription = UTF8String; // UTF8String


export const _decode_AttributeDescription = $._decodeUTF8String;


export const _encode_AttributeDescription = $._encodeUTF8String;


/* eslint-enable */
