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
} from 'asn1-ts';
import * as $ from 'asn1-ts/dist/functional.mjs';

/* START_OF_SYMBOL_DEFINITION _enum_for_CVStatusCode */
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
/* END_OF_SYMBOL_DEFINITION _enum_for_CVStatusCode */

/* START_OF_SYMBOL_DEFINITION CVStatusCode */
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
 * ```@enum {number}
 */
export type CVStatusCode = _enum_for_CVStatusCode | ENUMERATED;
/* END_OF_SYMBOL_DEFINITION CVStatusCode */

/* START_OF_SYMBOL_DEFINITION CVStatusCode_okay */
/**
 * @summary CVStatusCode_okay
 * @constant
 * @type {number}
 */
export const CVStatusCode_okay: CVStatusCode = 0; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION CVStatusCode_okay */

/* START_OF_SYMBOL_DEFINITION okay */
/**
 * @summary okay
 * @constant
 * @type {number}
 */
export const okay: CVStatusCode = CVStatusCode_okay; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION okay */

/* START_OF_SYMBOL_DEFINITION CVStatusCode_skipUnrecognizedItems */
/**
 * @summary CVStatusCode_skipUnrecognizedItems
 * @constant
 * @type {number}
 */
export const CVStatusCode_skipUnrecognizedItems: CVStatusCode = 1; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION CVStatusCode_skipUnrecognizedItems */

/* START_OF_SYMBOL_DEFINITION skipUnrecognizedItems */
/**
 * @summary skipUnrecognizedItems
 * @constant
 * @type {number}
 */
export const skipUnrecognizedItems: CVStatusCode = CVStatusCode_skipUnrecognizedItems; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION skipUnrecognizedItems */

/* START_OF_SYMBOL_DEFINITION CVStatusCode_tooBusy */
/**
 * @summary CVStatusCode_tooBusy
 * @constant
 * @type {number}
 */
export const CVStatusCode_tooBusy: CVStatusCode = 10; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION CVStatusCode_tooBusy */

/* START_OF_SYMBOL_DEFINITION tooBusy */
/**
 * @summary tooBusy
 * @constant
 * @type {number}
 */
export const tooBusy: CVStatusCode = CVStatusCode_tooBusy; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION tooBusy */

/* START_OF_SYMBOL_DEFINITION CVStatusCode_invalidRequest */
/**
 * @summary CVStatusCode_invalidRequest
 * @constant
 * @type {number}
 */
export const CVStatusCode_invalidRequest: CVStatusCode = 11; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION CVStatusCode_invalidRequest */

/* START_OF_SYMBOL_DEFINITION invalidRequest */
/**
 * @summary invalidRequest
 * @constant
 * @type {number}
 */
export const invalidRequest: CVStatusCode = CVStatusCode_invalidRequest; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION invalidRequest */

/* START_OF_SYMBOL_DEFINITION CVStatusCode_internalError */
/**
 * @summary CVStatusCode_internalError
 * @constant
 * @type {number}
 */
export const CVStatusCode_internalError: CVStatusCode = 12; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION CVStatusCode_internalError */

/* START_OF_SYMBOL_DEFINITION internalError */
/**
 * @summary internalError
 * @constant
 * @type {number}
 */
export const internalError: CVStatusCode = CVStatusCode_internalError; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION internalError */

/* START_OF_SYMBOL_DEFINITION CVStatusCode_badStructure */
/**
 * @summary CVStatusCode_badStructure
 * @constant
 * @type {number}
 */
export const CVStatusCode_badStructure: CVStatusCode = 20; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION CVStatusCode_badStructure */

/* START_OF_SYMBOL_DEFINITION badStructure */
/**
 * @summary badStructure
 * @constant
 * @type {number}
 */
export const badStructure: CVStatusCode = CVStatusCode_badStructure; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION badStructure */

/* START_OF_SYMBOL_DEFINITION CVStatusCode_unsupportedVersion */
/**
 * @summary CVStatusCode_unsupportedVersion
 * @constant
 * @type {number}
 */
export const CVStatusCode_unsupportedVersion: CVStatusCode = 21; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION CVStatusCode_unsupportedVersion */

/* START_OF_SYMBOL_DEFINITION unsupportedVersion */
/**
 * @summary unsupportedVersion
 * @constant
 * @type {number}
 */
export const unsupportedVersion: CVStatusCode = CVStatusCode_unsupportedVersion; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION unsupportedVersion */

/* START_OF_SYMBOL_DEFINITION CVStatusCode_abortUnrecognizedItems */
/**
 * @summary CVStatusCode_abortUnrecognizedItems
 * @constant
 * @type {number}
 */
export const CVStatusCode_abortUnrecognizedItems: CVStatusCode = 22; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION CVStatusCode_abortUnrecognizedItems */

/* START_OF_SYMBOL_DEFINITION abortUnrecognizedItems */
/**
 * @summary abortUnrecognizedItems
 * @constant
 * @type {number}
 */
export const abortUnrecognizedItems: CVStatusCode = CVStatusCode_abortUnrecognizedItems; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION abortUnrecognizedItems */

/* START_OF_SYMBOL_DEFINITION CVStatusCode_unrecognizedSigKey */
/**
 * @summary CVStatusCode_unrecognizedSigKey
 * @constant
 * @type {number}
 */
export const CVStatusCode_unrecognizedSigKey: CVStatusCode = 23; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION CVStatusCode_unrecognizedSigKey */

/* START_OF_SYMBOL_DEFINITION unrecognizedSigKey */
/**
 * @summary unrecognizedSigKey
 * @constant
 * @type {number}
 */
export const unrecognizedSigKey: CVStatusCode = CVStatusCode_unrecognizedSigKey; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION unrecognizedSigKey */

/* START_OF_SYMBOL_DEFINITION CVStatusCode_badSignatureOrMAC */
/**
 * @summary CVStatusCode_badSignatureOrMAC
 * @constant
 * @type {number}
 */
export const CVStatusCode_badSignatureOrMAC: CVStatusCode = 24; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION CVStatusCode_badSignatureOrMAC */

/* START_OF_SYMBOL_DEFINITION badSignatureOrMAC */
/**
 * @summary badSignatureOrMAC
 * @constant
 * @type {number}
 */
export const badSignatureOrMAC: CVStatusCode = CVStatusCode_badSignatureOrMAC; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION badSignatureOrMAC */

/* START_OF_SYMBOL_DEFINITION CVStatusCode_unableToDecode */
/**
 * @summary CVStatusCode_unableToDecode
 * @constant
 * @type {number}
 */
export const CVStatusCode_unableToDecode: CVStatusCode = 25; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION CVStatusCode_unableToDecode */

/* START_OF_SYMBOL_DEFINITION unableToDecode */
/**
 * @summary unableToDecode
 * @constant
 * @type {number}
 */
export const unableToDecode: CVStatusCode = CVStatusCode_unableToDecode; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION unableToDecode */

/* START_OF_SYMBOL_DEFINITION CVStatusCode_notAuthorized */
/**
 * @summary CVStatusCode_notAuthorized
 * @constant
 * @type {number}
 */
export const CVStatusCode_notAuthorized: CVStatusCode = 26; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION CVStatusCode_notAuthorized */

/* START_OF_SYMBOL_DEFINITION notAuthorized */
/**
 * @summary notAuthorized
 * @constant
 * @type {number}
 */
export const notAuthorized: CVStatusCode = CVStatusCode_notAuthorized; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION notAuthorized */

/* START_OF_SYMBOL_DEFINITION CVStatusCode_unsupportedChecks */
/**
 * @summary CVStatusCode_unsupportedChecks
 * @constant
 * @type {number}
 */
export const CVStatusCode_unsupportedChecks: CVStatusCode = 27; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION CVStatusCode_unsupportedChecks */

/* START_OF_SYMBOL_DEFINITION unsupportedChecks */
/**
 * @summary unsupportedChecks
 * @constant
 * @type {number}
 */
export const unsupportedChecks: CVStatusCode = CVStatusCode_unsupportedChecks; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION unsupportedChecks */

/* START_OF_SYMBOL_DEFINITION CVStatusCode_unsupportedWantBacks */
/**
 * @summary CVStatusCode_unsupportedWantBacks
 * @constant
 * @type {number}
 */
export const CVStatusCode_unsupportedWantBacks: CVStatusCode = 28; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION CVStatusCode_unsupportedWantBacks */

/* START_OF_SYMBOL_DEFINITION unsupportedWantBacks */
/**
 * @summary unsupportedWantBacks
 * @constant
 * @type {number}
 */
export const unsupportedWantBacks: CVStatusCode = CVStatusCode_unsupportedWantBacks; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION unsupportedWantBacks */

/* START_OF_SYMBOL_DEFINITION CVStatusCode_unsupportedSignatureOrMAC */
/**
 * @summary CVStatusCode_unsupportedSignatureOrMAC
 * @constant
 * @type {number}
 */
export const CVStatusCode_unsupportedSignatureOrMAC: CVStatusCode = 29; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION CVStatusCode_unsupportedSignatureOrMAC */

/* START_OF_SYMBOL_DEFINITION unsupportedSignatureOrMAC */
/**
 * @summary unsupportedSignatureOrMAC
 * @constant
 * @type {number}
 */
export const unsupportedSignatureOrMAC: CVStatusCode = CVStatusCode_unsupportedSignatureOrMAC; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION unsupportedSignatureOrMAC */

/* START_OF_SYMBOL_DEFINITION CVStatusCode_invalidSignatureOrMAC */
/**
 * @summary CVStatusCode_invalidSignatureOrMAC
 * @constant
 * @type {number}
 */
export const CVStatusCode_invalidSignatureOrMAC: CVStatusCode = 30; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION CVStatusCode_invalidSignatureOrMAC */

/* START_OF_SYMBOL_DEFINITION invalidSignatureOrMAC */
/**
 * @summary invalidSignatureOrMAC
 * @constant
 * @type {number}
 */
export const invalidSignatureOrMAC: CVStatusCode = CVStatusCode_invalidSignatureOrMAC; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION invalidSignatureOrMAC */

/* START_OF_SYMBOL_DEFINITION CVStatusCode_protectedResponseUnsupported */
/**
 * @summary CVStatusCode_protectedResponseUnsupported
 * @constant
 * @type {number}
 */
export const CVStatusCode_protectedResponseUnsupported: CVStatusCode = 31; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION CVStatusCode_protectedResponseUnsupported */

/* START_OF_SYMBOL_DEFINITION protectedResponseUnsupported */
/**
 * @summary protectedResponseUnsupported
 * @constant
 * @type {number}
 */
export const protectedResponseUnsupported: CVStatusCode = CVStatusCode_protectedResponseUnsupported; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION protectedResponseUnsupported */

/* START_OF_SYMBOL_DEFINITION CVStatusCode_unrecognizedResponderName */
/**
 * @summary CVStatusCode_unrecognizedResponderName
 * @constant
 * @type {number}
 */
export const CVStatusCode_unrecognizedResponderName: CVStatusCode = 32; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION CVStatusCode_unrecognizedResponderName */

/* START_OF_SYMBOL_DEFINITION unrecognizedResponderName */
/**
 * @summary unrecognizedResponderName
 * @constant
 * @type {number}
 */
export const unrecognizedResponderName: CVStatusCode = CVStatusCode_unrecognizedResponderName; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION unrecognizedResponderName */

/* START_OF_SYMBOL_DEFINITION CVStatusCode_relayingLoop */
/**
 * @summary CVStatusCode_relayingLoop
 * @constant
 * @type {number}
 */
export const CVStatusCode_relayingLoop: CVStatusCode = 40; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION CVStatusCode_relayingLoop */

/* START_OF_SYMBOL_DEFINITION relayingLoop */
/**
 * @summary relayingLoop
 * @constant
 * @type {number}
 */
export const relayingLoop: CVStatusCode = CVStatusCode_relayingLoop; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION relayingLoop */

/* START_OF_SYMBOL_DEFINITION CVStatusCode_unrecognizedValPol */
/**
 * @summary CVStatusCode_unrecognizedValPol
 * @constant
 * @type {number}
 */
export const CVStatusCode_unrecognizedValPol: CVStatusCode = 50; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION CVStatusCode_unrecognizedValPol */

/* START_OF_SYMBOL_DEFINITION unrecognizedValPol */
/**
 * @summary unrecognizedValPol
 * @constant
 * @type {number}
 */
export const unrecognizedValPol: CVStatusCode = CVStatusCode_unrecognizedValPol; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION unrecognizedValPol */

/* START_OF_SYMBOL_DEFINITION CVStatusCode_unrecognizedValAlg */
/**
 * @summary CVStatusCode_unrecognizedValAlg
 * @constant
 * @type {number}
 */
export const CVStatusCode_unrecognizedValAlg: CVStatusCode = 51; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION CVStatusCode_unrecognizedValAlg */

/* START_OF_SYMBOL_DEFINITION unrecognizedValAlg */
/**
 * @summary unrecognizedValAlg
 * @constant
 * @type {number}
 */
export const unrecognizedValAlg: CVStatusCode = CVStatusCode_unrecognizedValAlg; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION unrecognizedValAlg */

/* START_OF_SYMBOL_DEFINITION CVStatusCode_fullRequestInResponseUnsupported */
/**
 * @summary CVStatusCode_fullRequestInResponseUnsupported
 * @constant
 * @type {number}
 */
export const CVStatusCode_fullRequestInResponseUnsupported: CVStatusCode = 52; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION CVStatusCode_fullRequestInResponseUnsupported */

/* START_OF_SYMBOL_DEFINITION fullRequestInResponseUnsupported */
/**
 * @summary fullRequestInResponseUnsupported
 * @constant
 * @type {number}
 */
export const fullRequestInResponseUnsupported: CVStatusCode = CVStatusCode_fullRequestInResponseUnsupported; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION fullRequestInResponseUnsupported */

/* START_OF_SYMBOL_DEFINITION CVStatusCode_fullPolResponseUnsupported */
/**
 * @summary CVStatusCode_fullPolResponseUnsupported
 * @constant
 * @type {number}
 */
export const CVStatusCode_fullPolResponseUnsupported: CVStatusCode = 53; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION CVStatusCode_fullPolResponseUnsupported */

/* START_OF_SYMBOL_DEFINITION fullPolResponseUnsupported */
/**
 * @summary fullPolResponseUnsupported
 * @constant
 * @type {number}
 */
export const fullPolResponseUnsupported: CVStatusCode = CVStatusCode_fullPolResponseUnsupported; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION fullPolResponseUnsupported */

/* START_OF_SYMBOL_DEFINITION CVStatusCode_inhibitPolicyMappingUnsupported */
/**
 * @summary CVStatusCode_inhibitPolicyMappingUnsupported
 * @constant
 * @type {number}
 */
export const CVStatusCode_inhibitPolicyMappingUnsupported: CVStatusCode = 54; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION CVStatusCode_inhibitPolicyMappingUnsupported */

/* START_OF_SYMBOL_DEFINITION inhibitPolicyMappingUnsupported */
/**
 * @summary inhibitPolicyMappingUnsupported
 * @constant
 * @type {number}
 */
export const inhibitPolicyMappingUnsupported: CVStatusCode = CVStatusCode_inhibitPolicyMappingUnsupported; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION inhibitPolicyMappingUnsupported */

/* START_OF_SYMBOL_DEFINITION CVStatusCode_requireExplicitPolicyUnsupported */
/**
 * @summary CVStatusCode_requireExplicitPolicyUnsupported
 * @constant
 * @type {number}
 */
export const CVStatusCode_requireExplicitPolicyUnsupported: CVStatusCode = 55; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION CVStatusCode_requireExplicitPolicyUnsupported */

/* START_OF_SYMBOL_DEFINITION requireExplicitPolicyUnsupported */
/**
 * @summary requireExplicitPolicyUnsupported
 * @constant
 * @type {number}
 */
export const requireExplicitPolicyUnsupported: CVStatusCode = CVStatusCode_requireExplicitPolicyUnsupported; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION requireExplicitPolicyUnsupported */

/* START_OF_SYMBOL_DEFINITION CVStatusCode_inhibitAnyPolicyUnsupported */
/**
 * @summary CVStatusCode_inhibitAnyPolicyUnsupported
 * @constant
 * @type {number}
 */
export const CVStatusCode_inhibitAnyPolicyUnsupported: CVStatusCode = 56; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION CVStatusCode_inhibitAnyPolicyUnsupported */

/* START_OF_SYMBOL_DEFINITION inhibitAnyPolicyUnsupported */
/**
 * @summary inhibitAnyPolicyUnsupported
 * @constant
 * @type {number}
 */
export const inhibitAnyPolicyUnsupported: CVStatusCode = CVStatusCode_inhibitAnyPolicyUnsupported; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION inhibitAnyPolicyUnsupported */

/* START_OF_SYMBOL_DEFINITION CVStatusCode_validationTimeUnsupported */
/**
 * @summary CVStatusCode_validationTimeUnsupported
 * @constant
 * @type {number}
 */
export const CVStatusCode_validationTimeUnsupported: CVStatusCode = 57; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION CVStatusCode_validationTimeUnsupported */

/* START_OF_SYMBOL_DEFINITION validationTimeUnsupported */
/**
 * @summary validationTimeUnsupported
 * @constant
 * @type {number}
 */
export const validationTimeUnsupported: CVStatusCode = CVStatusCode_validationTimeUnsupported; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION validationTimeUnsupported */

/* START_OF_SYMBOL_DEFINITION CVStatusCode_unrecognizedCritQueryExt */
/**
 * @summary CVStatusCode_unrecognizedCritQueryExt
 * @constant
 * @type {number}
 */
export const CVStatusCode_unrecognizedCritQueryExt: CVStatusCode = 63; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION CVStatusCode_unrecognizedCritQueryExt */

/* START_OF_SYMBOL_DEFINITION unrecognizedCritQueryExt */
/**
 * @summary unrecognizedCritQueryExt
 * @constant
 * @type {number}
 */
export const unrecognizedCritQueryExt: CVStatusCode = CVStatusCode_unrecognizedCritQueryExt; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION unrecognizedCritQueryExt */

/* START_OF_SYMBOL_DEFINITION CVStatusCode_unrecognizedCritRequestExt */
/**
 * @summary CVStatusCode_unrecognizedCritRequestExt
 * @constant
 * @type {number}
 */
export const CVStatusCode_unrecognizedCritRequestExt: CVStatusCode = 64; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION CVStatusCode_unrecognizedCritRequestExt */

/* START_OF_SYMBOL_DEFINITION unrecognizedCritRequestExt */
/**
 * @summary unrecognizedCritRequestExt
 * @constant
 * @type {number}
 */
export const unrecognizedCritRequestExt: CVStatusCode = CVStatusCode_unrecognizedCritRequestExt; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION unrecognizedCritRequestExt */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_CVStatusCode */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_CVStatusCode */

/* START_OF_SYMBOL_DEFINITION _decode_CVStatusCode */
export const _decode_CVStatusCode = $._decodeEnumerated;
/* END_OF_SYMBOL_DEFINITION _decode_CVStatusCode */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_CVStatusCode */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_CVStatusCode */

/* START_OF_SYMBOL_DEFINITION _encode_CVStatusCode */
export const _encode_CVStatusCode = $._encodeEnumerated;

/* END_OF_SYMBOL_DEFINITION _encode_CVStatusCode */

/* eslint-enable */
