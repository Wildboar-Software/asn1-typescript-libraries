/* eslint-disable */
import { ASN1Element as _Element, ENUMERATED } from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";

/* START_OF_SYMBOL_DEFINITION _enum_for_PwdResponseValue_error */
export enum _enum_for_PwdResponseValue_error {
    passwordExpired = 0,
    changeAfterReset = 1,
}
/* END_OF_SYMBOL_DEFINITION _enum_for_PwdResponseValue_error */

/* START_OF_SYMBOL_DEFINITION PwdResponseValue_error */
/**
 * @summary PwdResponseValue_error
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PwdResponseValue-error ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```@enum {number}
 */
export type PwdResponseValue_error =
    | _enum_for_PwdResponseValue_error
    | ENUMERATED;
/* END_OF_SYMBOL_DEFINITION PwdResponseValue_error */

/* START_OF_SYMBOL_DEFINITION PwdResponseValue_error_passwordExpired */
/**
 * @summary PwdResponseValue_error_passwordExpired
 * @constant
 * @type {number}
 */
export const PwdResponseValue_error_passwordExpired: PwdResponseValue_error = 0; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION PwdResponseValue_error_passwordExpired */

/* START_OF_SYMBOL_DEFINITION passwordExpired */
/**
 * @summary passwordExpired
 * @constant
 * @type {number}
 */
export const passwordExpired: PwdResponseValue_error = PwdResponseValue_error_passwordExpired; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION passwordExpired */

/* START_OF_SYMBOL_DEFINITION PwdResponseValue_error_changeAfterReset */
/**
 * @summary PwdResponseValue_error_changeAfterReset
 * @constant
 * @type {number}
 */
export const PwdResponseValue_error_changeAfterReset: PwdResponseValue_error = 1; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION PwdResponseValue_error_changeAfterReset */

/* START_OF_SYMBOL_DEFINITION changeAfterReset */
/**
 * @summary changeAfterReset
 * @constant
 * @type {number}
 */
export const changeAfterReset: PwdResponseValue_error = PwdResponseValue_error_changeAfterReset; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION changeAfterReset */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_PwdResponseValue_error */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_PwdResponseValue_error */

/* START_OF_SYMBOL_DEFINITION _decode_PwdResponseValue_error */
export const _decode_PwdResponseValue_error = $._decodeEnumerated;
/* END_OF_SYMBOL_DEFINITION _decode_PwdResponseValue_error */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_PwdResponseValue_error */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_PwdResponseValue_error */

/* START_OF_SYMBOL_DEFINITION _encode_PwdResponseValue_error */
export const _encode_PwdResponseValue_error = $._encodeEnumerated;

/* END_OF_SYMBOL_DEFINITION _encode_PwdResponseValue_error */

/* eslint-enable */
