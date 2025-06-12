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
import {
  OR_Set,
  _decode_OR_Set,
  _encode_OR_Set,
} from '../ISO8571-FTAM/OR-Set.ta.mjs';
export {
  OR_Set,
  _decode_OR_Set,
  _encode_OR_Set,
} from '../ISO8571-FTAM/OR-Set.ta.mjs';

/* START_OF_SYMBOL_DEFINITION Attribute_Value_Assertions */
/**
 * @summary Attribute_Value_Assertions
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Attribute-Value-Assertions  ::=  [APPLICATION 26] IMPLICIT OR-Set
 * ```
 */
export type Attribute_Value_Assertions = OR_Set; // DefinedType
/* END_OF_SYMBOL_DEFINITION Attribute_Value_Assertions */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Attribute_Value_Assertions */
let _cached_decoder_for_Attribute_Value_Assertions: $.ASN1Decoder<Attribute_Value_Assertions> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Attribute_Value_Assertions */

/* START_OF_SYMBOL_DEFINITION _decode_Attribute_Value_Assertions */
/**
 * @summary Decodes an ASN.1 element into a(n) Attribute_Value_Assertions
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Attribute_Value_Assertions} The decoded data structure.
 */
export function _decode_Attribute_Value_Assertions(el: _Element) {
  if (!_cached_decoder_for_Attribute_Value_Assertions) {
    _cached_decoder_for_Attribute_Value_Assertions = $._decode_implicit<Attribute_Value_Assertions>(
      () => _decode_OR_Set
    );
  }
  return _cached_decoder_for_Attribute_Value_Assertions(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_Attribute_Value_Assertions */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Attribute_Value_Assertions */
let _cached_encoder_for_Attribute_Value_Assertions: $.ASN1Encoder<Attribute_Value_Assertions> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Attribute_Value_Assertions */

/* START_OF_SYMBOL_DEFINITION _encode_Attribute_Value_Assertions */
/**
 * @summary Encodes a(n) Attribute_Value_Assertions into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Attribute_Value_Assertions, encoded as an ASN.1 Element.
 */
export function _encode_Attribute_Value_Assertions(
  value: Attribute_Value_Assertions,
  elGetter: $.ASN1Encoder<Attribute_Value_Assertions>
) {
  if (!_cached_encoder_for_Attribute_Value_Assertions) {
    _cached_encoder_for_Attribute_Value_Assertions = $._encode_implicit(
      _TagClass.application,
      26,
      () => _encode_OR_Set,
      $.BER
    );
  }
  return _cached_encoder_for_Attribute_Value_Assertions(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_Attribute_Value_Assertions */

/* eslint-enable */
