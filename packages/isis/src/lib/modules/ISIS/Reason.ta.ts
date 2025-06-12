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

/* START_OF_SYMBOL_DEFINITION _enum_for_Reason */
/**
 * @summary Reason
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Reason  ::=  ENUMERATED {
 *   holdingTimerExpired(0), checksumError(1), oneWayConnectivity(2),
 *   callRejected(3), reserveTimerExpired(4), circuitDisabled(5), versionSkew(6),
 *   areaMismatch(7), maximumBroadcastIntermediateSystemsExceeded(8),
 *   maximumBroadcastEndSystemsExceeded(9), wrongSystemType(10)}
 * ```@enum {number}
 */
export enum _enum_for_Reason {
  holdingTimerExpired = 0,
  checksumError = 1,
  oneWayConnectivity = 2,
  callRejected = 3,
  reserveTimerExpired = 4,
  circuitDisabled = 5,
  versionSkew = 6,
  areaMismatch = 7,
  maximumBroadcastIntermediateSystemsExceeded = 8,
  maximumBroadcastEndSystemsExceeded = 9,
  wrongSystemType = 10,
}
/* END_OF_SYMBOL_DEFINITION _enum_for_Reason */

/* START_OF_SYMBOL_DEFINITION Reason */
/**
 * @summary Reason
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Reason  ::=  ENUMERATED {
 *   holdingTimerExpired(0), checksumError(1), oneWayConnectivity(2),
 *   callRejected(3), reserveTimerExpired(4), circuitDisabled(5), versionSkew(6),
 *   areaMismatch(7), maximumBroadcastIntermediateSystemsExceeded(8),
 *   maximumBroadcastEndSystemsExceeded(9), wrongSystemType(10)}
 * ```@enum {number}
 */
export type Reason = _enum_for_Reason;
/* END_OF_SYMBOL_DEFINITION Reason */

/* START_OF_SYMBOL_DEFINITION Reason */
/**
 * @summary Reason
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Reason  ::=  ENUMERATED {
 *   holdingTimerExpired(0), checksumError(1), oneWayConnectivity(2),
 *   callRejected(3), reserveTimerExpired(4), circuitDisabled(5), versionSkew(6),
 *   areaMismatch(7), maximumBroadcastIntermediateSystemsExceeded(8),
 *   maximumBroadcastEndSystemsExceeded(9), wrongSystemType(10)}
 * ```@enum {number}
 */
export const Reason = _enum_for_Reason;
/* END_OF_SYMBOL_DEFINITION Reason */

/* START_OF_SYMBOL_DEFINITION Reason_holdingTimerExpired */
/**
 * @summary Reason_holdingTimerExpired
 * @constant
 * @type {number}
 */
export const Reason_holdingTimerExpired: Reason =
  Reason.holdingTimerExpired; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION Reason_holdingTimerExpired */

/* START_OF_SYMBOL_DEFINITION holdingTimerExpired */
/**
 * @summary holdingTimerExpired
 * @constant
 * @type {number}
 */
export const holdingTimerExpired: Reason =
  Reason.holdingTimerExpired; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION holdingTimerExpired */

/* START_OF_SYMBOL_DEFINITION Reason_checksumError */
/**
 * @summary Reason_checksumError
 * @constant
 * @type {number}
 */
export const Reason_checksumError: Reason =
  Reason.checksumError; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION Reason_checksumError */

/* START_OF_SYMBOL_DEFINITION checksumError */
/**
 * @summary checksumError
 * @constant
 * @type {number}
 */
export const checksumError: Reason =
  Reason.checksumError; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION checksumError */

/* START_OF_SYMBOL_DEFINITION Reason_oneWayConnectivity */
/**
 * @summary Reason_oneWayConnectivity
 * @constant
 * @type {number}
 */
export const Reason_oneWayConnectivity: Reason =
  Reason.oneWayConnectivity; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION Reason_oneWayConnectivity */

/* START_OF_SYMBOL_DEFINITION oneWayConnectivity */
/**
 * @summary oneWayConnectivity
 * @constant
 * @type {number}
 */
export const oneWayConnectivity: Reason =
  Reason.oneWayConnectivity; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION oneWayConnectivity */

/* START_OF_SYMBOL_DEFINITION Reason_callRejected */
/**
 * @summary Reason_callRejected
 * @constant
 * @type {number}
 */
export const Reason_callRejected: Reason =
  Reason.callRejected; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION Reason_callRejected */

/* START_OF_SYMBOL_DEFINITION callRejected */
/**
 * @summary callRejected
 * @constant
 * @type {number}
 */
export const callRejected: Reason =
  Reason.callRejected; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION callRejected */

/* START_OF_SYMBOL_DEFINITION Reason_reserveTimerExpired */
/**
 * @summary Reason_reserveTimerExpired
 * @constant
 * @type {number}
 */
export const Reason_reserveTimerExpired: Reason =
  Reason.reserveTimerExpired; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION Reason_reserveTimerExpired */

/* START_OF_SYMBOL_DEFINITION reserveTimerExpired */
/**
 * @summary reserveTimerExpired
 * @constant
 * @type {number}
 */
