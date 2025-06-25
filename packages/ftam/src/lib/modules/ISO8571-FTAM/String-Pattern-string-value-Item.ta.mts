/* eslint-disable */
import {
  INTEGER,
  NULL,
  GraphicString,
  ASN1Element as _Element,
  ASN1TagClass as _TagClass,
  ASN1Construction as _Construction,
  ASN1UniversalType as _UniversalType,
  ObjectIdentifier as _OID,
  External as _External,
  EmbeddedPDV as _PDV,
  ASN1ConstructionError as _ConstructionError,
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';


/**
 * @summary String_Pattern_string_value_Item
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * String-Pattern-string-value-Item ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type String_Pattern_string_value_Item =
  | { substring_match: GraphicString } /* CHOICE_ALT_ROOT */
  | { any_match: NULL } /* CHOICE_ALT_ROOT */
  | { number_of_characters_match: INTEGER } /* CHOICE_ALT_ROOT */;


let _cached_decoder_for_String_Pattern_string_value_Item: $.ASN1Decoder<String_Pattern_string_value_Item> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) String_Pattern_string_value_Item
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {String_Pattern_string_value_Item} The decoded data structure.
 */
export function _decode_String_Pattern_string_value_Item(el: _Element): String_Pattern_string_value_Item {
  if (!_cached_decoder_for_String_Pattern_string_value_Item) {
    _cached_decoder_for_String_Pattern_string_value_Item = $._decode_inextensible_choice<String_Pattern_string_value_Item>(
      {
        'CONTEXT 2': [
          'substring_match',
          $._decode_implicit<GraphicString>(() => $._decodeGraphicString),
        ],
        'CONTEXT 3': [
          'any_match',
          $._decode_implicit<NULL>(() => $._decodeNull),
        ],
        'CONTEXT 4': [
          'number_of_characters_match',
          $._decode_implicit<INTEGER>(() => $._decodeInteger),
        ],
      }
    );
  }
  return _cached_decoder_for_String_Pattern_string_value_Item(el);
}


let _cached_encoder_for_String_Pattern_string_value_Item: $.ASN1Encoder<String_Pattern_string_value_Item> | null = null;


/**
 * @summary Encodes a(n) String_Pattern_string_value_Item into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The String_Pattern_string_value_Item, encoded as an ASN.1 Element.
 */
export function _encode_String_Pattern_string_value_Item(
  value: String_Pattern_string_value_Item,
  elGetter: $.ASN1Encoder<String_Pattern_string_value_Item>
): _Element {
  if (!_cached_encoder_for_String_Pattern_string_value_Item) {
    _cached_encoder_for_String_Pattern_string_value_Item = $._encode_choice<String_Pattern_string_value_Item>(
      {
        substring_match: $._encode_implicit(
          _TagClass.context,
          2,
          () => $._encodeGraphicString,
          $.BER
        ),
        any_match: $._encode_implicit(
          _TagClass.context,
          3,
          () => $._encodeNull,
          $.BER
        ),
        number_of_characters_match: $._encode_implicit(
          _TagClass.context,
          4,
          () => $._encodeInteger,
          $.BER
        ),
      },
      $.BER
    );
  }
  return _cached_encoder_for_String_Pattern_string_value_Item(value, elGetter);
}


/* eslint-enable */
