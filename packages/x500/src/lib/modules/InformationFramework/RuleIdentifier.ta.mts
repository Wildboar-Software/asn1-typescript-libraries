/* eslint-disable */
import { ASN1Element as _Element, INTEGER } from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";

/**
 * @summary RuleIdentifier
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RuleIdentifier  ::=  INTEGER
 * ```
 */
export type RuleIdentifier = INTEGER;


export const _decode_RuleIdentifier = $._decodeInteger;


export const _encode_RuleIdentifier = $._encodeInteger;


/* eslint-enable */
