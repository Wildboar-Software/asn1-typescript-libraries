/* eslint-disable */
import { ASN1Element as _Element, INTEGER } from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";

/* START_OF_SYMBOL_DEFINITION RC5_CBC_Parameters_version */
/**
 * @summary RC5_CBC_Parameters_version
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RC5-CBC-Parameters-version ::= INTEGER { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type RC5_CBC_Parameters_version = INTEGER;
/* END_OF_SYMBOL_DEFINITION RC5_CBC_Parameters_version */

/* START_OF_SYMBOL_DEFINITION RC5_CBC_Parameters_version_v1_0 */
/**
 * @summary RC5_CBC_Parameters_version_v1_0
 * @constant
 * @type {number}
 */
export const RC5_CBC_Parameters_version_v1_0: RC5_CBC_Parameters_version = 16; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION RC5_CBC_Parameters_version_v1_0 */

/* START_OF_SYMBOL_DEFINITION v1_0 */
/**
 * @summary RC5_CBC_Parameters_version_v1_0
 * @constant
 * @type {number}
 */
export const v1_0: RC5_CBC_Parameters_version = RC5_CBC_Parameters_version_v1_0; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION v1_0 */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_RC5_CBC_Parameters_version */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_RC5_CBC_Parameters_version */

/* START_OF_SYMBOL_DEFINITION _decode_RC5_CBC_Parameters_version */
export const _decode_RC5_CBC_Parameters_version = $._decodeInteger;
/* END_OF_SYMBOL_DEFINITION _decode_RC5_CBC_Parameters_version */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_RC5_CBC_Parameters_version */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_RC5_CBC_Parameters_version */

/* START_OF_SYMBOL_DEFINITION _encode_RC5_CBC_Parameters_version */
export const _encode_RC5_CBC_Parameters_version = $._encodeInteger;

/* END_OF_SYMBOL_DEFINITION _encode_RC5_CBC_Parameters_version */

/* eslint-enable */
