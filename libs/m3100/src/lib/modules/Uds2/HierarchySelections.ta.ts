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
  HierarchySelection,
  _enum_for_HierarchySelection,
  HierarchySelection_self /* IMPORTED_LONG_ENUMERATION_ITEM */,
  self /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  HierarchySelection_children /* IMPORTED_LONG_ENUMERATION_ITEM */,
  children /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  HierarchySelection_parent /* IMPORTED_LONG_ENUMERATION_ITEM */,
  parent /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  HierarchySelection_hierarchy /* IMPORTED_LONG_ENUMERATION_ITEM */,
  hierarchy /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  HierarchySelection_top /* IMPORTED_LONG_ENUMERATION_ITEM */,
  top /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  HierarchySelection_subtree /* IMPORTED_LONG_ENUMERATION_ITEM */,
  subtree /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  HierarchySelection_all /* IMPORTED_LONG_ENUMERATION_ITEM */,
  all /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  _decode_HierarchySelection,
  _encode_HierarchySelection,
} from '../Uds2/HierarchySelection.ta';
export {
  HierarchySelection,
  _enum_for_HierarchySelection,
  HierarchySelection_self /* IMPORTED_LONG_ENUMERATION_ITEM */,
  self /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  HierarchySelection_children /* IMPORTED_LONG_ENUMERATION_ITEM */,
  children /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  HierarchySelection_parent /* IMPORTED_LONG_ENUMERATION_ITEM */,
  parent /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  HierarchySelection_hierarchy /* IMPORTED_LONG_ENUMERATION_ITEM */,
  hierarchy /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  HierarchySelection_top /* IMPORTED_LONG_ENUMERATION_ITEM */,
  top /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  HierarchySelection_subtree /* IMPORTED_LONG_ENUMERATION_ITEM */,
  subtree /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  HierarchySelection_all /* IMPORTED_LONG_ENUMERATION_ITEM */,
  all /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  _decode_HierarchySelection,
  _encode_HierarchySelection,
} from '../Uds2/HierarchySelection.ta';

/* START_OF_SYMBOL_DEFINITION HierarchySelections */
/**
 * @summary HierarchySelections
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * HierarchySelections  ::=  SEQUENCE OF HierarchySelection
 * ```
 */
export type HierarchySelections = HierarchySelection[]; // SequenceOfType
/* END_OF_SYMBOL_DEFINITION HierarchySelections */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_HierarchySelections */
let _cached_decoder_for_HierarchySelections: $.ASN1Decoder<HierarchySelections> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_HierarchySelections */

/* START_OF_SYMBOL_DEFINITION _decode_HierarchySelections */
/**
 * @summary Decodes an ASN.1 element into a(n) HierarchySelections
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {HierarchySelections} The decoded data structure.
 */
export function _decode_HierarchySelections(el: _Element) {
  if (!_cached_decoder_for_HierarchySelections) {
    _cached_decoder_for_HierarchySelections = $._decodeSequenceOf<HierarchySelection>(
      () => _decode_HierarchySelection
    );
  }
  return _cached_decoder_for_HierarchySelections(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_HierarchySelections */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_HierarchySelections */
let _cached_encoder_for_HierarchySelections: $.ASN1Encoder<HierarchySelections> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_HierarchySelections */

/* START_OF_SYMBOL_DEFINITION _encode_HierarchySelections */
/**
 * @summary Encodes a(n) HierarchySelections into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The HierarchySelections, encoded as an ASN.1 Element.
 */
export function _encode_HierarchySelections(
  value: HierarchySelections,
  elGetter: $.ASN1Encoder<HierarchySelections>
) {
  if (!_cached_encoder_for_HierarchySelections) {
    _cached_encoder_for_HierarchySelections = $._encodeSequenceOf<HierarchySelection>(
      () => _encode_HierarchySelection,
      $.BER
    );
  }
  return _cached_encoder_for_HierarchySelections(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_HierarchySelections */

/* eslint-enable */