export const reserveTimerExpired: Reason =
  Reason.reserveTimerExpired; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION reserveTimerExpired */

/* START_OF_SYMBOL_DEFINITION Reason_circuitDisabled */
/**
 * @summary Reason_circuitDisabled
 * @constant
 * @type {number}
 */
export const Reason_circuitDisabled: Reason =
  Reason.circuitDisabled; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION Reason_circuitDisabled */

/* START_OF_SYMBOL_DEFINITION circuitDisabled */
/**
 * @summary circuitDisabled
 * @constant
 * @type {number}
 */
export const circuitDisabled: Reason =
  Reason.circuitDisabled; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION circuitDisabled */

/* START_OF_SYMBOL_DEFINITION Reason_versionSkew */
/**
 * @summary Reason_versionSkew
 * @constant
 * @type {number}
 */
export const Reason_versionSkew: Reason =
  Reason.versionSkew; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION Reason_versionSkew */

/* START_OF_SYMBOL_DEFINITION versionSkew */
/**
 * @summary versionSkew
 * @constant
 * @type {number}
 */
export const versionSkew: Reason =
  Reason.versionSkew; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION versionSkew */

/* START_OF_SYMBOL_DEFINITION Reason_areaMismatch */
/**
 * @summary Reason_areaMismatch
 * @constant
 * @type {number}
 */
export const Reason_areaMismatch: Reason =
  Reason.areaMismatch; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION Reason_areaMismatch */

/* START_OF_SYMBOL_DEFINITION areaMismatch */
/**
 * @summary areaMismatch
 * @constant
 * @type {number}
 */
export const areaMismatch: Reason =
  Reason.areaMismatch; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION areaMismatch */

/* START_OF_SYMBOL_DEFINITION Reason_maximumBroadcastIntermediateSystemsExceeded */
/**
 * @summary Reason_maximumBroadcastIntermediateSystemsExceeded
 * @constant
 * @type {number}
 */
export const Reason_maximumBroadcastIntermediateSystemsExceeded: Reason =
  Reason.maximumBroadcastIntermediateSystemsExceeded; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION Reason_maximumBroadcastIntermediateSystemsExceeded */

/* START_OF_SYMBOL_DEFINITION maximumBroadcastIntermediateSystemsExceeded */
/**
 * @summary maximumBroadcastIntermediateSystemsExceeded
 * @constant
 * @type {number}
 */
export const maximumBroadcastIntermediateSystemsExceeded: Reason =
  Reason.maximumBroadcastIntermediateSystemsExceeded; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION maximumBroadcastIntermediateSystemsExceeded */

/* START_OF_SYMBOL_DEFINITION Reason_maximumBroadcastEndSystemsExceeded */
/**
 * @summary Reason_maximumBroadcastEndSystemsExceeded
 * @constant
 * @type {number}
 */
export const Reason_maximumBroadcastEndSystemsExceeded: Reason =
  Reason.maximumBroadcastEndSystemsExceeded; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION Reason_maximumBroadcastEndSystemsExceeded */

/* START_OF_SYMBOL_DEFINITION maximumBroadcastEndSystemsExceeded */
/**
 * @summary maximumBroadcastEndSystemsExceeded
 * @constant
 * @type {number}
 */
export const maximumBroadcastEndSystemsExceeded: Reason =
  Reason.maximumBroadcastEndSystemsExceeded; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION maximumBroadcastEndSystemsExceeded */

/* START_OF_SYMBOL_DEFINITION Reason_wrongSystemType */
/**
 * @summary Reason_wrongSystemType
 * @constant
 * @type {number}
 */
export const Reason_wrongSystemType: Reason =
  Reason.wrongSystemType; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION Reason_wrongSystemType */

/* START_OF_SYMBOL_DEFINITION wrongSystemType */
/**
 * @summary wrongSystemType
 * @constant
 * @type {number}
 */
export const wrongSystemType: Reason =
  Reason.wrongSystemType; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION wrongSystemType */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Reason */
let _cached_decoder_for_Reason: $.ASN1Decoder<Reason> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Reason */

/* START_OF_SYMBOL_DEFINITION _decode_Reason */
/**
 * @summary Decodes an ASN.1 element into a(n) Reason
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Reason} The decoded data structure.
 */
export function _decode_Reason(el: _Element) {
  if (!_cached_decoder_for_Reason) {
    _cached_decoder_for_Reason = $._decodeEnumerated;
  }
  return _cached_decoder_for_Reason(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_Reason */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Reason */
let _cached_encoder_for_Reason: $.ASN1Encoder<Reason> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Reason */

/* START_OF_SYMBOL_DEFINITION _encode_Reason */
/**
 * @summary Encodes a(n) Reason into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Reason, encoded as an ASN.1 Element.
 */
export function _encode_Reason(value: Reason, elGetter: $.ASN1Encoder<Reason>) {
  if (!_cached_encoder_for_Reason) {
    _cached_encoder_for_Reason = $._encodeEnumerated;
  }
  return _cached_encoder_for_Reason(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_Reason */

/* eslint-enable */
