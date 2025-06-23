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


export enum _enum_for_LDAPResult_resultCode {
  success = 0,
  operationsError = 1,
  protocolError = 2,
  timeLimitExceeded = 3,
  sizeLimitExceeded = 4,
  compareFalse = 5,
  compareTrue = 6,
  authMethodNotSupported = 7,
  strongerAuthRequired = 8,
  referral = 10,
  adminLimitExceeded = 11,
  unavailableCriticalExtension = 12,
  confidentialityRequired = 13,
  saslBindInProgress = 14,
  noSuchAttribute = 16,
  undefinedAttributeType = 17,
  inappropriateMatching = 18,
  constraintViolation = 19,
  attributeOrValueExists = 20,
  invalidAttributeSyntax = 21,
  noSuchObject = 32,
  aliasProblem = 33,
  invalidDNSyntax = 34,
  aliasDereferencingProblem = 36,
  inappropriateAuthentication = 48,
  invalidCredentials = 49,
  insufficientAccessRights = 50,
  busy = 51,
  unavailable = 52,
  unwillingToPerform = 53,
  loopDetect = 54,
  namingViolation = 64,
  objectClassViolation = 65,
  notAllowedOnNonLeaf = 66,
  notAllowedOnRDN = 67,
  entryAlreadyExists = 68,
  objectClassModsProhibited = 69,
  affectsMultipleDSAs = 71,
  other = 80,
}


/**
 * @summary LDAPResult_resultCode
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * LDAPResult-resultCode ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 * @enum {number}
 */
export type LDAPResult_resultCode =
  | _enum_for_LDAPResult_resultCode
  | ENUMERATED;


/**
 * @summary LDAPResult_resultCode_success
 * @constant
 * @type {number}
 */
export const LDAPResult_resultCode_success: LDAPResult_resultCode = 0; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary success
 * @constant
 * @type {number}
 */
export const success: LDAPResult_resultCode = LDAPResult_resultCode_success; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary LDAPResult_resultCode_operationsError
 * @constant
 * @type {number}
 */
export const LDAPResult_resultCode_operationsError: LDAPResult_resultCode = 1; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary operationsError
 * @constant
 * @type {number}
 */
export const operationsError: LDAPResult_resultCode = LDAPResult_resultCode_operationsError; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary LDAPResult_resultCode_protocolError
 * @constant
 * @type {number}
 */
export const LDAPResult_resultCode_protocolError: LDAPResult_resultCode = 2; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary protocolError
 * @constant
 * @type {number}
 */
export const protocolError: LDAPResult_resultCode = LDAPResult_resultCode_protocolError; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary LDAPResult_resultCode_timeLimitExceeded
 * @constant
 * @type {number}
 */
export const LDAPResult_resultCode_timeLimitExceeded: LDAPResult_resultCode = 3; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary timeLimitExceeded
 * @constant
 * @type {number}
 */
export const timeLimitExceeded: LDAPResult_resultCode = LDAPResult_resultCode_timeLimitExceeded; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary LDAPResult_resultCode_sizeLimitExceeded
 * @constant
 * @type {number}
 */
export const LDAPResult_resultCode_sizeLimitExceeded: LDAPResult_resultCode = 4; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary sizeLimitExceeded
 * @constant
 * @type {number}
 */
export const sizeLimitExceeded: LDAPResult_resultCode = LDAPResult_resultCode_sizeLimitExceeded; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary LDAPResult_resultCode_compareFalse
 * @constant
 * @type {number}
 */
export const LDAPResult_resultCode_compareFalse: LDAPResult_resultCode = 5; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary compareFalse
 * @constant
 * @type {number}
 */
export const compareFalse: LDAPResult_resultCode = LDAPResult_resultCode_compareFalse; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary LDAPResult_resultCode_compareTrue
 * @constant
 * @type {number}
 */
export const LDAPResult_resultCode_compareTrue: LDAPResult_resultCode = 6; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary compareTrue
 * @constant
 * @type {number}
 */
export const compareTrue: LDAPResult_resultCode = LDAPResult_resultCode_compareTrue; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary LDAPResult_resultCode_authMethodNotSupported
 * @constant
 * @type {number}
 */
