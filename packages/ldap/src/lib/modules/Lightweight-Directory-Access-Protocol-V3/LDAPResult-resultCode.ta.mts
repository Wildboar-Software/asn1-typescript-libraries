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
export const LDAPResult_resultCode_success = _enum_for_LDAPResult_resultCode.success satisfies LDAPResult_resultCode; /* LONG_NAMED_ENUMERATED_VALUE */

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
export const success = LDAPResult_resultCode_success satisfies LDAPResult_resultCode; /* SHORT_NAMED_ENUMERATED_VALUE */

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
export const LDAPResult_resultCode_operationsError = _enum_for_LDAPResult_resultCode.operationsError satisfies LDAPResult_resultCode; /* LONG_NAMED_ENUMERATED_VALUE */

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
export const operationsError = LDAPResult_resultCode_operationsError satisfies LDAPResult_resultCode; /* SHORT_NAMED_ENUMERATED_VALUE */

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
export const LDAPResult_resultCode_protocolError = _enum_for_LDAPResult_resultCode.protocolError satisfies LDAPResult_resultCode; /* LONG_NAMED_ENUMERATED_VALUE */

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
export const protocolError = LDAPResult_resultCode_protocolError satisfies LDAPResult_resultCode; /* SHORT_NAMED_ENUMERATED_VALUE */

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
export const LDAPResult_resultCode_timeLimitExceeded = _enum_for_LDAPResult_resultCode.timeLimitExceeded satisfies LDAPResult_resultCode; /* LONG_NAMED_ENUMERATED_VALUE */

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
export const timeLimitExceeded = LDAPResult_resultCode_timeLimitExceeded satisfies LDAPResult_resultCode; /* SHORT_NAMED_ENUMERATED_VALUE */

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
export const LDAPResult_resultCode_sizeLimitExceeded = _enum_for_LDAPResult_resultCode.sizeLimitExceeded satisfies LDAPResult_resultCode; /* LONG_NAMED_ENUMERATED_VALUE */

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
export const sizeLimitExceeded = LDAPResult_resultCode_sizeLimitExceeded satisfies LDAPResult_resultCode; /* SHORT_NAMED_ENUMERATED_VALUE */

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
export const LDAPResult_resultCode_compareFalse = _enum_for_LDAPResult_resultCode.compareFalse satisfies LDAPResult_resultCode; /* LONG_NAMED_ENUMERATED_VALUE */

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
export const compareFalse = LDAPResult_resultCode_compareFalse satisfies LDAPResult_resultCode; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary LDAPResult_resultCode_compareTrue
 * @description
 *
 * Compare succeeded and the assertion was TRUE. Non-error / successful.
 *
 * @constant
 * @type {number}
 */
export const LDAPResult_resultCode_compareTrue = _enum_for_LDAPResult_resultCode.compareTrue satisfies LDAPResult_resultCode; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary compareTrue
 * @description
 *
 * Compare succeeded and the assertion was TRUE. Non-error / successful.
 *
 * @constant
 * @type {number}
 */
export const compareTrue = LDAPResult_resultCode_compareTrue satisfies LDAPResult_resultCode; /* SHORT_NAMED_ENUMERATED_VALUE */

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
export const LDAPResult_resultCode_authMethodNotSupported = _enum_for_LDAPResult_resultCode.authMethodNotSupported satisfies LDAPResult_resultCode; /* LONG_NAMED_ENUMERATED_VALUE */

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
export const authMethodNotSupported = LDAPResult_resultCode_authMethodNotSupported satisfies LDAPResult_resultCode; /* SHORT_NAMED_ENUMERATED_VALUE */

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
export const LDAPResult_resultCode_strongerAuthRequired = _enum_for_LDAPResult_resultCode.strongerAuthRequired satisfies LDAPResult_resultCode; /* LONG_NAMED_ENUMERATED_VALUE */

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
export const strongerAuthRequired = LDAPResult_resultCode_strongerAuthRequired satisfies LDAPResult_resultCode; /* SHORT_NAMED_ENUMERATED_VALUE */

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
export const LDAPResult_resultCode_referral = _enum_for_LDAPResult_resultCode.referral satisfies LDAPResult_resultCode; /* LONG_NAMED_ENUMERATED_VALUE */

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
export const referral = LDAPResult_resultCode_referral satisfies LDAPResult_resultCode; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary LDAPResult_resultCode_adminLimitExceeded
 * @description
 *
 * An administrative limit was exceeded.
 *
 * @constant
 * @type {number}
 */
