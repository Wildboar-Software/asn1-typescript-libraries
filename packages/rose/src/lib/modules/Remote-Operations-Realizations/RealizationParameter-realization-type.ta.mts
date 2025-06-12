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

/* START_OF_SYMBOL_DEFINITION _enum_for_RealizationParameter_realization_type */
/**
 * @summary RealizationParameter_realization_type
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RealizationParameter-realization-type ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```@enum {number}
 */
export enum _enum_for_RealizationParameter_realization_type {
  association_service = 0,
  transfer_service = 1,
}
/* END_OF_SYMBOL_DEFINITION _enum_for_RealizationParameter_realization_type */

/* START_OF_SYMBOL_DEFINITION RealizationParameter_realization_type */
/**
 * @summary RealizationParameter_realization_type
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RealizationParameter-realization-type ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```@enum {number}
 */
export type RealizationParameter_realization_type = _enum_for_RealizationParameter_realization_type;
/* END_OF_SYMBOL_DEFINITION RealizationParameter_realization_type */

/* START_OF_SYMBOL_DEFINITION RealizationParameter_realization_type */
/**
 * @summary RealizationParameter_realization_type
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RealizationParameter-realization-type ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```@enum {number}
 */
export const RealizationParameter_realization_type = _enum_for_RealizationParameter_realization_type;
/* END_OF_SYMBOL_DEFINITION RealizationParameter_realization_type */

/* START_OF_SYMBOL_DEFINITION RealizationParameter_realization_type_association_service */
/**
 * @summary RealizationParameter_realization_type_association_service
 * @constant
 * @type {number}
 */
export const RealizationParameter_realization_type_association_service: RealizationParameter_realization_type =
  RealizationParameter_realization_type.association_service; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION RealizationParameter_realization_type_association_service */

/* START_OF_SYMBOL_DEFINITION association_service */
/**
 * @summary association_service
 * @constant
 * @type {number}
 */
export const association_service: RealizationParameter_realization_type =
  RealizationParameter_realization_type.association_service; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION association_service */

/* START_OF_SYMBOL_DEFINITION RealizationParameter_realization_type_transfer_service */
/**
 * @summary RealizationParameter_realization_type_transfer_service
 * @constant
 * @type {number}
 */
export const RealizationParameter_realization_type_transfer_service: RealizationParameter_realization_type =
  RealizationParameter_realization_type.transfer_service; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION RealizationParameter_realization_type_transfer_service */

/* START_OF_SYMBOL_DEFINITION transfer_service */
/**
 * @summary transfer_service
 * @constant
 * @type {number}
 */
export const transfer_service: RealizationParameter_realization_type =
  RealizationParameter_realization_type.transfer_service; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION transfer_service */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_RealizationParameter_realization_type */
let _cached_decoder_for_RealizationParameter_realization_type: $.ASN1Decoder<RealizationParameter_realization_type> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_RealizationParameter_realization_type */

/* START_OF_SYMBOL_DEFINITION _decode_RealizationParameter_realization_type */
/**
 * @summary Decodes an ASN.1 element into a(n) RealizationParameter_realization_type
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {RealizationParameter_realization_type} The decoded data structure.
 */
export function _decode_RealizationParameter_realization_type(el: _Element) {
  if (!_cached_decoder_for_RealizationParameter_realization_type) {
    _cached_decoder_for_RealizationParameter_realization_type =
      $._decodeEnumerated;
  }
  return _cached_decoder_for_RealizationParameter_realization_type(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_RealizationParameter_realization_type */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_RealizationParameter_realization_type */
let _cached_encoder_for_RealizationParameter_realization_type: $.ASN1Encoder<RealizationParameter_realization_type> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_RealizationParameter_realization_type */

/* START_OF_SYMBOL_DEFINITION _encode_RealizationParameter_realization_type */
/**
 * @summary Encodes a(n) RealizationParameter_realization_type into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RealizationParameter_realization_type, encoded as an ASN.1 Element.
 */
export function _encode_RealizationParameter_realization_type(
  value: RealizationParameter_realization_type,
  elGetter: $.ASN1Encoder<RealizationParameter_realization_type>
) {
  if (!_cached_encoder_for_RealizationParameter_realization_type) {
    _cached_encoder_for_RealizationParameter_realization_type =
      $._encodeEnumerated;
  }
  return _cached_encoder_for_RealizationParameter_realization_type(
    value,
    elGetter
  );
}

/* END_OF_SYMBOL_DEFINITION _encode_RealizationParameter_realization_type */

/* eslint-enable */
