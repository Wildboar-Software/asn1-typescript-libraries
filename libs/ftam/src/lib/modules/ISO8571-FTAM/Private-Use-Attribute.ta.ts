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

/* START_OF_SYMBOL_DEFINITION Private_Use_Attribute */
/**
 * @summary Private_Use_Attribute
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Private-Use-Attribute  ::=  CHOICE {
 *   no-value-available             [0] IMPLICIT NULL,
 *   -- Indicates partial support of this attribute.
 *   -- This value shall only appear in response PDUs.
 *   abstract-Syntax-not-supported  [1] IMPLICIT NULL,
 *   -- Indicates that abstract Syntax is not available.
 *   actual-values                  [2] IMPLICIT EXTERNAL
 * }
 * ```
 */
export type Private_Use_Attribute =
  | { no_value_available: NULL } /* CHOICE_ALT_ROOT */
  | { abstract_Syntax_not_supported: NULL } /* CHOICE_ALT_ROOT */
  | { actual_values: EXTERNAL } /* CHOICE_ALT_ROOT */;
/* END_OF_SYMBOL_DEFINITION Private_Use_Attribute */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Private_Use_Attribute */
let _cached_decoder_for_Private_Use_Attribute: $.ASN1Decoder<Private_Use_Attribute> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Private_Use_Attribute */

/* START_OF_SYMBOL_DEFINITION _decode_Private_Use_Attribute */
/**
 * @summary Decodes an ASN.1 element into a(n) Private_Use_Attribute
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Private_Use_Attribute} The decoded data structure.
 */
export function _decode_Private_Use_Attribute(el: _Element) {
  if (!_cached_decoder_for_Private_Use_Attribute) {
    _cached_decoder_for_Private_Use_Attribute = $._decode_inextensible_choice<Private_Use_Attribute>(
      {
        'CONTEXT 0': [
          'no_value_available',
          $._decode_implicit<NULL>(() => $._decodeNull),
        ],
        'CONTEXT 1': [
          'abstract_Syntax_not_supported',
          $._decode_implicit<NULL>(() => $._decodeNull),
        ],
        'CONTEXT 2': [
          'actual_values',
          $._decode_implicit<EXTERNAL>(() => $._decodeExternal),
        ],
      }
    );
  }
  return _cached_decoder_for_Private_Use_Attribute(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_Private_Use_Attribute */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Private_Use_Attribute */
let _cached_encoder_for_Private_Use_Attribute: $.ASN1Encoder<Private_Use_Attribute> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Private_Use_Attribute */

/* START_OF_SYMBOL_DEFINITION _encode_Private_Use_Attribute */
/**
 * @summary Encodes a(n) Private_Use_Attribute into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Private_Use_Attribute, encoded as an ASN.1 Element.
 */
export function _encode_Private_Use_Attribute(
  value: Private_Use_Attribute,
  elGetter: $.ASN1Encoder<Private_Use_Attribute>
) {
  if (!_cached_encoder_for_Private_Use_Attribute) {
    _cached_encoder_for_Private_Use_Attribute = $._encode_choice<Private_Use_Attribute>(
      {
        no_value_available: $._encode_implicit(
          _TagClass.context,
          0,
          () => $._encodeNull,
          $.BER
        ),
        abstract_Syntax_not_supported: $._encode_implicit(
          _TagClass.context,
          1,
          () => $._encodeNull,
          $.BER
        ),
        actual_values: $._encode_implicit(
          _TagClass.context,
          2,
          () => $._encodeExternal,
          $.BER
        ),
      },
      $.BER
    );
  }
  return _cached_encoder_for_Private_Use_Attribute(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_Private_Use_Attribute */

/* eslint-enable */
