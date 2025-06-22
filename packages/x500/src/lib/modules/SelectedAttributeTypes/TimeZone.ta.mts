/* eslint-disable */
import { ASN1Element as _Element, INTEGER } from "asn1-ts";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary TimeZone
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TimeZone  ::=  INTEGER(-12..12)
 * ```
 */
export type TimeZone = INTEGER;


export const _decode_TimeZone = $._decodeInteger;


export const _encode_TimeZone = $._encodeInteger;


/* eslint-enable */
