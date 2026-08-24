/* eslint-disable */
import { ASN1Element as _Element, UTF8String } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary Jid
 * @description
 *
 * XMPP JID (RFC 7622). `jidMatch`: both values normalized; domain same
 * format and octet-identical; localpart both present or both absent and
 * octet-identical; resourcepart the same.
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
