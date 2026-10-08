/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary LoadCRLResponseError
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * LoadCRLResponseError  ::=  INTEGER {invalidSignature(1), invalidCRLFormat(2), notEnoughMemorySpace(3), verificationKeyNotFound(4), fresherCrlAlreadyLoaded(5), baseCrlMissing(6), undefinedError(127)}
 * ```
 */
export
type LoadCRLResponseError = INTEGER;

/**
 * @summary LoadCRLResponseError_invalidSignature
 * @constant
 * @type {number}
 */
export
const LoadCRLResponseError_invalidSignature: LoadCRLResponseError = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary LoadCRLResponseError_invalidSignature
 * @constant
 * @type {number}
 */
export
const invalidSignature: LoadCRLResponseError = LoadCRLResponseError_invalidSignature; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary LoadCRLResponseError_invalidCRLFormat
 * @constant
 * @type {number}
 */
export
const LoadCRLResponseError_invalidCRLFormat: LoadCRLResponseError = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary LoadCRLResponseError_invalidCRLFormat
 * @constant
 * @type {number}
 */
export
const invalidCRLFormat: LoadCRLResponseError = LoadCRLResponseError_invalidCRLFormat; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary LoadCRLResponseError_notEnoughMemorySpace
 * @constant
 * @type {number}
 */
export
const LoadCRLResponseError_notEnoughMemorySpace: LoadCRLResponseError = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary LoadCRLResponseError_notEnoughMemorySpace
 * @constant
 * @type {number}
 */
export
const notEnoughMemorySpace: LoadCRLResponseError = LoadCRLResponseError_notEnoughMemorySpace; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary LoadCRLResponseError_verificationKeyNotFound
 * @constant
 * @type {number}
 */
export
const LoadCRLResponseError_verificationKeyNotFound: LoadCRLResponseError = 4; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary LoadCRLResponseError_verificationKeyNotFound
 * @constant
 * @type {number}
 */
export
const verificationKeyNotFound: LoadCRLResponseError = LoadCRLResponseError_verificationKeyNotFound; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary LoadCRLResponseError_fresherCrlAlreadyLoaded
 * @constant
 * @type {number}
 */
export
const LoadCRLResponseError_fresherCrlAlreadyLoaded: LoadCRLResponseError = 5; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary LoadCRLResponseError_fresherCrlAlreadyLoaded
 * @constant
 * @type {number}
 */
export
const fresherCrlAlreadyLoaded: LoadCRLResponseError = LoadCRLResponseError_fresherCrlAlreadyLoaded; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary LoadCRLResponseError_baseCrlMissing
 * @constant
 * @type {number}
 */
export
const LoadCRLResponseError_baseCrlMissing: LoadCRLResponseError = 6; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary LoadCRLResponseError_baseCrlMissing
 * @constant
 * @type {number}
 */
export
const baseCrlMissing: LoadCRLResponseError = LoadCRLResponseError_baseCrlMissing; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary LoadCRLResponseError_undefinedError
 * @constant
 * @type {number}
 */
export
const LoadCRLResponseError_undefinedError: LoadCRLResponseError = 127; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary LoadCRLResponseError_undefinedError
 * @constant
 * @type {number}
 */
export
const undefinedError: LoadCRLResponseError = LoadCRLResponseError_undefinedError; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_LoadCRLResponseError = $._decodeInteger;
export const _encode_LoadCRLResponseError = $._encodeInteger;


/* eslint-enable */
