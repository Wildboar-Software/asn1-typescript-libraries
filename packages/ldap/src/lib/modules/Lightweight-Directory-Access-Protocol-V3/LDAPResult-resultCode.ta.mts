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
export const LDAPResult_resultCode_success: LDAPResult_resultCode = 0; /* LONG_NAMED_ENUMERATED_VALUE */

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
export const success: LDAPResult_resultCode = LDAPResult_resultCode_success; /* SHORT_NAMED_ENUMERATED_VALUE */

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
export const LDAPResult_resultCode_operationsError: LDAPResult_resultCode = 1; /* LONG_NAMED_ENUMERATED_VALUE */

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
export const operationsError: LDAPResult_resultCode = LDAPResult_resultCode_operationsError; /* SHORT_NAMED_ENUMERATED_VALUE */

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
export const LDAPResult_resultCode_protocolError: LDAPResult_resultCode = 2; /* LONG_NAMED_ENUMERATED_VALUE */

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
export const protocolError: LDAPResult_resultCode = LDAPResult_resultCode_protocolError; /* SHORT_NAMED_ENUMERATED_VALUE */

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
export const LDAPResult_resultCode_timeLimitExceeded: LDAPResult_resultCode = 3; /* LONG_NAMED_ENUMERATED_VALUE */

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
export const timeLimitExceeded: LDAPResult_resultCode = LDAPResult_resultCode_timeLimitExceeded; /* SHORT_NAMED_ENUMERATED_VALUE */

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
export const LDAPResult_resultCode_sizeLimitExceeded: LDAPResult_resultCode = 4; /* LONG_NAMED_ENUMERATED_VALUE */

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
export const sizeLimitExceeded: LDAPResult_resultCode = LDAPResult_resultCode_sizeLimitExceeded; /* SHORT_NAMED_ENUMERATED_VALUE */

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
export const LDAPResult_resultCode_compareFalse: LDAPResult_resultCode = 5; /* LONG_NAMED_ENUMERATED_VALUE */

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
export const compareFalse: LDAPResult_resultCode = LDAPResult_resultCode_compareFalse; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary LDAPResult_resultCode_compareTrue
 * @description
 *
 * Compare succeeded and the assertion was TRUE. Non-error / successful.
 *
 * @constant
 * @type {number}
 */
export const LDAPResult_resultCode_compareTrue: LDAPResult_resultCode = 6; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary compareTrue
 * @description
 *
 * Compare succeeded and the assertion was TRUE. Non-error / successful.
 *
 * @constant
 * @type {number}
 */
export const compareTrue: LDAPResult_resultCode = LDAPResult_resultCode_compareTrue; /* SHORT_NAMED_ENUMERATED_VALUE */

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
export const LDAPResult_resultCode_authMethodNotSupported: LDAPResult_resultCode = 7; /* LONG_NAMED_ENUMERATED_VALUE */

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
export const authMethodNotSupported: LDAPResult_resultCode = LDAPResult_resultCode_authMethodNotSupported; /* SHORT_NAMED_ENUMERATED_VALUE */

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
export const LDAPResult_resultCode_strongerAuthRequired: LDAPResult_resultCode = 8; /* LONG_NAMED_ENUMERATED_VALUE */

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
export const strongerAuthRequired: LDAPResult_resultCode = LDAPResult_resultCode_strongerAuthRequired; /* SHORT_NAMED_ENUMERATED_VALUE */

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
export const LDAPResult_resultCode_referral: LDAPResult_resultCode = 10; /* LONG_NAMED_ENUMERATED_VALUE */

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
export const referral: LDAPResult_resultCode = LDAPResult_resultCode_referral; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary LDAPResult_resultCode_adminLimitExceeded
 * @description
 *
 * An administrative limit was exceeded.
 *
 * @constant
 * @type {number}
 */
export const LDAPResult_resultCode_adminLimitExceeded: LDAPResult_resultCode = 11; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary adminLimitExceeded
 * @description
 *
 * An administrative limit was exceeded.
 *
 * @constant
 * @type {number}
 */
export const adminLimitExceeded: LDAPResult_resultCode = LDAPResult_resultCode_adminLimitExceeded; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary LDAPResult_resultCode_unavailableCriticalExtension
 * @description
 *
 * A critical control was unrecognized, inappropriate, or refused.
 *
 * @constant
 * @type {number}
 */
