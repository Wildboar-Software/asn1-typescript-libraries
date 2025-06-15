/* eslint-disable */
import { ASN1Element as _Element, INTEGER } from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";

/**
 * @summary LinkId
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * LinkId  ::=  INTEGER
 * ```
 */
export type LinkId = INTEGER;


export const _decode_LinkId = $._decodeInteger;


export const _encode_LinkId = $._encodeInteger;


/* eslint-enable */