export const LDAPResult_resultCode_adminLimitExceeded = _enum_for_LDAPResult_resultCode.adminLimitExceeded satisfies LDAPResult_resultCode; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary adminLimitExceeded
 * @description
 *
 * An administrative limit was exceeded.
 *
 * @constant
 * @type {number}
 */
export const adminLimitExceeded = LDAPResult_resultCode_adminLimitExceeded satisfies LDAPResult_resultCode; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary LDAPResult_resultCode_unavailableCriticalExtension
 * @description
 *
 * A critical control was unrecognized, inappropriate, or refused.
 *
 * @constant
 * @type {number}
 */
export const LDAPResult_resultCode_unavailableCriticalExtension = _enum_for_LDAPResult_resultCode.unavailableCriticalExtension satisfies LDAPResult_resultCode; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unavailableCriticalExtension
 * @description
 *
 * A critical control was unrecognized, inappropriate, or refused.
 *
 * @constant
 * @type {number}
 */
export const unavailableCriticalExtension = LDAPResult_resultCode_unavailableCriticalExtension satisfies LDAPResult_resultCode; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary LDAPResult_resultCode_confidentialityRequired
 * @description
 *
 * Data confidentiality protections are required.
 *
 * @constant
 * @type {number}
 */
export const LDAPResult_resultCode_confidentialityRequired = _enum_for_LDAPResult_resultCode.confidentialityRequired satisfies LDAPResult_resultCode; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary confidentialityRequired
 * @description
 *
 * Data confidentiality protections are required.
 *
 * @constant
 * @type {number}
 */
export const confidentialityRequired = LDAPResult_resultCode_confidentialityRequired satisfies LDAPResult_resultCode; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary LDAPResult_resultCode_saslBindInProgress
 * @description
 *
 * Non-error: send another Bind with the same SASL mechanism to continue.
 *
 * @constant
 * @type {number}
 */
export const LDAPResult_resultCode_saslBindInProgress = _enum_for_LDAPResult_resultCode.saslBindInProgress satisfies LDAPResult_resultCode; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary saslBindInProgress
 * @description
 *
 * Non-error: send another Bind with the same SASL mechanism to continue.
 *
 * @constant
 * @type {number}
 */
export const saslBindInProgress = LDAPResult_resultCode_saslBindInProgress satisfies LDAPResult_resultCode; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary LDAPResult_resultCode_noSuchAttribute
 * @description
 *
 * Named entry does not contain the specified attribute or attribute value.
 *
 * @constant
 * @type {number}
 */
export const LDAPResult_resultCode_noSuchAttribute = _enum_for_LDAPResult_resultCode.noSuchAttribute satisfies LDAPResult_resultCode; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary noSuchAttribute
 * @description
 *
 * Named entry does not contain the specified attribute or attribute value.
 *
 * @constant
 * @type {number}
 */
export const noSuchAttribute = LDAPResult_resultCode_noSuchAttribute satisfies LDAPResult_resultCode; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary LDAPResult_resultCode_undefinedAttributeType
 * @description
 *
 * A request field contains an unrecognized attribute description.
 *
 * @constant
 * @type {number}
 */
export const LDAPResult_resultCode_undefinedAttributeType = _enum_for_LDAPResult_resultCode.undefinedAttributeType satisfies LDAPResult_resultCode; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary undefinedAttributeType
 * @description
 *
 * A request field contains an unrecognized attribute description.
 *
 * @constant
 * @type {number}
 */
