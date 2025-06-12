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
  Equality_Comparision,
  Equality_Comparision_no_value_available_matches /* IMPORTED_LONG_NAMED_BIT */,
  no_value_available_matches /* IMPORTED_SHORT_NAMED_BIT */,
  Equality_Comparision_equals_matches /* IMPORTED_LONG_NAMED_BIT */,
  equals_matches /* IMPORTED_SHORT_NAMED_BIT */,
  _decode_Equality_Comparision,
  _encode_Equality_Comparision,
} from '../ISO8571-FTAM/Equality-Comparision.ta.mjs';
export {
  Equality_Comparision,
  Equality_Comparision_no_value_available_matches /* IMPORTED_LONG_NAMED_BIT */,
  no_value_available_matches /* IMPORTED_SHORT_NAMED_BIT */,
  Equality_Comparision_equals_matches /* IMPORTED_LONG_NAMED_BIT */,
  equals_matches /* IMPORTED_SHORT_NAMED_BIT */,
  _decode_Equality_Comparision,
  _encode_Equality_Comparision,
} from '../ISO8571-FTAM/Equality-Comparision.ta.mjs';

/* START_OF_SYMBOL_DEFINITION Other_Pattern */
/**
 * @summary Other_Pattern
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Other-Pattern  ::=  Equality-Comparision
 * ```
 */
export type Other_Pattern = Equality_Comparision; // DefinedType
/* END_OF_SYMBOL_DEFINITION Other_Pattern */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Other_Pattern */
let _cached_decoder_for_Other_Pattern: $.ASN1Decoder<Other_Pattern> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Other_Pattern */

/* START_OF_SYMBOL_DEFINITION _decode_Other_Pattern */
/**
 * @summary Decodes an ASN.1 element into a(n) Other_Pattern
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Other_Pattern} The decoded data structure.
 */
export function _decode_Other_Pattern(el: _Element) {
  if (!_cached_decoder_for_Other_Pattern) {
    _cached_decoder_for_Other_Pattern = _decode_Equality_Comparision;
  }
  return _cached_decoder_for_Other_Pattern(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_Other_Pattern */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Other_Pattern */
let _cached_encoder_for_Other_Pattern: $.ASN1Encoder<Other_Pattern> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Other_Pattern */

/* START_OF_SYMBOL_DEFINITION _encode_Other_Pattern */
/**
 * @summary Encodes a(n) Other_Pattern into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Other_Pattern, encoded as an ASN.1 Element.
 */
export function _encode_Other_Pattern(
  value: Other_Pattern,
  elGetter: $.ASN1Encoder<Other_Pattern>
) {
  if (!_cached_encoder_for_Other_Pattern) {
    _cached_encoder_for_Other_Pattern = _encode_Equality_Comparision;
  }
  return _cached_encoder_for_Other_Pattern(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_Other_Pattern */

/* eslint-enable */
