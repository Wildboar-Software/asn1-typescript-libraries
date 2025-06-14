/* eslint-disable */
import { ASN1Element as _Element, UTF8String } from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";

/**
 * @summary DomainName
 * @description
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
