/* eslint-disable */
import { ASN1Element as _Element, UTF8String } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

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
