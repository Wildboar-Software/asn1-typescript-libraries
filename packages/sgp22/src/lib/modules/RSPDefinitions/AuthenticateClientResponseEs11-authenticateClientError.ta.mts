/* eslint-disable */
import {
    type ASN1Element as _Element,
    type INTEGER
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
const AuthenticateClientResponseEs11_authenticateClientError_eumCertificateInvalid = 1 satisfies AuthenticateClientResponseEs11_authenticateClientError; /* LONG_NAMED_INTEGER_VALUE */

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
const eumCertificateInvalid = AuthenticateClientResponseEs11_authenticateClientError_eumCertificateInvalid satisfies AuthenticateClientResponseEs11_authenticateClientError; /* SHORT_NAMED_INTEGER_VALUE */

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
const AuthenticateClientResponseEs11_authenticateClientError_eumCertificateExpired = 2 satisfies AuthenticateClientResponseEs11_authenticateClientError; /* LONG_NAMED_INTEGER_VALUE */

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
const eumCertificateExpired = AuthenticateClientResponseEs11_authenticateClientError_eumCertificateExpired satisfies AuthenticateClientResponseEs11_authenticateClientError; /* SHORT_NAMED_INTEGER_VALUE */

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
const AuthenticateClientResponseEs11_authenticateClientError_euiccCertificateInvalid = 3 satisfies AuthenticateClientResponseEs11_authenticateClientError; /* LONG_NAMED_INTEGER_VALUE */

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
const euiccCertificateInvalid = AuthenticateClientResponseEs11_authenticateClientError_euiccCertificateInvalid satisfies AuthenticateClientResponseEs11_authenticateClientError; /* SHORT_NAMED_INTEGER_VALUE */

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
const AuthenticateClientResponseEs11_authenticateClientError_euiccCertificateExpired = 4 satisfies AuthenticateClientResponseEs11_authenticateClientError; /* LONG_NAMED_INTEGER_VALUE */

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
const euiccCertificateExpired = AuthenticateClientResponseEs11_authenticateClientError_euiccCertificateExpired satisfies AuthenticateClientResponseEs11_authenticateClientError; /* SHORT_NAMED_INTEGER_VALUE */

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
const AuthenticateClientResponseEs11_authenticateClientError_euiccSignatureInvalid = 5 satisfies AuthenticateClientResponseEs11_authenticateClientError; /* LONG_NAMED_INTEGER_VALUE */

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
const euiccSignatureInvalid = AuthenticateClientResponseEs11_authenticateClientError_euiccSignatureInvalid satisfies AuthenticateClientResponseEs11_authenticateClientError; /* SHORT_NAMED_INTEGER_VALUE */

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
const AuthenticateClientResponseEs11_authenticateClientError_eventIdUnknown = 6 satisfies AuthenticateClientResponseEs11_authenticateClientError; /* LONG_NAMED_INTEGER_VALUE */

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
const eventIdUnknown = AuthenticateClientResponseEs11_authenticateClientError_eventIdUnknown satisfies AuthenticateClientResponseEs11_authenticateClientError; /* SHORT_NAMED_INTEGER_VALUE */

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
const AuthenticateClientResponseEs11_authenticateClientError_invalidTransactionId = 7 satisfies AuthenticateClientResponseEs11_authenticateClientError; /* LONG_NAMED_INTEGER_VALUE */

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
const invalidTransactionId = AuthenticateClientResponseEs11_authenticateClientError_invalidTransactionId satisfies AuthenticateClientResponseEs11_authenticateClientError; /* SHORT_NAMED_INTEGER_VALUE */

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
const AuthenticateClientResponseEs11_authenticateClientError_undefinedError = 127 satisfies AuthenticateClientResponseEs11_authenticateClientError; /* LONG_NAMED_INTEGER_VALUE */

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
const undefinedError = AuthenticateClientResponseEs11_authenticateClientError_undefinedError satisfies AuthenticateClientResponseEs11_authenticateClientError; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_AuthenticateClientResponseEs11_authenticateClientError = $._decodeInteger;
export const _encode_AuthenticateClientResponseEs11_authenticateClientError = $._encodeInteger;


/* eslint-enable */
