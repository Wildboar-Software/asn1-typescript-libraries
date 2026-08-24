/* eslint-disable */
import { ASN1Element as _Element, INTEGER } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary SequenceNumber
 * @description
 *
 * INTEGER (0..2147483647), i.e. 0..2^31−1. Independent counter per
 * direction. First data-transfer WrPDU of an association is `0`, then +1;
 * wraps to `0` at max. Detects replay and loss. Not used on handshake WrPDUs.
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
