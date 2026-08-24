/* eslint-disable */
import { ASN1Element as _Element, BIT_STRING } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary Random_Integer
 * @description
 *
 * Fresh nonce or context-id fragment. Need only be unused before (high
 * probability), not cryptographically unpredictable. Context-id: initiator
 * sends its random in `SPKM-REQ`; if a reply is expected the target
 * appends its random; SPKM-2 unilateral uses the initiator value as-is.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Random-Integer  ::=  BIT STRING
 * ```
 */
export type Random_Integer = BIT_STRING;


export const _decode_Random_Integer = $._decodeBitString;


export const _encode_Random_Integer = $._encodeBitString;


/* eslint-enable */
