/* eslint-disable */
import { ASN1Element as _Element, type INTEGER } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary RuleIdentifier
 * @description
 *
 * INTEGER identifier of a DIT structure rule, unique within a subschema
 * (not globally, and not an object identifier). Zero is a legal identifier.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RuleIdentifier  ::=  INTEGER
 * ```
 */
export type RuleIdentifier = INTEGER;


export const _decode_RuleIdentifier: $.ASN1Decoder<INTEGER> = $._decodeInteger;


export const _encode_RuleIdentifier: $.ASN1Encoder<INTEGER> = $._encodeInteger;


/* eslint-enable */