export const LDAPResult_resultCode_unavailableCriticalExtension: LDAPResult_resultCode = 12; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unavailableCriticalExtension
 * @description
 *
 * A critical control was unrecognized, inappropriate, or refused.
 *
 * @constant
 * @type {number}
 */
export const unavailableCriticalExtension: LDAPResult_resultCode = LDAPResult_resultCode_unavailableCriticalExtension; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary LDAPResult_resultCode_confidentialityRequired
 * @description
 *
 * Data confidentiality protections are required.
 *
 * @constant
 * @type {number}
 */
export const LDAPResult_resultCode_confidentialityRequired: LDAPResult_resultCode = 13; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary confidentialityRequired
 * @description
 *
 * Data confidentiality protections are required.
 *
 * @constant
 * @type {number}
 */
export const confidentialityRequired: LDAPResult_resultCode = LDAPResult_resultCode_confidentialityRequired; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary LDAPResult_resultCode_saslBindInProgress
 * @description
 *
 * Non-error: send another Bind with the same SASL mechanism to continue.
 *
 * @constant
 * @type {number}
 */
export const LDAPResult_resultCode_saslBindInProgress: LDAPResult_resultCode = 14; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary saslBindInProgress
 * @description
 *
 * Non-error: send another Bind with the same SASL mechanism to continue.
 *
 * @constant
 * @type {number}
 */
export const saslBindInProgress: LDAPResult_resultCode = LDAPResult_resultCode_saslBindInProgress; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary LDAPResult_resultCode_noSuchAttribute
 * @description
 *
 * Named entry does not contain the specified attribute or attribute value.
 *
 * @constant
 * @type {number}
 */
export const LDAPResult_resultCode_noSuchAttribute: LDAPResult_resultCode = 16; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary noSuchAttribute
 * @description
 *
 * Named entry does not contain the specified attribute or attribute value.
 *
 * @constant
 * @type {number}
 */
export const noSuchAttribute: LDAPResult_resultCode = LDAPResult_resultCode_noSuchAttribute; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary LDAPResult_resultCode_undefinedAttributeType
 * @description
 *
 * A request field contains an unrecognized attribute description.
 *
 * @constant
 * @type {number}
 */
export const LDAPResult_resultCode_undefinedAttributeType: LDAPResult_resultCode = 17; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary undefinedAttributeType
 * @description
 *
 * A request field contains an unrecognized attribute description.
 *
 * @constant
 * @type {number}
 */
export const undefinedAttributeType: LDAPResult_resultCode = LDAPResult_resultCode_undefinedAttributeType; /* SHORT_NAMED_ENUMERATED_VALUE */

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
export const LDAPResult_resultCode_inappropriateMatching: LDAPResult_resultCode = 18; /* LONG_NAMED_ENUMERATED_VALUE */

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
export const inappropriateMatching: LDAPResult_resultCode = LDAPResult_resultCode_inappropriateMatching; /* SHORT_NAMED_ENUMERATED_VALUE */

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
export const LDAPResult_resultCode_constraintViolation: LDAPResult_resultCode = 19; /* LONG_NAMED_ENUMERATED_VALUE */

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
export const constraintViolation: LDAPResult_resultCode = LDAPResult_resultCode_constraintViolation; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary LDAPResult_resultCode_attributeOrValueExists
 * @description
 *
 * Attribute or value to be added already exists.
 *
 * @constant
 * @type {number}
 */
export const LDAPResult_resultCode_attributeOrValueExists: LDAPResult_resultCode = 20; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary attributeOrValueExists
 * @description
 *
 * Attribute or value to be added already exists.
 *
 * @constant
 * @type {number}
 */
export const attributeOrValueExists: LDAPResult_resultCode = LDAPResult_resultCode_attributeOrValueExists; /* SHORT_NAMED_ENUMERATED_VALUE */

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
export const LDAPResult_resultCode_invalidAttributeSyntax: LDAPResult_resultCode = 21; /* LONG_NAMED_ENUMERATED_VALUE */

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
export const invalidAttributeSyntax: LDAPResult_resultCode = LDAPResult_resultCode_invalidAttributeSyntax; /* SHORT_NAMED_ENUMERATED_VALUE */

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
export const LDAPResult_resultCode_noSuchObject: LDAPResult_resultCode = 32; /* LONG_NAMED_ENUMERATED_VALUE */

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
export const noSuchObject: LDAPResult_resultCode = LDAPResult_resultCode_noSuchObject; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary LDAPResult_resultCode_aliasProblem
 * @description
 *
 * Alias problem (e.g. deref names no object). `matchedDN` typically set.
 *
 * @constant
 * @type {number}
 */
