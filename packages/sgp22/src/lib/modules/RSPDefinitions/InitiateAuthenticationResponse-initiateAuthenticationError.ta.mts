/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary InitiateAuthenticationResponse_initiateAuthenticationError
 * @description
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
 * @constant
 * @type {number}
 */
export
const InitiateAuthenticationResponse_initiateAuthenticationError_invalidDpAddress: InitiateAuthenticationResponse_initiateAuthenticationError = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary InitiateAuthenticationResponse_initiateAuthenticationError_invalidDpAddress
 * @constant
 * @type {number}
 */
export
const invalidDpAddress: InitiateAuthenticationResponse_initiateAuthenticationError = InitiateAuthenticationResponse_initiateAuthenticationError_invalidDpAddress; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary InitiateAuthenticationResponse_initiateAuthenticationError_euiccVersionNotSupportedByDp
 * @constant
 * @type {number}
 */
export
const InitiateAuthenticationResponse_initiateAuthenticationError_euiccVersionNotSupportedByDp: InitiateAuthenticationResponse_initiateAuthenticationError = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary InitiateAuthenticationResponse_initiateAuthenticationError_euiccVersionNotSupportedByDp
 * @constant
 * @type {number}
 */
export
const euiccVersionNotSupportedByDp: InitiateAuthenticationResponse_initiateAuthenticationError = InitiateAuthenticationResponse_initiateAuthenticationError_euiccVersionNotSupportedByDp; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary InitiateAuthenticationResponse_initiateAuthenticationError_ciPKIdNotSupported
 * @constant
 * @type {number}
 */
export
const InitiateAuthenticationResponse_initiateAuthenticationError_ciPKIdNotSupported: InitiateAuthenticationResponse_initiateAuthenticationError = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary InitiateAuthenticationResponse_initiateAuthenticationError_ciPKIdNotSupported
 * @constant
 * @type {number}
 */
export
const ciPKIdNotSupported: InitiateAuthenticationResponse_initiateAuthenticationError = InitiateAuthenticationResponse_initiateAuthenticationError_ciPKIdNotSupported; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_InitiateAuthenticationResponse_initiateAuthenticationError = $._decodeInteger;
export const _encode_InitiateAuthenticationResponse_initiateAuthenticationError = $._encodeInteger;


/* eslint-enable */
