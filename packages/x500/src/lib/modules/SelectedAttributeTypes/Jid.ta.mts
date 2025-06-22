/* eslint-disable */
import { ASN1Element as _Element, UTF8String } from "asn1-ts";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary Jid
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Jid  ::=  UTF8String (CONSTRAINED BY { / * Conforms to the format of a jabber identifier. * / })
 * ```
 */
export type Jid = UTF8String; // UTF8String


export const _decode_Jid = $._decodeUTF8String;


export const _encode_Jid = $._encodeUTF8String;


/* eslint-enable */
