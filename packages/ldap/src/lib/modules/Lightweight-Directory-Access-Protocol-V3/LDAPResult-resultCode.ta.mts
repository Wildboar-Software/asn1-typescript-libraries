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

export const _enum_for_LDAPResult_resultCode = {
  success: 0,
  operationsError: 1,
  protocolError: 2,
  timeLimitExceeded: 3,
  sizeLimitExceeded: 4,
  compareFalse: 5,
  compareTrue: 6,
  authMethodNotSupported: 7,
  strongerAuthRequired: 8,
  referral: 10,
  adminLimitExceeded: 11,
  unavailableCriticalExtension: 12,
  confidentialityRequired: 13,
  saslBindInProgress: 14,
  noSuchAttribute: 16,
  undefinedAttributeType: 17,
  inappropriateMatching: 18,
  constraintViolation: 19,
  attributeOrValueExists: 20,
  invalidAttributeSyntax: 21,
  noSuchObject: 32,
  aliasProblem: 33,
  invalidDNSyntax: 34,
  aliasDereferencingProblem: 36,
  inappropriateAuthentication: 48,
  invalidCredentials: 49,
  insufficientAccessRights: 50,
  busy: 51,
  unavailable: 52,
  unwillingToPerform: 53,
  loopDetect: 54,
  namingViolation: 64,
  objectClassViolation: 65,
  notAllowedOnNonLeaf: 66,
  notAllowedOnRDN: 67,
  entryAlreadyExists: 68,
  objectClassModsProhibited: 69,
  affectsMultipleDSAs: 71,
  other: 80,
} as const;

export type _enum_for_LDAPResult_resultCode = (typeof _enum_for_LDAPResult_resultCode)[keyof typeof _enum_for_LDAPResult_resultCode];

/**
 * @summary LDAPResult_resultCode
 * @description
 *
 * Extensible ENUMERATED. Unrecognized values are an unknown error.
 * Non-error: `success`(0), `compareFalse`(5), `compareTrue`(6),
 * `referral`(10), `saslBindInProgress`(14). Servers may substitute
 * codes to hide data. Unused/reserved: 9, 22-31, 35 (isLeaf), 37-47,
 * 55-63, 70 (CLDAP), 72-79.
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
 * @description
 *
 * Successful completion. Not used with Compare -- see
 * compareFalse/compareTrue.
 *
 * @constant
 * @type {number}
 */
export const LDAPResult_resultCode_success: 0 = _enum_for_LDAPResult_resultCode.success; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary success
 * @description
 *
 * Successful completion. Not used with Compare -- see
 * compareFalse/compareTrue.
 *
 * @constant
 * @type {number}
 */
export const success: 0 = LDAPResult_resultCode_success; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary LDAPResult_resultCode_operationsError
 * @description
 *
 * Operation not properly sequenced (e.g. StartTLS while other ops
 * outstanding, or TLS already installed).
 *
 * @constant
 * @type {number}
 */
export const LDAPResult_resultCode_operationsError: 1 = _enum_for_LDAPResult_resultCode.operationsError; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary operationsError
 * @description
 *
 * Operation not properly sequenced (e.g. StartTLS while other ops
 * outstanding, or TLS already installed).
 *
 * @constant
 * @type {number}
 */
export const operationsError: 1 = LDAPResult_resultCode_operationsError; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary LDAPResult_resultCode_protocolError
 * @description
 *
 * Not well-formed. Also: Bind with unsupported version; unrecognized
 * Extended requestName; invalid/unspecified control combination or order the
 * server cannot ignore.
 *
 * @constant
 * @type {number}
 */
export const LDAPResult_resultCode_protocolError: 2 = _enum_for_LDAPResult_resultCode.protocolError; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary protocolError
 * @description
 *
 * Not well-formed. Also: Bind with unsupported version; unrecognized
 * Extended requestName; invalid/unspecified control combination or order the
 * server cannot ignore.
 *
 * @constant
 * @type {number}
 */
export const protocolError: 2 = LDAPResult_resultCode_protocolError; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary LDAPResult_resultCode_timeLimitExceeded
 * @description
 *
 * Client timeLimit hit before completion. Search may still have returned
 * some entries.
 *
 * @constant
 * @type {number}
 */