export const LDAPResult_resultCode_authMethodNotSupported: LDAPResult_resultCode = 7; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary authMethodNotSupported
 * @constant
 * @type {number}
 */
export const authMethodNotSupported: LDAPResult_resultCode = LDAPResult_resultCode_authMethodNotSupported; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary LDAPResult_resultCode_strongerAuthRequired
 * @constant
 * @type {number}
 */
export const LDAPResult_resultCode_strongerAuthRequired: LDAPResult_resultCode = 8; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary strongerAuthRequired
 * @constant
 * @type {number}
 */
export const strongerAuthRequired: LDAPResult_resultCode = LDAPResult_resultCode_strongerAuthRequired; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary LDAPResult_resultCode_referral
 * @constant
 * @type {number}
 */
export const LDAPResult_resultCode_referral: LDAPResult_resultCode = 10; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary referral
 * @constant
 * @type {number}
 */
export const referral: LDAPResult_resultCode = LDAPResult_resultCode_referral; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary LDAPResult_resultCode_adminLimitExceeded
 * @constant
 * @type {number}
 */
export const LDAPResult_resultCode_adminLimitExceeded: LDAPResult_resultCode = 11; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary adminLimitExceeded
 * @constant
 * @type {number}
 */
export const adminLimitExceeded: LDAPResult_resultCode = LDAPResult_resultCode_adminLimitExceeded; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary LDAPResult_resultCode_unavailableCriticalExtension
 * @constant
 * @type {number}
 */
export const LDAPResult_resultCode_unavailableCriticalExtension: LDAPResult_resultCode = 12; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary unavailableCriticalExtension
 * @constant
 * @type {number}
 */
export const unavailableCriticalExtension: LDAPResult_resultCode = LDAPResult_resultCode_unavailableCriticalExtension; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary LDAPResult_resultCode_confidentialityRequired
 * @constant
 * @type {number}
 */
export const LDAPResult_resultCode_confidentialityRequired: LDAPResult_resultCode = 13; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary confidentialityRequired
 * @constant
 * @type {number}
 */
export const confidentialityRequired: LDAPResult_resultCode = LDAPResult_resultCode_confidentialityRequired; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary LDAPResult_resultCode_saslBindInProgress
 * @constant
 * @type {number}
 */
export const LDAPResult_resultCode_saslBindInProgress: LDAPResult_resultCode = 14; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary saslBindInProgress
 * @constant
 * @type {number}
 */
export const saslBindInProgress: LDAPResult_resultCode = LDAPResult_resultCode_saslBindInProgress; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary LDAPResult_resultCode_noSuchAttribute
 * @constant
 * @type {number}
 */
export const LDAPResult_resultCode_noSuchAttribute: LDAPResult_resultCode = 16; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary noSuchAttribute
 * @constant
 * @type {number}
 */
export const noSuchAttribute: LDAPResult_resultCode = LDAPResult_resultCode_noSuchAttribute; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary LDAPResult_resultCode_undefinedAttributeType
 * @constant
 * @type {number}
 */
export const LDAPResult_resultCode_undefinedAttributeType: LDAPResult_resultCode = 17; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary undefinedAttributeType
 * @constant
 * @type {number}
 */
export const undefinedAttributeType: LDAPResult_resultCode = LDAPResult_resultCode_undefinedAttributeType; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary LDAPResult_resultCode_inappropriateMatching
 * @constant
 * @type {number}
 */
export const LDAPResult_resultCode_inappropriateMatching: LDAPResult_resultCode = 18; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary inappropriateMatching
 * @constant
 * @type {number}
 */
export const inappropriateMatching: LDAPResult_resultCode = LDAPResult_resultCode_inappropriateMatching; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary LDAPResult_resultCode_constraintViolation
 * @constant
 * @type {number}
 */
export const LDAPResult_resultCode_constraintViolation: LDAPResult_resultCode = 19; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary constraintViolation
 * @constant
 * @type {number}
 */
export const constraintViolation: LDAPResult_resultCode = LDAPResult_resultCode_constraintViolation; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary LDAPResult_resultCode_attributeOrValueExists
 * @constant
 * @type {number}
 */
