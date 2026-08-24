/* eslint-disable */
import { ASN1Element as _Element, INTEGER } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary Group23
 * @description
 *
 * Always INTEGER (23). RFC 5114 secp256r1 ECDH. Fixed PARMS of
 * `dhModpGr23Hkdf256Algo`.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Group23  ::=  INTEGER (23)
 * ```
 */
export type Group23 = INTEGER;


export const _decode_Group23 = $._decodeInteger;


export const _encode_Group23 = $._encodeInteger;


/* eslint-enable */
