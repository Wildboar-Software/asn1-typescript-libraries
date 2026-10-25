/* eslint-disable */
import { ASN1Element as _Element, type INTEGER } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary ShakeOutputLen
 * @description
 *
 * SHAKE XOF output length in bits (INTEGER), not bytes. Parameters for
 * `shake128-len` / `shake256-len`.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ShakeOutputLen  ::=  INTEGER
 * ```
 */
export type ShakeOutputLen = INTEGER;


export const _decode_ShakeOutputLen: $.ASN1Decoder<INTEGER> = $._decodeInteger;


export const _encode_ShakeOutputLen: $.ASN1Encoder<INTEGER> = $._encodeInteger;


/* eslint-enable */
