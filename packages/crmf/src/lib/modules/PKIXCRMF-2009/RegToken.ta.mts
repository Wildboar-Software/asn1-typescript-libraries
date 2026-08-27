/* eslint-disable */
import { ASN1Element as _Element, UTF8String } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";


/**
 * @summary RegToken
 * @description
 *
 * One-time registration token (`UTF8String`) for initial identity
 * verification ([RFC 4211 §6.1](https://datatracker.ietf.org/doc/html/rfc4211#section-6.1)). Encoding
 * SHALL be UTF8String (text or textual form of a binary value).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RegToken  ::=  UTF8String
 * ```
 */
export type RegToken = UTF8String; // UTF8String




export const _decode_RegToken = $._decodeUTF8String;




export const _encode_RegToken = $._encodeUTF8String;


/* eslint-enable */
