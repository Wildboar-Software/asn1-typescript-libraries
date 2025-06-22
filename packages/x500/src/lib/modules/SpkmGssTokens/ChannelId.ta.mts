/* eslint-disable */
import { ASN1Element as _Element, OCTET_STRING } from "asn1-ts";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary ChannelId
 * @description
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
