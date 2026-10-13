/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary InitiateAuthenticationResponseEsipa_initiateAuthenticationErrorEsipa
 * @description
 * 
 * ESipa.InitiateAuthentication error. `invalidDpAddress`,
 * `euiccVersionNotSupportedByDp`, `ciPKIdNotSupported`, and `undefinedError`
 * are the same as the same-named errors of ES9+'.InitiateAuthentication and
 * ES11'.InitiateAuthentication, as defined in SGP.22. `smdpAddressMismatch`,
 * `smdpOidMismatch`, and `invalidEimTransactionId` are defined in SGP.32
 * section 5.14.1 Table 9a. SGP.32 v1.2, section 5.14.1.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * InitiateAuthenticationResponseEsipa-initiateAuthenticationErrorEsipa ::= INTEGER {
 *     invalidDpAddress(1),
 *     euiccVersionNotSupportedByDp(2),
 *     ciPKIdNotSupported(3),
 *     smdpAddressMismatch(50),
 *     smdpOidMismatch(51),
 *     invalidEimTransactionId(52),
 *     undefinedError(127)
 * }
 * ```
 */
export
type InitiateAuthenticationResponseEsipa_initiateAuthenticationErrorEsipa = INTEGER;

/**
 * @summary InitiateAuthenticationResponseEsipa_initiateAuthenticationErrorEsipa_invalidDpAddress
 * @description
 * SGP.32 v1.2 section 5.14.1 states that this code is the same as the
 * same-named error of ES9+'.InitiateAuthentication and
 * ES11'.InitiateAuthentication, as defined in SGP.22. SGP.32 v1.2 does not
 * further define the condition that produces it.
 * @constant
 * @type {number}
 */
export
const InitiateAuthenticationResponseEsipa_initiateAuthenticationErrorEsipa_invalidDpAddress: InitiateAuthenticationResponseEsipa_initiateAuthenticationErrorEsipa = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary InitiateAuthenticationResponseEsipa_initiateAuthenticationErrorEsipa_invalidDpAddress
 * @description
 * Same as the same-named ES9+'.InitiateAuthentication and
 * ES11'.InitiateAuthentication error, as defined in SGP.22. SGP.32 v1.2,
 * section 5.14.1.
 * @constant
 * @type {number}
 */
export
const invalidDpAddress: InitiateAuthenticationResponseEsipa_initiateAuthenticationErrorEsipa = InitiateAuthenticationResponseEsipa_initiateAuthenticationErrorEsipa_invalidDpAddress; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary InitiateAuthenticationResponseEsipa_initiateAuthenticationErrorEsipa_euiccVersionNotSupportedByDp
 * @description
 * SGP.32 v1.2 section 5.14.1 states that this code is the same as the
 * same-named error of ES9+'.InitiateAuthentication and
 * ES11'.InitiateAuthentication, as defined in SGP.22. SGP.32 v1.2 does not
 * further define the condition that produces it.
 * @constant
 * @type {number}
 */
export
const InitiateAuthenticationResponseEsipa_initiateAuthenticationErrorEsipa_euiccVersionNotSupportedByDp: InitiateAuthenticationResponseEsipa_initiateAuthenticationErrorEsipa = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary InitiateAuthenticationResponseEsipa_initiateAuthenticationErrorEsipa_euiccVersionNotSupportedByDp
 * @description
 * Same as the same-named ES9+'.InitiateAuthentication and
 * ES11'.InitiateAuthentication error, as defined in SGP.22. SGP.32 v1.2,
 * section 5.14.1.
 * @constant
 * @type {number}
 */
export
const euiccVersionNotSupportedByDp: InitiateAuthenticationResponseEsipa_initiateAuthenticationErrorEsipa = InitiateAuthenticationResponseEsipa_initiateAuthenticationErrorEsipa_euiccVersionNotSupportedByDp; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary InitiateAuthenticationResponseEsipa_initiateAuthenticationErrorEsipa_ciPKIdNotSupported
 * @description
 * SGP.32 v1.2 section 5.14.1 states that this code is the same as the
 * same-named error of ES9+'.InitiateAuthentication and
 * ES11'.InitiateAuthentication, as defined in SGP.22. SGP.32 v1.2 does not
 * further define the condition that produces it.
 * @constant
 * @type {number}
 */
export
const InitiateAuthenticationResponseEsipa_initiateAuthenticationErrorEsipa_ciPKIdNotSupported: InitiateAuthenticationResponseEsipa_initiateAuthenticationErrorEsipa = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary InitiateAuthenticationResponseEsipa_initiateAuthenticationErrorEsipa_ciPKIdNotSupported
 * @description
 * Same as the same-named ES9+'.InitiateAuthentication and
 * ES11'.InitiateAuthentication error, as defined in SGP.22. SGP.32 v1.2,
 * section 5.14.1.
 * @constant
 * @type {number}
 */
export
const ciPKIdNotSupported: InitiateAuthenticationResponseEsipa_initiateAuthenticationErrorEsipa = InitiateAuthenticationResponseEsipa_initiateAuthenticationErrorEsipa_ciPKIdNotSupported; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary InitiateAuthenticationResponseEsipa_initiateAuthenticationErrorEsipa_smdpAddressMismatch
 * @description
 * The `serverAddress` in `serverSigned1` does not match the `smdpAddress` the
 * eIM sent to ES9+' or ES11'. The eIM performs this check when that address
 * did not come from the IPA. Maps from status 8.8.1 SM-DP+ Address / 3.10
 * Invalid Association. SGP.32 v1.2, section 5.14.1.
 * @constant
 * @type {number}
 */
export
const InitiateAuthenticationResponseEsipa_initiateAuthenticationErrorEsipa_smdpAddressMismatch: InitiateAuthenticationResponseEsipa_initiateAuthenticationErrorEsipa = 50; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary InitiateAuthenticationResponseEsipa_initiateAuthenticationErrorEsipa_smdpAddressMismatch
 * @description
 * `serverAddress` in `serverSigned1` does not match the address the eIM sent
 * to the RSP Server. SGP.32 v1.2, section 5.14.1.
 * @constant
 * @type {number}
 */
export
const smdpAddressMismatch: InitiateAuthenticationResponseEsipa_initiateAuthenticationErrorEsipa = InitiateAuthenticationResponseEsipa_initiateAuthenticationErrorEsipa_smdpAddressMismatch; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary InitiateAuthenticationResponseEsipa_initiateAuthenticationErrorEsipa_smdpOidMismatch
 * @description
 * The SM-DP+ OID in an Activation Code does not match the SM-DP+ OID in
 * `serverCertificate`. The eIM performs this check when the Activation Code
 * contains that OID and is available to the eIM. Maps from status 8.8 SM-DP+ /
 * 3.10 Invalid Association. SGP.32 v1.2, section 5.14.1.
 * @constant
 * @type {number}
 */
export
const InitiateAuthenticationResponseEsipa_initiateAuthenticationErrorEsipa_smdpOidMismatch: InitiateAuthenticationResponseEsipa_initiateAuthenticationErrorEsipa = 51; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary InitiateAuthenticationResponseEsipa_initiateAuthenticationErrorEsipa_smdpOidMismatch
 * @description
 * The Activation Code SM-DP+ OID does not match the OID in the SM-DP+
 * certificate. SGP.32 v1.2, section 5.14.1.
 * @constant
 * @type {number}
 */
export
const smdpOidMismatch: InitiateAuthenticationResponseEsipa_initiateAuthenticationErrorEsipa = InitiateAuthenticationResponseEsipa_initiateAuthenticationErrorEsipa_smdpOidMismatch; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary InitiateAuthenticationResponseEsipa_initiateAuthenticationErrorEsipa_invalidEimTransactionId
 * @description
 * The received `eimTransactionId` is not valid. The eIM returns this when it
 * cannot identify a session by that value. Maps from status 8.31.2 eIM
 * TransactionId / 3.10 Invalid Association. SGP.32 v1.2, section 5.14.1.
 * @constant
 * @type {number}
 */
export
const InitiateAuthenticationResponseEsipa_initiateAuthenticationErrorEsipa_invalidEimTransactionId: InitiateAuthenticationResponseEsipa_initiateAuthenticationErrorEsipa = 52; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary InitiateAuthenticationResponseEsipa_initiateAuthenticationErrorEsipa_invalidEimTransactionId
 * @description
 * The received `eimTransactionId` does not identify a session at the eIM.
 * SGP.32 v1.2, section 5.14.1.
 * @constant
 * @type {number}
 */
export
const invalidEimTransactionId: InitiateAuthenticationResponseEsipa_initiateAuthenticationErrorEsipa = InitiateAuthenticationResponseEsipa_initiateAuthenticationErrorEsipa_invalidEimTransactionId; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary InitiateAuthenticationResponseEsipa_initiateAuthenticationErrorEsipa_undefinedError
 * @description
 * SGP.22 v3.1 section 6.6.1.1 maps `undefinedError(127)` to the status code
 * "Function provider - Execution Error". SGP.32 v1.2 section 5.14.1 includes
 * this code among those that are the same as ES9+'.InitiateAuthentication and
 * ES11'.InitiateAuthentication.
 * @constant
 * @type {number}
 */
export
const InitiateAuthenticationResponseEsipa_initiateAuthenticationErrorEsipa_undefinedError: InitiateAuthenticationResponseEsipa_initiateAuthenticationErrorEsipa = 127; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary InitiateAuthenticationResponseEsipa_initiateAuthenticationErrorEsipa_undefinedError
 * @description
 * Same as ES9+' / ES11' `undefinedError(127)`. SGP.22 v3.1 section 6.6.1.1
 * maps it to "Function provider - Execution Error". SGP.32 v1.2, section
 * 5.14.1.
 * @constant
 * @type {number}
 */
export
const undefinedError: InitiateAuthenticationResponseEsipa_initiateAuthenticationErrorEsipa = InitiateAuthenticationResponseEsipa_initiateAuthenticationErrorEsipa_undefinedError; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_InitiateAuthenticationResponseEsipa_initiateAuthenticationErrorEsipa: $.ASN1Decoder<InitiateAuthenticationResponseEsipa_initiateAuthenticationErrorEsipa> = $._decodeInteger;
export const _encode_InitiateAuthenticationResponseEsipa_initiateAuthenticationErrorEsipa: $.ASN1Encoder<InitiateAuthenticationResponseEsipa_initiateAuthenticationErrorEsipa> = $._encodeInteger;


/* eslint-enable */
