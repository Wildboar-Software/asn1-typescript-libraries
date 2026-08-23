/* eslint-disable */
import { ASN1Element as _Element, INTEGER } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary CRLNumber
 * @description
 *
 * INTEGER (0..MAX) monotonic sequence number per CRL issuer and DP/stream.
 * Not necessarily +1. Always non-critical. Combined with
 * `CRLStreamIdentifier` uniquely names a CRL from that authority.
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
