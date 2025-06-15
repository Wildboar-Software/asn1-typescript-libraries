/* eslint-disable */
import { ASN1Element as _Element, ENUMERATED } from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";

/* START_OF_SYMBOL_DEFINITION _enum_for_EnvelopedData_error */
export enum _enum_for_EnvelopedData_error {
    noReason = 0,
}
/* END_OF_SYMBOL_DEFINITION _enum_for_EnvelopedData_error */

/* START_OF_SYMBOL_DEFINITION EnvelopedData_error */
/**
 * @summary EnvelopedData_error
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * EnvelopedData-error  ::=  ENUMERATED {
 *   noReason                           (0),
 *   ... }
 * ```@enum {number}
 */
export type EnvelopedData_error = _enum_for_EnvelopedData_error | ENUMERATED;
/* END_OF_SYMBOL_DEFINITION EnvelopedData_error */

/* START_OF_SYMBOL_DEFINITION EnvelopedData_error_noReason */
/**
 * @summary EnvelopedData_error_noReason
 * @constant
 * @type {number}
 */
export const EnvelopedData_error_noReason: EnvelopedData_error = 0; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION EnvelopedData_error_noReason */

/* START_OF_SYMBOL_DEFINITION noReason */
/**
 * @summary noReason
 * @constant
 * @type {number}
 */
export const noReason: EnvelopedData_error = EnvelopedData_error_noReason; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION noReason */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_EnvelopedData_error */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_EnvelopedData_error */

/* START_OF_SYMBOL_DEFINITION _decode_EnvelopedData_error */
export const _decode_EnvelopedData_error = $._decodeEnumerated;
/* END_OF_SYMBOL_DEFINITION _decode_EnvelopedData_error */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_EnvelopedData_error */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_EnvelopedData_error */

/* START_OF_SYMBOL_DEFINITION _encode_EnvelopedData_error */
export const _encode_EnvelopedData_error = $._encodeEnumerated;

/* END_OF_SYMBOL_DEFINITION _encode_EnvelopedData_error */

/* eslint-enable */
