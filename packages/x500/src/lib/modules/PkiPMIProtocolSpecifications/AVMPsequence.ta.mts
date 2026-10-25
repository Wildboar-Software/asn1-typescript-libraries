/* eslint-disable */
import { ASN1Element as _Element, type INTEGER } from "@wildboar/asn1";
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


export const _decode_AVMPsequence: $.ASN1Decoder<INTEGER> = $._decodeInteger;


export const _encode_AVMPsequence: $.ASN1Encoder<INTEGER> = $._encodeInteger;


/* eslint-enable */
