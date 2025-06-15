/* eslint-disable */
import { ASN1Element as _Element, ENUMERATED } from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";

/* START_OF_SYMBOL_DEFINITION _enum_for_InitializationAbort_diag */
export enum _enum_for_InitializationAbort_diag {
    unsupportedVersion = 0,
    onlySingleVersionAllowed = 1,
}
/* END_OF_SYMBOL_DEFINITION _enum_for_InitializationAbort_diag */

/* START_OF_SYMBOL_DEFINITION InitializationAbort_diag */
/**
 * @summary InitializationAbort_diag
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * InitializationAbort-diag ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```@enum {number}
 */
export type InitializationAbort_diag =
    | _enum_for_InitializationAbort_diag
    | ENUMERATED;
/* END_OF_SYMBOL_DEFINITION InitializationAbort_diag */

/* START_OF_SYMBOL_DEFINITION InitializationAbort_diag_unsupportedVersion */
/**
 * @summary InitializationAbort_diag_unsupportedVersion
 * @constant
 * @type {number}
 */
export const InitializationAbort_diag_unsupportedVersion: InitializationAbort_diag = 0; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION InitializationAbort_diag_unsupportedVersion */

/* START_OF_SYMBOL_DEFINITION unsupportedVersion */
/**
 * @summary unsupportedVersion
 * @constant
 * @type {number}
 */
export const unsupportedVersion: InitializationAbort_diag = InitializationAbort_diag_unsupportedVersion; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION unsupportedVersion */

/* START_OF_SYMBOL_DEFINITION InitializationAbort_diag_onlySingleVersionAllowed */
/**
 * @summary InitializationAbort_diag_onlySingleVersionAllowed
 * @constant
 * @type {number}
 */
export const InitializationAbort_diag_onlySingleVersionAllowed: InitializationAbort_diag = 1; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION InitializationAbort_diag_onlySingleVersionAllowed */

/* START_OF_SYMBOL_DEFINITION onlySingleVersionAllowed */
/**
 * @summary onlySingleVersionAllowed
 * @constant
 * @type {number}
 */
export const onlySingleVersionAllowed: InitializationAbort_diag = InitializationAbort_diag_onlySingleVersionAllowed; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION onlySingleVersionAllowed */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_InitializationAbort_diag */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_InitializationAbort_diag */

/* START_OF_SYMBOL_DEFINITION _decode_InitializationAbort_diag */
export const _decode_InitializationAbort_diag = $._decodeEnumerated;
/* END_OF_SYMBOL_DEFINITION _decode_InitializationAbort_diag */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_InitializationAbort_diag */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_InitializationAbort_diag */

/* START_OF_SYMBOL_DEFINITION _encode_InitializationAbort_diag */
export const _encode_InitializationAbort_diag = $._encodeEnumerated;

/* END_OF_SYMBOL_DEFINITION _encode_InitializationAbort_diag */

/* eslint-enable */
