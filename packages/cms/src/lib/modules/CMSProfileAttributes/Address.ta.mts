/* eslint-disable */
import { ASN1Element as _Element, UTF8String } from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";


/**
 * @summary Address
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Address     ::=  UTF8String
 * ```
 */
export type Address = UTF8String; // UTF8String




export const _decode_Address = $._decodeUTF8String;




export const _encode_Address = $._encodeUTF8String;


/* eslint-enable */