export const LDAPResult_resultCode_timeLimitExceeded: 3 = _enum_for_LDAPResult_resultCode.timeLimitExceeded; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary timeLimitExceeded
 * @description
 *
 * Client timeLimit hit before completion. Search may still have returned
 * some entries.
 *
 * @constant
 * @type {number}
 */
export const timeLimitExceeded: 3 = LDAPResult_resultCode_timeLimitExceeded; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary LDAPResult_resultCode_sizeLimitExceeded
 * @description
 *
 * Client sizeLimit hit before completion. Search may still have returned
 * some entries.
 *
 * @constant
 * @type {number}
 */
export const LDAPResult_resultCode_sizeLimitExceeded: 4 = _enum_for_LDAPResult_resultCode.sizeLimitExceeded; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary sizeLimitExceeded
 * @description
 *
 * Client sizeLimit hit before completion. Search may still have returned
 * some entries.
 *
 * @constant
 * @type {number}
 */
export const sizeLimitExceeded: 4 = LDAPResult_resultCode_sizeLimitExceeded; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary LDAPResult_resultCode_compareFalse
 * @description
 *
 * Compare succeeded and the assertion was FALSE or Undefined. Non-error /
 * successful.
 *
 * @constant
 * @type {number}
 */
export const LDAPResult_resultCode_compareFalse: 5 = _enum_for_LDAPResult_resultCode.compareFalse; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary compareFalse
 * @description
 *
 * Compare succeeded and the assertion was FALSE or Undefined. Non-error /
 * successful.
 *
 * @constant
 * @type {number}
 */
export const compareFalse: 5 = LDAPResult_resultCode_compareFalse; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary LDAPResult_resultCode_compareTrue
 * @description
 *
 * Compare succeeded and the assertion was TRUE. Non-error / successful.
 *
 * @constant
 * @type {number}
 */
export const LDAPResult_resultCode_compareTrue: 6 = _enum_for_LDAPResult_resultCode.compareTrue; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary compareTrue
 * @description
 *
 * Compare succeeded and the assertion was TRUE. Non-error / successful.
 *
 * @constant
 * @type {number}
 */
export const compareTrue: 6 = LDAPResult_resultCode_compareTrue; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary LDAPResult_resultCode_authMethodNotSupported
 * @description
 *
 * Authentication method/mechanism not supported. Also returned for empty
 * SASL mechanism (abort).
 *
 * @constant
 * @type {number}
 */
export const LDAPResult_resultCode_authMethodNotSupported: 7 = _enum_for_LDAPResult_resultCode.authMethodNotSupported; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary authMethodNotSupported
 * @description
 *
 * Authentication method/mechanism not supported. Also returned for empty
 * SASL mechanism (abort).
 *
 * @constant
 * @type {number}
 */
export const authMethodNotSupported: 7 = LDAPResult_resultCode_authMethodNotSupported; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary LDAPResult_resultCode_strongerAuthRequired
 * @description
 *
 * Stronger authentication required. On Notice of Disconnection: security
 * association failed or was compromised.
 *
 * @constant
 * @type {number}
 */
export const LDAPResult_resultCode_strongerAuthRequired: 8 = _enum_for_LDAPResult_resultCode.strongerAuthRequired; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary strongerAuthRequired
 * @description
 *
 * Stronger authentication required. On Notice of Disconnection: security
 * association failed or was compromised.
 *
 * @constant
 * @type {number}
 */
export const strongerAuthRequired: 8 = LDAPResult_resultCode_strongerAuthRequired; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary LDAPResult_resultCode_referral
 * @description
 *
 * Non-error: chase the `referral` field to complete. Present iff this code
 * is used.
 *
 * @constant
 * @type {number}
 */
export const LDAPResult_resultCode_referral: 10 = _enum_for_LDAPResult_resultCode.referral; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary referral
 * @description
 *
 * Non-error: chase the `referral` field to complete. Present iff this code
 * is used.
 *
 * @constant
 * @type {number}
 */
export const referral: 10 = LDAPResult_resultCode_referral; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary LDAPResult_resultCode_adminLimitExceeded
 * @description
 *
 * An administrative limit was exceeded.
 *
 * @constant
 * @type {number}
 */
export const LDAPResult_resultCode_adminLimitExceeded: 11 = _enum_for_LDAPResult_resultCode.adminLimitExceeded; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary adminLimitExceeded
 * @description
 *
 * An administrative limit was exceeded.
 *
 * @constant
 * @type {number}
 */
