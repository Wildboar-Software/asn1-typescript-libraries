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
} from '../CMIP-1/Attribute.ta';
export {
  Attribute,
  _decode_Attribute,
  _encode_Attribute,
} from '../CMIP-1/Attribute.ta';
import {
  FilterItem_substrings_Item,
  _decode_FilterItem_substrings_Item,
  _encode_FilterItem_substrings_Item,
} from '../CMIP-1/FilterItem-substrings-Item.ta';
export {
  FilterItem_substrings_Item,
  _decode_FilterItem_substrings_Item,
  _encode_FilterItem_substrings_Item,
} from '../CMIP-1/FilterItem-substrings-Item.ta';
import {
  AttributeId,
  _decode_AttributeId,
  _encode_AttributeId,
} from '../CMIP-1/AttributeId.ta';
export {
  AttributeId,
  _decode_AttributeId,
  _encode_AttributeId,
} from '../CMIP-1/AttributeId.ta';

/* START_OF_SYMBOL_DEFINITION FilterItem */
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

/* END_OF_SYMBOL_DEFINITION _encode_FilterItem */

/* eslint-enable */
