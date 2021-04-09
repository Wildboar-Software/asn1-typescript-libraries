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

/* START_OF_SYMBOL_DEFINITION PDV_list_presentation_data_values */
/**
 * @summary PDV_list_presentation_data_values
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PDV-list-presentation-data-values ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type PDV_list_presentation_data_values =
  | { simple_ASN1_type: _Element } /* CHOICE_ALT_ROOT */
  | { octet_aligned: OCTET_STRING } /* CHOICE_ALT_ROOT */
  | { arbitrary: BIT_STRING } /* CHOICE_ALT_ROOT */;
/* END_OF_SYMBOL_DEFINITION PDV_list_presentation_data_values */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_PDV_list_presentation_data_values */
let _cached_decoder_for_PDV_list_presentation_data_values: $.ASN1Decoder<PDV_list_presentation_data_values> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_PDV_list_presentation_data_values */

/* START_OF_SYMBOL_DEFINITION _decode_PDV_list_presentation_data_values */
/**
 * @summary Decodes an ASN.1 element into a(n) PDV_list_presentation_data_values
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {PDV_list_presentation_data_values} The decoded data structure.
 */
export function _decode_PDV_list_presentation_data_values(el: _Element) {
  if (!_cached_decoder_for_PDV_list_presentation_data_values) {
    _cached_decoder_for_PDV_list_presentation_data_values = $._decode_inextensible_choice<PDV_list_presentation_data_values>(
      {
        'CONTEXT 0': [
          'simple_ASN1_type',
          $._decode_implicit<_Element>(() => $._decodeAny),
        ],
        'CONTEXT 1': [
          'octet_aligned',
          $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString),
        ],
        'CONTEXT 2': [
          'arbitrary',
          $._decode_implicit<BIT_STRING>(() => $._decodeBitString),
        ],
      }
    );
  }
  return _cached_decoder_for_PDV_list_presentation_data_values(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_PDV_list_presentation_data_values */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_PDV_list_presentation_data_values */
let _cached_encoder_for_PDV_list_presentation_data_values: $.ASN1Encoder<PDV_list_presentation_data_values> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_PDV_list_presentation_data_values */

/* START_OF_SYMBOL_DEFINITION _encode_PDV_list_presentation_data_values */
/**
 * @summary Encodes a(n) PDV_list_presentation_data_values into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PDV_list_presentation_data_values, encoded as an ASN.1 Element.
 */
export function _encode_PDV_list_presentation_data_values(
  value: PDV_list_presentation_data_values,
  elGetter: $.ASN1Encoder<PDV_list_presentation_data_values>
) {
  if (!_cached_encoder_for_PDV_list_presentation_data_values) {
    _cached_encoder_for_PDV_list_presentation_data_values = $._encode_choice<PDV_list_presentation_data_values>(
      {
        simple_ASN1_type: $._encode_implicit(
          _TagClass.context,
          0,
          () => $._encodeAny,
          $.BER
        ),
        octet_aligned: $._encode_implicit(
          _TagClass.context,
          1,
          () => $._encodeOctetString,
          $.BER
        ),
        arbitrary: $._encode_implicit(
          _TagClass.context,
          2,
          () => $._encodeBitString,
          $.BER
        ),
      },
      $.BER
    );
  }
  return _cached_encoder_for_PDV_list_presentation_data_values(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_PDV_list_presentation_data_values */

/* eslint-enable */
