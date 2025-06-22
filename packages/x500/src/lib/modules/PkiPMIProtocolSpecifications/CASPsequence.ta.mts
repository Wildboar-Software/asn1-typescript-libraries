/* eslint-disable */
import { ASN1Element as _Element, INTEGER } from "asn1-ts";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary CASPsequence
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CASPsequence  ::=  INTEGER (1..MAX)
 * ```
 */
export type CASPsequence = INTEGER;


export const _decode_CASPsequence = $._decodeInteger;


export const _encode_CASPsequence = $._encodeInteger;


/* eslint-enable */
