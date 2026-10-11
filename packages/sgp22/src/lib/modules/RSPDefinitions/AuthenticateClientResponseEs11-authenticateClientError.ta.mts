/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary AuthenticateClientResponseEs11_authenticateClientError
 * @description
 * 
 * Why the SM-DS rejected ES11.AuthenticateClient. SGP.22 v3.1 §5.8.2.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AuthenticateClientResponseEs11-authenticateClientError ::= INTEGER {
 *     eumCertificateInvalid(1),
 *     eumCertificateExpired(2),
 *     euiccCertificateInvalid(3),
 *     euiccCertificateExpired(4),
 *     euiccSignatureInvalid(5),
 *     eventIdUnknown(6),
 *     invalidTransactionId(7),
 *     undefinedError(127)
 * }
 * ```
 */
export
type AuthenticateClientResponseEs11_authenticateClientError = INTEGER;

/**
 * @summary AuthenticateClientResponseEs11_authenticateClientError_eumCertificateInvalid
 * @description
 * 
 * CERT.EUM.SIG did not verify. SGP.22 v3.1 §5.8.2.
 * 
 * @constant
 * @type {number}
 */
export
const AuthenticateClientResponseEs11_authenticateClientError_eumCertificateInvalid: AuthenticateClientResponseEs11_authenticateClientError = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary AuthenticateClientResponseEs11_authenticateClientError_eumCertificateInvalid
 * @description
 * 
 * CERT.EUM.SIG did not verify. SGP.22 v3.1 §5.8.2.
 * 
 * @constant
 * @type {number}
 */
export
const eumCertificateInvalid: AuthenticateClientResponseEs11_authenticateClientError = AuthenticateClientResponseEs11_authenticateClientError_eumCertificateInvalid; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary AuthenticateClientResponseEs11_authenticateClientError_eumCertificateExpired
 * @description
 * 
 * CERT.EUM.SIG is outside its validity. SGP.22 v3.1 §5.8.2.
 * 
 * @constant
 * @type {number}
 */
export
const AuthenticateClientResponseEs11_authenticateClientError_eumCertificateExpired: AuthenticateClientResponseEs11_authenticateClientError = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary AuthenticateClientResponseEs11_authenticateClientError_eumCertificateExpired
 * @description
 * 
 * CERT.EUM.SIG is outside its validity. SGP.22 v3.1 §5.8.2.
 * 
 * @constant
 * @type {number}
 */
export
const eumCertificateExpired: AuthenticateClientResponseEs11_authenticateClientError = AuthenticateClientResponseEs11_authenticateClientError_eumCertificateExpired; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary AuthenticateClientResponseEs11_authenticateClientError_euiccCertificateInvalid
 * @description
 * 
 * CERT.EUICC.SIG did not verify. SGP.22 v3.1 §5.8.2.
 * 
 * @constant
 * @type {number}
 */
export
const AuthenticateClientResponseEs11_authenticateClientError_euiccCertificateInvalid: AuthenticateClientResponseEs11_authenticateClientError = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary AuthenticateClientResponseEs11_authenticateClientError_euiccCertificateInvalid
 * @description
 * 
 * CERT.EUICC.SIG did not verify. SGP.22 v3.1 §5.8.2.
 * 
 * @constant
 * @type {number}
 */
export
const euiccCertificateInvalid: AuthenticateClientResponseEs11_authenticateClientError = AuthenticateClientResponseEs11_authenticateClientError_euiccCertificateInvalid; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary AuthenticateClientResponseEs11_authenticateClientError_euiccCertificateExpired
 * @description
 * 
 * CERT.EUICC.SIG is outside its validity. SGP.22 v3.1 §5.8.2.
 * 
 * @constant
 * @type {number}
 */
export
const AuthenticateClientResponseEs11_authenticateClientError_euiccCertificateExpired: AuthenticateClientResponseEs11_authenticateClientError = 4; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary AuthenticateClientResponseEs11_authenticateClientError_euiccCertificateExpired
 * @description
 * 
 * CERT.EUICC.SIG is outside its validity. SGP.22 v3.1 §5.8.2.
 * 
 * @constant
 * @type {number}
 */
export
const euiccCertificateExpired: AuthenticateClientResponseEs11_authenticateClientError = AuthenticateClientResponseEs11_authenticateClientError_euiccCertificateExpired; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary AuthenticateClientResponseEs11_authenticateClientError_euiccSignatureInvalid
 * @description
 * 
 * `euiccSignature1` did not verify. SGP.22 v3.1 §5.8.2.
 * 
 * @constant
 * @type {number}
 */
export
const AuthenticateClientResponseEs11_authenticateClientError_euiccSignatureInvalid: AuthenticateClientResponseEs11_authenticateClientError = 5; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary AuthenticateClientResponseEs11_authenticateClientError_euiccSignatureInvalid
 * @description
 * 
 * `euiccSignature1` did not verify. SGP.22 v3.1 §5.8.2.
 * 
 * @constant
 * @type {number}
 */
export
const euiccSignatureInvalid: AuthenticateClientResponseEs11_authenticateClientError = AuthenticateClientResponseEs11_authenticateClientError_euiccSignatureInvalid; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary AuthenticateClientResponseEs11_authenticateClientError_eventIdUnknown
 * @description
 * 
 * The MatchingID is not an event identifier this SM-DS holds for this eUICC.
 * SGP.22 v3.1 §5.8.2.
 * 
 * @constant
 * @type {number}
 */
export
const AuthenticateClientResponseEs11_authenticateClientError_eventIdUnknown: AuthenticateClientResponseEs11_authenticateClientError = 6; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary AuthenticateClientResponseEs11_authenticateClientError_eventIdUnknown
 * @description
 * 
 * The MatchingID is not an event identifier this SM-DS holds for this eUICC.
 * SGP.22 v3.1 §5.8.2.
 * 
 * @constant
 * @type {number}
 */
export
const eventIdUnknown: AuthenticateClientResponseEs11_authenticateClientError = AuthenticateClientResponseEs11_authenticateClientError_eventIdUnknown; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary AuthenticateClientResponseEs11_authenticateClientError_invalidTransactionId
 * @description
 * 
 * The TransactionID is not an open SM-DS session. SGP.22 v3.1 §5.8.2.
 * 
 * @constant
 * @type {number}
 */
export
const AuthenticateClientResponseEs11_authenticateClientError_invalidTransactionId: AuthenticateClientResponseEs11_authenticateClientError = 7; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary AuthenticateClientResponseEs11_authenticateClientError_invalidTransactionId
 * @description
 * 
 * The TransactionID is not an open SM-DS session. SGP.22 v3.1 §5.8.2.
 * 
 * @constant
 * @type {number}
 */
export
const invalidTransactionId: AuthenticateClientResponseEs11_authenticateClientError = AuthenticateClientResponseEs11_authenticateClientError_invalidTransactionId; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary AuthenticateClientResponseEs11_authenticateClientError_undefinedError
 * @description
 * 
 * ES11 AuthenticateClient failed for another reason. SGP.22 v3.1 §5.8.2.
 * 
 * @constant
 * @type {number}
 */
export
const AuthenticateClientResponseEs11_authenticateClientError_undefinedError: AuthenticateClientResponseEs11_authenticateClientError = 127; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary AuthenticateClientResponseEs11_authenticateClientError_undefinedError
 * @description
 * 
 * ES11 AuthenticateClient failed for another reason. SGP.22 v3.1 §5.8.2.
 * 
 * @constant
 * @type {number}
 */
export
const undefinedError: AuthenticateClientResponseEs11_authenticateClientError = AuthenticateClientResponseEs11_authenticateClientError_undefinedError; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_AuthenticateClientResponseEs11_authenticateClientError = $._decodeInteger;
export const _encode_AuthenticateClientResponseEs11_authenticateClientError = $._encodeInteger;


/* eslint-enable */
