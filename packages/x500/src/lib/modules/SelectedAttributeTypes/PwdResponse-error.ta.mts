/* eslint-disable */
import { ASN1Element as _Element, ENUMERATED } from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";

/* START_OF_SYMBOL_DEFINITION _enum_for_PwdResponse_error */
export enum _enum_for_PwdResponse_error {
    passwordExpired = 0,
    changeAfterReset = 1,
}
/* END_OF_SYMBOL_DEFINITION _enum_for_PwdResponse_error */

/* START_OF_SYMBOL_DEFINITION PwdResponse_error */
/**
 * @summary PwdResponse_error
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PwdResponse-error ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```@enum {number}
 */
export type PwdResponse_error = _enum_for_PwdResponse_error | ENUMERATED;
/* END_OF_SYMBOL_DEFINITION PwdResponse_error */

/* START_OF_SYMBOL_DEFINITION PwdResponse_error_passwordExpired */
/**
 * @summary PwdResponse_error_passwordExpired
 * @constant
 * @type {number}
 */
export const PwdResponse_error_passwordExpired: PwdResponse_error = 0; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION PwdResponse_error_passwordExpired */

/* START_OF_SYMBOL_DEFINITION passwordExpired */
/**
 * @summary passwordExpired
 * @constant
 * @type {number}
 */
export const passwordExpired: PwdResponse_error = PwdResponse_error_passwordExpired; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION passwordExpired */

/* START_OF_SYMBOL_DEFINITION PwdResponse_error_changeAfterReset */
/**
 * @summary PwdResponse_error_changeAfterReset
 * @constant
 * @type {number}
 */
export const PwdResponse_error_changeAfterReset: PwdResponse_error = 1; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION PwdResponse_error_changeAfterReset */

/* START_OF_SYMBOL_DEFINITION changeAfterReset */
/**
 * @summary changeAfterReset
 * @constant
 * @type {number}
 */
export const changeAfterReset: PwdResponse_error = PwdResponse_error_changeAfterReset; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION changeAfterReset */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_PwdResponse_error */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_PwdResponse_error */

/* START_OF_SYMBOL_DEFINITION _decode_PwdResponse_error */
export const _decode_PwdResponse_error = $._decodeEnumerated;
/* END_OF_SYMBOL_DEFINITION _decode_PwdResponse_error */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_PwdResponse_error */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_PwdResponse_error */

/* START_OF_SYMBOL_DEFINITION _encode_PwdResponse_error */
export const _encode_PwdResponse_error = $._encodeEnumerated;

/* END_OF_SYMBOL_DEFINITION _encode_PwdResponse_error */

/* eslint-enable */
