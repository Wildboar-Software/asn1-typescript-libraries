/* eslint-disable */
import { ASN1Element as _Element, type INTEGER } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary BaseDistance
 * @description
 *
 * INTEGER (0..MAX) tree distance from a GeneralSubtree `base`. 0 = the name
 * itself. Used as `minimum` (DEFAULT 0) and optional `maximum` (absent = no
 * upper bound).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * BaseDistance  ::=  INTEGER(0..MAX)
 * ```
 */
export type BaseDistance = INTEGER;


export const _decode_BaseDistance: $.ASN1Decoder<INTEGER> = $._decodeInteger;


export const _encode_BaseDistance: $.ASN1Encoder<INTEGER> = $._encodeInteger;


/* eslint-enable */
