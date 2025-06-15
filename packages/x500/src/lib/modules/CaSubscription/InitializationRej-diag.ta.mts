/* eslint-disable */
import { ASN1Element as _Element, ENUMERATED } from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";

/* START_OF_SYMBOL_DEFINITION _enum_for_InitializationRej_diag */
export enum _enum_for_InitializationRej_diag {
    unsupportedVersion = 0,
}
/* END_OF_SYMBOL_DEFINITION _enum_for_InitializationRej_diag */

/* START_OF_SYMBOL_DEFINITION InitializationRej_diag */
/**
 * @summary InitializationRej_diag
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * InitializationRej-diag ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```@enum {number}
 */
export type InitializationRej_diag =
    | _enum_for_InitializationRej_diag
    | ENUMERATED;
/* END_OF_SYMBOL_DEFINITION InitializationRej_diag */

/* START_OF_SYMBOL_DEFINITION InitializationRej_diag_unsupportedVersion */
/**
 * @summary InitializationRej_diag_unsupportedVersion
 * @constant
 * @type {number}
 */
export const InitializationRej_diag_unsupportedVersion: InitializationRej_diag = 0; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION InitializationRej_diag_unsupportedVersion */

/* START_OF_SYMBOL_DEFINITION unsupportedVersion */
/**
 * @summary unsupportedVersion
 * @constant
 * @type {number}
 */
export const unsupportedVersion: InitializationRej_diag = InitializationRej_diag_unsupportedVersion; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION unsupportedVersion */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_InitializationRej_diag */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_InitializationRej_diag */

/* START_OF_SYMBOL_DEFINITION _decode_InitializationRej_diag */
export const _decode_InitializationRej_diag = $._decodeEnumerated;
/* END_OF_SYMBOL_DEFINITION _decode_InitializationRej_diag */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_InitializationRej_diag */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_InitializationRej_diag */

/* START_OF_SYMBOL_DEFINITION _encode_InitializationRej_diag */
export const _encode_InitializationRej_diag = $._encodeEnumerated;

/* END_OF_SYMBOL_DEFINITION _encode_InitializationRej_diag */

/* eslint-enable */
