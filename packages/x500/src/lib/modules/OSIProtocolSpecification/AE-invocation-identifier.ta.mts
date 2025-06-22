/* eslint-disable */
import { ASN1Element as _Element, INTEGER } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary AE_invocation_identifier
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AE-invocation-identifier  ::=  INTEGER
 * ```
 */
export type AE_invocation_identifier = INTEGER;


export const _decode_AE_invocation_identifier = $._decodeInteger;


export const _encode_AE_invocation_identifier = $._encodeInteger;


/* eslint-enable */
