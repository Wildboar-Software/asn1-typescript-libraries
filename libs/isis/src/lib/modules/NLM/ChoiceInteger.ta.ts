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

/* START_OF_SYMBOL_DEFINITION ChoiceInteger */
/**
 * @summary ChoiceInteger
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ChoiceInteger  ::=  CHOICE {
 *   dontCare  [0] IMPLICIT NULL, --  The 'I don't care' value
 *   integer   [1] IMPLICIT INTEGER
 * }
 * ```
 */
export type ChoiceInteger =
  | { dontCare: NULL } /* CHOICE_ALT_ROOT */
  | { integer: INTEGER } /* CHOICE_ALT_ROOT */;
/* END_OF_SYMBOL_DEFINITION ChoiceInteger */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ChoiceInteger */
let _cached_decoder_for_ChoiceInteger: $.ASN1Decoder<ChoiceInteger> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ChoiceInteger */

/* START_OF_SYMBOL_DEFINITION _decode_ChoiceInteger */
/**
 * @summary Decodes an ASN.1 element into a(n) ChoiceInteger
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ChoiceInteger} The decoded data structure.
 */
export function _decode_ChoiceInteger(el: _Element) {
  if (!_cached_decoder_for_ChoiceInteger) {
    _cached_decoder_for_ChoiceInteger = $._decode_inextensible_choice<ChoiceInteger>(
      {
        'CONTEXT 0': [
          'dontCare',
          $._decode_implicit<NULL>(() => $._decodeNull),
        ],
        'CONTEXT 1': [
          'integer',
          $._decode_implicit<INTEGER>(() => $._decodeInteger),
        ],
      }
    );
  }
  return _cached_decoder_for_ChoiceInteger(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ChoiceInteger */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ChoiceInteger */
let _cached_encoder_for_ChoiceInteger: $.ASN1Encoder<ChoiceInteger> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ChoiceInteger */

/* START_OF_SYMBOL_DEFINITION _encode_ChoiceInteger */
/**
 * @summary Encodes a(n) ChoiceInteger into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ChoiceInteger, encoded as an ASN.1 Element.
 */
export function _encode_ChoiceInteger(
  value: ChoiceInteger,
  elGetter: $.ASN1Encoder<ChoiceInteger>
) {
  if (!_cached_encoder_for_ChoiceInteger) {
    _cached_encoder_for_ChoiceInteger = $._encode_choice<ChoiceInteger>(
      {
        dontCare: $._encode_implicit(
          _TagClass.context,
          0,
          () => $._encodeNull,
          $.BER
        ),
        integer: $._encode_implicit(
          _TagClass.context,
          1,
          () => $._encodeInteger,
          $.BER
        ),
      },
      $.BER
    );
  }
  return _cached_encoder_for_ChoiceInteger(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ChoiceInteger */

/* eslint-enable */
