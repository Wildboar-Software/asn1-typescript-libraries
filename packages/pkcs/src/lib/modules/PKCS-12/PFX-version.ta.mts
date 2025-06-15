/* eslint-disable */
import { ASN1Element as _Element, INTEGER } from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";

/* START_OF_SYMBOL_DEFINITION PFX_version */
/**
 * @summary PFX_version
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PFX-version ::= INTEGER { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type PFX_version = INTEGER;
/* END_OF_SYMBOL_DEFINITION PFX_version */

/* START_OF_SYMBOL_DEFINITION PFX_version_v3 */
/**
 * @summary PFX_version_v3
 * @constant
 * @type {number}
 */
export const PFX_version_v3: PFX_version = 3; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION PFX_version_v3 */

/* START_OF_SYMBOL_DEFINITION v3 */
/**
 * @summary PFX_version_v3
 * @constant
 * @type {number}
 */
export const v3: PFX_version = PFX_version_v3; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION v3 */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_PFX_version */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_PFX_version */

/* START_OF_SYMBOL_DEFINITION _decode_PFX_version */
export const _decode_PFX_version = $._decodeInteger;
/* END_OF_SYMBOL_DEFINITION _decode_PFX_version */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_PFX_version */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_PFX_version */

/* START_OF_SYMBOL_DEFINITION _encode_PFX_version */
export const _encode_PFX_version = $._encodeInteger;

/* END_OF_SYMBOL_DEFINITION _encode_PFX_version */

/* eslint-enable */
