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

/* START_OF_SYMBOL_DEFINITION Legal_Qualification_Attribute */
/**
 * @summary Legal_Qualification_Attribute
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Legal-Qualification-Attribute  ::=  CHOICE {
 *   no-value-available  [0] IMPLICIT NULL,
 *   -- Indicates partial support of this attribute.
 *   -- This value shall only appear in response PDUs.
 *   actual-values       [1] IMPLICIT GraphicString
 * }
 * ```
 */
export type Legal_Qualification_Attribute =
  | { no_value_available: NULL } /* CHOICE_ALT_ROOT */
  | { actual_values: GraphicString } /* CHOICE_ALT_ROOT */;
/* END_OF_SYMBOL_DEFINITION Legal_Qualification_Attribute */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Legal_Qualification_Attribute */
let _cached_decoder_for_Legal_Qualification_Attribute: $.ASN1Decoder<Legal_Qualification_Attribute> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Legal_Qualification_Attribute */

/* START_OF_SYMBOL_DEFINITION _decode_Legal_Qualification_Attribute */
/**
 * @summary Decodes an ASN.1 element into a(n) Legal_Qualification_Attribute
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Legal_Qualification_Attribute} The decoded data structure.
 */
export function _decode_Legal_Qualification_Attribute(el: _Element) {
  if (!_cached_decoder_for_Legal_Qualification_Attribute) {
    _cached_decoder_for_Legal_Qualification_Attribute = $._decode_inextensible_choice<Legal_Qualification_Attribute>(
      {
        'CONTEXT 0': [
          'no_value_available',
          $._decode_implicit<NULL>(() => $._decodeNull),
        ],
        'CONTEXT 1': [
          'actual_values',
          $._decode_implicit<GraphicString>(() => $._decodeGraphicString),
        ],
      }
    );
  }
  return _cached_decoder_for_Legal_Qualification_Attribute(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_Legal_Qualification_Attribute */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Legal_Qualification_Attribute */
let _cached_encoder_for_Legal_Qualification_Attribute: $.ASN1Encoder<Legal_Qualification_Attribute> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Legal_Qualification_Attribute */

/* START_OF_SYMBOL_DEFINITION _encode_Legal_Qualification_Attribute */
/**
 * @summary Encodes a(n) Legal_Qualification_Attribute into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Legal_Qualification_Attribute, encoded as an ASN.1 Element.
 */
export function _encode_Legal_Qualification_Attribute(
  value: Legal_Qualification_Attribute,
  elGetter: $.ASN1Encoder<Legal_Qualification_Attribute>
) {
  if (!_cached_encoder_for_Legal_Qualification_Attribute) {
    _cached_encoder_for_Legal_Qualification_Attribute = $._encode_choice<Legal_Qualification_Attribute>(
      {
        no_value_available: $._encode_implicit(
          _TagClass.context,
          0,
          () => $._encodeNull,
          $.BER
        ),
        actual_values: $._encode_implicit(
          _TagClass.context,
          1,
          () => $._encodeGraphicString,
          $.BER
        ),
      },
      $.BER
    );
  }
  return _cached_encoder_for_Legal_Qualification_Attribute(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_Legal_Qualification_Attribute */

/* eslint-enable */
