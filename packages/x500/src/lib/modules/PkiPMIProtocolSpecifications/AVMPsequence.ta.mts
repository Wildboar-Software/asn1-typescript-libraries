/* eslint-disable */
import { ASN1Element as _Element, INTEGER } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary AVMPsequence
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AVMPsequence  ::=  INTEGER (1..MAX)
 * ```
 */
export type AVMPsequence = INTEGER;


export const _decode_AVMPsequence = $._decodeInteger;


export const _encode_AVMPsequence = $._encodeInteger;


/* eslint-enable */
