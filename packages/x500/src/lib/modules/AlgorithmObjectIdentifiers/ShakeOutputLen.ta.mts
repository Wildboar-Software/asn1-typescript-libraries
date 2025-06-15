/* eslint-disable */
import { ASN1Element as _Element, INTEGER } from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";

/**
 * @summary ShakeOutputLen
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ShakeOutputLen  ::=  INTEGER
 * ```
 */
export type ShakeOutputLen = INTEGER;


export const _decode_ShakeOutputLen = $._decodeInteger;


export const _encode_ShakeOutputLen = $._encodeInteger;


/* eslint-enable */
