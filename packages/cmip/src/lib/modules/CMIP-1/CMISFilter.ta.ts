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
  FilterItem,
  _decode_FilterItem,
  _encode_FilterItem,
} from '../CMIP-1/FilterItem.ta.js';
export {
  FilterItem,
  _decode_FilterItem,
  _encode_FilterItem,
} from '../CMIP-1/FilterItem.ta.js';

/* START_OF_SYMBOL_DEFINITION CMISFilter */
// TODO: CHECK_RECURSIVE_DEFINITION
/**
 * @summary CMISFilter
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CMISFilter  ::=  CHOICE {
 *   item  [8]  FilterItem,
 *   and   [9] IMPLICIT SET OF CMISFilter,
 *   or    [10] IMPLICIT SET OF CMISFilter,
 *   not   [11]  CMISFilter
 * }
 * ```
 */
export type CMISFilter =
  | { item: FilterItem } /* CHOICE_ALT_ROOT */
  | { and: CMISFilter[] } /* CHOICE_ALT_ROOT */
  | { or: CMISFilter[] } /* CHOICE_ALT_ROOT */
  | { not: CMISFilter } /* CHOICE_ALT_ROOT */;
/* END_OF_SYMBOL_DEFINITION CMISFilter */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_CMISFilter */
let _cached_decoder_for_CMISFilter: $.ASN1Decoder<CMISFilter> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_CMISFilter */

/* START_OF_SYMBOL_DEFINITION _decode_CMISFilter */
/**
 * @summary Decodes an ASN.1 element into a(n) CMISFilter
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CMISFilter} The decoded data structure.
 */
export function _decode_CMISFilter(el: _Element) {
  if (!_cached_decoder_for_CMISFilter) {
    _cached_decoder_for_CMISFilter = $._decode_inextensible_choice<CMISFilter>({
      'CONTEXT 8': [
        'item',
        $._decode_explicit<FilterItem>(() => _decode_FilterItem),
      ],
      'CONTEXT 9': [
        'and',
        $._decode_implicit<CMISFilter[]>(() =>
          $._decodeSetOf<CMISFilter>(() => _decode_CMISFilter)
        ),
      ],
      'CONTEXT 10': [
        'or',
        $._decode_implicit<CMISFilter[]>(() =>
          $._decodeSetOf<CMISFilter>(() => _decode_CMISFilter)
        ),
      ],
      'CONTEXT 11': [
        'not',
        $._decode_explicit<CMISFilter>(() => _decode_CMISFilter),
      ],
    });
  }
  return _cached_decoder_for_CMISFilter(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_CMISFilter */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_CMISFilter */
let _cached_encoder_for_CMISFilter: $.ASN1Encoder<CMISFilter> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_CMISFilter */

/* START_OF_SYMBOL_DEFINITION _encode_CMISFilter */
/**
 * @summary Encodes a(n) CMISFilter into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CMISFilter, encoded as an ASN.1 Element.
 */
export function _encode_CMISFilter(
  value: CMISFilter,
  elGetter: $.ASN1Encoder<CMISFilter>
) {
  if (!_cached_encoder_for_CMISFilter) {
    _cached_encoder_for_CMISFilter = $._encode_choice<CMISFilter>(
      {
        item: $._encode_explicit(
          _TagClass.context,
          8,
          () => _encode_FilterItem,
          $.BER
        ),
        and: $._encode_implicit(
          _TagClass.context,
          9,
          () => $._encodeSetOf<CMISFilter>(() => _encode_CMISFilter, $.BER),
          $.BER
        ),
        or: $._encode_implicit(
          _TagClass.context,
          10,
          () => $._encodeSetOf<CMISFilter>(() => _encode_CMISFilter, $.BER),
          $.BER
        ),
        not: $._encode_explicit(
          _TagClass.context,
          11,
          () => _encode_CMISFilter,
          $.BER
        ),
      },
      $.BER
    );
  }
  return _cached_encoder_for_CMISFilter(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_CMISFilter */

/* eslint-enable */
