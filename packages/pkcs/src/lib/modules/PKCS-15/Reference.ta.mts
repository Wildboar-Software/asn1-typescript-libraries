/* eslint-disable */
import { ASN1Element as _Element, INTEGER } from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";


/**
 * @summary Reference
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Reference  ::=  INTEGER (0..pkcs15-ub-reference)
 * ```
 */
export type Reference = INTEGER;




export const _decode_Reference = $._decodeInteger;




export const _encode_Reference = $._encodeInteger;


/* eslint-enable */
