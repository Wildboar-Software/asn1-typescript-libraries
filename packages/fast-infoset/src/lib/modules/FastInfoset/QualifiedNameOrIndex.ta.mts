/* eslint-disable */
import {
  INTEGER,
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
  QualifiedNameOrIndex_literal_qualified_name,
  _decode_QualifiedNameOrIndex_literal_qualified_name,
  _encode_QualifiedNameOrIndex_literal_qualified_name,
} from '../FastInfoset/QualifiedNameOrIndex-literal-qualified-name.ta.mjs';
/**
 * @summary QualifiedNameOrIndex
 * @description
 *
 * Qualified name ([prefix], [namespace name], [local name]):
 * either the three identifying strings, or an index 1..2²⁰
 * into the applicable name table (ELEMENT NAME or ATTRIBUTE
 * NAME, given at each use). If `namespace-name` is absent,
 * `prefix` shall also be absent. A creator uses
 * `name-surrogate-index` when prefix, namespace, local name,
 * and a matching surrogate are already in the tables;
 * otherwise a literal is written and a surrogate is added
 * unless a table is full (2²⁰). A processor that cannot add a
 * required surrogate shall stop with an error. ITU-T Rec.
 * X.891 (05/2005)
 * [§7.16](https://www.itu.int/rec/T-REC-X.891-200505-I).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * QualifiedNameOrIndex  ::=  CHOICE {
 *   literal-qualified-name
 *     SEQUENCE {prefix          IdentifyingStringOrIndex OPTIONAL-- PREFIX category --,
 *               namespace-name  IdentifyingStringOrIndex OPTIONAL-- NAMESPACE NAME category --,
 *               local-name      IdentifyingStringOrIndex}, -- LOCAL NAME category
 *   name-surrogate-index    INTEGER(1..one-meg)
 * }
 * ```
 */
export type QualifiedNameOrIndex =
  | {
      literal_qualified_name: QualifiedNameOrIndex_literal_qualified_name;
    } /* CHOICE_ALT_ROOT */
  | { name_surrogate_index: INTEGER } /* CHOICE_ALT_ROOT */;


export const _decode_QualifiedNameOrIndex: $.ASN1Decoder<QualifiedNameOrIndex> = $._decode_inextensible_choice<QualifiedNameOrIndex>(
  {
    'CONTEXT 0': [
      'literal_qualified_name',
      _decode_QualifiedNameOrIndex_literal_qualified_name,
    ],
    'CONTEXT 1': ['name_surrogate_index', $._decodeInteger],
  }
);


export const _encode_QualifiedNameOrIndex: $.ASN1Encoder<QualifiedNameOrIndex> = $._encode_choice<QualifiedNameOrIndex>(
  {
    literal_qualified_name: _encode_QualifiedNameOrIndex_literal_qualified_name,
    name_surrogate_index: $._encodeInteger,
  },
  $.BER
);


/* eslint-enable */
