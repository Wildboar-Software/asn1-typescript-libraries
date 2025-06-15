/* eslint-disable */
import { ASN1Element as _Element, INTEGER } from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";

/**
 * @summary CRLNumber
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CRLNumber  ::=  INTEGER(0..MAX)
 * ```
 */
export type CRLNumber = INTEGER;


export const _decode_CRLNumber = $._decodeInteger;


export const _encode_CRLNumber = $._encodeInteger;


/* eslint-enable */
