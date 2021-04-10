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
  Assertion,
  _decode_Assertion,
  _encode_Assertion,
} from '../Uds/Assertion.ta';
export {
  Assertion,
  _decode_Assertion,
  _encode_Assertion,
} from '../Uds/Assertion.ta';
import {
  Substrings,
  _decode_Substrings,
  _encode_Substrings,
} from '../Uds/Substrings.ta';
export {
  Substrings,
  _decode_Substrings,
  _encode_Substrings,
} from '../Uds/Substrings.ta';

/* START_OF_SYMBOL_DEFINITION FilterItem_Item */
/**
 * @summary FilterItem_Item
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * FilterItem-Item ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type FilterItem_Item =
  | { assertion: Assertion } /* CHOICE_ALT_ROOT */
  | { substrings: Substrings } /* CHOICE_ALT_ROOT */;
/* END_OF_SYMBOL_DEFINITION FilterItem_Item */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_FilterItem_Item */
let _cached_decoder_for_FilterItem_Item: $.ASN1Decoder<FilterItem_Item> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_FilterItem_Item */

/* START_OF_SYMBOL_DEFINITION _decode_FilterItem_Item */
/**
 * @summary Decodes an ASN.1 element into a(n) FilterItem_Item
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {FilterItem_Item} The decoded data structure.
 */
export function _decode_FilterItem_Item(el: _Element) {
  if (!_cached_decoder_for_FilterItem_Item) {
    _cached_decoder_for_FilterItem_Item = $._decode_inextensible_choice<FilterItem_Item>(
      {
        'CONTEXT 0': ['assertion', _decode_Assertion],
        'CONTEXT 1': ['assertion', _decode_Assertion],
        'CONTEXT 2': ['assertion', _decode_Assertion],
        'CONTEXT 3': ['assertion', _decode_Assertion],
        'CONTEXT 4': ['assertion', _decode_Assertion],
        'CONTEXT 5': ['assertion', _decode_Assertion],
        'CONTEXT 6': ['assertion', _decode_Assertion],
        'CONTEXT 7': ['assertion', _decode_Assertion],
        'CONTEXT 8': ['assertion', _decode_Assertion],
        'CONTEXT 9': ['assertion', _decode_Assertion],
        'CONTEXT 0': ['substrings', _decode_Substrings],
        'CONTEXT 1': ['substrings', _decode_Substrings],
        'CONTEXT 2': ['substrings', _decode_Substrings],
        'CONTEXT 3': ['substrings', _decode_Substrings],
        'CONTEXT 4': ['substrings', _decode_Substrings],
        'CONTEXT 5': ['substrings', _decode_Substrings],
        'CONTEXT 6': ['substrings', _decode_Substrings],
        'CONTEXT 7': ['substrings', _decode_Substrings],
        'CONTEXT 8': ['substrings', _decode_Substrings],
        'CONTEXT 9': ['substrings', _decode_Substrings],
        'CONTEXT 10': ['substrings', _decode_Substrings],
        'CONTEXT 11': ['substrings', _decode_Substrings],
        'CONTEXT 12': ['substrings', _decode_Substrings],
        'CONTEXT 13': ['substrings', _decode_Substrings],
        'CONTEXT 14': ['substrings', _decode_Substrings],
        'CONTEXT 15': ['substrings', _decode_Substrings],
        'CONTEXT 16': ['substrings', _decode_Substrings],
      }
    );
  }
  return _cached_decoder_for_FilterItem_Item(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_FilterItem_Item */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_FilterItem_Item */
let _cached_encoder_for_FilterItem_Item: $.ASN1Encoder<FilterItem_Item> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_FilterItem_Item */

/* START_OF_SYMBOL_DEFINITION _encode_FilterItem_Item */
/**
 * @summary Encodes a(n) FilterItem_Item into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The FilterItem_Item, encoded as an ASN.1 Element.
 */
export function _encode_FilterItem_Item(
  value: FilterItem_Item,
  elGetter: $.ASN1Encoder<FilterItem_Item>
) {
  if (!_cached_encoder_for_FilterItem_Item) {
    _cached_encoder_for_FilterItem_Item = $._encode_choice<FilterItem_Item>(
      {
        assertion: _encode_Assertion,
        substrings: _encode_Substrings,
      },
      $.BER
    );
  }
  return _cached_encoder_for_FilterItem_Item(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_FilterItem_Item */

/* eslint-enable */