export const LDAPResult_resultCode_attributeOrValueExists: LDAPResult_resultCode = 20; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary attributeOrValueExists
 * @constant
 * @type {number}
 */
export const attributeOrValueExists: LDAPResult_resultCode = LDAPResult_resultCode_attributeOrValueExists; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary LDAPResult_resultCode_invalidAttributeSyntax
 * @constant
 * @type {number}
 */
export const LDAPResult_resultCode_invalidAttributeSyntax: LDAPResult_resultCode = 21; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary invalidAttributeSyntax
 * @constant
 * @type {number}
 */
export const invalidAttributeSyntax: LDAPResult_resultCode = LDAPResult_resultCode_invalidAttributeSyntax; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary LDAPResult_resultCode_noSuchObject
 * @constant
 * @type {number}
 */
export const LDAPResult_resultCode_noSuchObject: LDAPResult_resultCode = 32; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary noSuchObject
 * @constant
 * @type {number}
 */
export const noSuchObject: LDAPResult_resultCode = LDAPResult_resultCode_noSuchObject; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary LDAPResult_resultCode_aliasProblem
 * @constant
 * @type {number}
 */
export const LDAPResult_resultCode_aliasProblem: LDAPResult_resultCode = 33; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary aliasProblem
 * @constant
 * @type {number}
 */
export const aliasProblem: LDAPResult_resultCode = LDAPResult_resultCode_aliasProblem; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary LDAPResult_resultCode_invalidDNSyntax
 * @constant
 * @type {number}
 */
export const LDAPResult_resultCode_invalidDNSyntax: LDAPResult_resultCode = 34; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary invalidDNSyntax
 * @constant
 * @type {number}
 */
export const invalidDNSyntax: LDAPResult_resultCode = LDAPResult_resultCode_invalidDNSyntax; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary LDAPResult_resultCode_aliasDereferencingProblem
 * @constant
 * @type {number}
 */
export const LDAPResult_resultCode_aliasDereferencingProblem: LDAPResult_resultCode = 36; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary aliasDereferencingProblem
 * @constant
 * @type {number}
 */
export const aliasDereferencingProblem: LDAPResult_resultCode = LDAPResult_resultCode_aliasDereferencingProblem; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary LDAPResult_resultCode_inappropriateAuthentication
 * @constant
 * @type {number}
 */
export const LDAPResult_resultCode_inappropriateAuthentication: LDAPResult_resultCode = 48; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary inappropriateAuthentication
 * @constant
 * @type {number}
 */
export const inappropriateAuthentication: LDAPResult_resultCode = LDAPResult_resultCode_inappropriateAuthentication; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary LDAPResult_resultCode_invalidCredentials
 * @constant
 * @type {number}
 */
export const LDAPResult_resultCode_invalidCredentials: LDAPResult_resultCode = 49; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary invalidCredentials
 * @constant
 * @type {number}
 */
export const invalidCredentials: LDAPResult_resultCode = LDAPResult_resultCode_invalidCredentials; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary LDAPResult_resultCode_insufficientAccessRights
 * @constant
 * @type {number}
 */
export const LDAPResult_resultCode_insufficientAccessRights: LDAPResult_resultCode = 50; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary insufficientAccessRights
 * @constant
 * @type {number}
 */
export const insufficientAccessRights: LDAPResult_resultCode = LDAPResult_resultCode_insufficientAccessRights; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary LDAPResult_resultCode_busy
 * @constant
 * @type {number}
 */
export const LDAPResult_resultCode_busy: LDAPResult_resultCode = 51; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary busy
 * @constant
 * @type {number}
 */
export const busy: LDAPResult_resultCode = LDAPResult_resultCode_busy; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary LDAPResult_resultCode_unavailable
 * @constant
 * @type {number}
 */
export const LDAPResult_resultCode_unavailable: LDAPResult_resultCode = 52; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary unavailable
 * @constant
 * @type {number}
 */
export const unavailable: LDAPResult_resultCode = LDAPResult_resultCode_unavailable; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary LDAPResult_resultCode_unwillingToPerform
 * @constant
 * @type {number}
 */
export const LDAPResult_resultCode_unwillingToPerform: LDAPResult_resultCode = 53; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary unwillingToPerform
 * @constant
 * @type {number}
 */
