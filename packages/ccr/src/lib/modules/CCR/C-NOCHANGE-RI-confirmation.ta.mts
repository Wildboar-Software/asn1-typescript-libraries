/* eslint-disable */
import {
  ENUMERATED,
  ASN1Element as _Element,
  ASN1TagClass as _TagClass,
  ASN1Construction as _Construction,
  ASN1UniversalType as _UniversalType,
  ObjectIdentifier as _OID,
  External as _External,
  EmbeddedPDV as _PDV,
  ASN1ConstructionError as _ConstructionError,
} from 'asn1-ts';
import * as $ from 'asn1-ts/dist/functional.mjs';

/* START_OF_SYMBOL_DEFINITION _enum_for_C_NOCHANGE_RI_confirmation */
export enum _enum_for_C_NOCHANGE_RI_confirmation {
  not_required = 0,
  result_requested = 1,
}
/* END_OF_SYMBOL_DEFINITION _enum_for_C_NOCHANGE_RI_confirmation */

/* START_OF_SYMBOL_DEFINITION C_NOCHANGE_RI_confirmation */
/**
 * @summary C_NOCHANGE_RI_confirmation
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * C-NOCHANGE-RI-confirmation ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```@enum {number}
 */
export type C_NOCHANGE_RI_confirmation =
  | _enum_for_C_NOCHANGE_RI_confirmation
  | ENUMERATED;
/* END_OF_SYMBOL_DEFINITION C_NOCHANGE_RI_confirmation */

/* START_OF_SYMBOL_DEFINITION C_NOCHANGE_RI_confirmation_not_required */
/**
 * @summary C_NOCHANGE_RI_confirmation_not_required
 * @constant
 * @type {number}
 */
export const C_NOCHANGE_RI_confirmation_not_required: C_NOCHANGE_RI_confirmation = 0; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION C_NOCHANGE_RI_confirmation_not_required */

/* START_OF_SYMBOL_DEFINITION not_required */
/**
 * @summary not_required
 * @constant
 * @type {number}
 */
export const not_required: C_NOCHANGE_RI_confirmation = C_NOCHANGE_RI_confirmation_not_required; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION not_required */

/* START_OF_SYMBOL_DEFINITION C_NOCHANGE_RI_confirmation_result_requested */
/**
 * @summary C_NOCHANGE_RI_confirmation_result_requested
 * @constant
 * @type {number}
 */
export const C_NOCHANGE_RI_confirmation_result_requested: C_NOCHANGE_RI_confirmation = 1; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION C_NOCHANGE_RI_confirmation_result_requested */

/* START_OF_SYMBOL_DEFINITION result_requested */
/**
 * @summary result_requested
 * @constant
 * @type {number}
 */
export const result_requested: C_NOCHANGE_RI_confirmation = C_NOCHANGE_RI_confirmation_result_requested; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION result_requested */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_C_NOCHANGE_RI_confirmation */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_C_NOCHANGE_RI_confirmation */

/* START_OF_SYMBOL_DEFINITION _decode_C_NOCHANGE_RI_confirmation */
export const _decode_C_NOCHANGE_RI_confirmation = $._decodeEnumerated;
/* END_OF_SYMBOL_DEFINITION _decode_C_NOCHANGE_RI_confirmation */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_C_NOCHANGE_RI_confirmation */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_C_NOCHANGE_RI_confirmation */

/* START_OF_SYMBOL_DEFINITION _encode_C_NOCHANGE_RI_confirmation */
export const _encode_C_NOCHANGE_RI_confirmation = $._encodeEnumerated;

/* END_OF_SYMBOL_DEFINITION _encode_C_NOCHANGE_RI_confirmation */

/* eslint-enable */
