/* eslint-disable */
import {
  type ENUMERATED,
  ASN1Element as _Element,
  ASN1TagClass as _TagClass,
  ASN1Construction as _Construction,
  ASN1UniversalType as _UniversalType,
  ObjectIdentifier as _OID,
  External as _External,
  EmbeddedPDV as _PDV,
  ASN1ConstructionError as _ConstructionError,
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';

export enum _enum_for_CVStatusCode {
  okay = 0,
  skipUnrecognizedItems = 1,
  tooBusy = 10,
  invalidRequest = 11,
  internalError = 12,
  badStructure = 20,
  unsupportedVersion = 21,
  abortUnrecognizedItems = 22,
  unrecognizedSigKey = 23,
  badSignatureOrMAC = 24,
  unableToDecode = 25,
  notAuthorized = 26,
  unsupportedChecks = 27,
  unsupportedWantBacks = 28,
  unsupportedSignatureOrMAC = 29,
  invalidSignatureOrMAC = 30,
  protectedResponseUnsupported = 31,
  unrecognizedResponderName = 32,
  relayingLoop = 40,
  unrecognizedValPol = 50,
  unrecognizedValAlg = 51,
  fullRequestInResponseUnsupported = 52,
  fullPolResponseUnsupported = 53,
  inhibitPolicyMappingUnsupported = 54,
  requireExplicitPolicyUnsupported = 55,
  inhibitAnyPolicyUnsupported = 56,
  validationTimeUnsupported = 57,
  unrecognizedCritQueryExt = 63,
  unrecognizedCritRequestExt = 64,
}

/**
 * @summary CVStatusCode
 * @description
 *
 * Status code for the whole SCVP request in `ResponseStatus`
 * ([RFC 5055 §4.4](https://datatracker.ietf.org/doc/html/rfc5055#section-4.4)). Codes 0–9 indicate the request was processed
 * (success response); codes 10 and above indicate an error response.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CVStatusCode  ::=  ENUMERATED {
 *     okay                               (0),
 *     skipUnrecognizedItems              (1),
 *     tooBusy                           (10),
 *     invalidRequest                    (11),
 *     internalError                     (12),
 *     badStructure                      (20),
 *     unsupportedVersion                (21),
 *     abortUnrecognizedItems            (22),
 *     unrecognizedSigKey                (23),
 *     badSignatureOrMAC                 (24),
 *     unableToDecode                    (25),
 *     notAuthorized                     (26),
 *     unsupportedChecks                 (27),
 *     unsupportedWantBacks              (28),
 *     unsupportedSignatureOrMAC         (29),
 *     invalidSignatureOrMAC             (30),
 *     protectedResponseUnsupported      (31),
 *     unrecognizedResponderName         (32),
 *     relayingLoop                      (40),
 *     unrecognizedValPol                (50),
 *     unrecognizedValAlg                (51),
 *     fullRequestInResponseUnsupported  (52),
 *     fullPolResponseUnsupported        (53),
 *     inhibitPolicyMappingUnsupported   (54),
 *     requireExplicitPolicyUnsupported  (55),
 *     inhibitAnyPolicyUnsupported       (56),
 *     validationTimeUnsupported         (57),
 *     unrecognizedCritQueryExt          (63),
 *     unrecognizedCritRequestExt        (64),
 *     ...
 * }
 * ```
 *
 * @enum {number}
 */
export type CVStatusCode = _enum_for_CVStatusCode | ENUMERATED;

/**
 * @summary CVStatusCode_okay
 * @description
 *
 * `okay`(0): The request was fully processed. ([RFC 5055 §4.4](https://datatracker.ietf.org/doc/html/rfc5055#section-4.4)).
 *
 * @constant
 * @type {number}
 */
export const CVStatusCode_okay = _enum_for_CVStatusCode.okay satisfies CVStatusCode; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary okay
 * @description
 *
 * Short name for `CVStatusCode_okay` (0) ([RFC 5055 §4.4](https://datatracker.ietf.org/doc/html/rfc5055#section-4.4)).
 *
 * @constant
 * @type {number}
 */
export const okay = CVStatusCode_okay satisfies CVStatusCode; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CVStatusCode_skipUnrecognizedItems
 * @description
 *
 * `skipUnrecognizedItems`(1): The request included some unrecognized non-critical extensions; processing continued ignoring them. ([RFC 5055 §4.4](https://datatracker.ietf.org/doc/html/rfc5055#section-4.4)).
 *
 * @constant
 * @type {number}
 */
export const CVStatusCode_skipUnrecognizedItems = _enum_for_CVStatusCode.skipUnrecognizedItems satisfies CVStatusCode; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary skipUnrecognizedItems
 * @description
 *
 * Short name for `CVStatusCode_skipUnrecognizedItems` (1) ([RFC 5055 §4.4](https://datatracker.ietf.org/doc/html/rfc5055#section-4.4)).
 *
 * @constant
 * @type {number}
 */
export const skipUnrecognizedItems = CVStatusCode_skipUnrecognizedItems satisfies CVStatusCode; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CVStatusCode_tooBusy
 * @description
 *
 * `tooBusy`(10): Too busy; try again later. ([RFC 5055 §4.4](https://datatracker.ietf.org/doc/html/rfc5055#section-4.4)).
 *
 * @constant
 * @type {number}
 */
export const CVStatusCode_tooBusy = _enum_for_CVStatusCode.tooBusy satisfies CVStatusCode; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary tooBusy
 * @description
 *
 * Short name for `CVStatusCode_tooBusy` (10) ([RFC 5055 §4.4](https://datatracker.ietf.org/doc/html/rfc5055#section-4.4)).
 *
 * @constant
 * @type {number}
 */
export const tooBusy = CVStatusCode_tooBusy satisfies CVStatusCode; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CVStatusCode_invalidRequest
 * @description
 *
 * `invalidRequest`(11): The server decoded the request, but there was some other problem with it. ([RFC 5055 §4.4](https://datatracker.ietf.org/doc/html/rfc5055#section-4.4)).
 *
 * @constant
 * @type {number}
 */
export const CVStatusCode_invalidRequest = _enum_for_CVStatusCode.invalidRequest satisfies CVStatusCode; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary invalidRequest
 * @description
 *
 * Short name for `CVStatusCode_invalidRequest` (11) ([RFC 5055 §4.4](https://datatracker.ietf.org/doc/html/rfc5055#section-4.4)).
 *
 * @constant
 * @type {number}
 */
export const invalidRequest = CVStatusCode_invalidRequest satisfies CVStatusCode; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CVStatusCode_internalError
 * @description
 *
 * `internalError`(12): An internal server error occurred. ([RFC 5055 §4.4](https://datatracker.ietf.org/doc/html/rfc5055#section-4.4)).
 *
 * @constant
 * @type {number}
 */
export const CVStatusCode_internalError = _enum_for_CVStatusCode.internalError satisfies CVStatusCode; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary internalError
 * @description
 *
 * Short name for `CVStatusCode_internalError` (12) ([RFC 5055 §4.4](https://datatracker.ietf.org/doc/html/rfc5055#section-4.4)).
 *
 * @constant
 * @type {number}
 */
export const internalError = CVStatusCode_internalError satisfies CVStatusCode; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CVStatusCode_badStructure
 * @description
 *
 * `badStructure`(20): The structure of the request was wrong. ([RFC 5055 §4.4](https://datatracker.ietf.org/doc/html/rfc5055#section-4.4)).
 *
 * @constant
 * @type {number}
 */
export const CVStatusCode_badStructure = _enum_for_CVStatusCode.badStructure satisfies CVStatusCode; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary badStructure
 * @description
 *
 * Short name for `CVStatusCode_badStructure` (20) ([RFC 5055 §4.4](https://datatracker.ietf.org/doc/html/rfc5055#section-4.4)).
 *
 * @constant
 * @type {number}
 */
export const badStructure = CVStatusCode_badStructure satisfies CVStatusCode; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CVStatusCode_unsupportedVersion
 * @description
 *
 * `unsupportedVersion`(21): The version of request is not supported by this server. ([RFC 5055 §4.4](https://datatracker.ietf.org/doc/html/rfc5055#section-4.4)).
 *
 * @constant
 * @type {number}
 */
export const CVStatusCode_unsupportedVersion = _enum_for_CVStatusCode.unsupportedVersion satisfies CVStatusCode; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unsupportedVersion
 * @description
 *
 * Short name for `CVStatusCode_unsupportedVersion` (21) ([RFC 5055 §4.4](https://datatracker.ietf.org/doc/html/rfc5055#section-4.4)).
 *
 * @constant
 * @type {number}
 */
export const unsupportedVersion = CVStatusCode_unsupportedVersion satisfies CVStatusCode; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CVStatusCode_abortUnrecognizedItems
 * @description
 *
 * `abortUnrecognizedItems`(22): The request included unrecognized items, and the server was not able to continue processing. ([RFC 5055 §4.4](https://datatracker.ietf.org/doc/html/rfc5055#section-4.4)).
 *
 * @constant
 * @type {number}
 */
export const CVStatusCode_abortUnrecognizedItems = _enum_for_CVStatusCode.abortUnrecognizedItems satisfies CVStatusCode; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary abortUnrecognizedItems
 * @description
 *
 * Short name for `CVStatusCode_abortUnrecognizedItems` (22) ([RFC 5055 §4.4](https://datatracker.ietf.org/doc/html/rfc5055#section-4.4)).
 *
 * @constant
 * @type {number}
 */
export const abortUnrecognizedItems = CVStatusCode_abortUnrecognizedItems satisfies CVStatusCode; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CVStatusCode_unrecognizedSigKey
 * @description
 *
 * `unrecognizedSigKey`(23): The server could not validate the key used to protect the request. ([RFC 5055 §4.4](https://datatracker.ietf.org/doc/html/rfc5055#section-4.4)).
 *
 * @constant
 * @type {number}
 */
export const CVStatusCode_unrecognizedSigKey = _enum_for_CVStatusCode.unrecognizedSigKey satisfies CVStatusCode; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unrecognizedSigKey
 * @description
 *
 * Short name for `CVStatusCode_unrecognizedSigKey` (23) ([RFC 5055 §4.4](https://datatracker.ietf.org/doc/html/rfc5055#section-4.4)).
 *
 * @constant
 * @type {number}
 */
export const unrecognizedSigKey = CVStatusCode_unrecognizedSigKey satisfies CVStatusCode; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CVStatusCode_badSignatureOrMAC
 * @description
 *
 * `badSignatureOrMAC`(24): The signature or message authentication code did not match the body of the request. ([RFC 5055 §4.4](https://datatracker.ietf.org/doc/html/rfc5055#section-4.4)).
 *
 * @constant
 * @type {number}
 */
export const CVStatusCode_badSignatureOrMAC = _enum_for_CVStatusCode.badSignatureOrMAC satisfies CVStatusCode; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary badSignatureOrMAC
 * @description
 *
 * Short name for `CVStatusCode_badSignatureOrMAC` (24) ([RFC 5055 §4.4](https://datatracker.ietf.org/doc/html/rfc5055#section-4.4)).
 *
 * @constant
 * @type {number}
 */
export const badSignatureOrMAC = CVStatusCode_badSignatureOrMAC satisfies CVStatusCode; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CVStatusCode_unableToDecode
 * @description
 *
 * `unableToDecode`(25): The encoding was not understood. ([RFC 5055 §4.4](https://datatracker.ietf.org/doc/html/rfc5055#section-4.4)).
 *
 * @constant
 * @type {number}
 */
export const CVStatusCode_unableToDecode = _enum_for_CVStatusCode.unableToDecode satisfies CVStatusCode; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unableToDecode
 * @description
 *
 * Short name for `CVStatusCode_unableToDecode` (25) ([RFC 5055 §4.4](https://datatracker.ietf.org/doc/html/rfc5055#section-4.4)).
 *
 * @constant
 * @type {number}
 */
export const unableToDecode = CVStatusCode_unableToDecode satisfies CVStatusCode; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CVStatusCode_notAuthorized
 * @description
 *
 * `notAuthorized`(26): The request was not authorized. ([RFC 5055 §4.4](https://datatracker.ietf.org/doc/html/rfc5055#section-4.4)).
 *
 * @constant
 * @type {number}
 */
export const CVStatusCode_notAuthorized = _enum_for_CVStatusCode.notAuthorized satisfies CVStatusCode; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary notAuthorized
 * @description
 *
 * Short name for `CVStatusCode_notAuthorized` (26) ([RFC 5055 §4.4](https://datatracker.ietf.org/doc/html/rfc5055#section-4.4)).
 *
 * @constant
 * @type {number}
 */
export const notAuthorized = CVStatusCode_notAuthorized satisfies CVStatusCode; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CVStatusCode_unsupportedChecks
 * @description
 *
 * `unsupportedChecks`(27): The request included unsupported checks items, and the server was not able to continue processing. ([RFC 5055 §4.4](https://datatracker.ietf.org/doc/html/rfc5055#section-4.4)).
 *
 * @constant
 * @type {number}
 */
export const CVStatusCode_unsupportedChecks = _enum_for_CVStatusCode.unsupportedChecks satisfies CVStatusCode; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unsupportedChecks
 * @description
 *
 * Short name for `CVStatusCode_unsupportedChecks` (27) ([RFC 5055 §4.4](https://datatracker.ietf.org/doc/html/rfc5055#section-4.4)).
 *
 * @constant
 * @type {number}
 */
export const unsupportedChecks = CVStatusCode_unsupportedChecks satisfies CVStatusCode; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CVStatusCode_unsupportedWantBacks
 * @description
 *
 * `unsupportedWantBacks`(28): The request included unsupported wantBack items, and the server was not able to continue processing. ([RFC 5055 §4.4](https://datatracker.ietf.org/doc/html/rfc5055#section-4.4)).
 *
 * @constant
 * @type {number}
 */
export const CVStatusCode_unsupportedWantBacks = _enum_for_CVStatusCode.unsupportedWantBacks satisfies CVStatusCode; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unsupportedWantBacks
 * @description
 *
 * Short name for `CVStatusCode_unsupportedWantBacks` (28) ([RFC 5055 §4.4](https://datatracker.ietf.org/doc/html/rfc5055#section-4.4)).
 *
 * @constant
 * @type {number}
 */
export const unsupportedWantBacks = CVStatusCode_unsupportedWantBacks satisfies CVStatusCode; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CVStatusCode_unsupportedSignatureOrMAC
 * @description
 *
 * `unsupportedSignatureOrMAC`(29): The server does not support the signature or MAC algorithm used to protect the request. ([RFC 5055 §4.4](https://datatracker.ietf.org/doc/html/rfc5055#section-4.4)).
 *
 * @constant
 * @type {number}
 */
export const CVStatusCode_unsupportedSignatureOrMAC = _enum_for_CVStatusCode.unsupportedSignatureOrMAC satisfies CVStatusCode; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unsupportedSignatureOrMAC
 * @description
 *
 * Short name for `CVStatusCode_unsupportedSignatureOrMAC` (29) ([RFC 5055 §4.4](https://datatracker.ietf.org/doc/html/rfc5055#section-4.4)).
 *
 * @constant
 * @type {number}
 */
export const unsupportedSignatureOrMAC = CVStatusCode_unsupportedSignatureOrMAC satisfies CVStatusCode; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CVStatusCode_invalidSignatureOrMAC
 * @description
 *
 * `invalidSignatureOrMAC`(30): The server could not validate the client's signature or MAC on the request. ([RFC 5055 §4.4](https://datatracker.ietf.org/doc/html/rfc5055#section-4.4)).
 *
 * @constant
 * @type {number}
 */
export const CVStatusCode_invalidSignatureOrMAC = _enum_for_CVStatusCode.invalidSignatureOrMAC satisfies CVStatusCode; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary invalidSignatureOrMAC
 * @description
 *
 * Short name for `CVStatusCode_invalidSignatureOrMAC` (30) ([RFC 5055 §4.4](https://datatracker.ietf.org/doc/html/rfc5055#section-4.4)).
 *
 * @constant
 * @type {number}
 */
export const invalidSignatureOrMAC = CVStatusCode_invalidSignatureOrMAC satisfies CVStatusCode; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CVStatusCode_protectedResponseUnsupported
 * @description
 *
 * `protectedResponseUnsupported`(31): The server could not generate a protected response as requested by the client. ([RFC 5055 §4.4](https://datatracker.ietf.org/doc/html/rfc5055#section-4.4)).
 *
 * @constant
 * @type {number}
 */
export const CVStatusCode_protectedResponseUnsupported = _enum_for_CVStatusCode.protectedResponseUnsupported satisfies CVStatusCode; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary protectedResponseUnsupported
 * @description
 *
 * Short name for `CVStatusCode_protectedResponseUnsupported` (31) ([RFC 5055 §4.4](https://datatracker.ietf.org/doc/html/rfc5055#section-4.4)).
 *
 * @constant
 * @type {number}
 */
export const protectedResponseUnsupported = CVStatusCode_protectedResponseUnsupported satisfies CVStatusCode; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CVStatusCode_unrecognizedResponderName
 * @description
 *
 * `unrecognizedResponderName`(32): The server does not have a certificate matching the requested responder name. ([RFC 5055 §4.4](https://datatracker.ietf.org/doc/html/rfc5055#section-4.4)).
 *
 * @constant
 * @type {number}
 */
export const CVStatusCode_unrecognizedResponderName = _enum_for_CVStatusCode.unrecognizedResponderName satisfies CVStatusCode; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unrecognizedResponderName
 * @description
 *
 * Short name for `CVStatusCode_unrecognizedResponderName` (32) ([RFC 5055 §4.4](https://datatracker.ietf.org/doc/html/rfc5055#section-4.4)).
 *
 * @constant
 * @type {number}
 */
export const unrecognizedResponderName = CVStatusCode_unrecognizedResponderName satisfies CVStatusCode; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CVStatusCode_relayingLoop
 * @description
 *
 * `relayingLoop`(40): The request was previously relayed by the same server. ([RFC 5055 §4.4](https://datatracker.ietf.org/doc/html/rfc5055#section-4.4)).
 *
 * @constant
 * @type {number}
 */
export const CVStatusCode_relayingLoop = _enum_for_CVStatusCode.relayingLoop satisfies CVStatusCode; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary relayingLoop
 * @description
 *
 * Short name for `CVStatusCode_relayingLoop` (40) ([RFC 5055 §4.4](https://datatracker.ietf.org/doc/html/rfc5055#section-4.4)).
 *
 * @constant
 * @type {number}
 */
export const relayingLoop = CVStatusCode_relayingLoop satisfies CVStatusCode; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CVStatusCode_unrecognizedValPol
 * @description
 *
 * `unrecognizedValPol`(50): The request contained an unrecognized validation policy reference. ([RFC 5055 §4.4](https://datatracker.ietf.org/doc/html/rfc5055#section-4.4)).
 *
 * @constant
 * @type {number}
 */
export const CVStatusCode_unrecognizedValPol = _enum_for_CVStatusCode.unrecognizedValPol satisfies CVStatusCode; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unrecognizedValPol
 * @description
 *
 * Short name for `CVStatusCode_unrecognizedValPol` (50) ([RFC 5055 §4.4](https://datatracker.ietf.org/doc/html/rfc5055#section-4.4)).
 *
 * @constant
 * @type {number}
 */
export const unrecognizedValPol = CVStatusCode_unrecognizedValPol satisfies CVStatusCode; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CVStatusCode_unrecognizedValAlg
 * @description
 *
 * `unrecognizedValAlg`(51): The request contained an unrecognized validation algorithm OID. ([RFC 5055 §4.4](https://datatracker.ietf.org/doc/html/rfc5055#section-4.4)).
 *
 * @constant
 * @type {number}
 */
export const CVStatusCode_unrecognizedValAlg = _enum_for_CVStatusCode.unrecognizedValAlg satisfies CVStatusCode; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unrecognizedValAlg
 * @description
 *
 * Short name for `CVStatusCode_unrecognizedValAlg` (51) ([RFC 5055 §4.4](https://datatracker.ietf.org/doc/html/rfc5055#section-4.4)).
 *
 * @constant
 * @type {number}
 */
export const unrecognizedValAlg = CVStatusCode_unrecognizedValAlg satisfies CVStatusCode; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CVStatusCode_fullRequestInResponseUnsupported
 * @description
 *
 * `fullRequestInResponseUnsupported`(52): The server does not support returning the full request in the response. ([RFC 5055 §4.4](https://datatracker.ietf.org/doc/html/rfc5055#section-4.4)).
 *
 * @constant
 * @type {number}
 */
export const CVStatusCode_fullRequestInResponseUnsupported = _enum_for_CVStatusCode.fullRequestInResponseUnsupported satisfies CVStatusCode; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary fullRequestInResponseUnsupported
 * @description
 *
 * Short name for `CVStatusCode_fullRequestInResponseUnsupported` (52) ([RFC 5055 §4.4](https://datatracker.ietf.org/doc/html/rfc5055#section-4.4)).
 *
 * @constant
 * @type {number}
 */
export const fullRequestInResponseUnsupported = CVStatusCode_fullRequestInResponseUnsupported satisfies CVStatusCode; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CVStatusCode_fullPolResponseUnsupported
 * @description
 *
 * `fullPolResponseUnsupported`(53): The server does not support returning the full validation policy by value in the response. ([RFC 5055 §4.4](https://datatracker.ietf.org/doc/html/rfc5055#section-4.4)).
 *
 * @constant
 * @type {number}
 */
export const CVStatusCode_fullPolResponseUnsupported = _enum_for_CVStatusCode.fullPolResponseUnsupported satisfies CVStatusCode; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary fullPolResponseUnsupported
 * @description
 *
 * Short name for `CVStatusCode_fullPolResponseUnsupported` (53) ([RFC 5055 §4.4](https://datatracker.ietf.org/doc/html/rfc5055#section-4.4)).
 *
 * @constant
 * @type {number}
 */
export const fullPolResponseUnsupported = CVStatusCode_fullPolResponseUnsupported satisfies CVStatusCode; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CVStatusCode_inhibitPolicyMappingUnsupported
 * @description
 *
 * `inhibitPolicyMappingUnsupported`(54): The server does not support the requested value for inhibit policy mapping. ([RFC 5055 §4.4](https://datatracker.ietf.org/doc/html/rfc5055#section-4.4)).
 *
 * @constant
 * @type {number}
 */
export const CVStatusCode_inhibitPolicyMappingUnsupported = _enum_for_CVStatusCode.inhibitPolicyMappingUnsupported satisfies CVStatusCode; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary inhibitPolicyMappingUnsupported
 * @description
 *
 * Short name for `CVStatusCode_inhibitPolicyMappingUnsupported` (54) ([RFC 5055 §4.4](https://datatracker.ietf.org/doc/html/rfc5055#section-4.4)).
 *
 * @constant
 * @type {number}
 */
export const inhibitPolicyMappingUnsupported = CVStatusCode_inhibitPolicyMappingUnsupported satisfies CVStatusCode; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CVStatusCode_requireExplicitPolicyUnsupported
 * @description
 *
 * `requireExplicitPolicyUnsupported`(55): The server does not support the requested value for require explicit policy. ([RFC 5055 §4.4](https://datatracker.ietf.org/doc/html/rfc5055#section-4.4)).
 *
 * @constant
 * @type {number}
 */
export const CVStatusCode_requireExplicitPolicyUnsupported = _enum_for_CVStatusCode.requireExplicitPolicyUnsupported satisfies CVStatusCode; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary requireExplicitPolicyUnsupported
 * @description
 *
 * Short name for `CVStatusCode_requireExplicitPolicyUnsupported` (55) ([RFC 5055 §4.4](https://datatracker.ietf.org/doc/html/rfc5055#section-4.4)).
 *
 * @constant
 * @type {number}
 */
export const requireExplicitPolicyUnsupported = CVStatusCode_requireExplicitPolicyUnsupported satisfies CVStatusCode; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CVStatusCode_inhibitAnyPolicyUnsupported
 * @description
 *
 * `inhibitAnyPolicyUnsupported`(56): The server does not support the requested value for inhibit anyPolicy. ([RFC 5055 §4.4](https://datatracker.ietf.org/doc/html/rfc5055#section-4.4)).
 *
 * @constant
 * @type {number}
 */
export const CVStatusCode_inhibitAnyPolicyUnsupported = _enum_for_CVStatusCode.inhibitAnyPolicyUnsupported satisfies CVStatusCode; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary inhibitAnyPolicyUnsupported
 * @description
 *
 * Short name for `CVStatusCode_inhibitAnyPolicyUnsupported` (56) ([RFC 5055 §4.4](https://datatracker.ietf.org/doc/html/rfc5055#section-4.4)).
 *
 * @constant
 * @type {number}
 */
export const inhibitAnyPolicyUnsupported = CVStatusCode_inhibitAnyPolicyUnsupported satisfies CVStatusCode; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CVStatusCode_validationTimeUnsupported
 * @description
 *
 * `validationTimeUnsupported`(57): The server only validates requests using current time. ([RFC 5055 §4.4](https://datatracker.ietf.org/doc/html/rfc5055#section-4.4)).
 *
 * @constant
 * @type {number}
 */
export const CVStatusCode_validationTimeUnsupported = _enum_for_CVStatusCode.validationTimeUnsupported satisfies CVStatusCode; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary validationTimeUnsupported
 * @description
 *
 * Short name for `CVStatusCode_validationTimeUnsupported` (57) ([RFC 5055 §4.4](https://datatracker.ietf.org/doc/html/rfc5055#section-4.4)).
 *
 * @constant
 * @type {number}
 */
export const validationTimeUnsupported = CVStatusCode_validationTimeUnsupported satisfies CVStatusCode; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CVStatusCode_unrecognizedCritQueryExt
 * @description
 *
 * `unrecognizedCritQueryExt`(63): The query contains a critical extension whose OID is not recognized. ([RFC 5055 §4.4](https://datatracker.ietf.org/doc/html/rfc5055#section-4.4)).
 *
 * @constant
 * @type {number}
 */
export const CVStatusCode_unrecognizedCritQueryExt = _enum_for_CVStatusCode.unrecognizedCritQueryExt satisfies CVStatusCode; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unrecognizedCritQueryExt
 * @description
 *
 * Short name for `CVStatusCode_unrecognizedCritQueryExt` (63) ([RFC 5055 §4.4](https://datatracker.ietf.org/doc/html/rfc5055#section-4.4)).
 *
 * @constant
 * @type {number}
 */
export const unrecognizedCritQueryExt = CVStatusCode_unrecognizedCritQueryExt satisfies CVStatusCode; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CVStatusCode_unrecognizedCritRequestExt
 * @description
 *
 * `unrecognizedCritRequestExt`(64): The request contains a critical request extension whose OID is not recognized. ([RFC 5055 §4.4](https://datatracker.ietf.org/doc/html/rfc5055#section-4.4)).
 *
 * @constant
 * @type {number}
 */
export const CVStatusCode_unrecognizedCritRequestExt = _enum_for_CVStatusCode.unrecognizedCritRequestExt satisfies CVStatusCode; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unrecognizedCritRequestExt
 * @description
 *
 * Short name for `CVStatusCode_unrecognizedCritRequestExt` (64) ([RFC 5055 §4.4](https://datatracker.ietf.org/doc/html/rfc5055#section-4.4)).
 *
 * @constant
 * @type {number}
 */
export const unrecognizedCritRequestExt = CVStatusCode_unrecognizedCritRequestExt satisfies CVStatusCode; /* SHORT_NAMED_ENUMERATED_VALUE */


export const _decode_CVStatusCode = $._decodeEnumerated;


export const _encode_CVStatusCode = $._encodeEnumerated;


/* eslint-enable */
