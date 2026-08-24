/* eslint-disable */
import { ASN1Element as _Element, INTEGER } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary Group28
 * @description
 *
 * Always INTEGER (28). RFC 6932 brainpoolP256r1. Fixed PARMS of
 * `dhModpGr28Hkdf256Algo`.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Group28  ::=  INTEGER (28)
 * ```
 */
export type Group28 = INTEGER;


export const _decode_Group28 = $._decodeInteger;


export const _encode_Group28 = $._encodeInteger;


/* eslint-enable */
