/* eslint-disable */
import {
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
  Attribute,
  _decode_Attribute,
  _encode_Attribute,
} from '../CMIP-1/Attribute.ta.mjs';
/* START_OF_SYMBOL_DEFINITION FilterItem_substrings_Item */
/**
 * @summary FilterItem_substrings_Item
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * FilterItem-substrings-Item ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type FilterItem_substrings_Item =
  | { initialString: Attribute } /* CHOICE_ALT_ROOT */
  | { anyString: Attribute } /* CHOICE_ALT_ROOT */
  | { finalString: Attribute } /* CHOICE_ALT_ROOT */;
/* END_OF_SYMBOL_DEFINITION FilterItem_substrings_Item */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_FilterItem_substrings_Item */
let _cached_decoder_for_FilterItem_substrings_Item: $.ASN1Decoder<FilterItem_substrings_Item> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_FilterItem_substrings_Item */

/* START_OF_SYMBOL_DEFINITION _decode_FilterItem_substrings_Item */
/**
 * @summary Decodes an ASN.1 element into a(n) FilterItem_substrings_Item
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {FilterItem_substrings_Item} The decoded data structure.
 */
export function _decode_FilterItem_substrings_Item(el: _Element) {
  if (!_cached_decoder_for_FilterItem_substrings_Item) {
    _cached_decoder_for_FilterItem_substrings_Item = $._decode_inextensible_choice<FilterItem_substrings_Item>(
      {
        'CONTEXT 0': [
          'initialString',
          $._decode_implicit<Attribute>(() => _decode_Attribute),
        ],
        'CONTEXT 1': [
          'anyString',
          $._decode_implicit<Attribute>(() => _decode_Attribute),
        ],
        'CONTEXT 2': [
          'finalString',
          $._decode_implicit<Attribute>(() => _decode_Attribute),
        ],
      }
    );
  }
  return _cached_decoder_for_FilterItem_substrings_Item(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_FilterItem_substrings_Item */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_FilterItem_substrings_Item */
let _cached_encoder_for_FilterItem_substrings_Item: $.ASN1Encoder<FilterItem_substrings_Item> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_FilterItem_substrings_Item */

/* START_OF_SYMBOL_DEFINITION _encode_FilterItem_substrings_Item */
/**
 * @summary Encodes a(n) FilterItem_substrings_Item into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The FilterItem_substrings_Item, encoded as an ASN.1 Element.
 */
export function _encode_FilterItem_substrings_Item(
  value: FilterItem_substrings_Item,
  elGetter: $.ASN1Encoder<FilterItem_substrings_Item>
) {
  if (!_cached_encoder_for_FilterItem_substrings_Item) {
    _cached_encoder_for_FilterItem_substrings_Item = $._encode_choice<FilterItem_substrings_Item>(
      {
        initialString: $._encode_implicit(
          _TagClass.context,
          0,
          () => _encode_Attribute,
          $.BER
        ),
        anyString: $._encode_implicit(
          _TagClass.context,
          1,
          () => _encode_Attribute,
          $.BER
        ),
        finalString: $._encode_implicit(
          _TagClass.context,
          2,
          () => _encode_Attribute,
          $.BER
        ),
      },
      $.BER
    );
  }
  return _cached_encoder_for_FilterItem_substrings_Item(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_FilterItem_substrings_Item */

/* eslint-enable */