export const LDAPResult_resultCode_aliasProblem: LDAPResult_resultCode = 33; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary aliasProblem
 * @description
 *
 * Alias problem (e.g. deref names no object). `matchedDN` typically set.
 *
 * @constant
 * @type {number}
 */
export const aliasProblem: LDAPResult_resultCode = LDAPResult_resultCode_aliasProblem; /* SHORT_NAMED_ENUMERATED_VALUE */

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
export const LDAPResult_resultCode_invalidDNSyntax: LDAPResult_resultCode = 34; /* LONG_NAMED_ENUMERATED_VALUE */

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
export const invalidDNSyntax: LDAPResult_resultCode = LDAPResult_resultCode_invalidDNSyntax; /* SHORT_NAMED_ENUMERATED_VALUE */

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
export const LDAPResult_resultCode_aliasDereferencingProblem: LDAPResult_resultCode = 36; /* LONG_NAMED_ENUMERATED_VALUE */

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
export const aliasDereferencingProblem: LDAPResult_resultCode = LDAPResult_resultCode_aliasDereferencingProblem; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary LDAPResult_resultCode_inappropriateAuthentication
 * @description
 *
 * Anonymous or credential-less bind rejected; credentials required.
 *
 * @constant
 * @type {number}
 */
export const LDAPResult_resultCode_inappropriateAuthentication: LDAPResult_resultCode = 48; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary inappropriateAuthentication
 * @description
 *
 * Anonymous or credential-less bind rejected; credentials required.
 *
 * @constant
 * @type {number}
 */
export const inappropriateAuthentication: LDAPResult_resultCode = LDAPResult_resultCode_inappropriateAuthentication; /* SHORT_NAMED_ENUMERATED_VALUE */

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
export const LDAPResult_resultCode_invalidCredentials: LDAPResult_resultCode = 49; /* LONG_NAMED_ENUMERATED_VALUE */

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
export const invalidCredentials: LDAPResult_resultCode = LDAPResult_resultCode_invalidCredentials; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary LDAPResult_resultCode_insufficientAccessRights
 * @description
 *
 * Client lacks sufficient access rights.
 *
 * @constant
 * @type {number}
 */
export const LDAPResult_resultCode_insufficientAccessRights: LDAPResult_resultCode = 50; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary insufficientAccessRights
 * @description
 *
 * Client lacks sufficient access rights.
 *
 * @constant
 * @type {number}
 */
export const insufficientAccessRights: LDAPResult_resultCode = LDAPResult_resultCode_insufficientAccessRights; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary LDAPResult_resultCode_busy
 * @description
 *
 * Server too busy to service the operation.
 *
 * @constant
 * @type {number}
 */
export const LDAPResult_resultCode_busy: LDAPResult_resultCode = 51; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary busy
 * @description
 *
 * Server too busy to service the operation.
 *
 * @constant
 * @type {number}
 */
export const busy: LDAPResult_resultCode = LDAPResult_resultCode_busy; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary LDAPResult_resultCode_unavailable
 * @description
 *
 * Server shutting down, or a required subsystem is offline.
 *
 * @constant
 * @type {number}
 */
export const LDAPResult_resultCode_unavailable: LDAPResult_resultCode = 52; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unavailable
 * @description
 *
 * Server shutting down, or a required subsystem is offline.
 *
 * @constant
 * @type {number}
 */
export const unavailable: LDAPResult_resultCode = LDAPResult_resultCode_unavailable; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary LDAPResult_resultCode_unwillingToPerform
 * @description
 *
 * Server unwilling to perform the operation.
 *
 * @constant
 * @type {number}
 */
export const LDAPResult_resultCode_unwillingToPerform: LDAPResult_resultCode = 53; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unwillingToPerform
 * @description
 *
 * Server unwilling to perform the operation.
 *
 * @constant
 * @type {number}
 */