export const adminLimitExceeded: 11 = LDAPResult_resultCode_adminLimitExceeded; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary LDAPResult_resultCode_unavailableCriticalExtension
 * @description
 *
 * A critical control was unrecognized, inappropriate, or refused.
 *
 * @constant
 * @type {number}
 */
export const LDAPResult_resultCode_unavailableCriticalExtension: 12 = _enum_for_LDAPResult_resultCode.unavailableCriticalExtension; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unavailableCriticalExtension
 * @description
 *
 * A critical control was unrecognized, inappropriate, or refused.
 *
 * @constant
 * @type {number}
 */
export const unavailableCriticalExtension: 12 = LDAPResult_resultCode_unavailableCriticalExtension; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary LDAPResult_resultCode_confidentialityRequired
 * @description
 *
 * Data confidentiality protections are required.
 *
 * @constant
 * @type {number}
 */
export const LDAPResult_resultCode_confidentialityRequired: 13 = _enum_for_LDAPResult_resultCode.confidentialityRequired; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary confidentialityRequired
 * @description
 *
 * Data confidentiality protections are required.
 *
 * @constant
 * @type {number}
 */
export const confidentialityRequired: 13 = LDAPResult_resultCode_confidentialityRequired; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary LDAPResult_resultCode_saslBindInProgress
 * @description
 *
 * Non-error: send another Bind with the same SASL mechanism to continue.
 *
 * @constant
 * @type {number}
 */
export const LDAPResult_resultCode_saslBindInProgress: 14 = _enum_for_LDAPResult_resultCode.saslBindInProgress; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary saslBindInProgress
 * @description
 *
 * Non-error: send another Bind with the same SASL mechanism to continue.
 *
 * @constant
 * @type {number}
 */
export const saslBindInProgress: 14 = LDAPResult_resultCode_saslBindInProgress; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary LDAPResult_resultCode_noSuchAttribute
 * @description
 *
 * Named entry does not contain the specified attribute or attribute value.
 *
 * @constant
 * @type {number}
 */
export const LDAPResult_resultCode_noSuchAttribute: 16 = _enum_for_LDAPResult_resultCode.noSuchAttribute; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary noSuchAttribute
 * @description
 *
 * Named entry does not contain the specified attribute or attribute value.
 *
 * @constant
 * @type {number}
 */
export const noSuchAttribute: 16 = LDAPResult_resultCode_noSuchAttribute; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary LDAPResult_resultCode_undefinedAttributeType
 * @description
 *
 * A request field contains an unrecognized attribute description.
 *
 * @constant
 * @type {number}
 */
export const LDAPResult_resultCode_undefinedAttributeType: 17 = _enum_for_LDAPResult_resultCode.undefinedAttributeType; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary undefinedAttributeType
 * @description
 *
 * A request field contains an unrecognized attribute description.
 *
 * @constant
 * @type {number}
 */
export const undefinedAttributeType: 17 = LDAPResult_resultCode_undefinedAttributeType; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary LDAPResult_resultCode_inappropriateMatching
 * @description
 *
 * Matching rule used (e.g. in an assertion) is not defined for that
 * attribute type.
 *
 * @constant
 * @type {number}
 */
export const LDAPResult_resultCode_inappropriateMatching: 18 = _enum_for_LDAPResult_resultCode.inappropriateMatching; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary inappropriateMatching
 * @description
 *
 * Matching rule used (e.g. in an assertion) is not defined for that
 * attribute type.
 *
 * @constant
 * @type {number}
 */
export const inappropriateMatching: 18 = LDAPResult_resultCode_inappropriateMatching; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary LDAPResult_resultCode_constraintViolation
 * @description
 *
 * Value violates data-model constraints (e.g. multiple values on a
 * SINGLE-VALUE attribute).
 *
 * @constant
 * @type {number}
 */
export const LDAPResult_resultCode_constraintViolation: 19 = _enum_for_LDAPResult_resultCode.constraintViolation; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary constraintViolation
 * @description
 *
 * Value violates data-model constraints (e.g. multiple values on a
 * SINGLE-VALUE attribute).
 *
 * @constant
 * @type {number}
 */
