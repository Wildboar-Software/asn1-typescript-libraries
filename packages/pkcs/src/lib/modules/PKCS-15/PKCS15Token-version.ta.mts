/* eslint-disable */
import { ASN1Element as _Element, INTEGER } from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";

/* START_OF_SYMBOL_DEFINITION PKCS15Token_version */
/**
 * @summary PKCS15Token_version
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PKCS15Token-version ::= INTEGER { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type PKCS15Token_version = INTEGER;
/* END_OF_SYMBOL_DEFINITION PKCS15Token_version */

/* START_OF_SYMBOL_DEFINITION PKCS15Token_version_v1 */
/**
 * @summary PKCS15Token_version_v1
 * @constant
 * @type {number}
 */
export const PKCS15Token_version_v1: PKCS15Token_version = 0; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION PKCS15Token_version_v1 */

/* START_OF_SYMBOL_DEFINITION v1 */
/**
 * @summary PKCS15Token_version_v1
 * @constant
 * @type {number}
 */
export const v1: PKCS15Token_version = PKCS15Token_version_v1; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION v1 */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_PKCS15Token_version */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_PKCS15Token_version */

/* START_OF_SYMBOL_DEFINITION _decode_PKCS15Token_version */
export const _decode_PKCS15Token_version = $._decodeInteger;
/* END_OF_SYMBOL_DEFINITION _decode_PKCS15Token_version */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_PKCS15Token_version */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_PKCS15Token_version */

/* START_OF_SYMBOL_DEFINITION _encode_PKCS15Token_version */
export const _encode_PKCS15Token_version = $._encodeInteger;

/* END_OF_SYMBOL_DEFINITION _encode_PKCS15Token_version */

/* eslint-enable */
