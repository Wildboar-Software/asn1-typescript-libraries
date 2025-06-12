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
import * as $ from 'asn1-ts/dist/functional.mjs';
import {
  QualifiedNameOrIndex_literal_qualified_name,
  _decode_QualifiedNameOrIndex_literal_qualified_name,
  _encode_QualifiedNameOrIndex_literal_qualified_name,
} from '../FastInfoset/QualifiedNameOrIndex-literal-qualified-name.ta.mjs';
export {
  QualifiedNameOrIndex_literal_qualified_name,
  _decode_QualifiedNameOrIndex_literal_qualified_name,
  _encode_QualifiedNameOrIndex_literal_qualified_name,
} from '../FastInfoset/QualifiedNameOrIndex-literal-qualified-name.ta.mjs';

/* START_OF_SYMBOL_DEFINITION QualifiedNameOrIndex */
/**
 * @summary QualifiedNameOrIndex
 * @description
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
/* END_OF_SYMBOL_DEFINITION QualifiedNameOrIndex */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_QualifiedNameOrIndex */
let _cached_decoder_for_QualifiedNameOrIndex: $.ASN1Decoder<QualifiedNameOrIndex> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_QualifiedNameOrIndex */

/* START_OF_SYMBOL_DEFINITION _decode_QualifiedNameOrIndex */
/**
 * @summary Decodes an ASN.1 element into a(n) QualifiedNameOrIndex
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {QualifiedNameOrIndex} The decoded data structure.
 */
export function _decode_QualifiedNameOrIndex(el: _Element) {
  if (!_cached_decoder_for_QualifiedNameOrIndex) {
    _cached_decoder_for_QualifiedNameOrIndex = $._decode_inextensible_choice<QualifiedNameOrIndex>(
      {
        'CONTEXT 0': [
          'literal_qualified_name',
          _decode_QualifiedNameOrIndex_literal_qualified_name,
        ],
        'CONTEXT 1': ['name_surrogate_index', $._decodeInteger],
      }
    );
  }
  return _cached_decoder_for_QualifiedNameOrIndex(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_QualifiedNameOrIndex */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_QualifiedNameOrIndex */
let _cached_encoder_for_QualifiedNameOrIndex: $.ASN1Encoder<QualifiedNameOrIndex> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_QualifiedNameOrIndex */

/* START_OF_SYMBOL_DEFINITION _encode_QualifiedNameOrIndex */
/**
 * @summary Encodes a(n) QualifiedNameOrIndex into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The QualifiedNameOrIndex, encoded as an ASN.1 Element.
 */
export function _encode_QualifiedNameOrIndex(
  value: QualifiedNameOrIndex,
  elGetter: $.ASN1Encoder<QualifiedNameOrIndex>
) {
  if (!_cached_encoder_for_QualifiedNameOrIndex) {
    _cached_encoder_for_QualifiedNameOrIndex = $._encode_choice<QualifiedNameOrIndex>(
      {
        literal_qualified_name: _encode_QualifiedNameOrIndex_literal_qualified_name,
        name_surrogate_index: $._encodeInteger,
      },
      $.BER
    );
  }
  return _cached_encoder_for_QualifiedNameOrIndex(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_QualifiedNameOrIndex */

/* eslint-enable */
