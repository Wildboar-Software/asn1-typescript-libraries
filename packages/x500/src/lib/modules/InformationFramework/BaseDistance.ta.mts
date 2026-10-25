/* eslint-disable */
import { ASN1Element as _Element, type INTEGER } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary BaseDistance
 * @description
 *
 * Non-negative count of RDN arcs below a subtree base. `0` is the base
 * itself. In a compound (family) entry, every family member has the same
 * distance as the ancestor (the compound entry counts as one vertex).
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
