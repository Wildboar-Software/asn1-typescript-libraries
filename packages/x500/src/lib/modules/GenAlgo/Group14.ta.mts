/* eslint-disable */
import { ASN1Element as _Element, INTEGER } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary Group14
 * @description
 *
 * Always INTEGER (14). RFC 3526 MODP 2048. Fixed PARMS of
 * `dhModpGr14Hkdf256Algo`.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Group14  ::=  INTEGER (14)
 * ```
 */
export type Group14 = INTEGER;


export const _decode_Group14 = $._decodeInteger;


export const _encode_Group14 = $._encodeInteger;


/* eslint-enable */
