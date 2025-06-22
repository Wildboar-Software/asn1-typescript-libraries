/* eslint-disable */
import { ASN1Element as _Element, INTEGER } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary Trinomial
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Trinomial  ::=  INTEGER
 * ```
 */
export type Trinomial = INTEGER;


export const _decode_Trinomial = $._decodeInteger;


export const _encode_Trinomial = $._encodeInteger;


/* eslint-enable */
