/* eslint-disable */
import { ASN1Element as _Element, type INTEGER } from "@wildboar/asn1";
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


export const _decode_CASPsequence: $.ASN1Decoder<INTEGER> = $._decodeInteger;


export const _encode_CASPsequence: $.ASN1Encoder<INTEGER> = $._encodeInteger;


/* eslint-enable */
