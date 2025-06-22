/* eslint-disable */
import { ASN1Element as _Element, UTF8String } from "asn1-ts";
import * as $ from "@wildboar/asn1/functional";


/**
 * @summary Label
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Label  ::=  UTF8String (SIZE(0..pkcs15-ub-label))
 * ```
 */
export type Label = UTF8String; // UTF8String




export const _decode_Label = $._decodeUTF8String;




export const _encode_Label = $._encodeUTF8String;


/* eslint-enable */
