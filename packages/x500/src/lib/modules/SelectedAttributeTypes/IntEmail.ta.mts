/* eslint-disable */
import { ASN1Element as _Element, UTF8String } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary IntEmail
 * @description
 *
 * Internationalized email. `intEmailMatch`: local-part `caseIgnoreMatch`;
 * domain as `dnsNameMatch`. Domain shall not use `*` as a label. If both
 * parts are ASCII, `mail` is preferred.
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
