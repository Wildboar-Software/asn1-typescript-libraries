/* eslint-disable */
import { ASN1Element as _Element, UTF8String } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";


/**
 * @summary UTF8Pairs
 * @description
 *
 * Text name/value pairs in `regInfo` (`UTF8String`)
 * ([RFC 4211 §7.1](https://datatracker.ietf.org/doc/html/rfc4211#section-7.1)). Syntax:
 *
 * > `Name?Value%[Name?Value%]*`
 *
 * Names end with `?`, values with `%`; encode literal `?`/`%` as
 * `%3f`/`%25` (RFC 1738). Names MUST NOT start with a digit.
 * May appear multiple times; conflict resolution is local policy.
 * Common names: Appendix A.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * UTF8Pairs  ::=  UTF8String
 * ```
 */
export type UTF8Pairs = UTF8String; // UTF8String




export const _decode_UTF8Pairs = $._decodeUTF8String;




export const _encode_UTF8Pairs = $._encodeUTF8String;


/* eslint-enable */
