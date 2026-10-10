/* eslint-disable */
import { ASN1Element as _Element } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary GeneralMessage
 * @description
 *
 * Reserved for custom daemons and/or future use.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * -- reserved for future use and/or custom daemons
 * GeneralMessage ::= ANY
 * ```
 */
export type GeneralMessage = _Element;
export const _decode_GeneralMessage = $._decodeAny;
export const _encode_GeneralMessage = $._encodeAny;

/* eslint-enable */
