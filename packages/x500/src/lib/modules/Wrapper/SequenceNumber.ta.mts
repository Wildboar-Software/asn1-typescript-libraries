/* eslint-disable */
import { ASN1Element as _Element, INTEGER } from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";

/**
 * @summary SequenceNumber
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SequenceNumber  ::=  INTEGER (0..2147483647)
 * ```
 */
export type SequenceNumber = INTEGER;


export const _decode_SequenceNumber = $._decodeInteger;


export const _encode_SequenceNumber = $._encodeInteger;


/* eslint-enable */
