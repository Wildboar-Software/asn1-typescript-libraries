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
  AttributeValueAssertion,
  _decode_AttributeValueAssertion,
  _encode_AttributeValueAssertion,
} from '../Lightweight-Directory-Access-Protocol-V3/AttributeValueAssertion.ta.mjs';
import {
  SubstringFilter,
  _decode_SubstringFilter,
  _encode_SubstringFilter,
} from '../Lightweight-Directory-Access-Protocol-V3/SubstringFilter.ta.mjs';
import {
  AttributeDescription,
  _decode_AttributeDescription,
  _encode_AttributeDescription,
} from '../Lightweight-Directory-Access-Protocol-V3/AttributeDescription.ta.mjs';
import {
  MatchingRuleAssertion,
  _decode_MatchingRuleAssertion,
  _encode_MatchingRuleAssertion,
} from '../Lightweight-Directory-Access-Protocol-V3/MatchingRuleAssertion.ta.mjs';
// TODO: CHECK_RECURSIVE_DEFINITION
/**
 * @summary Filter
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Filter  ::=  CHOICE {
 *   and              [0]  SET SIZE (1..MAX) OF filter Filter,
 *   or               [1]  SET SIZE (1..MAX) OF filter Filter,
 *   not              [2]  Filter,
 *   equalityMatch    [3]  AttributeValueAssertion,
 *   substrings       [4]  SubstringFilter,
 *   greaterOrEqual   [5]  AttributeValueAssertion,
 *   lessOrEqual      [6]  AttributeValueAssertion,
 *   present          [7]  AttributeDescription,
 *   approxMatch      [8]  AttributeValueAssertion,
 *   extensibleMatch  [9]  MatchingRuleAssertion,
 *   ...
 * }
 * ```
 */
export type Filter =
  | { and: Filter[] } /* CHOICE_ALT_ROOT */
  | { or: Filter[] } /* CHOICE_ALT_ROOT */
  | { not: Filter } /* CHOICE_ALT_ROOT */
  | { equalityMatch: AttributeValueAssertion } /* CHOICE_ALT_ROOT */
  | { substrings: SubstringFilter } /* CHOICE_ALT_ROOT */
  | { greaterOrEqual: AttributeValueAssertion } /* CHOICE_ALT_ROOT */
  | { lessOrEqual: AttributeValueAssertion } /* CHOICE_ALT_ROOT */
  | { present: AttributeDescription } /* CHOICE_ALT_ROOT */
  | { approxMatch: AttributeValueAssertion } /* CHOICE_ALT_ROOT */
  | { extensibleMatch: MatchingRuleAssertion } /* CHOICE_ALT_ROOT */
  | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;

let _cached_decoder_for_Filter: $.ASN1Decoder<Filter> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Filter
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Filter} The decoded data structure.
 */
export function _decode_Filter(el: _Element): Filter {
  if (!_cached_decoder_for_Filter) {
    _cached_decoder_for_Filter = $._decode_extensible_choice<Filter>({
      'CONTEXT 0': [
        'and',
        $._decode_implicit<Filter[]>(() =>
          $._decodeSetOf<Filter>(() => _decode_Filter)
        ),
      ],
      'CONTEXT 1': [
        'or',
        $._decode_implicit<Filter[]>(() =>
          $._decodeSetOf<Filter>(() => _decode_Filter)
        ),
      ],
      'CONTEXT 2': ['not', $._decode_explicit<Filter>(() => _decode_Filter)],
      'CONTEXT 3': [
        'equalityMatch',
        $._decode_implicit<AttributeValueAssertion>(
          () => _decode_AttributeValueAssertion
        ),
      ],
      'CONTEXT 4': [
        'substrings',
        $._decode_implicit<SubstringFilter>(() => _decode_SubstringFilter),
      ],
      'CONTEXT 5': [
        'greaterOrEqual',
        $._decode_implicit<AttributeValueAssertion>(
          () => _decode_AttributeValueAssertion
        ),
      ],
      'CONTEXT 6': [
        'lessOrEqual',
        $._decode_implicit<AttributeValueAssertion>(
          () => _decode_AttributeValueAssertion
        ),
      ],
      'CONTEXT 7': [
        'present',
        $._decode_implicit<AttributeDescription>(
          () => _decode_AttributeDescription
        ),
      ],
      'CONTEXT 8': [
        'approxMatch',
        $._decode_implicit<AttributeValueAssertion>(
          () => _decode_AttributeValueAssertion
        ),
      ],
      'CONTEXT 9': [
        'extensibleMatch',
        $._decode_implicit<MatchingRuleAssertion>(
          () => _decode_MatchingRuleAssertion
        ),
      ],
    });
  }
  return _cached_decoder_for_Filter(el);
}

let _cached_encoder_for_Filter: $.ASN1Encoder<Filter> | null = null;

/**
 * @summary Encodes a(n) Filter into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Filter, encoded as an ASN.1 Element.
 */
export function _encode_Filter(value: Filter, elGetter: $.ASN1Encoder<Filter>): _Element {
  if (!_cached_encoder_for_Filter) {
    _cached_encoder_for_Filter = $._encode_choice<Filter>(
      {
        and: $._encode_implicit(
          _TagClass.context,
          0,
          () => $._encodeSetOf<Filter>(() => _encode_Filter, $.BER),
          $.BER
        ),
        or: $._encode_implicit(
          _TagClass.context,
          1,
          () => $._encodeSetOf<Filter>(() => _encode_Filter, $.BER),
          $.BER
        ),
        not: $._encode_explicit(
          _TagClass.context,
          2,
          () => _encode_Filter,
          $.BER
        ),
        equalityMatch: $._encode_implicit(
          _TagClass.context,
          3,
          () => _encode_AttributeValueAssertion,
          $.BER
        ),
        substrings: $._encode_implicit(
          _TagClass.context,
          4,
          () => _encode_SubstringFilter,
          $.BER
        ),
        greaterOrEqual: $._encode_implicit(
          _TagClass.context,
          5,
          () => _encode_AttributeValueAssertion,
          $.BER
        ),
        lessOrEqual: $._encode_implicit(
          _TagClass.context,
          6,
          () => _encode_AttributeValueAssertion,
          $.BER
        ),
        present: $._encode_implicit(
          _TagClass.context,
          7,
          () => _encode_AttributeDescription,
          $.BER
        ),
        approxMatch: $._encode_implicit(
          _TagClass.context,
          8,
          () => _encode_AttributeValueAssertion,
          $.BER
        ),
        extensibleMatch: $._encode_implicit(
          _TagClass.context,
          9,
          () => _encode_MatchingRuleAssertion,
          $.BER
        ),
      },
      $.BER
    );
  }
  return _cached_encoder_for_Filter(value, elGetter);
}


/* eslint-enable */
