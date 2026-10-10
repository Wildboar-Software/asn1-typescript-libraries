/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary AuthenticateClientResponseEs9_authenticateClientError
 * @description
 * 
 * Why the SM-DP+ rejected ES9+.AuthenticateClient. Values 12-17 are reserved in
 * this module. SGP.22 v3.1 §5.6.3 defines further codes in that range and
 * beyond (enterprise, device change, RPM) that this module does not declare.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AuthenticateClientResponseEs9-authenticateClientError ::= INTEGER {
 *     eumCertificateInvalid(1),
 *     eumCertificateExpired(2),
 *     euiccCertificateInvalid(3),
 *     euiccCertificateExpired(4),
 *     euiccSignatureInvalid(5),
 *     matchingIdRefused(6),
 *     eidMismatch(7),
 *     noEligibleProfile(8),
 *     ciPKUnknown(9),
 *     invalidTransactionId(10),
 *     insufficientMemory(11), -- Note: values 12-17 are reserved for future versions of SGP.22
 *     downloadOrderExpired(18),
 *     undefinedError(127)
 * }
 * ```
 */
export
type AuthenticateClientResponseEs9_authenticateClientError = INTEGER;

/**
 * @summary AuthenticateClientResponseEs9_authenticateClientError_eumCertificateInvalid
 * @description
 * 
 * CERT.EUM.SIG did not verify or is not acceptable. SGP.22 v3.1 §5.6.3.
 * 
 * @constant
 * @type {number}
 */
export
const AuthenticateClientResponseEs9_authenticateClientError_eumCertificateInvalid: AuthenticateClientResponseEs9_authenticateClientError = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary AuthenticateClientResponseEs9_authenticateClientError_eumCertificateInvalid
 * @description
 * 
 * CERT.EUM.SIG did not verify or is not acceptable. SGP.22 v3.1 §5.6.3.
 * 
 * @constant
 * @type {number}
 */
export
const eumCertificateInvalid: AuthenticateClientResponseEs9_authenticateClientError = AuthenticateClientResponseEs9_authenticateClientError_eumCertificateInvalid; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary AuthenticateClientResponseEs9_authenticateClientError_eumCertificateExpired
 * @description
 * 
 * CERT.EUM.SIG is outside its validity. SGP.22 v3.1 §5.6.3.
 * 
 * @constant
 * @type {number}
 */
export
const AuthenticateClientResponseEs9_authenticateClientError_eumCertificateExpired: AuthenticateClientResponseEs9_authenticateClientError = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary AuthenticateClientResponseEs9_authenticateClientError_eumCertificateExpired
 * @description
 * 
 * CERT.EUM.SIG is outside its validity. SGP.22 v3.1 §5.6.3.
 * 
 * @constant
 * @type {number}
 */
export
const eumCertificateExpired: AuthenticateClientResponseEs9_authenticateClientError = AuthenticateClientResponseEs9_authenticateClientError_eumCertificateExpired; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary AuthenticateClientResponseEs9_authenticateClientError_euiccCertificateInvalid
 * @description
 * 
 * CERT.EUICC.SIG did not verify or is not acceptable. SGP.22 v3.1 §5.6.3.
 * 
 * @constant
 * @type {number}
 */
export
const AuthenticateClientResponseEs9_authenticateClientError_euiccCertificateInvalid: AuthenticateClientResponseEs9_authenticateClientError = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary AuthenticateClientResponseEs9_authenticateClientError_euiccCertificateInvalid
 * @description
 * 
 * CERT.EUICC.SIG did not verify or is not acceptable. SGP.22 v3.1 §5.6.3.
 * 
 * @constant
 * @type {number}
 */
export
const euiccCertificateInvalid: AuthenticateClientResponseEs9_authenticateClientError = AuthenticateClientResponseEs9_authenticateClientError_euiccCertificateInvalid; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary AuthenticateClientResponseEs9_authenticateClientError_euiccCertificateExpired
 * @description
 * 
 * CERT.EUICC.SIG is outside its validity. SGP.22 v3.1 §5.6.3.
 * 
 * @constant
 * @type {number}
 */
export
const AuthenticateClientResponseEs9_authenticateClientError_euiccCertificateExpired: AuthenticateClientResponseEs9_authenticateClientError = 4; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary AuthenticateClientResponseEs9_authenticateClientError_euiccCertificateExpired
 * @description
 * 
 * CERT.EUICC.SIG is outside its validity. SGP.22 v3.1 §5.6.3.
 * 
 * @constant
 * @type {number}
 */
export
const euiccCertificateExpired: AuthenticateClientResponseEs9_authenticateClientError = AuthenticateClientResponseEs9_authenticateClientError_euiccCertificateExpired; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary AuthenticateClientResponseEs9_authenticateClientError_euiccSignatureInvalid
 * @description
 * 
 * `euiccSignature1` did not verify under PK.EUICC.SIG. SGP.22 v3.1 §5.6.3.
 * 
 * @constant
 * @type {number}
 */
export
const AuthenticateClientResponseEs9_authenticateClientError_euiccSignatureInvalid: AuthenticateClientResponseEs9_authenticateClientError = 5; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary AuthenticateClientResponseEs9_authenticateClientError_euiccSignatureInvalid
 * @description
 * 
 * `euiccSignature1` did not verify under PK.EUICC.SIG. SGP.22 v3.1 §5.6.3.
 * 
 * @constant
 * @type {number}
 */
export
const euiccSignatureInvalid: AuthenticateClientResponseEs9_authenticateClientError = AuthenticateClientResponseEs9_authenticateClientError_euiccSignatureInvalid; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary AuthenticateClientResponseEs9_authenticateClientError_matchingIdRefused
 * @description
 * 
 * The MatchingID is missing, unknown, or not usable for this eUICC. SGP.22 v3.1
 * §4.1.1 and §5.6.3.
 * 
 * @constant
 * @type {number}
 */
export
const AuthenticateClientResponseEs9_authenticateClientError_matchingIdRefused: AuthenticateClientResponseEs9_authenticateClientError = 6; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary AuthenticateClientResponseEs9_authenticateClientError_matchingIdRefused
 * @description
 * 
 * The MatchingID is missing, unknown, or not usable for this eUICC. SGP.22 v3.1
 * §4.1.1 and §5.6.3.
 * 
 * @constant
 * @type {number}
 */
export
const matchingIdRefused: AuthenticateClientResponseEs9_authenticateClientError = AuthenticateClientResponseEs9_authenticateClientError_matchingIdRefused; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary AuthenticateClientResponseEs9_authenticateClientError_eidMismatch
 * @description
 * 
 * The EID in the eUICC certificate is not the one the order was bound to.
 * SGP.22 v3.1 §5.6.3.
 * 
 * @constant
 * @type {number}
 */
export
const AuthenticateClientResponseEs9_authenticateClientError_eidMismatch: AuthenticateClientResponseEs9_authenticateClientError = 7; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary AuthenticateClientResponseEs9_authenticateClientError_eidMismatch
 * @description
 * 
 * The EID in the eUICC certificate is not the one the order was bound to.
 * SGP.22 v3.1 §5.6.3.
 * 
 * @constant
 * @type {number}
 */
export
const eidMismatch: AuthenticateClientResponseEs9_authenticateClientError = AuthenticateClientResponseEs9_authenticateClientError_eidMismatch; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary AuthenticateClientResponseEs9_authenticateClientError_noEligibleProfile
 * @description
 * 
 * No pending Profile matches this device, eUICC, and order. SGP.22 v3.1 §5.6.3
 * and Annex F.
 * 
 * @constant
 * @type {number}
 */
export
const AuthenticateClientResponseEs9_authenticateClientError_noEligibleProfile: AuthenticateClientResponseEs9_authenticateClientError = 8; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary AuthenticateClientResponseEs9_authenticateClientError_noEligibleProfile
 * @description
 * 
 * No pending Profile matches this device, eUICC, and order. SGP.22 v3.1 §5.6.3
 * and Annex F.
 * 
 * @constant
 * @type {number}
 */
export
const noEligibleProfile: AuthenticateClientResponseEs9_authenticateClientError = AuthenticateClientResponseEs9_authenticateClientError_noEligibleProfile; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary AuthenticateClientResponseEs9_authenticateClientError_ciPKUnknown
 * @description
 * 
 * The eUICC chain does not terminate at a CI public key the SM-DP+ knows.
 * SGP.22 v3.1 §5.6.3.
 * 
 * @constant
 * @type {number}
 */
export
const AuthenticateClientResponseEs9_authenticateClientError_ciPKUnknown: AuthenticateClientResponseEs9_authenticateClientError = 9; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary AuthenticateClientResponseEs9_authenticateClientError_ciPKUnknown
 * @description
 * 
 * The eUICC chain does not terminate at a CI public key the SM-DP+ knows.
 * SGP.22 v3.1 §5.6.3.
 * 
 * @constant
 * @type {number}
 */
export
const ciPKUnknown: AuthenticateClientResponseEs9_authenticateClientError = AuthenticateClientResponseEs9_authenticateClientError_ciPKUnknown; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary AuthenticateClientResponseEs9_authenticateClientError_invalidTransactionId
 * @description
 * 
 * The TransactionID is not an open SM-DP+ session. SGP.22 v3.1 §5.6.3.
 * 
 * @constant
 * @type {number}
 */
export
const AuthenticateClientResponseEs9_authenticateClientError_invalidTransactionId: AuthenticateClientResponseEs9_authenticateClientError = 10; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary AuthenticateClientResponseEs9_authenticateClientError_invalidTransactionId
 * @description
 * 
 * The TransactionID is not an open SM-DP+ session. SGP.22 v3.1 §5.6.3.
 * 
 * @constant
 * @type {number}
 */
export
const invalidTransactionId: AuthenticateClientResponseEs9_authenticateClientError = AuthenticateClientResponseEs9_authenticateClientError_invalidTransactionId; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary AuthenticateClientResponseEs9_authenticateClientError_insufficientMemory
 * @description
 * 
 * EUICCInfo2 says the eUICC does not have enough free memory for the Profile.
 * SGP.22 v3.1 §5.6.3.
 * 
 * @constant
 * @type {number}
 */
export
const AuthenticateClientResponseEs9_authenticateClientError_insufficientMemory: AuthenticateClientResponseEs9_authenticateClientError = 11; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary AuthenticateClientResponseEs9_authenticateClientError_insufficientMemory
 * @description
 * 
 * EUICCInfo2 says the eUICC does not have enough free memory for the Profile.
 * SGP.22 v3.1 §5.6.3.
 * 
 * @constant
 * @type {number}
 */
export
const insufficientMemory: AuthenticateClientResponseEs9_authenticateClientError = AuthenticateClientResponseEs9_authenticateClientError_insufficientMemory; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary AuthenticateClientResponseEs9_authenticateClientError_downloadOrderExpired
 * @description
 * 
 * The download order is no longer valid. SGP.22 v3.1 §5.6.3. Values 12-17 are
 * reserved in this module.
 * 
 * @constant
 * @type {number}
 */
export
const AuthenticateClientResponseEs9_authenticateClientError_downloadOrderExpired: AuthenticateClientResponseEs9_authenticateClientError = 18; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary AuthenticateClientResponseEs9_authenticateClientError_downloadOrderExpired
 * @description
 * 
 * The download order is no longer valid. SGP.22 v3.1 §5.6.3. Values 12-17 are
 * reserved in this module.
 * 
 * @constant
 * @type {number}
 */
export
const downloadOrderExpired: AuthenticateClientResponseEs9_authenticateClientError = AuthenticateClientResponseEs9_authenticateClientError_downloadOrderExpired; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary AuthenticateClientResponseEs9_authenticateClientError_undefinedError
 * @description
 * 
 * AuthenticateClient failed for another reason. SGP.22 v3.1 §5.6.3.
 * 
 * @constant
 * @type {number}
 */
export
const AuthenticateClientResponseEs9_authenticateClientError_undefinedError: AuthenticateClientResponseEs9_authenticateClientError = 127; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary AuthenticateClientResponseEs9_authenticateClientError_undefinedError
 * @description
 * 
 * AuthenticateClient failed for another reason. SGP.22 v3.1 §5.6.3.
 * 
 * @constant
 * @type {number}
 */
export
const undefinedError: AuthenticateClientResponseEs9_authenticateClientError = AuthenticateClientResponseEs9_authenticateClientError_undefinedError; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_AuthenticateClientResponseEs9_authenticateClientError = $._decodeInteger;
export const _encode_AuthenticateClientResponseEs9_authenticateClientError = $._encodeInteger;


/* eslint-enable */
