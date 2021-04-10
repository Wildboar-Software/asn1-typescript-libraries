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

/* START_OF_SYMBOL_DEFINITION _enum_for_BRANCH_IDENTIFIER_initiators_name_side */
export enum _enum_for_BRANCH_IDENTIFIER_initiators_name_side {
  sender = 0,
  receiver = 1,
}
/* END_OF_SYMBOL_DEFINITION _enum_for_BRANCH_IDENTIFIER_initiators_name_side */

/* START_OF_SYMBOL_DEFINITION BRANCH_IDENTIFIER_initiators_name_side */
/**
 * @summary BRANCH_IDENTIFIER_initiators_name_side
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * BRANCH-IDENTIFIER-initiators-name-side ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```@enum {number}
 */
export type BRANCH_IDENTIFIER_initiators_name_side =
  | _enum_for_BRANCH_IDENTIFIER_initiators_name_side
  | ENUMERATED;
/* END_OF_SYMBOL_DEFINITION BRANCH_IDENTIFIER_initiators_name_side */

/* START_OF_SYMBOL_DEFINITION BRANCH_IDENTIFIER_initiators_name_side_sender */
/**
 * @summary BRANCH_IDENTIFIER_initiators_name_side_sender
 * @constant
 * @type {number}
 */
export const BRANCH_IDENTIFIER_initiators_name_side_sender: BRANCH_IDENTIFIER_initiators_name_side = 0; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION BRANCH_IDENTIFIER_initiators_name_side_sender */

/* START_OF_SYMBOL_DEFINITION sender */
/**
 * @summary sender
 * @constant
 * @type {number}
 */
export const sender: BRANCH_IDENTIFIER_initiators_name_side = BRANCH_IDENTIFIER_initiators_name_side_sender; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION sender */

/* START_OF_SYMBOL_DEFINITION BRANCH_IDENTIFIER_initiators_name_side_receiver */
/**
 * @summary BRANCH_IDENTIFIER_initiators_name_side_receiver
 * @constant
 * @type {number}
 */
export const BRANCH_IDENTIFIER_initiators_name_side_receiver: BRANCH_IDENTIFIER_initiators_name_side = 1; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION BRANCH_IDENTIFIER_initiators_name_side_receiver */

/* START_OF_SYMBOL_DEFINITION receiver */
/**
 * @summary receiver
 * @constant
 * @type {number}
 */
export const receiver: BRANCH_IDENTIFIER_initiators_name_side = BRANCH_IDENTIFIER_initiators_name_side_receiver; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION receiver */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_BRANCH_IDENTIFIER_initiators_name_side */
let _cached_decoder_for_BRANCH_IDENTIFIER_initiators_name_side: $.ASN1Decoder<BRANCH_IDENTIFIER_initiators_name_side> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_BRANCH_IDENTIFIER_initiators_name_side */

/* START_OF_SYMBOL_DEFINITION _decode_BRANCH_IDENTIFIER_initiators_name_side */
/**
 * @summary Decodes an ASN.1 element into a(n) BRANCH_IDENTIFIER_initiators_name_side
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {BRANCH_IDENTIFIER_initiators_name_side} The decoded data structure.
 */
export function _decode_BRANCH_IDENTIFIER_initiators_name_side(el: _Element) {
  if (!_cached_decoder_for_BRANCH_IDENTIFIER_initiators_name_side) {
    _cached_decoder_for_BRANCH_IDENTIFIER_initiators_name_side =
      $._decodeEnumerated;
  }
  return _cached_decoder_for_BRANCH_IDENTIFIER_initiators_name_side(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_BRANCH_IDENTIFIER_initiators_name_side */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_BRANCH_IDENTIFIER_initiators_name_side */
let _cached_encoder_for_BRANCH_IDENTIFIER_initiators_name_side: $.ASN1Encoder<BRANCH_IDENTIFIER_initiators_name_side> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_BRANCH_IDENTIFIER_initiators_name_side */

/* START_OF_SYMBOL_DEFINITION _encode_BRANCH_IDENTIFIER_initiators_name_side */
/**
 * @summary Encodes a(n) BRANCH_IDENTIFIER_initiators_name_side into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The BRANCH_IDENTIFIER_initiators_name_side, encoded as an ASN.1 Element.
 */
export function _encode_BRANCH_IDENTIFIER_initiators_name_side(
  value: BRANCH_IDENTIFIER_initiators_name_side,
  elGetter: $.ASN1Encoder<BRANCH_IDENTIFIER_initiators_name_side>
) {
  if (!_cached_encoder_for_BRANCH_IDENTIFIER_initiators_name_side) {
    _cached_encoder_for_BRANCH_IDENTIFIER_initiators_name_side =
      $._encodeEnumerated;
  }
  return _cached_encoder_for_BRANCH_IDENTIFIER_initiators_name_side(
    value,
    elGetter
  );
}

/* END_OF_SYMBOL_DEFINITION _encode_BRANCH_IDENTIFIER_initiators_name_side */

/* eslint-enable */
