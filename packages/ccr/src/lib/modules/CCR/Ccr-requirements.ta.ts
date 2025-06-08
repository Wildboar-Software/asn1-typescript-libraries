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
import * as $ from 'asn1-ts/dist/node/functional';

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
let _cached_decoder_for_Ccr_requirements: $.ASN1Decoder<Ccr_requirements> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Ccr_requirements */

/* START_OF_SYMBOL_DEFINITION _decode_Ccr_requirements */
/**
 * @summary Decodes an ASN.1 element into a(n) Ccr_requirements
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Ccr_requirements} The decoded data structure.
 */
export function _decode_Ccr_requirements(el: _Element) {
  if (!_cached_decoder_for_Ccr_requirements) {
    _cached_decoder_for_Ccr_requirements = $._decodeBitString;
  }
  return _cached_decoder_for_Ccr_requirements(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_Ccr_requirements */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Ccr_requirements */
let _cached_encoder_for_Ccr_requirements: $.ASN1Encoder<Ccr_requirements> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Ccr_requirements */

/* START_OF_SYMBOL_DEFINITION _encode_Ccr_requirements */
/**
 * @summary Encodes a(n) Ccr_requirements into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Ccr_requirements, encoded as an ASN.1 Element.
 */
export function _encode_Ccr_requirements(
  value: Ccr_requirements,
  elGetter: $.ASN1Encoder<Ccr_requirements>
) {
  if (!_cached_encoder_for_Ccr_requirements) {
    _cached_encoder_for_Ccr_requirements = $._encodeBitString;
  }
  return _cached_encoder_for_Ccr_requirements(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_Ccr_requirements */

/* eslint-enable */
