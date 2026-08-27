/* eslint-disable */
import { ASN1Element as _Element, UTF8String } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";


/**
 * @summary URI
 * @description
 *
 * UTF8String URI (ITU-T X.894 | ISO/IEC 24824-4 Annex A.18).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * URI  ::=  UTF8String (SIZE(1..MAX))
 * ```
 */
export type URI = UTF8String; // UTF8String




export const _decode_URI = $._decodeUTF8String;




export const _encode_URI = $._encodeUTF8String;


/* eslint-enable */
