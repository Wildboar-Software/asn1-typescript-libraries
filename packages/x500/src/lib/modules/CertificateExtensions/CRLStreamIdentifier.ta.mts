/* eslint-disable */
import { ASN1Element as _Element, INTEGER } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary CRLStreamIdentifier
 * @description
 *
 * INTEGER (0..MAX) naming the stream in which `CRLNumber` is unique. Always
 * non-critical. Unique per authority. Stream + CRLNumber uniquely identify
 * any CRL from that authority.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CRLStreamIdentifier  ::=  INTEGER (0..MAX)
 * ```
 */
export type CRLStreamIdentifier = INTEGER;


export const _decode_CRLStreamIdentifier = $._decodeInteger;


export const _encode_CRLStreamIdentifier = $._encodeInteger;


/* eslint-enable */
