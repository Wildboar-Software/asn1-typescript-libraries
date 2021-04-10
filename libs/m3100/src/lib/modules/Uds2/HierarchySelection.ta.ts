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

/* START_OF_SYMBOL_DEFINITION _enum_for_HierarchySelection */
/**
 * @summary HierarchySelection
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * HierarchySelection  ::=  ENUMERATED {
 *   self, children, parent, hierarchy, top, subtree, all}
 * ```@enum {number}
 */
export enum _enum_for_HierarchySelection {
  self = 0,
  children = 1,
  parent = 2,
  hierarchy = 3,
  top = 4,
  subtree = 5,
  all = 6,
}
/* END_OF_SYMBOL_DEFINITION _enum_for_HierarchySelection */

/* START_OF_SYMBOL_DEFINITION HierarchySelection */
/**
 * @summary HierarchySelection
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * HierarchySelection  ::=  ENUMERATED {
 *   self, children, parent, hierarchy, top, subtree, all}
 * ```@enum {number}
 */
export type HierarchySelection = _enum_for_HierarchySelection;
/* END_OF_SYMBOL_DEFINITION HierarchySelection */

/* START_OF_SYMBOL_DEFINITION HierarchySelection */
/**
 * @summary HierarchySelection
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * HierarchySelection  ::=  ENUMERATED {
 *   self, children, parent, hierarchy, top, subtree, all}
 * ```@enum {number}
 */
export const HierarchySelection = _enum_for_HierarchySelection;
/* END_OF_SYMBOL_DEFINITION HierarchySelection */

/* START_OF_SYMBOL_DEFINITION HierarchySelection_self */
/**
 * @summary HierarchySelection_self
 * @constant
 * @type {number}
 */
export const HierarchySelection_self: HierarchySelection =
  HierarchySelection.self; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION HierarchySelection_self */

/* START_OF_SYMBOL_DEFINITION self */
/**
 * @summary self
 * @constant
 * @type {number}
 */
export const self: HierarchySelection =
  HierarchySelection.self; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION self */

/* START_OF_SYMBOL_DEFINITION HierarchySelection_children */
/**
 * @summary HierarchySelection_children
 * @constant
 * @type {number}
 */
export const HierarchySelection_children: HierarchySelection =
  HierarchySelection.children; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION HierarchySelection_children */

/* START_OF_SYMBOL_DEFINITION children */
/**
 * @summary children
 * @constant
 * @type {number}
 */
export const children: HierarchySelection =
  HierarchySelection.children; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION children */

/* START_OF_SYMBOL_DEFINITION HierarchySelection_parent */
/**
 * @summary HierarchySelection_parent
 * @constant
 * @type {number}
 */
export const HierarchySelection_parent: HierarchySelection =
  HierarchySelection.parent; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION HierarchySelection_parent */

/* START_OF_SYMBOL_DEFINITION parent */
/**
 * @summary parent
 * @constant
 * @type {number}
 */
export const parent: HierarchySelection =
  HierarchySelection.parent; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION parent */

/* START_OF_SYMBOL_DEFINITION HierarchySelection_hierarchy */
/**
 * @summary HierarchySelection_hierarchy
 * @constant
 * @type {number}
 */
export const HierarchySelection_hierarchy: HierarchySelection =
  HierarchySelection.hierarchy; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION HierarchySelection_hierarchy */

/* START_OF_SYMBOL_DEFINITION hierarchy */
/**
 * @summary hierarchy
 * @constant
 * @type {number}
 */
export const hierarchy: HierarchySelection =
  HierarchySelection.hierarchy; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION hierarchy */

/* START_OF_SYMBOL_DEFINITION HierarchySelection_top */
/**
 * @summary HierarchySelection_top
 * @constant
 * @type {number}
 */
export const HierarchySelection_top: HierarchySelection =
  HierarchySelection.top; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION HierarchySelection_top */

/* START_OF_SYMBOL_DEFINITION top */
/**
 * @summary top
 * @constant
 * @type {number}
 */
export const top: HierarchySelection =
  HierarchySelection.top; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION top */

/* START_OF_SYMBOL_DEFINITION HierarchySelection_subtree */
/**
 * @summary HierarchySelection_subtree
 * @constant
 * @type {number}
 */
export const HierarchySelection_subtree: HierarchySelection =
  HierarchySelection.subtree; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION HierarchySelection_subtree */

/* START_OF_SYMBOL_DEFINITION subtree */
/**
 * @summary subtree
 * @constant
 * @type {number}
 */
export const subtree: HierarchySelection =
  HierarchySelection.subtree; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION subtree */

/* START_OF_SYMBOL_DEFINITION HierarchySelection_all */
/**
 * @summary HierarchySelection_all
 * @constant
 * @type {number}
 */
export const HierarchySelection_all: HierarchySelection =
  HierarchySelection.all; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION HierarchySelection_all */

/* START_OF_SYMBOL_DEFINITION all */
/**
 * @summary all
 * @constant
 * @type {number}
 */
export const all: HierarchySelection =
  HierarchySelection.all; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION all */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_HierarchySelection */
let _cached_decoder_for_HierarchySelection: $.ASN1Decoder<HierarchySelection> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_HierarchySelection */

/* START_OF_SYMBOL_DEFINITION _decode_HierarchySelection */
/**
 * @summary Decodes an ASN.1 element into a(n) HierarchySelection
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {HierarchySelection} The decoded data structure.
 */
export function _decode_HierarchySelection(el: _Element) {
  if (!_cached_decoder_for_HierarchySelection) {
    _cached_decoder_for_HierarchySelection = $._decodeEnumerated;
  }
  return _cached_decoder_for_HierarchySelection(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_HierarchySelection */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_HierarchySelection */
let _cached_encoder_for_HierarchySelection: $.ASN1Encoder<HierarchySelection> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_HierarchySelection */

/* START_OF_SYMBOL_DEFINITION _encode_HierarchySelection */
/**
 * @summary Encodes a(n) HierarchySelection into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The HierarchySelection, encoded as an ASN.1 Element.
 */
export function _encode_HierarchySelection(
  value: HierarchySelection,
  elGetter: $.ASN1Encoder<HierarchySelection>
) {
  if (!_cached_encoder_for_HierarchySelection) {
    _cached_encoder_for_HierarchySelection = $._encodeEnumerated;
  }
  return _cached_encoder_for_HierarchySelection(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_HierarchySelection */

/* eslint-enable */
