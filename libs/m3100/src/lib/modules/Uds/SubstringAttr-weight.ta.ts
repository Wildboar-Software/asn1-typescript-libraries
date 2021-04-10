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

/* START_OF_SYMBOL_DEFINITION _enum_for_SubstringAttr_weight */
/**
 * @summary SubstringAttr_weight
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SubstringAttr-weight ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```@enum {number}
 */
export enum _enum_for_SubstringAttr_weight {
  low = 0,
  high = 1,
}
/* END_OF_SYMBOL_DEFINITION _enum_for_SubstringAttr_weight */

/* START_OF_SYMBOL_DEFINITION SubstringAttr_weight */
/**
 * @summary SubstringAttr_weight
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SubstringAttr-weight ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```@enum {number}
 */
export type SubstringAttr_weight = _enum_for_SubstringAttr_weight;
/* END_OF_SYMBOL_DEFINITION SubstringAttr_weight */

/* START_OF_SYMBOL_DEFINITION SubstringAttr_weight */
/**
 * @summary SubstringAttr_weight
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SubstringAttr-weight ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```@enum {number}
 */
export const SubstringAttr_weight = _enum_for_SubstringAttr_weight;
/* END_OF_SYMBOL_DEFINITION SubstringAttr_weight */

/* START_OF_SYMBOL_DEFINITION SubstringAttr_weight_low */
/**
 * @summary SubstringAttr_weight_low
 * @constant
 * @type {number}
 */
export const SubstringAttr_weight_low: SubstringAttr_weight =
  SubstringAttr_weight.low; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION SubstringAttr_weight_low */

/* START_OF_SYMBOL_DEFINITION low */
/**
 * @summary low
 * @constant
 * @type {number}
 */
export const low: SubstringAttr_weight =
  SubstringAttr_weight.low; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION low */

/* START_OF_SYMBOL_DEFINITION SubstringAttr_weight_high */
/**
 * @summary SubstringAttr_weight_high
 * @constant
 * @type {number}
 */
export const SubstringAttr_weight_high: SubstringAttr_weight =
  SubstringAttr_weight.high; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION SubstringAttr_weight_high */

/* START_OF_SYMBOL_DEFINITION high */
/**
 * @summary high
 * @constant
 * @type {number}
 */
export const high: SubstringAttr_weight =
  SubstringAttr_weight.high; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION high */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_SubstringAttr_weight */
let _cached_decoder_for_SubstringAttr_weight: $.ASN1Decoder<SubstringAttr_weight> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_SubstringAttr_weight */

/* START_OF_SYMBOL_DEFINITION _decode_SubstringAttr_weight */
/**
 * @summary Decodes an ASN.1 element into a(n) SubstringAttr_weight
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SubstringAttr_weight} The decoded data structure.
 */
export function _decode_SubstringAttr_weight(el: _Element) {
  if (!_cached_decoder_for_SubstringAttr_weight) {
    _cached_decoder_for_SubstringAttr_weight = $._decodeEnumerated;
  }
  return _cached_decoder_for_SubstringAttr_weight(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_SubstringAttr_weight */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_SubstringAttr_weight */
let _cached_encoder_for_SubstringAttr_weight: $.ASN1Encoder<SubstringAttr_weight> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_SubstringAttr_weight */

/* START_OF_SYMBOL_DEFINITION _encode_SubstringAttr_weight */
/**
 * @summary Encodes a(n) SubstringAttr_weight into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SubstringAttr_weight, encoded as an ASN.1 Element.
 */
export function _encode_SubstringAttr_weight(
  value: SubstringAttr_weight,
  elGetter: $.ASN1Encoder<SubstringAttr_weight>
) {
  if (!_cached_encoder_for_SubstringAttr_weight) {
    _cached_encoder_for_SubstringAttr_weight = $._encodeEnumerated;
  }
  return _cached_encoder_for_SubstringAttr_weight(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_SubstringAttr_weight */

/* eslint-enable */
