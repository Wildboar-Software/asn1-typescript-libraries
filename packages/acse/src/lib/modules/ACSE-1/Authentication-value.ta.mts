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
  Authentication_value_other,
  _decode_Authentication_value_other,
  _encode_Authentication_value_other,
} from '../ACSE-1/Authentication-value-other.ta.mjs';
export {
  Authentication_value_other,
  _decode_Authentication_value_other,
  _encode_Authentication_value_other,
} from '../ACSE-1/Authentication-value-other.ta.mjs';

/* START_OF_SYMBOL_DEFINITION Authentication_value */
/**
 * @summary Authentication_value
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Authentication-value  ::=  CHOICE {
 *   charstring  [0] IMPLICIT GraphicString,
 *   bitstring   [1] IMPLICIT BIT STRING,
 *   external    [2] IMPLICIT EXTERNAL,
 *   other
 *     [3] IMPLICIT SEQUENCE {other-mechanism-name
 *                              MECHANISM-NAME.&id({ObjectSet}),
 *                            other-mechanism-value
 *                              MECHANISM-NAME.&Type
 *                                ({ObjectSet}{@.other-mechanism-name})}
 * }
 * ```
 */
export type Authentication_value =
  | { charstring: GraphicString } /* CHOICE_ALT_ROOT */
  | { bitstring: BIT_STRING } /* CHOICE_ALT_ROOT */
  | { external: EXTERNAL } /* CHOICE_ALT_ROOT */
  | { other: Authentication_value_other } /* CHOICE_ALT_ROOT */;
/* END_OF_SYMBOL_DEFINITION Authentication_value */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Authentication_value */
let _cached_decoder_for_Authentication_value: $.ASN1Decoder<Authentication_value> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Authentication_value */

/* START_OF_SYMBOL_DEFINITION _decode_Authentication_value */
/**
 * @summary Decodes an ASN.1 element into a(n) Authentication_value
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Authentication_value} The decoded data structure.
 */
export function _decode_Authentication_value(el: _Element) {
  if (!_cached_decoder_for_Authentication_value) {
    _cached_decoder_for_Authentication_value = $._decode_inextensible_choice<Authentication_value>(
      {
        'CONTEXT 0': [
          'charstring',
          $._decode_implicit<GraphicString>(() => $._decodeGraphicString),
        ],
        'CONTEXT 1': [
          'bitstring',
          $._decode_implicit<BIT_STRING>(() => $._decodeBitString),
        ],
        'CONTEXT 2': [
          'external',
          $._decode_implicit<EXTERNAL>(() => $._decodeExternal),
        ],
        'CONTEXT 3': [
          'other',
          $._decode_implicit<Authentication_value_other>(
            () => _decode_Authentication_value_other
          ),
        ],
      }
    );
  }
  return _cached_decoder_for_Authentication_value(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_Authentication_value */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Authentication_value */
let _cached_encoder_for_Authentication_value: $.ASN1Encoder<Authentication_value> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Authentication_value */

/* START_OF_SYMBOL_DEFINITION _encode_Authentication_value */
/**
 * @summary Encodes a(n) Authentication_value into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Authentication_value, encoded as an ASN.1 Element.
 */
export function _encode_Authentication_value(
  value: Authentication_value,
  elGetter: $.ASN1Encoder<Authentication_value>
) {
  if (!_cached_encoder_for_Authentication_value) {
    _cached_encoder_for_Authentication_value = $._encode_choice<Authentication_value>(
      {
        charstring: $._encode_implicit(
          _TagClass.context,
          0,
          () => $._encodeGraphicString,
          $.BER
        ),
        bitstring: $._encode_implicit(
          _TagClass.context,
          1,
          () => $._encodeBitString,
          $.BER
        ),
        external: $._encode_implicit(
          _TagClass.context,
          2,
          () => $._encodeExternal,
          $.BER
        ),
        other: $._encode_implicit(
          _TagClass.context,
          3,
          () => _encode_Authentication_value_other,
          $.BER
        ),
      },
      $.BER
    );
  }
  return _cached_encoder_for_Authentication_value(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_Authentication_value */

/* eslint-enable */