export const undefinedAttributeType = LDAPResult_resultCode_undefinedAttributeType satisfies LDAPResult_resultCode; /* SHORT_NAMED_ENUMERATED_VALUE */

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
export const LDAPResult_resultCode_inappropriateMatching = _enum_for_LDAPResult_resultCode.inappropriateMatching satisfies LDAPResult_resultCode; /* LONG_NAMED_ENUMERATED_VALUE */

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
export const inappropriateMatching = LDAPResult_resultCode_inappropriateMatching satisfies LDAPResult_resultCode; /* SHORT_NAMED_ENUMERATED_VALUE */

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
export const LDAPResult_resultCode_constraintViolation = _enum_for_LDAPResult_resultCode.constraintViolation satisfies LDAPResult_resultCode; /* LONG_NAMED_ENUMERATED_VALUE */

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
export const constraintViolation = LDAPResult_resultCode_constraintViolation satisfies LDAPResult_resultCode; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary LDAPResult_resultCode_attributeOrValueExists
 * @description
 *
 * Attribute or value to be added already exists.
 *
 * @constant
 * @type {number}
 */
export const LDAPResult_resultCode_attributeOrValueExists = _enum_for_LDAPResult_resultCode.attributeOrValueExists satisfies LDAPResult_resultCode; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary attributeOrValueExists
 * @description
 *
 * Attribute or value to be added already exists.
 *
 * @constant
 * @type {number}
 */
export const attributeOrValueExists = LDAPResult_resultCode_attributeOrValueExists satisfies LDAPResult_resultCode; /* SHORT_NAMED_ENUMERATED_VALUE */

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
export const LDAPResult_resultCode_invalidAttributeSyntax = _enum_for_LDAPResult_resultCode.invalidAttributeSyntax satisfies LDAPResult_resultCode; /* LONG_NAMED_ENUMERATED_VALUE */

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
export const invalidAttributeSyntax = LDAPResult_resultCode_invalidAttributeSyntax satisfies LDAPResult_resultCode; /* SHORT_NAMED_ENUMERATED_VALUE */

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
export const LDAPResult_resultCode_noSuchObject = _enum_for_LDAPResult_resultCode.noSuchObject satisfies LDAPResult_resultCode; /* LONG_NAMED_ENUMERATED_VALUE */

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
export const noSuchObject = LDAPResult_resultCode_noSuchObject satisfies LDAPResult_resultCode; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary LDAPResult_resultCode_aliasProblem
 * @description
 *
 * Alias problem (e.g. deref names no object). `matchedDN` typically set.
 *
 * @constant
 * @type {number}
 */
export const LDAPResult_resultCode_aliasProblem = _enum_for_LDAPResult_resultCode.aliasProblem satisfies LDAPResult_resultCode; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary aliasProblem
 * @description
 *
 * Alias problem (e.g. deref names no object). `matchedDN` typically set.
 *
 * @constant
 * @type {number}
 */
export const aliasProblem = LDAPResult_resultCode_aliasProblem satisfies LDAPResult_resultCode; /* SHORT_NAMED_ENUMERATED_VALUE */

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
export const LDAPResult_resultCode_invalidDNSyntax = _enum_for_LDAPResult_resultCode.invalidDNSyntax satisfies LDAPResult_resultCode; /* LONG_NAMED_ENUMERATED_VALUE */

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
export const invalidDNSyntax = LDAPResult_resultCode_invalidDNSyntax satisfies LDAPResult_resultCode; /* SHORT_NAMED_ENUMERATED_VALUE */

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
export const LDAPResult_resultCode_aliasDereferencingProblem = _enum_for_LDAPResult_resultCode.aliasDereferencingProblem satisfies LDAPResult_resultCode; /* LONG_NAMED_ENUMERATED_VALUE */

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
export const aliasDereferencingProblem = LDAPResult_resultCode_aliasDereferencingProblem satisfies LDAPResult_resultCode; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary LDAPResult_resultCode_inappropriateAuthentication
 * @description
 *
 * Anonymous or credential-less bind rejected; credentials required.
 *
 * @constant
 * @type {number}
 */
