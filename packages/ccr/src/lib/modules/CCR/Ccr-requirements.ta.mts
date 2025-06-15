/* eslint-disable */
import {
  BIT_STRING,
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

/* START_OF_SYMBOL_DEFINITION Ccr_requirements */
/**
 * @summary Ccr_requirements
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Ccr-requirements  ::=  BIT STRING {
 *   static-commitment(0), dynamic-commitment(1), nochange-completion(2),
 *   cancel(3), overlapped-recovery(4)}
 * ```
 */
export type Ccr_requirements = BIT_STRING;
/* END_OF_SYMBOL_DEFINITION Ccr_requirements */

/* START_OF_SYMBOL_DEFINITION Ccr_requirements_static_commitment */
/**
 * @summary Ccr_requirements_static_commitment
 * @constant
 */
export const Ccr_requirements_static_commitment: number = 0; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION Ccr_requirements_static_commitment */

/* START_OF_SYMBOL_DEFINITION static_commitment */
/**
 * @summary static_commitment
 * @constant
 */
export const static_commitment: number = Ccr_requirements_static_commitment; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION static_commitment */

/* START_OF_SYMBOL_DEFINITION Ccr_requirements_dynamic_commitment */
/**
 * @summary Ccr_requirements_dynamic_commitment
 * @constant
 */
export const Ccr_requirements_dynamic_commitment: number = 1; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION Ccr_requirements_dynamic_commitment */

/* START_OF_SYMBOL_DEFINITION dynamic_commitment */
/**
 * @summary dynamic_commitment
 * @constant
 */
export const dynamic_commitment: number = Ccr_requirements_dynamic_commitment; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION dynamic_commitment */

/* START_OF_SYMBOL_DEFINITION Ccr_requirements_nochange_completion */
/**
 * @summary Ccr_requirements_nochange_completion
 * @constant
 */
export const Ccr_requirements_nochange_completion: number = 2; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION Ccr_requirements_nochange_completion */

/* START_OF_SYMBOL_DEFINITION nochange_completion */
/**
 * @summary nochange_completion
 * @constant
 */
export const nochange_completion: number = Ccr_requirements_nochange_completion; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION nochange_completion */

/* START_OF_SYMBOL_DEFINITION Ccr_requirements_cancel */
/**
 * @summary Ccr_requirements_cancel
 * @constant
 */
export const Ccr_requirements_cancel: number = 3; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION Ccr_requirements_cancel */

/* START_OF_SYMBOL_DEFINITION cancel */
/**
 * @summary cancel
 * @constant
 */
export const cancel: number = Ccr_requirements_cancel; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION cancel */

/* START_OF_SYMBOL_DEFINITION Ccr_requirements_overlapped_recovery */
/**
 * @summary Ccr_requirements_overlapped_recovery
 * @constant
 */
export const Ccr_requirements_overlapped_recovery: number = 4; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION Ccr_requirements_overlapped_recovery */

/* START_OF_SYMBOL_DEFINITION overlapped_recovery */
/**
 * @summary overlapped_recovery
 * @constant
 */
export const overlapped_recovery: number = Ccr_requirements_overlapped_recovery; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION overlapped_recovery */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Ccr_requirements */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Ccr_requirements */

/* START_OF_SYMBOL_DEFINITION _decode_Ccr_requirements */
export const _decode_Ccr_requirements = $._decodeBitString;
/* END_OF_SYMBOL_DEFINITION _decode_Ccr_requirements */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Ccr_requirements */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Ccr_requirements */

/* START_OF_SYMBOL_DEFINITION _encode_Ccr_requirements */
export const _encode_Ccr_requirements = $._encodeBitString;

/* END_OF_SYMBOL_DEFINITION _encode_Ccr_requirements */

/* eslint-enable */
