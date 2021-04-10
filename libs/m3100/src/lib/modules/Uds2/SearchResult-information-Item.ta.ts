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
  SearchResult_information_Item_hierarchy,
  _decode_SearchResult_information_Item_hierarchy,
  _encode_SearchResult_information_Item_hierarchy,
} from '../Uds2/SearchResult-information-Item-hierarchy.ta';
export {
  SearchResult_information_Item_hierarchy,
  _decode_SearchResult_information_Item_hierarchy,
  _encode_SearchResult_information_Item_hierarchy,
} from '../Uds2/SearchResult-information-Item-hierarchy.ta';
import {
  SearchResult_information_Item_entry,
  _decode_SearchResult_information_Item_entry,
  _encode_SearchResult_information_Item_entry,
} from '../Uds2/SearchResult-information-Item-entry.ta';
export {
  SearchResult_information_Item_entry,
  _decode_SearchResult_information_Item_entry,
  _encode_SearchResult_information_Item_entry,
} from '../Uds2/SearchResult-information-Item-entry.ta';

/* START_OF_SYMBOL_DEFINITION SearchResult_information_Item */
/**
 * @summary SearchResult_information_Item
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SearchResult-information-Item ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type SearchResult_information_Item =
  | { hierarchy: SearchResult_information_Item_hierarchy } /* CHOICE_ALT_ROOT */
  | { entry: SearchResult_information_Item_entry } /* CHOICE_ALT_ROOT */;
/* END_OF_SYMBOL_DEFINITION SearchResult_information_Item */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_SearchResult_information_Item */
let _cached_decoder_for_SearchResult_information_Item: $.ASN1Decoder<SearchResult_information_Item> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_SearchResult_information_Item */

/* START_OF_SYMBOL_DEFINITION _decode_SearchResult_information_Item */
/**
 * @summary Decodes an ASN.1 element into a(n) SearchResult_information_Item
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SearchResult_information_Item} The decoded data structure.
 */
export function _decode_SearchResult_information_Item(el: _Element) {
  if (!_cached_decoder_for_SearchResult_information_Item) {
    _cached_decoder_for_SearchResult_information_Item = $._decode_inextensible_choice<SearchResult_information_Item>(
      {
        'CONTEXT 0': [
          'hierarchy',
          _decode_SearchResult_information_Item_hierarchy,
        ],
        'CONTEXT 1': ['entry', _decode_SearchResult_information_Item_entry],
      }
    );
  }
  return _cached_decoder_for_SearchResult_information_Item(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_SearchResult_information_Item */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_SearchResult_information_Item */
let _cached_encoder_for_SearchResult_information_Item: $.ASN1Encoder<SearchResult_information_Item> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_SearchResult_information_Item */

/* START_OF_SYMBOL_DEFINITION _encode_SearchResult_information_Item */
/**
 * @summary Encodes a(n) SearchResult_information_Item into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SearchResult_information_Item, encoded as an ASN.1 Element.
 */
export function _encode_SearchResult_information_Item(
  value: SearchResult_information_Item,
  elGetter: $.ASN1Encoder<SearchResult_information_Item>
) {
  if (!_cached_encoder_for_SearchResult_information_Item) {
    _cached_encoder_for_SearchResult_information_Item = $._encode_choice<SearchResult_information_Item>(
      {
        hierarchy: _encode_SearchResult_information_Item_hierarchy,
        entry: _encode_SearchResult_information_Item_entry,
      },
      $.BER
    );
  }
  return _cached_encoder_for_SearchResult_information_Item(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_SearchResult_information_Item */

/* eslint-enable */
