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

/* START_OF_SYMBOL_DEFINITION _enum_for_ReplyStatus */
/**
 * @summary ReplyStatus
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ReplyStatus  ::=  ENUMERATED {
 *     success                    (0),
 *     malformedPKC               (1),
 *     malformedAC                (2),
 *     unavailableValidationTime  (3),
 *     referenceCertHashFail      (4),
 *     certPathConstructFail      (5),
 *     certPathNotValid           (6),
 *     certPathNotValidNow        (7),
 *     wantBackUnsatisfied        (8)
 * }
 * ```@enum {number}
 */
export enum _enum_for_ReplyStatus {
  success = 0,
  malformedPKC = 1,
  malformedAC = 2,
  unavailableValidationTime = 3,
  referenceCertHashFail = 4,
  certPathConstructFail = 5,
  certPathNotValid = 6,
  certPathNotValidNow = 7,
  wantBackUnsatisfied = 8,
}
/* END_OF_SYMBOL_DEFINITION _enum_for_ReplyStatus */

/* START_OF_SYMBOL_DEFINITION ReplyStatus */
/**
 * @summary ReplyStatus
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ReplyStatus  ::=  ENUMERATED {
 *     success                    (0),
 *     malformedPKC               (1),
 *     malformedAC                (2),
 *     unavailableValidationTime  (3),
 *     referenceCertHashFail      (4),
 *     certPathConstructFail      (5),
 *     certPathNotValid           (6),
 *     certPathNotValidNow        (7),
 *     wantBackUnsatisfied        (8)
 * }
 * ```@enum {number}
 */
export type ReplyStatus = _enum_for_ReplyStatus;
/* END_OF_SYMBOL_DEFINITION ReplyStatus */

/* START_OF_SYMBOL_DEFINITION ReplyStatus */
/**
 * @summary ReplyStatus
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ReplyStatus  ::=  ENUMERATED {
 *     success                    (0),
 *     malformedPKC               (1),
 *     malformedAC                (2),
 *     unavailableValidationTime  (3),
 *     referenceCertHashFail      (4),
 *     certPathConstructFail      (5),
 *     certPathNotValid           (6),
 *     certPathNotValidNow        (7),
 *     wantBackUnsatisfied        (8)
 * }
 * ```@enum {number}
 */
export const ReplyStatus = _enum_for_ReplyStatus;
/* END_OF_SYMBOL_DEFINITION ReplyStatus */

/* START_OF_SYMBOL_DEFINITION ReplyStatus_success */
/**
 * @summary ReplyStatus_success
 * @constant
 * @type {number}
 */
export const ReplyStatus_success: ReplyStatus =
  ReplyStatus.success; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION ReplyStatus_success */

/* START_OF_SYMBOL_DEFINITION success */
/**
 * @summary success
 * @constant
 * @type {number}
 */
export const success: ReplyStatus =
  ReplyStatus.success; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION success */

/* START_OF_SYMBOL_DEFINITION ReplyStatus_malformedPKC */
/**
 * @summary ReplyStatus_malformedPKC
 * @constant
 * @type {number}
 */
export const ReplyStatus_malformedPKC: ReplyStatus =
  ReplyStatus.malformedPKC; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION ReplyStatus_malformedPKC */

/* START_OF_SYMBOL_DEFINITION malformedPKC */
/**
 * @summary malformedPKC
 * @constant
 * @type {number}
 */
export const malformedPKC: ReplyStatus =
  ReplyStatus.malformedPKC; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION malformedPKC */

/* START_OF_SYMBOL_DEFINITION ReplyStatus_malformedAC */
/**
 * @summary ReplyStatus_malformedAC
 * @constant
 * @type {number}
 */
export const ReplyStatus_malformedAC: ReplyStatus =
  ReplyStatus.malformedAC; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION ReplyStatus_malformedAC */

/* START_OF_SYMBOL_DEFINITION malformedAC */
/**
 * @summary malformedAC
 * @constant
 * @type {number}
 */
export const malformedAC: ReplyStatus =
  ReplyStatus.malformedAC; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION malformedAC */

/* START_OF_SYMBOL_DEFINITION ReplyStatus_unavailableValidationTime */
/**
 * @summary ReplyStatus_unavailableValidationTime
 * @constant
 * @type {number}
 */
export const ReplyStatus_unavailableValidationTime: ReplyStatus =
  ReplyStatus.unavailableValidationTime; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION ReplyStatus_unavailableValidationTime */

/* START_OF_SYMBOL_DEFINITION unavailableValidationTime */
/**
 * @summary unavailableValidationTime
 * @constant
 * @type {number}
 */
export const unavailableValidationTime: ReplyStatus =
  ReplyStatus.unavailableValidationTime; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION unavailableValidationTime */

