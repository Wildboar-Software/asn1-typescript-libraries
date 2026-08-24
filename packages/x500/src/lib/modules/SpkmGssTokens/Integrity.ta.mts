/* eslint-disable */
import { ASN1Element as _Element, BIT_STRING } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary Integrity
 * @description
 *
 * Signature or MAC over a context-establishment "token". Signature:
 * sign(hash(DER(token))) per `algId` (hash input is DER; sign input is
 * BER of the hash). MAC: MAC(DER(token)) with an I-ALG subkey derived
 * from the context key. Typical use is a true signature; MAC is for
 * anonymity or cached-context re-establishment.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Integrity  ::=  BIT STRING
 * ```
 */
export type Integrity = BIT_STRING;


export const _decode_Integrity = $._decodeBitString;


export const _encode_Integrity = $._encodeBitString;


/* eslint-enable */
