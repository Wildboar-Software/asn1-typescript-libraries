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
  FilterItem_Item,
  _decode_FilterItem_Item,
  _encode_FilterItem_Item,
} from '../Uds2/FilterItem-Item.ta';
export {
  FilterItem_Item,
  _decode_FilterItem_Item,
  _encode_FilterItem_Item,
} from '../Uds2/FilterItem-Item.ta';

/* START_OF_SYMBOL_DEFINITION FilterItem */
/**
 * @summary FilterItem
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * FilterItem  ::=
 *   SEQUENCE (SIZE (1..MAX)) OF
 *     CHOICE {assertion   Assertion,
 *             substrings  Substrings}
 * ```
 */
export type FilterItem = FilterItem_Item[]; // SequenceOfType
/* END_OF_SYMBOL_DEFINITION FilterItem */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_FilterItem */
let _cached_decoder_for_FilterItem: $.ASN1Decoder<FilterItem> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_FilterItem */

/* START_OF_SYMBOL_DEFINITION _decode_FilterItem */
/**
 * @summary Decodes an ASN.1 element into a(n) FilterItem
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {FilterItem} The decoded data structure.
 */
export function _decode_FilterItem(el: _Element) {
  if (!_cached_decoder_for_FilterItem) {
    _cached_decoder_for_FilterItem = $._decodeSequenceOf<FilterItem_Item>(
      () => _decode_FilterItem_Item
    );
  }
  return _cached_decoder_for_FilterItem(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_FilterItem */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_FilterItem */
let _cached_encoder_for_FilterItem: $.ASN1Encoder<FilterItem> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_FilterItem */

/* START_OF_SYMBOL_DEFINITION _encode_FilterItem */
/**
 * @summary Encodes a(n) FilterItem into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The FilterItem, encoded as an ASN.1 Element.
 */
export function _encode_FilterItem(
  value: FilterItem,
  elGetter: $.ASN1Encoder<FilterItem>
) {
  if (!_cached_encoder_for_FilterItem) {
    _cached_encoder_for_FilterItem = $._encodeSequenceOf<FilterItem_Item>(
      () => _encode_FilterItem_Item,
      $.BER
    );
  }
  return _cached_encoder_for_FilterItem(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_FilterItem */

/* eslint-enable */
