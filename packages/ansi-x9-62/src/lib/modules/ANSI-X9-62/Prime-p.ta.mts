/* eslint-disable */
import { ASN1Element as _Element, INTEGER } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary Prime_p
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Prime-p  ::=  INTEGER
 * ```
 */
export type Prime_p = INTEGER;


export const _decode_Prime_p = $._decodeInteger;


export const _encode_Prime_p = $._encodeInteger;


/* eslint-enable */
