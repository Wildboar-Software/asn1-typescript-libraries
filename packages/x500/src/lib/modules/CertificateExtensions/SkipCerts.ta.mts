/* eslint-disable */
import { ASN1Element as _Element, INTEGER } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary SkipCerts
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SkipCerts  ::=  INTEGER(0..MAX)
 * ```
 */
export type SkipCerts = INTEGER;


export const _decode_SkipCerts = $._decodeInteger;


export const _encode_SkipCerts = $._encodeInteger;


/* eslint-enable */
