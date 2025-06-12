/* eslint-disable */
import {
  itu_t,
  itu_r,
  ccitt,
  iso,
  joint_iso_itu_t,
  joint_iso_ccitt,
  OPTIONAL,
  BOOLEAN,
  INTEGER,
  BIT_STRING,
  OCTET_STRING,
  NULL,
  OBJECT_IDENTIFIER,
  ObjectDescriptor,
  EXTERNAL,
  REAL,
  INSTANCE_OF,
  ENUMERATED,
  EMBEDDED_PDV,
  UTF8String,
  RELATIVE_OID,
  SEQUENCE,
  SEQUENCE_OF,
  SET,
  SET_OF,
  GraphicString,
  NumericString,
  VisibleString,
  PrintableString,
  ISO646String,
  TeletexString,
  GeneralString,
  T61String,
  UniversalString,
  VideotexString,
  BMPString,
  IA5String,
  CharacterString,
  UTCTime,
  GeneralizedTime,
  TIME,
  DATE,
  TIME_OF_DAY,
  DATE_TIME,
  DURATION,
  OID_IRI,
  RELATIVE_OID_IRI,
  TRUE,
  FALSE,
  TRUE_BIT,
  FALSE_BIT,
  PLUS_INFINITY,
  MINUS_INFINITY,
  NOT_A_NUMBER,
  TYPE_IDENTIFIER,
  ABSTRACT_SYNTAX,
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
let _cached_decoder_for_C_NOCHANGE_RC_outcome: $.ASN1Decoder<C_NOCHANGE_RC_outcome> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_C_NOCHANGE_RC_outcome */

/* START_OF_SYMBOL_DEFINITION _decode_C_NOCHANGE_RC_outcome */
/**
 * @summary Decodes an ASN.1 element into a(n) C_NOCHANGE_RC_outcome
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {C_NOCHANGE_RC_outcome} The decoded data structure.
 */
export function _decode_C_NOCHANGE_RC_outcome(el: _Element) {
  if (!_cached_decoder_for_C_NOCHANGE_RC_outcome) {
    _cached_decoder_for_C_NOCHANGE_RC_outcome = $._decodeEnumerated;
  }
  return _cached_decoder_for_C_NOCHANGE_RC_outcome(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_C_NOCHANGE_RC_outcome */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_C_NOCHANGE_RC_outcome */
let _cached_encoder_for_C_NOCHANGE_RC_outcome: $.ASN1Encoder<C_NOCHANGE_RC_outcome> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_C_NOCHANGE_RC_outcome */

/* START_OF_SYMBOL_DEFINITION _encode_C_NOCHANGE_RC_outcome */
/**
 * @summary Encodes a(n) C_NOCHANGE_RC_outcome into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The C_NOCHANGE_RC_outcome, encoded as an ASN.1 Element.
 */
export function _encode_C_NOCHANGE_RC_outcome(
  value: C_NOCHANGE_RC_outcome,
  elGetter: $.ASN1Encoder<C_NOCHANGE_RC_outcome>
) {
  if (!_cached_encoder_for_C_NOCHANGE_RC_outcome) {
    _cached_encoder_for_C_NOCHANGE_RC_outcome = $._encodeEnumerated;
  }
  return _cached_encoder_for_C_NOCHANGE_RC_outcome(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_C_NOCHANGE_RC_outcome */

/* eslint-enable */
