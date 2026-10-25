/* eslint-disable */
import {
    type ASN1Element as _Element,
    type INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary AuthenticateClientResponseEsipa_authenticateClientErrorEsipa
 * @description
 *
 * Error alternative of ESipa.AuthenticateClient. If ES9+'.AuthenticateClient
 * or ES11'.AuthenticateClient returns an error, the eIM returns that same
 * error. pprNotAllowed is an additional SGP.32 code.
 *
 * SGP.32 v1.2 section 6.3.2.2 lists codes 1 through 11, then 50, 56, and 127.
 * SGP.32 v1.2 does not further define downloadOrderExpired.
 *
 * SGP.32 v1.2, sections 5.14.3 and 6.3.2.2.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AuthenticateClientResponseEsipa-authenticateClientErrorEsipa ::= INTEGER {
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
 *     insufficientMemory(11), -- Note: values 12-17 are reserved
 *     downloadOrderExpired(18),
 *     pprNotAllowed(50),
 *     eventIdUnknown(56),
 *     undefinedError(127)
 * }
 * ```
 */
export
type AuthenticateClientResponseEsipa_authenticateClientErrorEsipa = INTEGER;

/**
 * @summary AuthenticateClientResponseEsipa_authenticateClientErrorEsipa_eumCertificateInvalid
 * @description
 *
 * SGP.32 v1.2 section 5.14.3 uses the same code as ES9+'.AuthenticateClient,
 * which section 5.7.3 defines as identical to ES9+.AuthenticateClient in
 * SGP.22 section 5.6.3. SGP.32 v1.2 does not further define this integer.
 * @constant
 * @type {number}
 */
export
const AuthenticateClientResponseEsipa_authenticateClientErrorEsipa_eumCertificateInvalid: 1 = 1 satisfies AuthenticateClientResponseEsipa_authenticateClientErrorEsipa; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary AuthenticateClientResponseEsipa_authenticateClientErrorEsipa_eumCertificateInvalid
 * @description
 *
 * Same code as ES9+'.AuthenticateClient in SGP.22 section 5.6.3; SGP.32 v1.2
 * does not further define it (section 5.14.3).
 * @constant
 * @type {number}
 */
export
const eumCertificateInvalid: 1 = AuthenticateClientResponseEsipa_authenticateClientErrorEsipa_eumCertificateInvalid; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary AuthenticateClientResponseEsipa_authenticateClientErrorEsipa_eumCertificateExpired
 * @description
 *
 * SGP.32 v1.2 section 5.14.3 uses the same code as ES9+'.AuthenticateClient,
 * which section 5.7.3 defines as identical to ES9+.AuthenticateClient in
 * SGP.22 section 5.6.3. SGP.32 v1.2 does not further define this integer.
 * @constant
 * @type {number}
 */
export
const AuthenticateClientResponseEsipa_authenticateClientErrorEsipa_eumCertificateExpired: 2 = 2 satisfies AuthenticateClientResponseEsipa_authenticateClientErrorEsipa; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary AuthenticateClientResponseEsipa_authenticateClientErrorEsipa_eumCertificateExpired
 * @description
 *
 * Same code as ES9+'.AuthenticateClient in SGP.22 section 5.6.3; SGP.32 v1.2
 * does not further define it (section 5.14.3).
 * @constant
 * @type {number}
 */
export
const eumCertificateExpired: 2 = AuthenticateClientResponseEsipa_authenticateClientErrorEsipa_eumCertificateExpired; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary AuthenticateClientResponseEsipa_authenticateClientErrorEsipa_euiccCertificateInvalid
 * @description
 *
 * SGP.32 v1.2 section 5.14.3 uses the same code as ES9+'.AuthenticateClient,
 * which section 5.7.3 defines as identical to ES9+.AuthenticateClient in
 * SGP.22 section 5.6.3. SGP.32 v1.2 does not further define this integer.
 * @constant
 * @type {number}
 */
export
const AuthenticateClientResponseEsipa_authenticateClientErrorEsipa_euiccCertificateInvalid: 3 = 3 satisfies AuthenticateClientResponseEsipa_authenticateClientErrorEsipa; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary AuthenticateClientResponseEsipa_authenticateClientErrorEsipa_euiccCertificateInvalid
 * @description
 *
 * Same code as ES9+'.AuthenticateClient in SGP.22 section 5.6.3; SGP.32 v1.2
 * does not further define it (section 5.14.3).
 * @constant
 * @type {number}
 */
export
const euiccCertificateInvalid: 3 = AuthenticateClientResponseEsipa_authenticateClientErrorEsipa_euiccCertificateInvalid; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary AuthenticateClientResponseEsipa_authenticateClientErrorEsipa_euiccCertificateExpired
 * @description
 *
 * SGP.32 v1.2 section 5.14.3 uses the same code as ES9+'.AuthenticateClient,
 * which section 5.7.3 defines as identical to ES9+.AuthenticateClient in
 * SGP.22 section 5.6.3. SGP.32 v1.2 does not further define this integer.
 * @constant
 * @type {number}
 */
export
const AuthenticateClientResponseEsipa_authenticateClientErrorEsipa_euiccCertificateExpired: 4 = 4 satisfies AuthenticateClientResponseEsipa_authenticateClientErrorEsipa; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary AuthenticateClientResponseEsipa_authenticateClientErrorEsipa_euiccCertificateExpired
 * @description
 *
 * Same code as ES9+'.AuthenticateClient in SGP.22 section 5.6.3; SGP.32 v1.2
 * does not further define it (section 5.14.3).
 * @constant
 * @type {number}
 */
export
const euiccCertificateExpired: 4 = AuthenticateClientResponseEsipa_authenticateClientErrorEsipa_euiccCertificateExpired; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary AuthenticateClientResponseEsipa_authenticateClientErrorEsipa_euiccSignatureInvalid
 * @description
 *
 * SGP.32 v1.2 section 5.14.3 uses the same code as ES9+'.AuthenticateClient,
 * which section 5.7.3 defines as identical to ES9+.AuthenticateClient in
 * SGP.22 section 5.6.3. SGP.32 v1.2 does not further define this integer.
 * @constant
 * @type {number}
 */
export
const AuthenticateClientResponseEsipa_authenticateClientErrorEsipa_euiccSignatureInvalid: 5 = 5 satisfies AuthenticateClientResponseEsipa_authenticateClientErrorEsipa; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary AuthenticateClientResponseEsipa_authenticateClientErrorEsipa_euiccSignatureInvalid
 * @description
 *
 * Same code as ES9+'.AuthenticateClient in SGP.22 section 5.6.3; SGP.32 v1.2
 * does not further define it (section 5.14.3).
 * @constant
 * @type {number}
 */
export
const euiccSignatureInvalid: 5 = AuthenticateClientResponseEsipa_authenticateClientErrorEsipa_euiccSignatureInvalid; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary AuthenticateClientResponseEsipa_authenticateClientErrorEsipa_matchingIdRefused
 * @description
 *
 * SGP.32 v1.2 section 5.14.3 uses the same code as ES9+'.AuthenticateClient,
 * which section 5.7.3 defines as identical to ES9+.AuthenticateClient in
 * SGP.22 section 5.6.3. SGP.32 v1.2 does not further define this integer.
 * @constant
 * @type {number}
 */
export
const AuthenticateClientResponseEsipa_authenticateClientErrorEsipa_matchingIdRefused: 6 = 6 satisfies AuthenticateClientResponseEsipa_authenticateClientErrorEsipa; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary AuthenticateClientResponseEsipa_authenticateClientErrorEsipa_matchingIdRefused
 * @description
 *
 * Same code as ES9+'.AuthenticateClient in SGP.22 section 5.6.3; SGP.32 v1.2
 * does not further define it (section 5.14.3).
 * @constant
 * @type {number}
 */
export
const matchingIdRefused: 6 = AuthenticateClientResponseEsipa_authenticateClientErrorEsipa_matchingIdRefused; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary AuthenticateClientResponseEsipa_authenticateClientErrorEsipa_eidMismatch
 * @description
 *
 * SGP.32 v1.2 section 5.14.3 uses the same code as ES9+'.AuthenticateClient,
 * which section 5.7.3 defines as identical to ES9+.AuthenticateClient in
 * SGP.22 section 5.6.3. SGP.32 v1.2 does not further define this integer.
 * @constant
 * @type {number}
 */
export
const AuthenticateClientResponseEsipa_authenticateClientErrorEsipa_eidMismatch: 7 = 7 satisfies AuthenticateClientResponseEsipa_authenticateClientErrorEsipa; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary AuthenticateClientResponseEsipa_authenticateClientErrorEsipa_eidMismatch
 * @description
 *
 * Same code as ES9+'.AuthenticateClient in SGP.22 section 5.6.3; SGP.32 v1.2
 * does not further define it (section 5.14.3).
 * @constant
 * @type {number}
 */
export
const eidMismatch: 7 = AuthenticateClientResponseEsipa_authenticateClientErrorEsipa_eidMismatch; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary AuthenticateClientResponseEsipa_authenticateClientErrorEsipa_noEligibleProfile
 * @description
 *
 * SGP.32 v1.2 section 5.14.3 uses the same code as ES9+'.AuthenticateClient,
 * which section 5.7.3 defines as identical to ES9+.AuthenticateClient in
 * SGP.22 section 5.6.3. SGP.32 v1.2 does not further define this integer.
 * @constant
 * @type {number}
 */
export
const AuthenticateClientResponseEsipa_authenticateClientErrorEsipa_noEligibleProfile: 8 = 8 satisfies AuthenticateClientResponseEsipa_authenticateClientErrorEsipa; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary AuthenticateClientResponseEsipa_authenticateClientErrorEsipa_noEligibleProfile
 * @description
 *
 * Same code as ES9+'.AuthenticateClient in SGP.22 section 5.6.3; SGP.32 v1.2
 * does not further define it (section 5.14.3).
 * @constant
 * @type {number}
 */
export
const noEligibleProfile: 8 = AuthenticateClientResponseEsipa_authenticateClientErrorEsipa_noEligibleProfile; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary AuthenticateClientResponseEsipa_authenticateClientErrorEsipa_ciPKUnknown
 * @description
 *
 * SGP.32 v1.2 section 5.14.3 uses the same code as ES9+'.AuthenticateClient,
 * which section 5.7.3 defines as identical to ES9+.AuthenticateClient in
 * SGP.22 section 5.6.3. SGP.32 v1.2 does not further define this integer.
 * @constant
 * @type {number}
 */
export
const AuthenticateClientResponseEsipa_authenticateClientErrorEsipa_ciPKUnknown: 9 = 9 satisfies AuthenticateClientResponseEsipa_authenticateClientErrorEsipa; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary AuthenticateClientResponseEsipa_authenticateClientErrorEsipa_ciPKUnknown
 * @description
 *
 * Same code as ES9+'.AuthenticateClient in SGP.22 section 5.6.3; SGP.32 v1.2
 * does not further define it (section 5.14.3).
 * @constant
 * @type {number}
 */
export
const ciPKUnknown: 9 = AuthenticateClientResponseEsipa_authenticateClientErrorEsipa_ciPKUnknown; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary AuthenticateClientResponseEsipa_authenticateClientErrorEsipa_invalidTransactionId
 * @description
 *
 * SGP.32 v1.2 section 5.14.3 uses the same code as ES9+'.AuthenticateClient,
 * which section 5.7.3 defines as identical to ES9+.AuthenticateClient in
 * SGP.22 section 5.6.3. SGP.32 v1.2 does not further define this integer.
 * @constant
 * @type {number}
 */
export
const AuthenticateClientResponseEsipa_authenticateClientErrorEsipa_invalidTransactionId: 10 = 10 satisfies AuthenticateClientResponseEsipa_authenticateClientErrorEsipa; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary AuthenticateClientResponseEsipa_authenticateClientErrorEsipa_invalidTransactionId
 * @description
 *
 * Same code as ES9+'.AuthenticateClient in SGP.22 section 5.6.3; SGP.32 v1.2
 * does not further define it (section 5.14.3).
 * @constant
 * @type {number}
 */
export
const invalidTransactionId: 10 = AuthenticateClientResponseEsipa_authenticateClientErrorEsipa_invalidTransactionId; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary AuthenticateClientResponseEsipa_authenticateClientErrorEsipa_insufficientMemory
 * @description
 *
 * SGP.32 v1.2 section 5.14.3 uses the same code as ES9+'.AuthenticateClient,
 * which section 5.7.3 defines as identical to ES9+.AuthenticateClient in
 * SGP.22 section 5.6.3. SGP.32 v1.2 does not further define this integer.
 * @constant
 * @type {number}
 */
export
const AuthenticateClientResponseEsipa_authenticateClientErrorEsipa_insufficientMemory: 11 = 11 satisfies AuthenticateClientResponseEsipa_authenticateClientErrorEsipa; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary AuthenticateClientResponseEsipa_authenticateClientErrorEsipa_insufficientMemory
 * @description
 *
 * Same code as ES9+'.AuthenticateClient in SGP.22 section 5.6.3; SGP.32 v1.2
 * does not further define it (section 5.14.3).
 * @constant
 * @type {number}
 */
export
const insufficientMemory: 11 = AuthenticateClientResponseEsipa_authenticateClientErrorEsipa_insufficientMemory; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary AuthenticateClientResponseEsipa_authenticateClientErrorEsipa_downloadOrderExpired
 * @description
 *
 * SGP.32 v1.2 section 6.3.2.2 and Annex C omit this code, so v1.2 does not
 * further define it.
 * @constant
 * @type {number}
 */
export
const AuthenticateClientResponseEsipa_authenticateClientErrorEsipa_downloadOrderExpired: 18 = 18 satisfies AuthenticateClientResponseEsipa_authenticateClientErrorEsipa; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary AuthenticateClientResponseEsipa_authenticateClientErrorEsipa_downloadOrderExpired
 * @description
 *
 * SGP.32 v1.2 section 6.3.2.2 and Annex C omit this code.
 * @constant
 * @type {number}
 */
export
const downloadOrderExpired: 18 = AuthenticateClientResponseEsipa_authenticateClientErrorEsipa_downloadOrderExpired; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary AuthenticateClientResponseEsipa_authenticateClientErrorEsipa_pprNotAllowed
 * @description
 *
 * While verifying Profile Metadata, the eIM found a PPR disallowed by the
 * Rules Authorisation Table, or found PPR1 while an Operational Profile is
 * already installed. The IPA then cancels the RSP session with reason
 * pprNotAllowed.
 *
 * SGP.32 v1.2, sections 3.2.3.3 and 5.14.3.
 * @constant
 * @type {number}
 */
export
const AuthenticateClientResponseEsipa_authenticateClientErrorEsipa_pprNotAllowed: 50 = 50 satisfies AuthenticateClientResponseEsipa_authenticateClientErrorEsipa; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary AuthenticateClientResponseEsipa_authenticateClientErrorEsipa_pprNotAllowed
 * @description
 *
 * Profile Metadata PPR failed the eIM RAT check, or PPR1 is set while an
 * Operational Profile is installed (SGP.32 v1.2, sections 3.2.3.3 and 5.14.3).
 * @constant
 * @type {number}
 */
export
const pprNotAllowed: 50 = AuthenticateClientResponseEsipa_authenticateClientErrorEsipa_pprNotAllowed; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary AuthenticateClientResponseEsipa_authenticateClientErrorEsipa_eventIdUnknown
 * @description
 *
 * SGP.32 v1.2 lists this code on ESipa.AuthenticateClient and does not further
 * define it. Annex C.
 * @constant
 * @type {number}
 */
export
const AuthenticateClientResponseEsipa_authenticateClientErrorEsipa_eventIdUnknown: 56 = 56 satisfies AuthenticateClientResponseEsipa_authenticateClientErrorEsipa; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary AuthenticateClientResponseEsipa_authenticateClientErrorEsipa_eventIdUnknown
 * @description
 *
 * Listed on ESipa.AuthenticateClient; SGP.32 v1.2 does not further define it
 * (Annex C).
 * @constant
 * @type {number}
 */
export
const eventIdUnknown: 56 = AuthenticateClientResponseEsipa_authenticateClientErrorEsipa_eventIdUnknown; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary AuthenticateClientResponseEsipa_authenticateClientErrorEsipa_undefinedError
 * @description
 *
 * SGP.32 v1.2 lists this code on ESipa.AuthenticateClient and does not further
 * define it. Annex C.
 * @constant
 * @type {number}
 */
export
const AuthenticateClientResponseEsipa_authenticateClientErrorEsipa_undefinedError: 127 = 127 satisfies AuthenticateClientResponseEsipa_authenticateClientErrorEsipa; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary AuthenticateClientResponseEsipa_authenticateClientErrorEsipa_undefinedError
 * @description
 *
 * Listed on ESipa.AuthenticateClient; SGP.32 v1.2 does not further define it
 * (Annex C).
 * @constant
 * @type {number}
 */
export
const undefinedError: 127 = AuthenticateClientResponseEsipa_authenticateClientErrorEsipa_undefinedError; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_AuthenticateClientResponseEsipa_authenticateClientErrorEsipa: $.ASN1Decoder<AuthenticateClientResponseEsipa_authenticateClientErrorEsipa> = $._decodeInteger;
export const _encode_AuthenticateClientResponseEsipa_authenticateClientErrorEsipa: $.ASN1Encoder<AuthenticateClientResponseEsipa_authenticateClientErrorEsipa> = $._encodeInteger;


/* eslint-enable */
