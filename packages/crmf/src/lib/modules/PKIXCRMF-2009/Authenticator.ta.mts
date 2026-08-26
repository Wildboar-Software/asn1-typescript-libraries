/* eslint-disable */
import { ASN1Element as _Element, UTF8String } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";


/**
 * @summary Authenticator
 * @description
 *
 * Ongoing authenticator (`UTF8String`) for non-cryptographic
 * identity checks with the CA (initial or subsequent requests)
 * ([RFC 4211 §6.2](https://datatracker.ietf.org/doc/html/rfc4211#section-6.2)). Prefer `regToken` for
 * one-time values; `authenticator` for long-term shared knowledge.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Authenticator  ::=  UTF8String
 * ```
 */
export type Authenticator = UTF8String; // UTF8String




export const _decode_Authenticator = $._decodeUTF8String;




export const _encode_Authenticator = $._encodeUTF8String;


/* eslint-enable */
