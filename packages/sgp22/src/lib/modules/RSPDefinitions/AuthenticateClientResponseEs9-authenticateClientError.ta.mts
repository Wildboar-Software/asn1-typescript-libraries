/* eslint-disable */
import {
    type ASN1Element as _Element,
    type INTEGER
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
const AuthenticateClientResponseEs9_authenticateClientError_eumCertificateInvalid: 1 = 1 satisfies AuthenticateClientResponseEs9_authenticateClientError; /* LONG_NAMED_INTEGER_VALUE */

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
const eumCertificateInvalid: 1 = AuthenticateClientResponseEs9_authenticateClientError_eumCertificateInvalid; /* SHORT_NAMED_INTEGER_VALUE */

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
const AuthenticateClientResponseEs9_authenticateClientError_eumCertificateExpired: 2 = 2 satisfies AuthenticateClientResponseEs9_authenticateClientError; /* LONG_NAMED_INTEGER_VALUE */

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
const eumCertificateExpired: 2 = AuthenticateClientResponseEs9_authenticateClientError_eumCertificateExpired; /* SHORT_NAMED_INTEGER_VALUE */

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
const AuthenticateClientResponseEs9_authenticateClientError_euiccCertificateInvalid: 3 = 3 satisfies AuthenticateClientResponseEs9_authenticateClientError; /* LONG_NAMED_INTEGER_VALUE */

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
const euiccCertificateInvalid: 3 = AuthenticateClientResponseEs9_authenticateClientError_euiccCertificateInvalid; /* SHORT_NAMED_INTEGER_VALUE */

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
const AuthenticateClientResponseEs9_authenticateClientError_euiccCertificateExpired: 4 = 4 satisfies AuthenticateClientResponseEs9_authenticateClientError; /* LONG_NAMED_INTEGER_VALUE */

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
const euiccCertificateExpired: 4 = AuthenticateClientResponseEs9_authenticateClientError_euiccCertificateExpired; /* SHORT_NAMED_INTEGER_VALUE */

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
const AuthenticateClientResponseEs9_authenticateClientError_euiccSignatureInvalid: 5 = 5 satisfies AuthenticateClientResponseEs9_authenticateClientError; /* LONG_NAMED_INTEGER_VALUE */

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
const euiccSignatureInvalid: 5 = AuthenticateClientResponseEs9_authenticateClientError_euiccSignatureInvalid; /* SHORT_NAMED_INTEGER_VALUE */

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
const AuthenticateClientResponseEs9_authenticateClientError_matchingIdRefused: 6 = 6 satisfies AuthenticateClientResponseEs9_authenticateClientError; /* LONG_NAMED_INTEGER_VALUE */

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
const matchingIdRefused: 6 = AuthenticateClientResponseEs9_authenticateClientError_matchingIdRefused; /* SHORT_NAMED_INTEGER_VALUE */

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
const AuthenticateClientResponseEs9_authenticateClientError_eidMismatch: 7 = 7 satisfies AuthenticateClientResponseEs9_authenticateClientError; /* LONG_NAMED_INTEGER_VALUE */

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
const eidMismatch: 7 = AuthenticateClientResponseEs9_authenticateClientError_eidMismatch; /* SHORT_NAMED_INTEGER_VALUE */

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
const AuthenticateClientResponseEs9_authenticateClientError_noEligibleProfile: 8 = 8 satisfies AuthenticateClientResponseEs9_authenticateClientError; /* LONG_NAMED_INTEGER_VALUE */

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
const noEligibleProfile: 8 = AuthenticateClientResponseEs9_authenticateClientError_noEligibleProfile; /* SHORT_NAMED_INTEGER_VALUE */

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
const AuthenticateClientResponseEs9_authenticateClientError_ciPKUnknown: 9 = 9 satisfies AuthenticateClientResponseEs9_authenticateClientError; /* LONG_NAMED_INTEGER_VALUE */

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
const ciPKUnknown: 9 = AuthenticateClientResponseEs9_authenticateClientError_ciPKUnknown; /* SHORT_NAMED_INTEGER_VALUE */

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
const AuthenticateClientResponseEs9_authenticateClientError_invalidTransactionId: 10 = 10 satisfies AuthenticateClientResponseEs9_authenticateClientError; /* LONG_NAMED_INTEGER_VALUE */

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
const invalidTransactionId: 10 = AuthenticateClientResponseEs9_authenticateClientError_invalidTransactionId; /* SHORT_NAMED_INTEGER_VALUE */

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
const AuthenticateClientResponseEs9_authenticateClientError_insufficientMemory: 11 = 11 satisfies AuthenticateClientResponseEs9_authenticateClientError; /* LONG_NAMED_INTEGER_VALUE */

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
const insufficientMemory: 11 = AuthenticateClientResponseEs9_authenticateClientError_insufficientMemory; /* SHORT_NAMED_INTEGER_VALUE */

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
const AuthenticateClientResponseEs9_authenticateClientError_downloadOrderExpired: 18 = 18 satisfies AuthenticateClientResponseEs9_authenticateClientError; /* LONG_NAMED_INTEGER_VALUE */

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
const downloadOrderExpired: 18 = AuthenticateClientResponseEs9_authenticateClientError_downloadOrderExpired; /* SHORT_NAMED_INTEGER_VALUE */

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
const AuthenticateClientResponseEs9_authenticateClientError_undefinedError: 127 = 127 satisfies AuthenticateClientResponseEs9_authenticateClientError; /* LONG_NAMED_INTEGER_VALUE */

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
const undefinedError: 127 = AuthenticateClientResponseEs9_authenticateClientError_undefinedError; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_AuthenticateClientResponseEs9_authenticateClientError: $.ASN1Decoder<INTEGER> = $._decodeInteger;
export const _encode_AuthenticateClientResponseEs9_authenticateClientError: $.ASN1Encoder<INTEGER> = $._encodeInteger;


/* eslint-enable */