/* START_OF_SYMBOL_DEFINITION ReplyStatus_referenceCertHashFail */
/**
 * @summary ReplyStatus_referenceCertHashFail
 * @constant
 * @type {number}
 */
export const ReplyStatus_referenceCertHashFail: ReplyStatus =
  ReplyStatus.referenceCertHashFail; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION ReplyStatus_referenceCertHashFail */

/* START_OF_SYMBOL_DEFINITION referenceCertHashFail */
/**
 * @summary referenceCertHashFail
 * @constant
 * @type {number}
 */
export const referenceCertHashFail: ReplyStatus =
  ReplyStatus.referenceCertHashFail; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION referenceCertHashFail */

/* START_OF_SYMBOL_DEFINITION ReplyStatus_certPathConstructFail */
/**
 * @summary ReplyStatus_certPathConstructFail
 * @constant
 * @type {number}
 */
export const ReplyStatus_certPathConstructFail: ReplyStatus =
  ReplyStatus.certPathConstructFail; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION ReplyStatus_certPathConstructFail */

/* START_OF_SYMBOL_DEFINITION certPathConstructFail */
/**
 * @summary certPathConstructFail
 * @constant
 * @type {number}
 */
export const certPathConstructFail: ReplyStatus =
  ReplyStatus.certPathConstructFail; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION certPathConstructFail */

/* START_OF_SYMBOL_DEFINITION ReplyStatus_certPathNotValid */
/**
 * @summary ReplyStatus_certPathNotValid
 * @constant
 * @type {number}
 */
export const ReplyStatus_certPathNotValid: ReplyStatus =
  ReplyStatus.certPathNotValid; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION ReplyStatus_certPathNotValid */

/* START_OF_SYMBOL_DEFINITION certPathNotValid */
/**
 * @summary certPathNotValid
 * @constant
 * @type {number}
 */
export const certPathNotValid: ReplyStatus =
  ReplyStatus.certPathNotValid; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION certPathNotValid */

/* START_OF_SYMBOL_DEFINITION ReplyStatus_certPathNotValidNow */
/**
 * @summary ReplyStatus_certPathNotValidNow
 * @constant
 * @type {number}
 */
export const ReplyStatus_certPathNotValidNow: ReplyStatus =
  ReplyStatus.certPathNotValidNow; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION ReplyStatus_certPathNotValidNow */

/* START_OF_SYMBOL_DEFINITION certPathNotValidNow */
/**
 * @summary certPathNotValidNow
 * @constant
 * @type {number}
 */
export const certPathNotValidNow: ReplyStatus =
  ReplyStatus.certPathNotValidNow; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION certPathNotValidNow */

/* START_OF_SYMBOL_DEFINITION ReplyStatus_wantBackUnsatisfied */
/**
 * @summary ReplyStatus_wantBackUnsatisfied
 * @constant
 * @type {number}
 */
export const ReplyStatus_wantBackUnsatisfied: ReplyStatus =
  ReplyStatus.wantBackUnsatisfied; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION ReplyStatus_wantBackUnsatisfied */

/* START_OF_SYMBOL_DEFINITION wantBackUnsatisfied */
/**
 * @summary wantBackUnsatisfied
 * @constant
 * @type {number}
 */
export const wantBackUnsatisfied: ReplyStatus =
  ReplyStatus.wantBackUnsatisfied; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION wantBackUnsatisfied */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ReplyStatus */
let _cached_decoder_for_ReplyStatus: $.ASN1Decoder<ReplyStatus> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ReplyStatus */

/* START_OF_SYMBOL_DEFINITION _decode_ReplyStatus */
/**
 * @summary Decodes an ASN.1 element into a(n) ReplyStatus
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ReplyStatus} The decoded data structure.
 */
export function _decode_ReplyStatus(el: _Element) {
  if (!_cached_decoder_for_ReplyStatus) {
    _cached_decoder_for_ReplyStatus = $._decodeEnumerated;
  }
  return _cached_decoder_for_ReplyStatus(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ReplyStatus */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ReplyStatus */
let _cached_encoder_for_ReplyStatus: $.ASN1Encoder<ReplyStatus> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ReplyStatus */

/* START_OF_SYMBOL_DEFINITION _encode_ReplyStatus */
/**
 * @summary Encodes a(n) ReplyStatus into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ReplyStatus, encoded as an ASN.1 Element.
 */
export function _encode_ReplyStatus(
  value: ReplyStatus,
  elGetter: $.ASN1Encoder<ReplyStatus>
) {
  if (!_cached_encoder_for_ReplyStatus) {
    _cached_encoder_for_ReplyStatus = $._encodeEnumerated;
  }
  return _cached_encoder_for_ReplyStatus(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ReplyStatus */

/* eslint-enable */