export const constraintViolation: 19 = LDAPResult_resultCode_constraintViolation; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary LDAPResult_resultCode_attributeOrValueExists
 * @description
 *
 * Attribute or value to be added already exists.
 *
 * @constant
 * @type {number}
 */
export const LDAPResult_resultCode_attributeOrValueExists: 20 = _enum_for_LDAPResult_resultCode.attributeOrValueExists; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary attributeOrValueExists
 * @description
 *
 * Attribute or value to be added already exists.
 *
 * @constant
 * @type {number}
 */
export const attributeOrValueExists: 20 = LDAPResult_resultCode_attributeOrValueExists; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary LDAPResult_resultCode_invalidAttributeSyntax
 * @description
 *
 * Purported attribute value does not conform to the attribute's syntax (RFC
 * 4517).
 *
 * @constant
 * @type {number}
 */
export const LDAPResult_resultCode_invalidAttributeSyntax: 21 = _enum_for_LDAPResult_resultCode.invalidAttributeSyntax; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary invalidAttributeSyntax
 * @description
 *
 * Purported attribute value does not conform to the attribute's syntax (RFC
 * 4517).
 *
 * @constant
 * @type {number}
 */
export const invalidAttributeSyntax: 21 = LDAPResult_resultCode_invalidAttributeSyntax; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary LDAPResult_resultCode_noSuchObject
 * @description
 *
 * Object does not exist in the DIT. Often used as a substitute for
 * insufficientAccessRights. `matchedDN` typically set.
 *
 * @constant
 * @type {number}
 */
export const LDAPResult_resultCode_noSuchObject: 32 = _enum_for_LDAPResult_resultCode.noSuchObject; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary noSuchObject
 * @description
 *
 * Object does not exist in the DIT. Often used as a substitute for
 * insufficientAccessRights. `matchedDN` typically set.
 *
 * @constant
 * @type {number}
 */
export const noSuchObject: 32 = LDAPResult_resultCode_noSuchObject; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary LDAPResult_resultCode_aliasProblem
 * @description
 *
 * Alias problem (e.g. deref names no object). `matchedDN` typically set.
 *
 * @constant
 * @type {number}
 */
export const LDAPResult_resultCode_aliasProblem: 33 = _enum_for_LDAPResult_resultCode.aliasProblem; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary aliasProblem
 * @description
 *
 * Alias problem (e.g. deref names no object). `matchedDN` typically set.
 *
 * @constant
 * @type {number}
 */
export const aliasProblem: 33 = LDAPResult_resultCode_aliasProblem; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary LDAPResult_resultCode_invalidDNSyntax
 * @description
 *
 * LDAPDN or RelativeLDAPDN does not conform, or contains values that fail
 * the attribute syntax. `matchedDN` typically set.
 *
 * @constant
 * @type {number}
 */
export const LDAPResult_resultCode_invalidDNSyntax: 34 = _enum_for_LDAPResult_resultCode.invalidDNSyntax; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary invalidDNSyntax
 * @description
 *
 * LDAPDN or RelativeLDAPDN does not conform, or contains values that fail
 * the attribute syntax. `matchedDN` typically set.
 *
 * @constant
 * @type {number}
 */
export const invalidDNSyntax: 34 = LDAPResult_resultCode_invalidDNSyntax; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary LDAPResult_resultCode_aliasDereferencingProblem
 * @description
 *
 * Problem dereferencing an alias (not allowed, or access denied).
 * `matchedDN` typically set.
 *
 * @constant
 * @type {number}
 */
export const LDAPResult_resultCode_aliasDereferencingProblem: 36 = _enum_for_LDAPResult_resultCode.aliasDereferencingProblem; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary aliasDereferencingProblem
 * @description
 *
 * Problem dereferencing an alias (not allowed, or access denied).
 * `matchedDN` typically set.
 *
 * @constant
 * @type {number}
 */
export const aliasDereferencingProblem: 36 = LDAPResult_resultCode_aliasDereferencingProblem; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary LDAPResult_resultCode_inappropriateAuthentication
 * @description
 *
 * Anonymous or credential-less bind rejected; credentials required.
 *
 * @constant
 * @type {number}
 */
export const LDAPResult_resultCode_inappropriateAuthentication: 48 = _enum_for_LDAPResult_resultCode.inappropriateAuthentication; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary inappropriateAuthentication
 * @description
 *
 * Anonymous or credential-less bind rejected; credentials required.
 *
 * @constant
 * @type {number}
 */