export const LDAPResult_resultCode_inappropriateAuthentication = _enum_for_LDAPResult_resultCode.inappropriateAuthentication satisfies LDAPResult_resultCode; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary inappropriateAuthentication
 * @description
 *
 * Anonymous or credential-less bind rejected; credentials required.
 *
 * @constant
 * @type {number}
 */
export const inappropriateAuthentication = LDAPResult_resultCode_inappropriateAuthentication satisfies LDAPResult_resultCode; /* SHORT_NAMED_ENUMERATED_VALUE */

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
export const LDAPResult_resultCode_invalidCredentials = _enum_for_LDAPResult_resultCode.invalidCredentials satisfies LDAPResult_resultCode; /* LONG_NAMED_ENUMERATED_VALUE */

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
export const invalidCredentials = LDAPResult_resultCode_invalidCredentials satisfies LDAPResult_resultCode; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary LDAPResult_resultCode_insufficientAccessRights
 * @description
 *
 * Client lacks sufficient access rights.
 *
 * @constant
 * @type {number}
 */
export const LDAPResult_resultCode_insufficientAccessRights = _enum_for_LDAPResult_resultCode.insufficientAccessRights satisfies LDAPResult_resultCode; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary insufficientAccessRights
 * @description
 *
 * Client lacks sufficient access rights.
 *
 * @constant
 * @type {number}
 */
export const insufficientAccessRights = LDAPResult_resultCode_insufficientAccessRights satisfies LDAPResult_resultCode; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary LDAPResult_resultCode_busy
 * @description
 *
 * Server too busy to service the operation.
 *
 * @constant
 * @type {number}
 */
export const LDAPResult_resultCode_busy = _enum_for_LDAPResult_resultCode.busy satisfies LDAPResult_resultCode; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary busy
 * @description
 *
 * Server too busy to service the operation.
 *
 * @constant
 * @type {number}
 */
export const busy = LDAPResult_resultCode_busy satisfies LDAPResult_resultCode; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary LDAPResult_resultCode_unavailable
 * @description
 *
 * Server shutting down, or a required subsystem is offline.
 *
 * @constant
 * @type {number}
 */
export const LDAPResult_resultCode_unavailable = _enum_for_LDAPResult_resultCode.unavailable satisfies LDAPResult_resultCode; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unavailable
 * @description
 *
 * Server shutting down, or a required subsystem is offline.
 *
 * @constant
 * @type {number}
 */
export const unavailable = LDAPResult_resultCode_unavailable satisfies LDAPResult_resultCode; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary LDAPResult_resultCode_unwillingToPerform
 * @description
 *
 * Server unwilling to perform the operation.
 *
 * @constant
 * @type {number}
 */
export const LDAPResult_resultCode_unwillingToPerform = _enum_for_LDAPResult_resultCode.unwillingToPerform satisfies LDAPResult_resultCode; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unwillingToPerform
 * @description
 *
 * Server unwilling to perform the operation.
 *
 * @constant
 * @type {number}
 */
export const unwillingToPerform = LDAPResult_resultCode_unwillingToPerform satisfies LDAPResult_resultCode; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary LDAPResult_resultCode_loopDetect
 * @description
 *
 * Internal loop (e.g. alias deref or chaining).
 *
 * @constant
 * @type {number}
 */
export const LDAPResult_resultCode_loopDetect = _enum_for_LDAPResult_resultCode.loopDetect satisfies LDAPResult_resultCode; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary loopDetect
 * @description
 *
 * Internal loop (e.g. alias deref or chaining).
 *
 * @constant
 * @type {number}
 */
export const loopDetect = LDAPResult_resultCode_loopDetect satisfies LDAPResult_resultCode; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary LDAPResult_resultCode_namingViolation
 * @description
 *
 * Entry's name violates naming restrictions.
 *
 * @constant
 * @type {number}
 */
export const LDAPResult_resultCode_namingViolation = _enum_for_LDAPResult_resultCode.namingViolation satisfies LDAPResult_resultCode; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary namingViolation
 * @description
 *
 * Entry's name violates naming restrictions.
 *
 * @constant
 * @type {number}
 */