export const unwillingToPerform: LDAPResult_resultCode = LDAPResult_resultCode_unwillingToPerform; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary LDAPResult_resultCode_loopDetect
 * @description
 *
 * Internal loop (e.g. alias deref or chaining).
 *
 * @constant
 * @type {number}
 */
export const LDAPResult_resultCode_loopDetect: LDAPResult_resultCode = 54; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary loopDetect
 * @description
 *
 * Internal loop (e.g. alias deref or chaining).
 *
 * @constant
 * @type {number}
 */
export const loopDetect: LDAPResult_resultCode = LDAPResult_resultCode_loopDetect; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary LDAPResult_resultCode_namingViolation
 * @description
 *
 * Entry's name violates naming restrictions.
 *
 * @constant
 * @type {number}
 */
export const LDAPResult_resultCode_namingViolation: LDAPResult_resultCode = 64; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary namingViolation
 * @description
 *
 * Entry's name violates naming restrictions.
 *
 * @constant
 * @type {number}
 */
export const namingViolation: LDAPResult_resultCode = LDAPResult_resultCode_namingViolation; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary LDAPResult_resultCode_objectClassViolation
 * @description
 *
 * Entry violates object-class restrictions.
 *
 * @constant
 * @type {number}
 */
export const LDAPResult_resultCode_objectClassViolation: LDAPResult_resultCode = 65; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary objectClassViolation
 * @description
 *
 * Entry violates object-class restrictions.
 *
 * @constant
 * @type {number}
 */
export const objectClassViolation: LDAPResult_resultCode = LDAPResult_resultCode_objectClassViolation; /* SHORT_NAMED_ENUMERATED_VALUE */

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
export const LDAPResult_resultCode_notAllowedOnNonLeaf: LDAPResult_resultCode = 66; /* LONG_NAMED_ENUMERATED_VALUE */

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
export const notAllowedOnNonLeaf: LDAPResult_resultCode = LDAPResult_resultCode_notAllowedOnNonLeaf; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary LDAPResult_resultCode_notAllowedOnRDN
 * @description
 *
 * Attempt to remove a value that forms the entry's RDN; use ModifyDN instead.
 *
 * @constant
 * @type {number}
 */
export const LDAPResult_resultCode_notAllowedOnRDN: LDAPResult_resultCode = 67; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary notAllowedOnRDN
 * @description
 *
 * Attempt to remove a value that forms the entry's RDN; use ModifyDN instead.
 *
 * @constant
 * @type {number}
 */
export const notAllowedOnRDN: LDAPResult_resultCode = LDAPResult_resultCode_notAllowedOnRDN; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary LDAPResult_resultCode_entryAlreadyExists
 * @description
 *
 * Add/move/rename target already exists.
 *
 * @constant
 * @type {number}
 */
export const LDAPResult_resultCode_entryAlreadyExists: LDAPResult_resultCode = 68; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary entryAlreadyExists
 * @description
 *
 * Add/move/rename target already exists.
 *
 * @constant
 * @type {number}
 */
export const entryAlreadyExists: LDAPResult_resultCode = LDAPResult_resultCode_entryAlreadyExists; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary LDAPResult_resultCode_objectClassModsProhibited
 * @description
 *
 * Forbidden change to `objectClass` (e.g. modifying the structural class).
 *
 * @constant
 * @type {number}
 */
export const LDAPResult_resultCode_objectClassModsProhibited: LDAPResult_resultCode = 69; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary objectClassModsProhibited
 * @description
 *
 * Forbidden change to `objectClass` (e.g. modifying the structural class).
 *
 * @constant
 * @type {number}
 */
export const objectClassModsProhibited: LDAPResult_resultCode = LDAPResult_resultCode_objectClassModsProhibited; /* SHORT_NAMED_ENUMERATED_VALUE */

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
export const LDAPResult_resultCode_affectsMultipleDSAs: LDAPResult_resultCode = 71; /* LONG_NAMED_ENUMERATED_VALUE */

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
export const affectsMultipleDSAs: LDAPResult_resultCode = LDAPResult_resultCode_affectsMultipleDSAs; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary LDAPResult_resultCode_other
 * @description
 *
 * Internal error not covered by another code.
 *
 * @constant
 * @type {number}
 */
export const LDAPResult_resultCode_other: LDAPResult_resultCode = 80; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary other
 * @description
 *
 * Internal error not covered by another code.
 *
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
