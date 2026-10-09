/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary AuthenticateErrorCode
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AuthenticateErrorCode  ::=  INTEGER {invalidCertificate(1), invalidSignature(2), unsupportedCurve(3), noSessionContext(4), invalidOid(5), euiccChallengeMismatch(6), ciPKUnknown(7), undefinedError(127)}
 * ```
 */
export
type AuthenticateErrorCode = INTEGER;

/**
 * @summary AuthenticateErrorCode_invalidCertificate
 * @constant
 * @type {number}
 */
export
const AuthenticateErrorCode_invalidCertificate: AuthenticateErrorCode = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary AuthenticateErrorCode_invalidCertificate
 * @constant
 * @type {number}
 */
export
const invalidCertificate: AuthenticateErrorCode = AuthenticateErrorCode_invalidCertificate; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary AuthenticateErrorCode_invalidSignature
 * @constant
 * @type {number}
 */
export
const AuthenticateErrorCode_invalidSignature: AuthenticateErrorCode = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary AuthenticateErrorCode_invalidSignature
 * @constant
 * @type {number}
 */
export
const invalidSignature: AuthenticateErrorCode = AuthenticateErrorCode_invalidSignature; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary AuthenticateErrorCode_unsupportedCurve
 * @constant
 * @type {number}
 */
export
const AuthenticateErrorCode_unsupportedCurve: AuthenticateErrorCode = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary AuthenticateErrorCode_unsupportedCurve
 * @constant
 * @type {number}
 */
export
const unsupportedCurve: AuthenticateErrorCode = AuthenticateErrorCode_unsupportedCurve; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary AuthenticateErrorCode_noSessionContext
 * @constant
 * @type {number}
 */
export
const AuthenticateErrorCode_noSessionContext: AuthenticateErrorCode = 4; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary AuthenticateErrorCode_noSessionContext
 * @constant
 * @type {number}
 */
export
const noSessionContext: AuthenticateErrorCode = AuthenticateErrorCode_noSessionContext; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary AuthenticateErrorCode_invalidOid
 * @constant
 * @type {number}
 */
export
const AuthenticateErrorCode_invalidOid: AuthenticateErrorCode = 5; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary AuthenticateErrorCode_invalidOid
 * @constant
 * @type {number}
 */
export
const invalidOid: AuthenticateErrorCode = AuthenticateErrorCode_invalidOid; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary AuthenticateErrorCode_euiccChallengeMismatch
 * @constant
 * @type {number}
 */
export
const AuthenticateErrorCode_euiccChallengeMismatch: AuthenticateErrorCode = 6; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary AuthenticateErrorCode_euiccChallengeMismatch
 * @constant
 * @type {number}
 */
export
const euiccChallengeMismatch: AuthenticateErrorCode = AuthenticateErrorCode_euiccChallengeMismatch; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary AuthenticateErrorCode_ciPKUnknown
 * @constant
 * @type {number}
 */
export
const AuthenticateErrorCode_ciPKUnknown: AuthenticateErrorCode = 7; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary AuthenticateErrorCode_ciPKUnknown
 * @constant
 * @type {number}
 */
export
const ciPKUnknown: AuthenticateErrorCode = AuthenticateErrorCode_ciPKUnknown; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary AuthenticateErrorCode_undefinedError
 * @constant
 * @type {number}
 */
export
const AuthenticateErrorCode_undefinedError: AuthenticateErrorCode = 127; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary AuthenticateErrorCode_undefinedError
 * @constant
 * @type {number}
 */
export
const undefinedError: AuthenticateErrorCode = AuthenticateErrorCode_undefinedError; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_AuthenticateErrorCode = $._decodeInteger;
export const _encode_AuthenticateErrorCode = $._encodeInteger;


/* eslint-enable */
