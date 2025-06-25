/* eslint-disable */
import {
  NULL,
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
import {
  String_Pattern,
  _decode_String_Pattern,
  _encode_String_Pattern,
} from '../ISO8571-FTAM/String-Pattern.ta.mjs';

/**
 * @summary Pathname_Pattern_pathname_value_Item
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Pathname-Pattern-pathname-value-Item ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type Pathname_Pattern_pathname_value_Item =
  | { string_match: String_Pattern } /* CHOICE_ALT_ROOT */
  | { any_match: NULL } /* CHOICE_ALT_ROOT */;


let _cached_decoder_for_Pathname_Pattern_pathname_value_Item: $.ASN1Decoder<Pathname_Pattern_pathname_value_Item> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) Pathname_Pattern_pathname_value_Item
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Pathname_Pattern_pathname_value_Item} The decoded data structure.
 */
export function _decode_Pathname_Pattern_pathname_value_Item(el: _Element): Pathname_Pattern_pathname_value_Item {
  if (!_cached_decoder_for_Pathname_Pattern_pathname_value_Item) {
    _cached_decoder_for_Pathname_Pattern_pathname_value_Item = $._decode_inextensible_choice<Pathname_Pattern_pathname_value_Item>(
      {
        'CONTEXT 2': [
          'string_match',
          $._decode_implicit<String_Pattern>(() => _decode_String_Pattern),
        ],
        'CONTEXT 3': [
          'any_match',
          $._decode_implicit<NULL>(() => $._decodeNull),
        ],
      }
    );
  }
  return _cached_decoder_for_Pathname_Pattern_pathname_value_Item(el);
}


let _cached_encoder_for_Pathname_Pattern_pathname_value_Item: $.ASN1Encoder<Pathname_Pattern_pathname_value_Item> | null = null;


/**
 * @summary Encodes a(n) Pathname_Pattern_pathname_value_Item into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Pathname_Pattern_pathname_value_Item, encoded as an ASN.1 Element.
 */
export function _encode_Pathname_Pattern_pathname_value_Item(
  value: Pathname_Pattern_pathname_value_Item,
  elGetter: $.ASN1Encoder<Pathname_Pattern_pathname_value_Item>
): _Element {
  if (!_cached_encoder_for_Pathname_Pattern_pathname_value_Item) {
    _cached_encoder_for_Pathname_Pattern_pathname_value_Item = $._encode_choice<Pathname_Pattern_pathname_value_Item>(
      {
        string_match: $._encode_implicit(
          _TagClass.context,
          2,
          () => _encode_String_Pattern,
          $.BER
        ),
        any_match: $._encode_implicit(
          _TagClass.context,
          3,
          () => $._encodeNull,
          $.BER
        ),
      },
      $.BER
    );
  }
  return _cached_encoder_for_Pathname_Pattern_pathname_value_Item(
    value,
    elGetter
  );
}


/* eslint-enable */