export const inappropriateAuthentication: 48 = LDAPResult_resultCode_inappropriateAuthentication; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary LDAPResult_resultCode_invalidCredentials
 * @description
 *
 * Provided credentials are invalid. May substitute for
 * insufficientAccessRights.
 *
 * @constant
 * @type {number}
 */
export const LDAPResult_resultCode_invalidCredentials: 49 = _enum_for_LDAPResult_resultCode.invalidCredentials; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary invalidCredentials
 * @description
 *
 * Provided credentials are invalid. May substitute for
 * insufficientAccessRights.
 *
 * @constant
 * @type {number}
 */
export const invalidCredentials: 49 = LDAPResult_resultCode_invalidCredentials; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary LDAPResult_resultCode_insufficientAccessRights
 * @description
 *
 * Client lacks sufficient access rights.
 *
 * @constant
 * @type {number}
 */
export const LDAPResult_resultCode_insufficientAccessRights: 50 = _enum_for_LDAPResult_resultCode.insufficientAccessRights; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary insufficientAccessRights
 * @description
 *
 * Client lacks sufficient access rights.
 *
 * @constant
 * @type {number}
 */
export const insufficientAccessRights: 50 = LDAPResult_resultCode_insufficientAccessRights; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary LDAPResult_resultCode_busy
 * @description
 *
 * Server too busy to service the operation.
 *
 * @constant
 * @type {number}
 */
export const LDAPResult_resultCode_busy: 51 = _enum_for_LDAPResult_resultCode.busy; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary busy
 * @description
 *
 * Server too busy to service the operation.
 *
 * @constant
 * @type {number}
 */
export const busy: 51 = LDAPResult_resultCode_busy; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary LDAPResult_resultCode_unavailable
 * @description
 *
 * Server shutting down, or a required subsystem is offline.
 *
 * @constant
 * @type {number}
 */
export const LDAPResult_resultCode_unavailable: 52 = _enum_for_LDAPResult_resultCode.unavailable; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unavailable
 * @description
 *
 * Server shutting down, or a required subsystem is offline.
 *
 * @constant
 * @type {number}
 */
export const unavailable: 52 = LDAPResult_resultCode_unavailable; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary LDAPResult_resultCode_unwillingToPerform
 * @description
 *
 * Server unwilling to perform the operation.
 *
 * @constant
 * @type {number}
 */
export const LDAPResult_resultCode_unwillingToPerform: 53 = _enum_for_LDAPResult_resultCode.unwillingToPerform; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unwillingToPerform
 * @description
 *
 * Server unwilling to perform the operation.
 *
 * @constant
 * @type {number}
 */
export const unwillingToPerform: 53 = LDAPResult_resultCode_unwillingToPerform; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary LDAPResult_resultCode_loopDetect
 * @description
 *
 * Internal loop (e.g. alias deref or chaining).
 *
 * @constant
 * @type {number}
 */
export const LDAPResult_resultCode_loopDetect: 54 = _enum_for_LDAPResult_resultCode.loopDetect; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary loopDetect
 * @description
 *
 * Internal loop (e.g. alias deref or chaining).
 *
 * @constant
 * @type {number}
 */
export const loopDetect: 54 = LDAPResult_resultCode_loopDetect; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary LDAPResult_resultCode_namingViolation
 * @description
 *
 * Entry's name violates naming restrictions.
 *
 * @constant
 * @type {number}
 */
export const LDAPResult_resultCode_namingViolation: 64 = _enum_for_LDAPResult_resultCode.namingViolation; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary namingViolation
 * @description
 *
 * Entry's name violates naming restrictions.
 *
 * @constant
 * @type {number}
 */
export const namingViolation: 64 = LDAPResult_resultCode_namingViolation; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary LDAPResult_resultCode_objectClassViolation
 * @description
 *
 * Entry violates object-class restrictions.
 *
 * @constant
 * @type {number}
 */
export const LDAPResult_resultCode_objectClassViolation: 65 = _enum_for_LDAPResult_resultCode.objectClassViolation; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary objectClassViolation
 * @description
 *
 * Entry violates object-class restrictions.
 *
 * @constant
 * @type {number}
 */
