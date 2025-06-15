/* eslint-disable */
import { ASN1Element as _Element, GeneralizedTime } from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";

/* START_OF_SYMBOL_DEFINITION ExpiredCertsOnCRL */
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
/* END_OF_SYMBOL_DEFINITION ExpiredCertsOnCRL */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ExpiredCertsOnCRL */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ExpiredCertsOnCRL */

/* START_OF_SYMBOL_DEFINITION _decode_ExpiredCertsOnCRL */
export const _decode_ExpiredCertsOnCRL = $._decodeGeneralizedTime;
/* END_OF_SYMBOL_DEFINITION _decode_ExpiredCertsOnCRL */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ExpiredCertsOnCRL */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ExpiredCertsOnCRL */

/* START_OF_SYMBOL_DEFINITION _encode_ExpiredCertsOnCRL */
export const _encode_ExpiredCertsOnCRL = $._encodeGeneralizedTime;

/* END_OF_SYMBOL_DEFINITION _encode_ExpiredCertsOnCRL */

/* eslint-enable */
