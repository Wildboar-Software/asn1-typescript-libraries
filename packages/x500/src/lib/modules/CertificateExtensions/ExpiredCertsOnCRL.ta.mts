/* eslint-disable */
import { ASN1Element as _Element, GeneralizedTime } from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";

/**
 * @summary ExpiredCertsOnCRL
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ExpiredCertsOnCRL  ::=  GeneralizedTime
 * ```
 */
export type ExpiredCertsOnCRL = GeneralizedTime; // GeneralizedTime


export const _decode_ExpiredCertsOnCRL = $._decodeGeneralizedTime;


export const _encode_ExpiredCertsOnCRL = $._encodeGeneralizedTime;


/* eslint-enable */
