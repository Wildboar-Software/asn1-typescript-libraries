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
  FilterItem,
  _decode_FilterItem,
  _encode_FilterItem,
} from '../CMIP-1/FilterItem.ta.mjs';

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


let _cached_decoder_for_CMISFilter: $.ASN1Decoder<CMISFilter> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) CMISFilter
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CMISFilter} The decoded data structure.
 */
export function _decode_CMISFilter(el: _Element): CMISFilter {
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


let _cached_encoder_for_CMISFilter: $.ASN1Encoder<CMISFilter> | null = null;


/**
 * @summary Encodes a(n) CMISFilter into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CMISFilter, encoded as an ASN.1 Element.
 */
export function _encode_CMISFilter(
  value: CMISFilter,
  elGetter: $.ASN1Encoder<CMISFilter>
): _Element {
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


/* eslint-enable */
