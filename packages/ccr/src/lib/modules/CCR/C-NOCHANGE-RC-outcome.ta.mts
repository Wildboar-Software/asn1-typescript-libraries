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

/* START_OF_SYMBOL_DEFINITION _enum_for_C_NOCHANGE_RC_outcome */
export enum _enum_for_C_NOCHANGE_RC_outcome {
  not_determined = 0,
  committed = 1,
  rolled_back = 2,
  no_change = 3,
}
/* END_OF_SYMBOL_DEFINITION _enum_for_C_NOCHANGE_RC_outcome */

/* START_OF_SYMBOL_DEFINITION C_NOCHANGE_RC_outcome */
/**
 * @summary C_NOCHANGE_RC_outcome
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * C-NOCHANGE-RC-outcome ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```@enum {number}
 */
export type C_NOCHANGE_RC_outcome =
  | _enum_for_C_NOCHANGE_RC_outcome
  | ENUMERATED;
/* END_OF_SYMBOL_DEFINITION C_NOCHANGE_RC_outcome */

/* START_OF_SYMBOL_DEFINITION C_NOCHANGE_RC_outcome_not_determined */
/**
 * @summary C_NOCHANGE_RC_outcome_not_determined
 * @constant
 * @type {number}
 */
export const C_NOCHANGE_RC_outcome_not_determined: C_NOCHANGE_RC_outcome = 0; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION C_NOCHANGE_RC_outcome_not_determined */

/* START_OF_SYMBOL_DEFINITION not_determined */
/**
 * @summary not_determined
 * @constant
 * @type {number}
 */
export const not_determined: C_NOCHANGE_RC_outcome = C_NOCHANGE_RC_outcome_not_determined; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION not_determined */

/* START_OF_SYMBOL_DEFINITION C_NOCHANGE_RC_outcome_committed */
/**
 * @summary C_NOCHANGE_RC_outcome_committed
 * @constant
 * @type {number}
 */
export const C_NOCHANGE_RC_outcome_committed: C_NOCHANGE_RC_outcome = 1; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION C_NOCHANGE_RC_outcome_committed */

/* START_OF_SYMBOL_DEFINITION committed */
/**
 * @summary committed
 * @constant
 * @type {number}
 */
export const committed: C_NOCHANGE_RC_outcome = C_NOCHANGE_RC_outcome_committed; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION committed */

/* START_OF_SYMBOL_DEFINITION C_NOCHANGE_RC_outcome_rolled_back */
/**
 * @summary C_NOCHANGE_RC_outcome_rolled_back
 * @constant
 * @type {number}
 */
export const C_NOCHANGE_RC_outcome_rolled_back: C_NOCHANGE_RC_outcome = 2; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION C_NOCHANGE_RC_outcome_rolled_back */

/* START_OF_SYMBOL_DEFINITION rolled_back */
/**
 * @summary rolled_back
 * @constant
 * @type {number}
 */
export const rolled_back: C_NOCHANGE_RC_outcome = C_NOCHANGE_RC_outcome_rolled_back; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION rolled_back */

/* START_OF_SYMBOL_DEFINITION C_NOCHANGE_RC_outcome_no_change */
/**
 * @summary C_NOCHANGE_RC_outcome_no_change
 * @constant
 * @type {number}
 */
export const C_NOCHANGE_RC_outcome_no_change: C_NOCHANGE_RC_outcome = 3; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION C_NOCHANGE_RC_outcome_no_change */

/* START_OF_SYMBOL_DEFINITION no_change */
/**
 * @summary no_change
 * @constant
 * @type {number}
 */
export const no_change: C_NOCHANGE_RC_outcome = C_NOCHANGE_RC_outcome_no_change; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION no_change */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_C_NOCHANGE_RC_outcome */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_C_NOCHANGE_RC_outcome */

/* START_OF_SYMBOL_DEFINITION _decode_C_NOCHANGE_RC_outcome */
export const _decode_C_NOCHANGE_RC_outcome = $._decodeEnumerated;
/* END_OF_SYMBOL_DEFINITION _decode_C_NOCHANGE_RC_outcome */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_C_NOCHANGE_RC_outcome */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_C_NOCHANGE_RC_outcome */

/* START_OF_SYMBOL_DEFINITION _encode_C_NOCHANGE_RC_outcome */
export const _encode_C_NOCHANGE_RC_outcome = $._encodeEnumerated;

/* END_OF_SYMBOL_DEFINITION _encode_C_NOCHANGE_RC_outcome */

/* eslint-enable */
