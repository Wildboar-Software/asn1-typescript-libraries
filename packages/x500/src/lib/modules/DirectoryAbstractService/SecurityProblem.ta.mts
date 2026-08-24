/* eslint-disable */
import { ASN1Element as _Element, INTEGER } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary SecurityProblem
 * @description
 *
 * (8) obsolete `invalidQOPMatch` — do not use (no named constant).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SecurityProblem  ::=  INTEGER {
 *   inappropriateAuthentication     (1),
 *   invalidCredentials              (2),
 *   insufficientAccessRights        (3),
 *   invalidSignature                (4),
 *   protectionRequired              (5),
 *   noInformation                   (6),
 *   blockedCredentials              (7),
 *   -- invalidQOPMatch              (8), obsolete
 *   spkmError                       (9),
 *   unsupportedAuthenticationMethod (10),
 *   passwordExpired                 (11),
 *   inappropriateAlgorithms         (12) }
 * ```
 */
export type SecurityProblem = INTEGER;

/**
 * @summary SecurityProblem_inappropriateAuthentication
 * @description
 *
 * e.g. simple when strong required.
 *
 * @constant
 * @type {number}
 */
export const SecurityProblem_inappropriateAuthentication: SecurityProblem = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SecurityProblem_inappropriateAuthentication
 * @description
 *
 * e.g. simple when strong required.
 *
 * @constant
 * @type {number}
 */
export const inappropriateAuthentication: SecurityProblem = SecurityProblem_inappropriateAuthentication; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SecurityProblem_invalidCredentials
 * @description
 *
 * Supplied credentials were invalid.
 *
 * @constant
 * @type {number}
 */
export const SecurityProblem_invalidCredentials: SecurityProblem = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SecurityProblem_invalidCredentials
 * @description
 *
 * Supplied credentials were invalid.
 *
 * @constant
 * @type {number}
 */
export const invalidCredentials: SecurityProblem = SecurityProblem_invalidCredentials; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SecurityProblem_insufficientAccessRights
 * @description
 *
 * Requester does not have the right to carry out the requested operation.
 *
 * @constant
 * @type {number}
 */
export const SecurityProblem_insufficientAccessRights: SecurityProblem = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SecurityProblem_insufficientAccessRights
 * @description
 *
 * Requester does not have the right to carry out the requested operation.
 *
 * @constant
 * @type {number}
 */
export const insufficientAccessRights: SecurityProblem = SecurityProblem_insufficientAccessRights; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SecurityProblem_invalidSignature
 * @description
 *
 * Signature of the request was invalid.
 *
 * @constant
 * @type {number}
 */
export const SecurityProblem_invalidSignature: SecurityProblem = 4; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SecurityProblem_invalidSignature
 * @description
 *
 * Signature of the request was invalid.
 *
 * @constant
 * @type {number}
 */
export const invalidSignature: SecurityProblem = SecurityProblem_invalidSignature; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SecurityProblem_protectionRequired
 * @description
 *
 * Unsigned argument; Directory unwilling to proceed unprotected.
 *
 * @constant
 * @type {number}
 */
export const SecurityProblem_protectionRequired: SecurityProblem = 5; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SecurityProblem_protectionRequired
 * @description
 *
 * Unsigned argument; Directory unwilling to proceed unprotected.
 *
 * @constant
 * @type {number}
 */
export const protectionRequired: SecurityProblem = SecurityProblem_protectionRequired; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SecurityProblem_noInformation
 * @description
 *
 * Security error for which no information is available.
 *
 * @constant
 * @type {number}
 */
export const SecurityProblem_noInformation: SecurityProblem = 6; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SecurityProblem_noInformation
 * @description
 *
 * Security error for which no information is available.
 *
 * @constant
 * @type {number}
 */
export const noInformation: SecurityProblem = SecurityProblem_noInformation; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SecurityProblem_blockedCredentials
 * @description
 *
 * e.g. too many bad passwords. Whether to return this is DSA security
 * policy.
 *
 * @constant
 * @type {number}
 */
export const SecurityProblem_blockedCredentials: SecurityProblem = 7; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SecurityProblem_blockedCredentials
 * @description
 *
 * e.g. too many bad passwords. Whether to return this is DSA security
 * policy.
 *
 * @constant
 * @type {number}
 */
export const blockedCredentials: SecurityProblem = SecurityProblem_blockedCredentials; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SecurityProblem_spkmError
 * @description
 *
 * `spkmInfo` holds the SPKM error token and context id.
 *
 * @constant
 * @type {number}
 */
export const SecurityProblem_spkmError: SecurityProblem = 9; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SecurityProblem_spkmError
 * @description
 *
 * `spkmInfo` holds the SPKM error token and context id.
 *
 * @constant
 * @type {number}
 */
export const spkmError: SecurityProblem = SecurityProblem_spkmError; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SecurityProblem_unsupportedAuthenticationMethod
 * @description
 *
 * Requested authentication method is not supported.
 *
 * @constant
 * @type {number}
 */
export const SecurityProblem_unsupportedAuthenticationMethod: SecurityProblem = 10; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SecurityProblem_unsupportedAuthenticationMethod
 * @description
 *
 * Requested authentication method is not supported.
 *
 * @constant
 * @type {number}
 */
export const unsupportedAuthenticationMethod: SecurityProblem = SecurityProblem_unsupportedAuthenticationMethod; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SecurityProblem_passwordExpired
 * @description
 *
 * Requester cannot bind; password has to be reset by an administrator.
 *
 * @constant
 * @type {number}
 */
export const SecurityProblem_passwordExpired: SecurityProblem = 11; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SecurityProblem_passwordExpired
 * @description
 *
 * Requester cannot bind; password has to be reset by an administrator.
 *
 * @constant
 * @type {number}
 */
export const passwordExpired: SecurityProblem = SecurityProblem_passwordExpired; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SecurityProblem_inappropriateAlgorithms
 * @description
 *
 * `encPwdInfo.algorithms` = algorithms the DSA supports. Bind/Compare:
 * 1–2 algs (current + recently expired). Change password: current + all
 * history algs.
 *
 * @constant
 * @type {number}
 */
export const SecurityProblem_inappropriateAlgorithms: SecurityProblem = 12; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SecurityProblem_inappropriateAlgorithms
 * @description
 *
 * `encPwdInfo.algorithms` = algorithms the DSA supports. Bind/Compare:
 * 1–2 algs (current + recently expired). Change password: current + all
 * history algs.
 *
 * @constant
 * @type {number}
 */
export const inappropriateAlgorithms: SecurityProblem = SecurityProblem_inappropriateAlgorithms; /* SHORT_NAMED_INTEGER_VALUE */


export const _decode_SecurityProblem = $._decodeInteger;


export const _encode_SecurityProblem = $._encodeInteger;


/* eslint-enable */
