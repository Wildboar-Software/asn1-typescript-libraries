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
import {
  Option,
  _enum_for_Option,
  Option_paging /* IMPORTED_LONG_ENUMERATION_ITEM */,
  paging /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  Option_weighting /* IMPORTED_LONG_ENUMERATION_ITEM */,
  weighting /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  _decode_Option,
  _encode_Option,
} from '../Uds/Option.ta';
export {
  Option,
  _enum_for_Option,
  Option_paging /* IMPORTED_LONG_ENUMERATION_ITEM */,
  paging /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  Option_weighting /* IMPORTED_LONG_ENUMERATION_ITEM */,
  weighting /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  _decode_Option,
  _encode_Option,
} from '../Uds/Option.ta';

/* START_OF_SYMBOL_DEFINITION Options */
/**
 * @summary Options
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Options  ::=  SEQUENCE OF Option
 * ```
 */
export type Options = Option[]; // SequenceOfType
/* END_OF_SYMBOL_DEFINITION Options */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Options */
let _cached_decoder_for_Options: $.ASN1Decoder<Options> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Options */

/* START_OF_SYMBOL_DEFINITION _decode_Options */
/**
 * @summary Decodes an ASN.1 element into a(n) Options
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Options} The decoded data structure.
 */
export function _decode_Options(el: _Element) {
  if (!_cached_decoder_for_Options) {
    _cached_decoder_for_Options = $._decodeSequenceOf<Option>(
      () => _decode_Option
    );
  }
  return _cached_decoder_for_Options(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_Options */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Options */
let _cached_encoder_for_Options: $.ASN1Encoder<Options> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Options */

/* START_OF_SYMBOL_DEFINITION _encode_Options */
/**
 * @summary Encodes a(n) Options into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Options, encoded as an ASN.1 Element.
 */
export function _encode_Options(
  value: Options,
  elGetter: $.ASN1Encoder<Options>
) {
  if (!_cached_encoder_for_Options) {
    _cached_encoder_for_Options = $._encodeSequenceOf<Option>(
      () => _encode_Option,
      $.BER
    );
  }
  return _cached_encoder_for_Options(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_Options */

/* eslint-enable */
