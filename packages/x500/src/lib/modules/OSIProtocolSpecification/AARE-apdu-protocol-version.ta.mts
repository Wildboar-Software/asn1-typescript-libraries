/* eslint-disable */
import { ASN1Element as _Element, BIT_STRING } from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";

/* START_OF_SYMBOL_DEFINITION AARE_apdu_protocol_version */
/**
 * @summary AARE_apdu_protocol_version
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AARE-apdu-protocol-version ::= BIT STRING { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type AARE_apdu_protocol_version = BIT_STRING;
/* END_OF_SYMBOL_DEFINITION AARE_apdu_protocol_version */

/* START_OF_SYMBOL_DEFINITION AARE_apdu_protocol_version_version1 */
/**
 * @summary AARE_apdu_protocol_version_version1
 * @constant
 */
export const AARE_apdu_protocol_version_version1: number = 0; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION AARE_apdu_protocol_version_version1 */

/* START_OF_SYMBOL_DEFINITION version1 */
/**
 * @summary version1
 * @constant
 */
export const version1: number = AARE_apdu_protocol_version_version1; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION version1 */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_AARE_apdu_protocol_version */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_AARE_apdu_protocol_version */

/* START_OF_SYMBOL_DEFINITION _decode_AARE_apdu_protocol_version */
export const _decode_AARE_apdu_protocol_version = $._decodeBitString;
/* END_OF_SYMBOL_DEFINITION _decode_AARE_apdu_protocol_version */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_AARE_apdu_protocol_version */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_AARE_apdu_protocol_version */

/* START_OF_SYMBOL_DEFINITION _encode_AARE_apdu_protocol_version */
export const _encode_AARE_apdu_protocol_version = $._encodeBitString;

/* END_OF_SYMBOL_DEFINITION _encode_AARE_apdu_protocol_version */

/* eslint-enable */
