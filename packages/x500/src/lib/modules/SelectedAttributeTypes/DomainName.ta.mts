/* eslint-disable */
import { ASN1Element as _Element, UTF8String } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary DomainName
 * @description
 *
 * DNS labels (RFC 5890): LDH, A-label (`xn--`), or U-label.
 * `dnsNameMatch` is label-for-label (different counts ⇒ FALSE). Mixed LDH
 * vs A-label/U-label ⇒ FALSE. Wildcard `*` at most one and must be
 * leftmost; `*.example.com` matches `a.example.com`, not `a.b.example.com`
 * nor `example.com`.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DomainName  ::=  UTF8String (CONSTRAINED BY { -- Conforms to the format of a domain name. -- })
 * ```
 */
export type DomainName = UTF8String; // UTF8String


export const _decode_DomainName = $._decodeUTF8String;


export const _encode_DomainName = $._encodeUTF8String;


/* eslint-enable */