export const namingViolation = LDAPResult_resultCode_namingViolation satisfies LDAPResult_resultCode; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary LDAPResult_resultCode_objectClassViolation
 * @description
 *
 * Entry violates object-class restrictions.
 *
 * @constant
 * @type {number}
 */
export const LDAPResult_resultCode_objectClassViolation = _enum_for_LDAPResult_resultCode.objectClassViolation satisfies LDAPResult_resultCode; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary objectClassViolation
 * @description
 *
 * Entry violates object-class restrictions.
 *
 * @constant
 * @type {number}
 */
export const objectClassViolation = LDAPResult_resultCode_objectClassViolation satisfies LDAPResult_resultCode; /* SHORT_NAMED_ENUMERATED_VALUE */

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
export const LDAPResult_resultCode_notAllowedOnNonLeaf = _enum_for_LDAPResult_resultCode.notAllowedOnNonLeaf satisfies LDAPResult_resultCode; /* LONG_NAMED_ENUMERATED_VALUE */

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
export const notAllowedOnNonLeaf = LDAPResult_resultCode_notAllowedOnNonLeaf satisfies LDAPResult_resultCode; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary LDAPResult_resultCode_notAllowedOnRDN
 * @description
 *
 * Attempt to remove a value that forms the entry's RDN; use ModifyDN instead.
 *
 * @constant
 * @type {number}
 */
export const LDAPResult_resultCode_notAllowedOnRDN = _enum_for_LDAPResult_resultCode.notAllowedOnRDN satisfies LDAPResult_resultCode; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary notAllowedOnRDN
 * @description
 *
 * Attempt to remove a value that forms the entry's RDN; use ModifyDN instead.
 *
 * @constant
 * @type {number}
 */
export const notAllowedOnRDN = LDAPResult_resultCode_notAllowedOnRDN satisfies LDAPResult_resultCode; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary LDAPResult_resultCode_entryAlreadyExists
 * @description
 *
 * Add/move/rename target already exists.
 *
 * @constant
 * @type {number}
 */
export const LDAPResult_resultCode_entryAlreadyExists = _enum_for_LDAPResult_resultCode.entryAlreadyExists satisfies LDAPResult_resultCode; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary entryAlreadyExists
 * @description
 *
 * Add/move/rename target already exists.
 *
 * @constant
 * @type {number}
 */
export const entryAlreadyExists = LDAPResult_resultCode_entryAlreadyExists satisfies LDAPResult_resultCode; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary LDAPResult_resultCode_objectClassModsProhibited
 * @description
 *
 * Forbidden change to `objectClass` (e.g. modifying the structural class).
 *
 * @constant
 * @type {number}
 */
export const LDAPResult_resultCode_objectClassModsProhibited = _enum_for_LDAPResult_resultCode.objectClassModsProhibited satisfies LDAPResult_resultCode; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary objectClassModsProhibited
 * @description
 *
 * Forbidden change to `objectClass` (e.g. modifying the structural class).
 *
 * @constant
 * @type {number}
 */
export const objectClassModsProhibited = LDAPResult_resultCode_objectClassModsProhibited satisfies LDAPResult_resultCode; /* SHORT_NAMED_ENUMERATED_VALUE */

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
export const LDAPResult_resultCode_affectsMultipleDSAs = _enum_for_LDAPResult_resultCode.affectsMultipleDSAs satisfies LDAPResult_resultCode; /* LONG_NAMED_ENUMERATED_VALUE */

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
export const affectsMultipleDSAs = LDAPResult_resultCode_affectsMultipleDSAs satisfies LDAPResult_resultCode; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary LDAPResult_resultCode_other
 * @description
 *
 * Internal error not covered by another code.
 *
 * @constant
 * @type {number}
 */
export const LDAPResult_resultCode_other = _enum_for_LDAPResult_resultCode.other satisfies LDAPResult_resultCode; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary other
 * @description
 *
 * Internal error not covered by another code.
 *
 * @constant
 * @type {number}
 */
export const other = LDAPResult_resultCode_other satisfies LDAPResult_resultCode; /* SHORT_NAMED_ENUMERATED_VALUE */

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
