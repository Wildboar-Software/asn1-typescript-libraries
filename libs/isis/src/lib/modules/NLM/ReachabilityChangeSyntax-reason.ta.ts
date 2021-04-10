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

/* START_OF_SYMBOL_DEFINITION _enum_for_ReachabilityChangeSyntax_reason */
/**
 * @summary ReachabilityChangeSyntax_reason
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ReachabilityChangeSyntax-reason ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```@enum {number}
 */
export enum _enum_for_ReachabilityChangeSyntax_reason {
  holdingTimerExpired = 0,
  circuitDisabled = 1,
}
/* END_OF_SYMBOL_DEFINITION _enum_for_ReachabilityChangeSyntax_reason */

/* START_OF_SYMBOL_DEFINITION ReachabilityChangeSyntax_reason */
/**
 * @summary ReachabilityChangeSyntax_reason
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ReachabilityChangeSyntax-reason ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```@enum {number}
 */
export type ReachabilityChangeSyntax_reason = _enum_for_ReachabilityChangeSyntax_reason;
/* END_OF_SYMBOL_DEFINITION ReachabilityChangeSyntax_reason */

/* START_OF_SYMBOL_DEFINITION ReachabilityChangeSyntax_reason */
/**
 * @summary ReachabilityChangeSyntax_reason
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ReachabilityChangeSyntax-reason ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```@enum {number}
 */
export const ReachabilityChangeSyntax_reason = _enum_for_ReachabilityChangeSyntax_reason;
/* END_OF_SYMBOL_DEFINITION ReachabilityChangeSyntax_reason */

/* START_OF_SYMBOL_DEFINITION ReachabilityChangeSyntax_reason_holdingTimerExpired */
/**
 * @summary ReachabilityChangeSyntax_reason_holdingTimerExpired
 * @constant
 * @type {number}
 */
export const ReachabilityChangeSyntax_reason_holdingTimerExpired: ReachabilityChangeSyntax_reason =
  ReachabilityChangeSyntax_reason.holdingTimerExpired; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION ReachabilityChangeSyntax_reason_holdingTimerExpired */

/* START_OF_SYMBOL_DEFINITION holdingTimerExpired */
/**
 * @summary holdingTimerExpired
 * @constant
 * @type {number}
 */
export const holdingTimerExpired: ReachabilityChangeSyntax_reason =
  ReachabilityChangeSyntax_reason.holdingTimerExpired; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION holdingTimerExpired */

/* START_OF_SYMBOL_DEFINITION ReachabilityChangeSyntax_reason_circuitDisabled */
/**
 * @summary ReachabilityChangeSyntax_reason_circuitDisabled
 * @constant
 * @type {number}
 */
export const ReachabilityChangeSyntax_reason_circuitDisabled: ReachabilityChangeSyntax_reason =
  ReachabilityChangeSyntax_reason.circuitDisabled; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION ReachabilityChangeSyntax_reason_circuitDisabled */

/* START_OF_SYMBOL_DEFINITION circuitDisabled */
/**
 * @summary circuitDisabled
 * @constant
 * @type {number}
 */
export const circuitDisabled: ReachabilityChangeSyntax_reason =
  ReachabilityChangeSyntax_reason.circuitDisabled; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION circuitDisabled */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ReachabilityChangeSyntax_reason */
let _cached_decoder_for_ReachabilityChangeSyntax_reason: $.ASN1Decoder<ReachabilityChangeSyntax_reason> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ReachabilityChangeSyntax_reason */

/* START_OF_SYMBOL_DEFINITION _decode_ReachabilityChangeSyntax_reason */
/**
 * @summary Decodes an ASN.1 element into a(n) ReachabilityChangeSyntax_reason
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ReachabilityChangeSyntax_reason} The decoded data structure.
 */
export function _decode_ReachabilityChangeSyntax_reason(el: _Element) {
  if (!_cached_decoder_for_ReachabilityChangeSyntax_reason) {
    _cached_decoder_for_ReachabilityChangeSyntax_reason = $._decodeEnumerated;
  }
  return _cached_decoder_for_ReachabilityChangeSyntax_reason(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ReachabilityChangeSyntax_reason */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ReachabilityChangeSyntax_reason */
let _cached_encoder_for_ReachabilityChangeSyntax_reason: $.ASN1Encoder<ReachabilityChangeSyntax_reason> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ReachabilityChangeSyntax_reason */

/* START_OF_SYMBOL_DEFINITION _encode_ReachabilityChangeSyntax_reason */
/**
 * @summary Encodes a(n) ReachabilityChangeSyntax_reason into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ReachabilityChangeSyntax_reason, encoded as an ASN.1 Element.
 */
export function _encode_ReachabilityChangeSyntax_reason(
  value: ReachabilityChangeSyntax_reason,
  elGetter: $.ASN1Encoder<ReachabilityChangeSyntax_reason>
) {
  if (!_cached_encoder_for_ReachabilityChangeSyntax_reason) {
    _cached_encoder_for_ReachabilityChangeSyntax_reason = $._encodeEnumerated;
  }
  return _cached_encoder_for_ReachabilityChangeSyntax_reason(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ReachabilityChangeSyntax_reason */

/* eslint-enable */
