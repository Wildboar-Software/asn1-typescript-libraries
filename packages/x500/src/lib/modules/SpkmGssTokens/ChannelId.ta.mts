/* eslint-disable */
import { ASN1Element as _Element, OCTET_STRING } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary ChannelId
 * @description
 *
 * GSS-API channel bindings. Absent means no channel bindings. Empty
 * octet string is a present (empty) binding, not "none".
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ChannelId  ::=  OCTET STRING
 * ```
 */
export type ChannelId = OCTET_STRING; // OctetStringType


export const _decode_ChannelId = $._decodeOctetString;


export const _encode_ChannelId = $._encodeOctetString;


/* eslint-enable */
