/* eslint-disable */
import {
    type ASN1Element as _Element,
    type INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary InitiateAuthenticationResponse_initiateAuthenticationError
 * @description
 * 
 * ASN.1 error codes of InitiateAuthentication. SGP.22 v3.1 §5.6.1.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * InitiateAuthenticationResponse-initiateAuthenticationError ::= INTEGER {
 *     invalidDpAddress(1),
 *     euiccVersionNotSupportedByDp(2),
 *     ciPKIdNotSupported(3)
 * }
 * ```
 */
export
type InitiateAuthenticationResponse_initiateAuthenticationError = INTEGER;

/**
 * @summary InitiateAuthenticationResponse_initiateAuthenticationError_invalidDpAddress
 * @description
 * 
 * The SM-DP+ address does not match this server. v3.1 status: SM-DP+ Address -
 * Refused (8.8.1/3.8). SGP.22 v3.1 §5.6.1.
 * 
 * @constant
 * @type {number}
 */
export
const InitiateAuthenticationResponse_initiateAuthenticationError_invalidDpAddress: 1 = 1 satisfies InitiateAuthenticationResponse_initiateAuthenticationError; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary InitiateAuthenticationResponse_initiateAuthenticationError_invalidDpAddress
 * @description
 * 
 * The SM-DP+ address does not match this server. v3.1 status: SM-DP+ Address -
 * Refused (8.8.1/3.8). SGP.22 v3.1 §5.6.1.
 * 
 * @constant
 * @type {number}
 */
export
const invalidDpAddress: 1 = InitiateAuthenticationResponse_initiateAuthenticationError_invalidDpAddress; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary InitiateAuthenticationResponse_initiateAuthenticationError_euiccVersionNotSupportedByDp
 * @description
 * 
 * The SM-DP+ does not support the eUICC SGP.22 version from `EUICCInfo1`.
 * SGP.22 v3.1 §5.6.1.
 * 
 * @constant
 * @type {number}
 */
export
const InitiateAuthenticationResponse_initiateAuthenticationError_euiccVersionNotSupportedByDp: 2 = 2 satisfies InitiateAuthenticationResponse_initiateAuthenticationError; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary InitiateAuthenticationResponse_initiateAuthenticationError_euiccVersionNotSupportedByDp
 * @description
 * 
 * The SM-DP+ does not support the eUICC SGP.22 version from `EUICCInfo1`.
 * SGP.22 v3.1 §5.6.1.
 * 
 * @constant
 * @type {number}
 */
export
const euiccVersionNotSupportedByDp: 2 = InitiateAuthenticationResponse_initiateAuthenticationError_euiccVersionNotSupportedByDp; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary InitiateAuthenticationResponse_initiateAuthenticationError_ciPKIdNotSupported
 * @description
 * 
 * The SM-DP+ supports none of the CI public keys the eUICC offered for
 * verification or signing. v3.1 status: Security configuration - Unsupported
 * (8.8.2/3.1). SGP.22 v3.1 §5.6.1.
 * 
 * @constant
 * @type {number}
 */
export
const InitiateAuthenticationResponse_initiateAuthenticationError_ciPKIdNotSupported: 3 = 3 satisfies InitiateAuthenticationResponse_initiateAuthenticationError; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary InitiateAuthenticationResponse_initiateAuthenticationError_ciPKIdNotSupported
 * @description
 * 
 * The SM-DP+ supports none of the CI public keys the eUICC offered for
 * verification or signing. v3.1 status: Security configuration - Unsupported
 * (8.8.2/3.1). SGP.22 v3.1 §5.6.1.
 * 
 * @constant
 * @type {number}
 */
export
const ciPKIdNotSupported: 3 = InitiateAuthenticationResponse_initiateAuthenticationError_ciPKIdNotSupported; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_InitiateAuthenticationResponse_initiateAuthenticationError: $.ASN1Decoder<INTEGER> = $._decodeInteger;
export const _encode_InitiateAuthenticationResponse_initiateAuthenticationError: $.ASN1Encoder<INTEGER> = $._encodeInteger;


/* eslint-enable */
