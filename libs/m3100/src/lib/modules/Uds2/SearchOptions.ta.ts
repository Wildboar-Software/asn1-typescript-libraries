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
  SearchOption,
  _enum_for_SearchOption,
  SearchOption_performExactly /* IMPORTED_LONG_ENUMERATION_ITEM */,
  performExactly /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  SearchOption_includeAllAreas /* IMPORTED_LONG_ENUMERATION_ITEM */,
  includeAllAreas /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  _decode_SearchOption,
  _encode_SearchOption,
} from '../Uds2/SearchOption.ta';
export {
  SearchOption,
  _enum_for_SearchOption,
  SearchOption_performExactly /* IMPORTED_LONG_ENUMERATION_ITEM */,
  performExactly /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  SearchOption_includeAllAreas /* IMPORTED_LONG_ENUMERATION_ITEM */,
  includeAllAreas /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  _decode_SearchOption,
  _encode_SearchOption,
} from '../Uds2/SearchOption.ta';

/* START_OF_SYMBOL_DEFINITION SearchOptions */
/**
 * @summary SearchOptions
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SearchOptions  ::=  SEQUENCE OF SearchOption
 * ```
 */
export type SearchOptions = SearchOption[]; // SequenceOfType
/* END_OF_SYMBOL_DEFINITION SearchOptions */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_SearchOptions */
let _cached_decoder_for_SearchOptions: $.ASN1Decoder<SearchOptions> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_SearchOptions */

/* START_OF_SYMBOL_DEFINITION _decode_SearchOptions */
/**
 * @summary Decodes an ASN.1 element into a(n) SearchOptions
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SearchOptions} The decoded data structure.
 */
export function _decode_SearchOptions(el: _Element) {
  if (!_cached_decoder_for_SearchOptions) {
    _cached_decoder_for_SearchOptions = $._decodeSequenceOf<SearchOption>(
      () => _decode_SearchOption
    );
  }
  return _cached_decoder_for_SearchOptions(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_SearchOptions */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_SearchOptions */
let _cached_encoder_for_SearchOptions: $.ASN1Encoder<SearchOptions> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_SearchOptions */

/* START_OF_SYMBOL_DEFINITION _encode_SearchOptions */
/**
 * @summary Encodes a(n) SearchOptions into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SearchOptions, encoded as an ASN.1 Element.
 */
export function _encode_SearchOptions(
  value: SearchOptions,
  elGetter: $.ASN1Encoder<SearchOptions>
) {
  if (!_cached_encoder_for_SearchOptions) {
    _cached_encoder_for_SearchOptions = $._encodeSequenceOf<SearchOption>(
      () => _encode_SearchOption,
      $.BER
    );
  }
  return _cached_encoder_for_SearchOptions(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_SearchOptions */

/* eslint-enable */
