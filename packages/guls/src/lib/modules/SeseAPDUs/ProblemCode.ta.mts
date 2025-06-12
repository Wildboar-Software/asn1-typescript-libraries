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
  GeneralProblem,
  _enum_for_GeneralProblem,
  GeneralProblem_invalidAPDU /* IMPORTED_LONG_ENUMERATION_ITEM */,
  invalidAPDU /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  _decode_GeneralProblem,
  _encode_GeneralProblem,
} from '../SeseAPDUs/GeneralProblem.ta.mjs';
export {
  GeneralProblem,
  _enum_for_GeneralProblem,
  GeneralProblem_invalidAPDU /* IMPORTED_LONG_ENUMERATION_ITEM */,
  invalidAPDU /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  _decode_GeneralProblem,
  _encode_GeneralProblem,
} from '../SeseAPDUs/GeneralProblem.ta.mjs';
import {
  TransferProblem,
  _enum_for_TransferProblem,
  TransferProblem_duplicateInvocationId /* IMPORTED_LONG_ENUMERATION_ITEM */,
  duplicateInvocationId /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  TransferProblem_unrecognizedSecurityExchange /* IMPORTED_LONG_ENUMERATION_ITEM */,
  unrecognizedSecurityExchange /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  TransferProblem_mistypedItem /* IMPORTED_LONG_ENUMERATION_ITEM */,
  mistypedItem /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  TransferProblem_inappropriateInvocationId /* IMPORTED_LONG_ENUMERATION_ITEM */,
  inappropriateInvocationId /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  TransferProblem_alternatingSequenceError /* IMPORTED_LONG_ENUMERATION_ITEM */,
  alternatingSequenceError /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  _decode_TransferProblem,
  _encode_TransferProblem,
} from '../SeseAPDUs/TransferProblem.ta.mjs';
export {
  TransferProblem,
  _enum_for_TransferProblem,
  TransferProblem_duplicateInvocationId /* IMPORTED_LONG_ENUMERATION_ITEM */,
  duplicateInvocationId /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  TransferProblem_unrecognizedSecurityExchange /* IMPORTED_LONG_ENUMERATION_ITEM */,
  unrecognizedSecurityExchange /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  TransferProblem_mistypedItem /* IMPORTED_LONG_ENUMERATION_ITEM */,
  mistypedItem /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  TransferProblem_inappropriateInvocationId /* IMPORTED_LONG_ENUMERATION_ITEM */,
  inappropriateInvocationId /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  TransferProblem_alternatingSequenceError /* IMPORTED_LONG_ENUMERATION_ITEM */,
  alternatingSequenceError /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  _decode_TransferProblem,
  _encode_TransferProblem,
} from '../SeseAPDUs/TransferProblem.ta.mjs';
import {
  AbortProblem,
  _enum_for_AbortProblem,
  AbortProblem_unrecognizedInvocationId /* IMPORTED_LONG_ENUMERATION_ITEM */,
  unrecognizedInvocationId /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  AbortProblem_abortUnexpected /* IMPORTED_LONG_ENUMERATION_ITEM */,
  abortUnexpected /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  AbortProblem_unrecognizedError /* IMPORTED_LONG_ENUMERATION_ITEM */,
  unrecognizedError /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  AbortProblem_unexpectedError /* IMPORTED_LONG_ENUMERATION_ITEM */,
  unexpectedError /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  AbortProblem_mistypedErrorParameter /* IMPORTED_LONG_ENUMERATION_ITEM */,
  mistypedErrorParameter /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  _decode_AbortProblem,
  _encode_AbortProblem,
} from '../SeseAPDUs/AbortProblem.ta.mjs';
export {
  AbortProblem,
  _enum_for_AbortProblem,
  AbortProblem_unrecognizedInvocationId /* IMPORTED_LONG_ENUMERATION_ITEM */,
  unrecognizedInvocationId /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  AbortProblem_abortUnexpected /* IMPORTED_LONG_ENUMERATION_ITEM */,
  abortUnexpected /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  AbortProblem_unrecognizedError /* IMPORTED_LONG_ENUMERATION_ITEM */,
  unrecognizedError /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  AbortProblem_unexpectedError /* IMPORTED_LONG_ENUMERATION_ITEM */,
  unexpectedError /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  AbortProblem_mistypedErrorParameter /* IMPORTED_LONG_ENUMERATION_ITEM */,
  mistypedErrorParameter /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  _decode_AbortProblem,
  _encode_AbortProblem,
} from '../SeseAPDUs/AbortProblem.ta.mjs';

/* START_OF_SYMBOL_DEFINITION ProblemCode */
/**
 * @summary ProblemCode
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ProblemCode  ::=  CHOICE {
 *   general   GeneralProblem,
 *   transfer  TransferProblem,
 *   abort     AbortProblem
 * }
 * ```
 */
export type ProblemCode =
  | { general: GeneralProblem } /* CHOICE_ALT_ROOT */
  | { transfer: TransferProblem } /* CHOICE_ALT_ROOT */
  | { abort: AbortProblem } /* CHOICE_ALT_ROOT */;
/* END_OF_SYMBOL_DEFINITION ProblemCode */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ProblemCode */
let _cached_decoder_for_ProblemCode: $.ASN1Decoder<ProblemCode> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ProblemCode */

/* START_OF_SYMBOL_DEFINITION _decode_ProblemCode */
/**
 * @summary Decodes an ASN.1 element into a(n) ProblemCode
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ProblemCode} The decoded data structure.
 */
export function _decode_ProblemCode(el: _Element) {
  if (!_cached_decoder_for_ProblemCode) {
    _cached_decoder_for_ProblemCode = $._decode_inextensible_choice<ProblemCode>(
      {
        'CONTEXT 0': ['general', _decode_GeneralProblem],
        'CONTEXT 1': ['transfer', _decode_TransferProblem],
        'CONTEXT 2': ['abort', _decode_AbortProblem],
      }
    );
  }
  return _cached_decoder_for_ProblemCode(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ProblemCode */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ProblemCode */
let _cached_encoder_for_ProblemCode: $.ASN1Encoder<ProblemCode> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ProblemCode */

/* START_OF_SYMBOL_DEFINITION _encode_ProblemCode */
/**
 * @summary Encodes a(n) ProblemCode into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ProblemCode, encoded as an ASN.1 Element.
 */
export function _encode_ProblemCode(
  value: ProblemCode,
  elGetter: $.ASN1Encoder<ProblemCode>
) {
  if (!_cached_encoder_for_ProblemCode) {
    _cached_encoder_for_ProblemCode = $._encode_choice<ProblemCode>(
      {
        general: _encode_GeneralProblem,
        transfer: _encode_TransferProblem,
        abort: _encode_AbortProblem,
      },
      $.BER
    );
  }
  return _cached_encoder_for_ProblemCode(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ProblemCode */

/* eslint-enable */