export const unwillingToPerform: LDAPResult_resultCode = LDAPResult_resultCode_unwillingToPerform; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary LDAPResult_resultCode_loopDetect
 * @constant
 * @type {number}
 */
export const LDAPResult_resultCode_loopDetect: LDAPResult_resultCode = 54; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary loopDetect
 * @constant
 * @type {number}
 */
export const loopDetect: LDAPResult_resultCode = LDAPResult_resultCode_loopDetect; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary LDAPResult_resultCode_namingViolation
 * @constant
 * @type {number}
 */
export const LDAPResult_resultCode_namingViolation: LDAPResult_resultCode = 64; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary namingViolation
 * @constant
 * @type {number}
 */
export const namingViolation: LDAPResult_resultCode = LDAPResult_resultCode_namingViolation; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary LDAPResult_resultCode_objectClassViolation
 * @constant
 * @type {number}
 */
export const LDAPResult_resultCode_objectClassViolation: LDAPResult_resultCode = 65; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary objectClassViolation
 * @constant
 * @type {number}
 */
export const objectClassViolation: LDAPResult_resultCode = LDAPResult_resultCode_objectClassViolation; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary LDAPResult_resultCode_notAllowedOnNonLeaf
 * @constant
 * @type {number}
 */
export const LDAPResult_resultCode_notAllowedOnNonLeaf: LDAPResult_resultCode = 66; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary notAllowedOnNonLeaf
 * @constant
 * @type {number}
 */
export const notAllowedOnNonLeaf: LDAPResult_resultCode = LDAPResult_resultCode_notAllowedOnNonLeaf; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary LDAPResult_resultCode_notAllowedOnRDN
 * @constant
 * @type {number}
 */
export const LDAPResult_resultCode_notAllowedOnRDN: LDAPResult_resultCode = 67; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary notAllowedOnRDN
 * @constant
 * @type {number}
 */
export const notAllowedOnRDN: LDAPResult_resultCode = LDAPResult_resultCode_notAllowedOnRDN; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary LDAPResult_resultCode_entryAlreadyExists
 * @constant
 * @type {number}
 */
export const LDAPResult_resultCode_entryAlreadyExists: LDAPResult_resultCode = 68; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary entryAlreadyExists
 * @constant
 * @type {number}
 */
export const entryAlreadyExists: LDAPResult_resultCode = LDAPResult_resultCode_entryAlreadyExists; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary LDAPResult_resultCode_objectClassModsProhibited
 * @constant
 * @type {number}
 */
export const LDAPResult_resultCode_objectClassModsProhibited: LDAPResult_resultCode = 69; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary objectClassModsProhibited
 * @constant
 * @type {number}
 */
export const objectClassModsProhibited: LDAPResult_resultCode = LDAPResult_resultCode_objectClassModsProhibited; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary LDAPResult_resultCode_affectsMultipleDSAs
 * @constant
 * @type {number}
 */
export const LDAPResult_resultCode_affectsMultipleDSAs: LDAPResult_resultCode = 71; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary affectsMultipleDSAs
 * @constant
 * @type {number}
 */
export const affectsMultipleDSAs: LDAPResult_resultCode = LDAPResult_resultCode_affectsMultipleDSAs; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary LDAPResult_resultCode_other
 * @constant
 * @type {number}
 */
export const LDAPResult_resultCode_other: LDAPResult_resultCode = 80; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary other
 * @constant
 * @type {number}
 */
export const other: LDAPResult_resultCode = LDAPResult_resultCode_other; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary Decodes an ASN.1 element into a(n) LDAPResult_resultCode
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {LDAPResult_resultCode} The decoded data structure.
 */
export function _decode_LDAPResult_resultCode(el: _Element): LDAPResult_resultCode {
  return $._decodeEnumerated(el);
}


/**
 * @summary Encodes a(n) LDAPResult_resultCode into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The LDAPResult_resultCode, encoded as an ASN.1 Element.
 */
export function _encode_LDAPResult_resultCode(
  value: LDAPResult_resultCode,
  elGetter: $.ASN1Encoder<LDAPResult_resultCode>
): _Element {
  return $._encodeEnumerated(value, elGetter);
}


/* eslint-enable */
