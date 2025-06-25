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
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';
import {
  Attribute,
  _decode_Attribute,
  _encode_Attribute,
} from '../CMIP-1/Attribute.ta.mjs';
import {
  FilterItem_substrings_Item,
  _decode_FilterItem_substrings_Item,
  _encode_FilterItem_substrings_Item,
} from '../CMIP-1/FilterItem-substrings-Item.ta.mjs';
import {
  AttributeId,
  _decode_AttributeId,
  _encode_AttributeId,
} from '../CMIP-1/AttributeId.ta.mjs';

/**
 * @summary FilterItem
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * FilterItem  ::=  CHOICE {
 *   equality                [0] IMPLICIT Attribute,
 *   substrings
 *     [1] IMPLICIT SEQUENCE OF
 *                    CHOICE {initialString  [0] IMPLICIT Attribute,
 *                            anyString      [1] IMPLICIT Attribute,
 *                            finalString    [2] IMPLICIT Attribute},
 *   greaterOrEqual          [2] IMPLICIT Attribute, -- asserted value ? attribute value
 *   lessOrEqual             [3] IMPLICIT Attribute, -- asserted value <= attribute value
 *   present                 [4]  AttributeId,
 *   subsetOf                [5] IMPLICIT Attribute, -- asserted value is a subset of attribute value
 *   supersetOf              [6] IMPLICIT Attribute, -- asserted value is a superset of attribute value
 *   nonNullSetIntersection  [7] IMPLICIT Attribute
 * }
 * ```
 */
export type FilterItem =
  | { equality: Attribute } /* CHOICE_ALT_ROOT */
  | { substrings: FilterItem_substrings_Item[] } /* CHOICE_ALT_ROOT */
  | { greaterOrEqual: Attribute } /* CHOICE_ALT_ROOT */
  | { lessOrEqual: Attribute } /* CHOICE_ALT_ROOT */
  | { present: AttributeId } /* CHOICE_ALT_ROOT */
  | { subsetOf: Attribute } /* CHOICE_ALT_ROOT */
  | { supersetOf: Attribute } /* CHOICE_ALT_ROOT */
  | { nonNullSetIntersection: Attribute } /* CHOICE_ALT_ROOT */;


let _cached_decoder_for_FilterItem: $.ASN1Decoder<FilterItem> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) FilterItem
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {FilterItem} The decoded data structure.
 */
export function _decode_FilterItem(el: _Element): FilterItem {
  if (!_cached_decoder_for_FilterItem) {
    _cached_decoder_for_FilterItem = $._decode_inextensible_choice<FilterItem>({
      'CONTEXT 0': [
        'equality',
        $._decode_implicit<Attribute>(() => _decode_Attribute),
      ],
      'CONTEXT 1': [
        'substrings',
        $._decode_implicit<FilterItem_substrings_Item[]>(() =>
          $._decodeSequenceOf<FilterItem_substrings_Item>(
            () => _decode_FilterItem_substrings_Item
          )
        ),
      ],
      'CONTEXT 2': [
        'greaterOrEqual',
        $._decode_implicit<Attribute>(() => _decode_Attribute),
      ],
      'CONTEXT 3': [
        'lessOrEqual',
        $._decode_implicit<Attribute>(() => _decode_Attribute),
      ],
      'CONTEXT 4': [
        'present',
        $._decode_explicit<AttributeId>(() => _decode_AttributeId),
      ],
      'CONTEXT 5': [
        'subsetOf',
        $._decode_implicit<Attribute>(() => _decode_Attribute),
      ],
      'CONTEXT 6': [
        'supersetOf',
        $._decode_implicit<Attribute>(() => _decode_Attribute),
      ],
      'CONTEXT 7': [
        'nonNullSetIntersection',
        $._decode_implicit<Attribute>(() => _decode_Attribute),
      ],
    });
  }
  return _cached_decoder_for_FilterItem(el);
}


let _cached_encoder_for_FilterItem: $.ASN1Encoder<FilterItem> | null = null;


/**
 * @summary Encodes a(n) FilterItem into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The FilterItem, encoded as an ASN.1 Element.
 */
export function _encode_FilterItem(
  value: FilterItem,
  elGetter: $.ASN1Encoder<FilterItem>
): _Element {
  if (!_cached_encoder_for_FilterItem) {
    _cached_encoder_for_FilterItem = $._encode_choice<FilterItem>(
      {
        equality: $._encode_implicit(
          _TagClass.context,
          0,
          () => _encode_Attribute,
          $.BER
        ),
        substrings: $._encode_implicit(
          _TagClass.context,
          1,
          () =>
            $._encodeSequenceOf<FilterItem_substrings_Item>(
              () => _encode_FilterItem_substrings_Item,
              $.BER
            ),
          $.BER
        ),
        greaterOrEqual: $._encode_implicit(
          _TagClass.context,
          2,
          () => _encode_Attribute,
          $.BER
        ),
        lessOrEqual: $._encode_implicit(
          _TagClass.context,
          3,
          () => _encode_Attribute,
          $.BER
        ),
        present: $._encode_explicit(
          _TagClass.context,
          4,
          () => _encode_AttributeId,
          $.BER
        ),
        subsetOf: $._encode_implicit(
          _TagClass.context,
          5,
          () => _encode_Attribute,
          $.BER
        ),
        supersetOf: $._encode_implicit(
          _TagClass.context,
          6,
          () => _encode_Attribute,
          $.BER
        ),
        nonNullSetIntersection: $._encode_implicit(
          _TagClass.context,
          7,
          () => _encode_Attribute,
          $.BER
        ),
      },
      $.BER
    );
  }
  return _cached_encoder_for_FilterItem(value, elGetter);
}


/* eslint-enable */