export const objectClassViolation: 65 = LDAPResult_resultCode_objectClassViolation; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary LDAPResult_resultCode_notAllowedOnNonLeaf
 * @description
 *
 * Operation inappropriately acts on a non-leaf (typical Delete of an entry
 * with children).
 *
 * @constant
 * @type {number}
 */
export const LDAPResult_resultCode_notAllowedOnNonLeaf: 66 = _enum_for_LDAPResult_resultCode.notAllowedOnNonLeaf; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary notAllowedOnNonLeaf
 * @description
 *
 * Operation inappropriately acts on a non-leaf (typical Delete of an entry
 * with children).
 *
 * @constant
 * @type {number}
 */
export const notAllowedOnNonLeaf: 66 = LDAPResult_resultCode_notAllowedOnNonLeaf; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary LDAPResult_resultCode_notAllowedOnRDN
 * @description
 *
 * Attempt to remove a value that forms the entry's RDN; use ModifyDN instead.
 *
 * @constant
 * @type {number}
 */
export const LDAPResult_resultCode_notAllowedOnRDN: 67 = _enum_for_LDAPResult_resultCode.notAllowedOnRDN; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary notAllowedOnRDN
 * @description
 *
 * Attempt to remove a value that forms the entry's RDN; use ModifyDN instead.
 *
 * @constant
 * @type {number}
 */
export const notAllowedOnRDN: 67 = LDAPResult_resultCode_notAllowedOnRDN; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary LDAPResult_resultCode_entryAlreadyExists
 * @description
 *
 * Add/move/rename target already exists.
 *
 * @constant
 * @type {number}
 */
export const LDAPResult_resultCode_entryAlreadyExists: 68 = _enum_for_LDAPResult_resultCode.entryAlreadyExists; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary entryAlreadyExists
 * @description
 *
 * Add/move/rename target already exists.
 *
 * @constant
 * @type {number}
 */
export const entryAlreadyExists: 68 = LDAPResult_resultCode_entryAlreadyExists; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary LDAPResult_resultCode_objectClassModsProhibited
 * @description
 *
 * Forbidden change to `objectClass` (e.g. modifying the structural class).
 *
 * @constant
 * @type {number}
 */
export const LDAPResult_resultCode_objectClassModsProhibited: 69 = _enum_for_LDAPResult_resultCode.objectClassModsProhibited; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary objectClassModsProhibited
 * @description
 *
 * Forbidden change to `objectClass` (e.g. modifying the structural class).
 *
 * @constant
 * @type {number}
 */
export const objectClassModsProhibited: 69 = LDAPResult_resultCode_objectClassModsProhibited; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary LDAPResult_resultCode_affectsMultipleDSAs
 * @description
 *
 * Operation would affect multiple servers (typical of ModifyDN across DSAs
 * when mapped to DAP).
 *
 * @constant
 * @type {number}
 */
export const LDAPResult_resultCode_affectsMultipleDSAs: 71 = _enum_for_LDAPResult_resultCode.affectsMultipleDSAs; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary affectsMultipleDSAs
 * @description
 *
 * Operation would affect multiple servers (typical of ModifyDN across DSAs
 * when mapped to DAP).
 *
 * @constant
 * @type {number}
 */
export const affectsMultipleDSAs: 71 = LDAPResult_resultCode_affectsMultipleDSAs; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary LDAPResult_resultCode_other
 * @description
 *
 * Internal error not covered by another code.
 *
 * @constant
 * @type {number}
 */
export const LDAPResult_resultCode_other: 80 = _enum_for_LDAPResult_resultCode.other; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary other
 * @description
 *
 * Internal error not covered by another code.
 *
 * @constant
 * @type {number}
 */
export const other: 80 = LDAPResult_resultCode_other; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Decodes an ASN.1 element into a(n) LDAPResult_resultCode
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {LDAPResult_resultCode} The decoded data structure.
 */
export const _decode_LDAPResult_resultCode: $.ASN1Decoder<LDAPResult_resultCode> = $._decodeEnumerated;

/**
 * @summary Encodes a(n) LDAPResult_resultCode into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The LDAPResult_resultCode, encoded as an ASN.1 Element.
 */
export const _encode_LDAPResult_resultCode: $.ASN1Encoder<LDAPResult_resultCode> = $._encodeEnumerated;

/* eslint-enable */
