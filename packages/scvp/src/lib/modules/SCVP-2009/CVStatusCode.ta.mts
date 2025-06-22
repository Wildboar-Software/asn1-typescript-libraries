/* eslint-disable */
import {
  ENUMERATED,
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
 * @constant
 * @type {number}
 */
export const CVStatusCode_okay: CVStatusCode = 0; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary okay
 * @constant
 * @type {number}
 */
export const okay: CVStatusCode = CVStatusCode_okay; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CVStatusCode_skipUnrecognizedItems
 * @constant
 * @type {number}
 */
export const CVStatusCode_skipUnrecognizedItems: CVStatusCode = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary skipUnrecognizedItems
 * @constant
 * @type {number}
 */
export const skipUnrecognizedItems: CVStatusCode = CVStatusCode_skipUnrecognizedItems; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CVStatusCode_tooBusy
 * @constant
 * @type {number}
 */
export const CVStatusCode_tooBusy: CVStatusCode = 10; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary tooBusy
 * @constant
 * @type {number}
 */
export const tooBusy: CVStatusCode = CVStatusCode_tooBusy; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CVStatusCode_invalidRequest
 * @constant
 * @type {number}
 */
export const CVStatusCode_invalidRequest: CVStatusCode = 11; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary invalidRequest
 * @constant
 * @type {number}
 */
export const invalidRequest: CVStatusCode = CVStatusCode_invalidRequest; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CVStatusCode_internalError
 * @constant
 * @type {number}
 */
export const CVStatusCode_internalError: CVStatusCode = 12; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary internalError
 * @constant
 * @type {number}
 */
export const internalError: CVStatusCode = CVStatusCode_internalError; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CVStatusCode_badStructure
 * @constant
 * @type {number}
 */
export const CVStatusCode_badStructure: CVStatusCode = 20; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary badStructure
 * @constant
 * @type {number}
 */
export const badStructure: CVStatusCode = CVStatusCode_badStructure; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CVStatusCode_unsupportedVersion
 * @constant
 * @type {number}
 */
export const CVStatusCode_unsupportedVersion: CVStatusCode = 21; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unsupportedVersion
 * @constant
 * @type {number}
 */
export const unsupportedVersion: CVStatusCode = CVStatusCode_unsupportedVersion; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CVStatusCode_abortUnrecognizedItems
 * @constant
 * @type {number}
 */
export const CVStatusCode_abortUnrecognizedItems: CVStatusCode = 22; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary abortUnrecognizedItems
 * @constant
 * @type {number}
 */
export const abortUnrecognizedItems: CVStatusCode = CVStatusCode_abortUnrecognizedItems; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CVStatusCode_unrecognizedSigKey
 * @constant
 * @type {number}
 */
export const CVStatusCode_unrecognizedSigKey: CVStatusCode = 23; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unrecognizedSigKey
 * @constant
 * @type {number}
 */
export const unrecognizedSigKey: CVStatusCode = CVStatusCode_unrecognizedSigKey; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CVStatusCode_badSignatureOrMAC
 * @constant
 * @type {number}
 */
export const CVStatusCode_badSignatureOrMAC: CVStatusCode = 24; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary badSignatureOrMAC
 * @constant
 * @type {number}
 */
export const badSignatureOrMAC: CVStatusCode = CVStatusCode_badSignatureOrMAC; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CVStatusCode_unableToDecode
 * @constant
 * @type {number}
 */
export const CVStatusCode_unableToDecode: CVStatusCode = 25; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unableToDecode
 * @constant
 * @type {number}
 */
export const unableToDecode: CVStatusCode = CVStatusCode_unableToDecode; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CVStatusCode_notAuthorized
 * @constant
 * @type {number}
 */
export const CVStatusCode_notAuthorized: CVStatusCode = 26; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary notAuthorized
 * @constant
 * @type {number}
 */
export const notAuthorized: CVStatusCode = CVStatusCode_notAuthorized; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CVStatusCode_unsupportedChecks
 * @constant
 * @type {number}
 */
export const CVStatusCode_unsupportedChecks: CVStatusCode = 27; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unsupportedChecks
 * @constant
 * @type {number}
 */
export const unsupportedChecks: CVStatusCode = CVStatusCode_unsupportedChecks; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CVStatusCode_unsupportedWantBacks
 * @constant
 * @type {number}
 */
export const CVStatusCode_unsupportedWantBacks: CVStatusCode = 28; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unsupportedWantBacks
 * @constant
 * @type {number}
 */
export const unsupportedWantBacks: CVStatusCode = CVStatusCode_unsupportedWantBacks; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CVStatusCode_unsupportedSignatureOrMAC
 * @constant
 * @type {number}
 */
export const CVStatusCode_unsupportedSignatureOrMAC: CVStatusCode = 29; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unsupportedSignatureOrMAC
 * @constant
 * @type {number}
 */
export const unsupportedSignatureOrMAC: CVStatusCode = CVStatusCode_unsupportedSignatureOrMAC; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CVStatusCode_invalidSignatureOrMAC
 * @constant
 * @type {number}
 */
export const CVStatusCode_invalidSignatureOrMAC: CVStatusCode = 30; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary invalidSignatureOrMAC
 * @constant
 * @type {number}
 */
export const invalidSignatureOrMAC: CVStatusCode = CVStatusCode_invalidSignatureOrMAC; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CVStatusCode_protectedResponseUnsupported
 * @constant
 * @type {number}
 */
export const CVStatusCode_protectedResponseUnsupported: CVStatusCode = 31; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary protectedResponseUnsupported
 * @constant
 * @type {number}
 */
export const protectedResponseUnsupported: CVStatusCode = CVStatusCode_protectedResponseUnsupported; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CVStatusCode_unrecognizedResponderName
 * @constant
 * @type {number}
 */
export const CVStatusCode_unrecognizedResponderName: CVStatusCode = 32; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unrecognizedResponderName
 * @constant
 * @type {number}
 */
export const unrecognizedResponderName: CVStatusCode = CVStatusCode_unrecognizedResponderName; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CVStatusCode_relayingLoop
 * @constant
 * @type {number}
 */
export const CVStatusCode_relayingLoop: CVStatusCode = 40; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary relayingLoop
 * @constant
 * @type {number}
 */
export const relayingLoop: CVStatusCode = CVStatusCode_relayingLoop; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CVStatusCode_unrecognizedValPol
 * @constant
 * @type {number}
 */
export const CVStatusCode_unrecognizedValPol: CVStatusCode = 50; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unrecognizedValPol
 * @constant
 * @type {number}
 */
export const unrecognizedValPol: CVStatusCode = CVStatusCode_unrecognizedValPol; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CVStatusCode_unrecognizedValAlg
 * @constant
 * @type {number}
 */
export const CVStatusCode_unrecognizedValAlg: CVStatusCode = 51; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unrecognizedValAlg
 * @constant
 * @type {number}
 */
export const unrecognizedValAlg: CVStatusCode = CVStatusCode_unrecognizedValAlg; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CVStatusCode_fullRequestInResponseUnsupported
 * @constant
 * @type {number}
 */
export const CVStatusCode_fullRequestInResponseUnsupported: CVStatusCode = 52; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary fullRequestInResponseUnsupported
 * @constant
 * @type {number}
 */
export const fullRequestInResponseUnsupported: CVStatusCode = CVStatusCode_fullRequestInResponseUnsupported; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CVStatusCode_fullPolResponseUnsupported
 * @constant
 * @type {number}
 */
export const CVStatusCode_fullPolResponseUnsupported: CVStatusCode = 53; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary fullPolResponseUnsupported
 * @constant
 * @type {number}
 */
export const fullPolResponseUnsupported: CVStatusCode = CVStatusCode_fullPolResponseUnsupported; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CVStatusCode_inhibitPolicyMappingUnsupported
 * @constant
 * @type {number}
 */
export const CVStatusCode_inhibitPolicyMappingUnsupported: CVStatusCode = 54; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary inhibitPolicyMappingUnsupported
 * @constant
 * @type {number}
 */
export const inhibitPolicyMappingUnsupported: CVStatusCode = CVStatusCode_inhibitPolicyMappingUnsupported; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CVStatusCode_requireExplicitPolicyUnsupported
 * @constant
 * @type {number}
 */
export const CVStatusCode_requireExplicitPolicyUnsupported: CVStatusCode = 55; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary requireExplicitPolicyUnsupported
 * @constant
 * @type {number}
 */
export const requireExplicitPolicyUnsupported: CVStatusCode = CVStatusCode_requireExplicitPolicyUnsupported; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CVStatusCode_inhibitAnyPolicyUnsupported
 * @constant
 * @type {number}
 */
export const CVStatusCode_inhibitAnyPolicyUnsupported: CVStatusCode = 56; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary inhibitAnyPolicyUnsupported
 * @constant
 * @type {number}
 */
export const inhibitAnyPolicyUnsupported: CVStatusCode = CVStatusCode_inhibitAnyPolicyUnsupported; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CVStatusCode_validationTimeUnsupported
 * @constant
 * @type {number}
 */
export const CVStatusCode_validationTimeUnsupported: CVStatusCode = 57; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary validationTimeUnsupported
 * @constant
 * @type {number}
 */
export const validationTimeUnsupported: CVStatusCode = CVStatusCode_validationTimeUnsupported; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CVStatusCode_unrecognizedCritQueryExt
 * @constant
 * @type {number}
 */
export const CVStatusCode_unrecognizedCritQueryExt: CVStatusCode = 63; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unrecognizedCritQueryExt
 * @constant
 * @type {number}
 */
export const unrecognizedCritQueryExt: CVStatusCode = CVStatusCode_unrecognizedCritQueryExt; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CVStatusCode_unrecognizedCritRequestExt
 * @constant
 * @type {number}
 */
export const CVStatusCode_unrecognizedCritRequestExt: CVStatusCode = 64; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unrecognizedCritRequestExt
 * @constant
 * @type {number}
 */
export const unrecognizedCritRequestExt: CVStatusCode = CVStatusCode_unrecognizedCritRequestExt; /* SHORT_NAMED_ENUMERATED_VALUE */


export const _decode_CVStatusCode = $._decodeEnumerated;


export const _encode_CVStatusCode = $._encodeEnumerated;


/* eslint-enable */
