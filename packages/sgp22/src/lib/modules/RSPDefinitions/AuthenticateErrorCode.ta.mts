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
 * Why the eUICC rejected the RSP Server. SGP.22 v3.1 §5.7.13.
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
 * @description
 * 
 * The RSP Server certificate chain is invalid. SGP.22 v3.1 §5.7.13.
 * 
 * @constant
 * @type {number}
 */
export
const AuthenticateErrorCode_invalidCertificate: AuthenticateErrorCode = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary AuthenticateErrorCode_invalidCertificate
 * @description
 * 
 * The RSP Server certificate chain is invalid. SGP.22 v3.1 §5.7.13.
 * 
 * @constant
 * @type {number}
 */
export
const invalidCertificate: AuthenticateErrorCode = AuthenticateErrorCode_invalidCertificate; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary AuthenticateErrorCode_invalidSignature
 * @description
 * 
 * `serverSignature1` over `serverSigned1` did not verify. SGP.22 v3.1 §5.7.13.
 * 
 * @constant
 * @type {number}
 */
export
const AuthenticateErrorCode_invalidSignature: AuthenticateErrorCode = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary AuthenticateErrorCode_invalidSignature
 * @description
 * 
 * `serverSignature1` over `serverSigned1` did not verify. SGP.22 v3.1 §5.7.13.
 * 
 * @constant
 * @type {number}
 */
export
const invalidSignature: AuthenticateErrorCode = AuthenticateErrorCode_invalidSignature; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary AuthenticateErrorCode_unsupportedCurve
 * @description
 * 
 * The server key uses a curve the eUICC does not implement. SGP.22 v3.1
 * §5.7.13.
 * 
 * @constant
 * @type {number}
 */
export
const AuthenticateErrorCode_unsupportedCurve: AuthenticateErrorCode = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary AuthenticateErrorCode_unsupportedCurve
 * @description
 * 
 * The server key uses a curve the eUICC does not implement. SGP.22 v3.1
 * §5.7.13.
 * 
 * @constant
 * @type {number}
 */
export
const unsupportedCurve: AuthenticateErrorCode = AuthenticateErrorCode_unsupportedCurve; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary AuthenticateErrorCode_noSessionContext
 * @description
 * 
 * GetEUICCChallenge has not opened a session. SGP.22 v3.1 §5.7.13.
 * 
 * @constant
 * @type {number}
 */
export
const AuthenticateErrorCode_noSessionContext: AuthenticateErrorCode = 4; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary AuthenticateErrorCode_noSessionContext
 * @description
 * 
 * GetEUICCChallenge has not opened a session. SGP.22 v3.1 §5.7.13.
 * 
 * @constant
 * @type {number}
 */
export
const noSessionContext: AuthenticateErrorCode = AuthenticateErrorCode_noSessionContext; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary AuthenticateErrorCode_invalidOid
 * @description
 * 
 * The server certificate is neither CERT.DPauth.SIG nor CERT.DSauth.SIG. SGP.22
 * v3.1 §5.7.13.
 * 
 * @constant
 * @type {number}
 */
export
const AuthenticateErrorCode_invalidOid: AuthenticateErrorCode = 5; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary AuthenticateErrorCode_invalidOid
 * @description
 * 
 * The server certificate is neither CERT.DPauth.SIG nor CERT.DSauth.SIG. SGP.22
 * v3.1 §5.7.13.
 * 
 * @constant
 * @type {number}
 */
export
const invalidOid: AuthenticateErrorCode = AuthenticateErrorCode_invalidOid; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary AuthenticateErrorCode_euiccChallengeMismatch
 * @description
 * 
 * `serverSigned1.euiccChallenge` is not the challenge the eUICC issued. SGP.22
 * v3.1 §5.7.13.
 * 
 * @constant
 * @type {number}
 */
export
const AuthenticateErrorCode_euiccChallengeMismatch: AuthenticateErrorCode = 6; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary AuthenticateErrorCode_euiccChallengeMismatch
 * @description
 * 
 * `serverSigned1.euiccChallenge` is not the challenge the eUICC issued. SGP.22
 * v3.1 §5.7.13.
 * 
 * @constant
 * @type {number}
 */
export
const euiccChallengeMismatch: AuthenticateErrorCode = AuthenticateErrorCode_euiccChallengeMismatch; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary AuthenticateErrorCode_ciPKUnknown
 * @description
 * 
 * The CI public key needed to verify the chain, or the CI key the server asked
 * the eUICC to sign with, is not available. SGP.22 v3.1 §5.7.13.
 * 
 * @constant
 * @type {number}
 */
export
const AuthenticateErrorCode_ciPKUnknown: AuthenticateErrorCode = 7; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary AuthenticateErrorCode_ciPKUnknown
 * @description
 * 
 * The CI public key needed to verify the chain, or the CI key the server asked
 * the eUICC to sign with, is not available. SGP.22 v3.1 §5.7.13.
 * 
 * @constant
 * @type {number}
 */
export
const ciPKUnknown: AuthenticateErrorCode = AuthenticateErrorCode_ciPKUnknown; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary AuthenticateErrorCode_undefinedError
 * @description
 * 
 * AuthenticateServer failed for a reason this enumeration does not name. SGP.22
 * v3.1 §5.7.13.
 * 
 * @constant
 * @type {number}
 */
export
const AuthenticateErrorCode_undefinedError: AuthenticateErrorCode = 127; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary AuthenticateErrorCode_undefinedError
 * @description
 * 
 * AuthenticateServer failed for a reason this enumeration does not name. SGP.22
 * v3.1 §5.7.13.
 * 
 * @constant
 * @type {number}
 */
export
const undefinedError: AuthenticateErrorCode = AuthenticateErrorCode_undefinedError; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_AuthenticateErrorCode = $._decodeInteger;
export const _encode_AuthenticateErrorCode = $._encodeInteger;


/* eslint-enable */
