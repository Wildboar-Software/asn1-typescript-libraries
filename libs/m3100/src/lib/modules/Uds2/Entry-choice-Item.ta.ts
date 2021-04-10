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
  Attribute,
  _decode_Attribute,
  _encode_Attribute,
} from '../Uds2/Attribute.ta';
export {
  Attribute,
  _decode_Attribute,
  _encode_Attribute,
} from '../Uds2/Attribute.ta';
import { Family, _decode_Family, _encode_Family } from '../Uds2/Family.ta';
export { Family, _decode_Family, _encode_Family } from '../Uds2/Family.ta';

/* START_OF_SYMBOL_DEFINITION Entry_choice_Item */
/**
 * @summary Entry_choice_Item
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Entry-choice-Item ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type Entry_choice_Item =
  | { attribute: Attribute } /* CHOICE_ALT_ROOT */
  | { family: Family } /* CHOICE_ALT_ROOT */;
/* END_OF_SYMBOL_DEFINITION Entry_choice_Item */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Entry_choice_Item */
let _cached_decoder_for_Entry_choice_Item: $.ASN1Decoder<Entry_choice_Item> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Entry_choice_Item */

/* START_OF_SYMBOL_DEFINITION _decode_Entry_choice_Item */
/**
 * @summary Decodes an ASN.1 element into a(n) Entry_choice_Item
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Entry_choice_Item} The decoded data structure.
 */
export function _decode_Entry_choice_Item(el: _Element) {
  if (!_cached_decoder_for_Entry_choice_Item) {
    _cached_decoder_for_Entry_choice_Item = $._decode_inextensible_choice<Entry_choice_Item>(
      {
        'CONTEXT 0': ['attribute', _decode_Attribute],
        'CONTEXT 1': ['attribute', _decode_Attribute],
        'CONTEXT 2': ['attribute', _decode_Attribute],
        'CONTEXT 3': ['attribute', _decode_Attribute],
        'CONTEXT 4': ['attribute', _decode_Attribute],
        'CONTEXT 5': ['attribute', _decode_Attribute],
        'CONTEXT 6': ['attribute', _decode_Attribute],
        'CONTEXT 7': ['attribute', _decode_Attribute],
        'CONTEXT 8': ['attribute', _decode_Attribute],
        'CONTEXT 9': ['attribute', _decode_Attribute],
        'CONTEXT 10': ['attribute', _decode_Attribute],
        'CONTEXT 11': ['attribute', _decode_Attribute],
        'CONTEXT 12': ['attribute', _decode_Attribute],
        'CONTEXT 13': ['attribute', _decode_Attribute],
        'CONTEXT 14': ['attribute', _decode_Attribute],
        'CONTEXT 15': ['attribute', _decode_Attribute],
        'CONTEXT 16': ['attribute', _decode_Attribute],
        'CONTEXT 17': ['attribute', _decode_Attribute],
        'CONTEXT 18': ['attribute', _decode_Attribute],
        'CONTEXT 19': ['attribute', _decode_Attribute],
        'CONTEXT 20': ['attribute', _decode_Attribute],
        'CONTEXT 21': ['attribute', _decode_Attribute],
        'CONTEXT 22': ['attribute', _decode_Attribute],
        'CONTEXT 23': ['attribute', _decode_Attribute],
        'CONTEXT 24': ['attribute', _decode_Attribute],
        'CONTEXT 25': ['attribute', _decode_Attribute],
        'CONTEXT 26': ['attribute', _decode_Attribute],
        'CONTEXT 27': ['attribute', _decode_Attribute],
        'CONTEXT 28': ['attribute', _decode_Attribute],
        'CONTEXT 29': ['attribute', _decode_Attribute],
        'CONTEXT 30': ['attribute', _decode_Attribute],
        'CONTEXT 0': ['family', _decode_Family],
      }
    );
  }
  return _cached_decoder_for_Entry_choice_Item(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_Entry_choice_Item */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Entry_choice_Item */
let _cached_encoder_for_Entry_choice_Item: $.ASN1Encoder<Entry_choice_Item> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Entry_choice_Item */

/* START_OF_SYMBOL_DEFINITION _encode_Entry_choice_Item */
/**
 * @summary Encodes a(n) Entry_choice_Item into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Entry_choice_Item, encoded as an ASN.1 Element.
 */
export function _encode_Entry_choice_Item(
  value: Entry_choice_Item,
  elGetter: $.ASN1Encoder<Entry_choice_Item>
) {
  if (!_cached_encoder_for_Entry_choice_Item) {
    _cached_encoder_for_Entry_choice_Item = $._encode_choice<Entry_choice_Item>(
      {
        attribute: _encode_Attribute,
        family: _encode_Family,
      },
      $.BER
    );
  }
  return _cached_encoder_for_Entry_choice_Item(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_Entry_choice_Item */

/* eslint-enable */
