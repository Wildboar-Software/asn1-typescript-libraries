/* eslint-disable */
import { UTF8String } from "asn1-ts";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary URI
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * URI  ::=
 *   UTF8String
 *     (CONSTRAINED BY {
 *        -- shall be a valid URI as defined in IETF RFC 3986 --})
 * ```
 */
export type URI = UTF8String; // UTF8String
export const _decode_URI = $._decodeUTF8String;
export const _encode_URI = $._encodeUTF8String;

/* eslint-enable */
