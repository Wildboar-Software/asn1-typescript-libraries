/* eslint-disable */
import { ASN1Element as _Element, type UTF8String } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary AttributeName
 * @description
 *
 * UTF8String SIZE (1..MAX). Empty is not allowed.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AttributeName  ::=  UTF8String(SIZE (1..MAX))
 * ```
 */
export type AttributeName = UTF8String; // UTF8String


export const _decode_AttributeName: $.ASN1Decoder<string> = $._decodeUTF8String;


export const _encode_AttributeName: $.ASN1Encoder<string> = $._encodeUTF8String;


/* eslint-enable */
