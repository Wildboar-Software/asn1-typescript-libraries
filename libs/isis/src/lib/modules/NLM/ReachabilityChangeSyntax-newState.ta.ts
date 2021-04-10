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

/* START_OF_SYMBOL_DEFINITION _enum_for_ReachabilityChangeSyntax_newState */
/**
 * @summary ReachabilityChangeSyntax_newState
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ReachabilityChangeSyntax-newState ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```@enum {number}
 */
export enum _enum_for_ReachabilityChangeSyntax_newState {
  down = 0,
  up = 1,
}
/* END_OF_SYMBOL_DEFINITION _enum_for_ReachabilityChangeSyntax_newState */

/* START_OF_SYMBOL_DEFINITION ReachabilityChangeSyntax_newState */
/**
 * @summary ReachabilityChangeSyntax_newState
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ReachabilityChangeSyntax-newState ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```@enum {number}
 */
export type ReachabilityChangeSyntax_newState = _enum_for_ReachabilityChangeSyntax_newState;
/* END_OF_SYMBOL_DEFINITION ReachabilityChangeSyntax_newState */

/* START_OF_SYMBOL_DEFINITION ReachabilityChangeSyntax_newState */
/**
 * @summary ReachabilityChangeSyntax_newState
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ReachabilityChangeSyntax-newState ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```@enum {number}
 */
export const ReachabilityChangeSyntax_newState = _enum_for_ReachabilityChangeSyntax_newState;
/* END_OF_SYMBOL_DEFINITION ReachabilityChangeSyntax_newState */

/* START_OF_SYMBOL_DEFINITION ReachabilityChangeSyntax_newState_down */
/**
 * @summary ReachabilityChangeSyntax_newState_down
 * @constant
 * @type {number}
 */
export const ReachabilityChangeSyntax_newState_down: ReachabilityChangeSyntax_newState =
  ReachabilityChangeSyntax_newState.down; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION ReachabilityChangeSyntax_newState_down */

/* START_OF_SYMBOL_DEFINITION down */
/**
 * @summary down
 * @constant
 * @type {number}
 */
export const down: ReachabilityChangeSyntax_newState =
  ReachabilityChangeSyntax_newState.down; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION down */

/* START_OF_SYMBOL_DEFINITION ReachabilityChangeSyntax_newState_up */
/**
 * @summary ReachabilityChangeSyntax_newState_up
 * @constant
 * @type {number}
 */
export const ReachabilityChangeSyntax_newState_up: ReachabilityChangeSyntax_newState =
  ReachabilityChangeSyntax_newState.up; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION ReachabilityChangeSyntax_newState_up */

/* START_OF_SYMBOL_DEFINITION up */
/**
 * @summary up
 * @constant
 * @type {number}
 */
export const up: ReachabilityChangeSyntax_newState =
  ReachabilityChangeSyntax_newState.up; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION up */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ReachabilityChangeSyntax_newState */
let _cached_decoder_for_ReachabilityChangeSyntax_newState: $.ASN1Decoder<ReachabilityChangeSyntax_newState> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ReachabilityChangeSyntax_newState */

/* START_OF_SYMBOL_DEFINITION _decode_ReachabilityChangeSyntax_newState */
/**
 * @summary Decodes an ASN.1 element into a(n) ReachabilityChangeSyntax_newState
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ReachabilityChangeSyntax_newState} The decoded data structure.
 */
export function _decode_ReachabilityChangeSyntax_newState(el: _Element) {
  if (!_cached_decoder_for_ReachabilityChangeSyntax_newState) {
    _cached_decoder_for_ReachabilityChangeSyntax_newState = $._decodeEnumerated;
  }
  return _cached_decoder_for_ReachabilityChangeSyntax_newState(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ReachabilityChangeSyntax_newState */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ReachabilityChangeSyntax_newState */
let _cached_encoder_for_ReachabilityChangeSyntax_newState: $.ASN1Encoder<ReachabilityChangeSyntax_newState> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ReachabilityChangeSyntax_newState */

/* START_OF_SYMBOL_DEFINITION _encode_ReachabilityChangeSyntax_newState */
/**
 * @summary Encodes a(n) ReachabilityChangeSyntax_newState into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ReachabilityChangeSyntax_newState, encoded as an ASN.1 Element.
 */
export function _encode_ReachabilityChangeSyntax_newState(
  value: ReachabilityChangeSyntax_newState,
  elGetter: $.ASN1Encoder<ReachabilityChangeSyntax_newState>
) {
  if (!_cached_encoder_for_ReachabilityChangeSyntax_newState) {
    _cached_encoder_for_ReachabilityChangeSyntax_newState = $._encodeEnumerated;
  }
  return _cached_encoder_for_ReachabilityChangeSyntax_newState(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ReachabilityChangeSyntax_newState */

/* eslint-enable */
