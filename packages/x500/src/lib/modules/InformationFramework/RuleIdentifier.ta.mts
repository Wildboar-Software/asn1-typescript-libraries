/* eslint-disable */
import { ASN1Element as _Element, INTEGER } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

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
