/* eslint-disable */
import { ASN1Element as _Element, UTF8String } from "asn1-ts";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary AttributeName
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AttributeName  ::=  UTF8String(SIZE (1..MAX))
 * ```
 */
export type AttributeName = UTF8String; // UTF8String


export const _decode_AttributeName = $._decodeUTF8String;


export const _encode_AttributeName = $._encodeUTF8String;


/* eslint-enable */
