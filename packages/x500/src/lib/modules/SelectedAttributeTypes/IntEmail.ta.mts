/* eslint-disable */
import { ASN1Element as _Element, UTF8String } from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";

/**
 * @summary IntEmail
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * IntEmail  ::=  UTF8String (CONSTRAINED BY { -- Conforms to the format of an (internationalized) email address. -- })
 * ```
 */
export type IntEmail = UTF8String; // UTF8String


export const _decode_IntEmail = $._decodeUTF8String;


export const _encode_IntEmail = $._encodeUTF8String;


/* eslint-enable */
