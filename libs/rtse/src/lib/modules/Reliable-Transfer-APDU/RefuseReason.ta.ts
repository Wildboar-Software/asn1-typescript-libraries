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

/* START_OF_SYMBOL_DEFINITION RefuseReason */
/**
 * @summary RefuseReason
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RefuseReason  ::=  INTEGER {
 *   rtsBusy(0), cannotRecover(1), validationFailure(2),
 *   unacceptableDialogueMode(3)}
 * ```
 */
export type RefuseReason = INTEGER;
/* END_OF_SYMBOL_DEFINITION RefuseReason */

/* START_OF_SYMBOL_DEFINITION RefuseReason_rtsBusy */
/**
 * @summary RefuseReason_rtsBusy
 * @constant
 * @type {number}
 */
export const RefuseReason_rtsBusy: RefuseReason = 0; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION RefuseReason_rtsBusy */

/* START_OF_SYMBOL_DEFINITION rtsBusy */
/**
 * @summary RefuseReason_rtsBusy
 * @constant
 * @type {number}
 */
export const rtsBusy: RefuseReason = RefuseReason_rtsBusy; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION rtsBusy */

/* START_OF_SYMBOL_DEFINITION RefuseReason_cannotRecover */
/**
 * @summary RefuseReason_cannotRecover
 * @constant
 * @type {number}
 */
export const RefuseReason_cannotRecover: RefuseReason = 1; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION RefuseReason_cannotRecover */

/* START_OF_SYMBOL_DEFINITION cannotRecover */
/**
 * @summary RefuseReason_cannotRecover
 * @constant
 * @type {number}
 */
export const cannotRecover: RefuseReason = RefuseReason_cannotRecover; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION cannotRecover */

/* START_OF_SYMBOL_DEFINITION RefuseReason_validationFailure */
/**
 * @summary RefuseReason_validationFailure
 * @constant
 * @type {number}
 */
export const RefuseReason_validationFailure: RefuseReason = 2; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION RefuseReason_validationFailure */

/* START_OF_SYMBOL_DEFINITION validationFailure */
/**
 * @summary RefuseReason_validationFailure
 * @constant
 * @type {number}
 */
export const validationFailure: RefuseReason = RefuseReason_validationFailure; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION validationFailure */

/* START_OF_SYMBOL_DEFINITION RefuseReason_unacceptableDialogueMode */
/**
 * @summary RefuseReason_unacceptableDialogueMode
 * @constant
 * @type {number}
 */
export const RefuseReason_unacceptableDialogueMode: RefuseReason = 3; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION RefuseReason_unacceptableDialogueMode */

/* START_OF_SYMBOL_DEFINITION unacceptableDialogueMode */
/**
 * @summary RefuseReason_unacceptableDialogueMode
 * @constant
 * @type {number}
 */
export const unacceptableDialogueMode: RefuseReason = RefuseReason_unacceptableDialogueMode; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION unacceptableDialogueMode */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_RefuseReason */
let _cached_decoder_for_RefuseReason: $.ASN1Decoder<RefuseReason> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_RefuseReason */

/* START_OF_SYMBOL_DEFINITION _decode_RefuseReason */
/**
 * @summary Decodes an ASN.1 element into a(n) RefuseReason
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {RefuseReason} The decoded data structure.
 */
export function _decode_RefuseReason(el: _Element) {
  if (!_cached_decoder_for_RefuseReason) {
    _cached_decoder_for_RefuseReason = $._decodeInteger;
  }
  return _cached_decoder_for_RefuseReason(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_RefuseReason */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_RefuseReason */
let _cached_encoder_for_RefuseReason: $.ASN1Encoder<RefuseReason> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_RefuseReason */

/* START_OF_SYMBOL_DEFINITION _encode_RefuseReason */
/**
 * @summary Encodes a(n) RefuseReason into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RefuseReason, encoded as an ASN.1 Element.
 */
export function _encode_RefuseReason(
  value: RefuseReason,
  elGetter: $.ASN1Encoder<RefuseReason>
) {
  if (!_cached_encoder_for_RefuseReason) {
    _cached_encoder_for_RefuseReason = $._encodeInteger;
  }
  return _cached_encoder_for_RefuseReason(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_RefuseReason */

/* eslint-enable */
