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
 * Error from the pre-v3 ES10b.LoadCRL function. SGP.22 v3.1 §5.7.12 withdraws
 * the function and does not define these codes.
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
 * @description
 * 
 * The CRL signature did not verify. Pre-v3 ES10b.LoadCRL. SGP.22 v3.1 §5.7.12
 * withdraws that function and does not define this code.
 * 
 * @constant
 * @type {number}
 */
export
const LoadCRLResponseError_invalidSignature: LoadCRLResponseError = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary LoadCRLResponseError_invalidSignature
 * @description
 * 
 * The CRL signature did not verify. Pre-v3 ES10b.LoadCRL. SGP.22 v3.1 §5.7.12
 * withdraws that function and does not define this code.
 * 
 * @constant
 * @type {number}
 */
export
const invalidSignature: LoadCRLResponseError = LoadCRLResponseError_invalidSignature; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary LoadCRLResponseError_invalidCRLFormat
 * @description
 * 
 * The CRL encoding is not a CRL this eUICC accepts. Not defined by SGP.22 v3.1,
 * which withdraws LoadCRL.
 * 
 * @constant
 * @type {number}
 */
export
const LoadCRLResponseError_invalidCRLFormat: LoadCRLResponseError = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary LoadCRLResponseError_invalidCRLFormat
 * @description
 * 
 * The CRL encoding is not a CRL this eUICC accepts. Not defined by SGP.22 v3.1,
 * which withdraws LoadCRL.
 * 
 * @constant
 * @type {number}
 */
export
const invalidCRLFormat: LoadCRLResponseError = LoadCRLResponseError_invalidCRLFormat; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary LoadCRLResponseError_notEnoughMemorySpace
 * @description
 * 
 * The eUICC cannot store this CRL. Not defined by SGP.22 v3.1, which withdraws
 * LoadCRL.
 * 
 * @constant
 * @type {number}
 */
export
const LoadCRLResponseError_notEnoughMemorySpace: LoadCRLResponseError = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary LoadCRLResponseError_notEnoughMemorySpace
 * @description
 * 
 * The eUICC cannot store this CRL. Not defined by SGP.22 v3.1, which withdraws
 * LoadCRL.
 * 
 * @constant
 * @type {number}
 */
export
const notEnoughMemorySpace: LoadCRLResponseError = LoadCRLResponseError_notEnoughMemorySpace; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary LoadCRLResponseError_verificationKeyNotFound
 * @description
 * 
 * No local key verifies this CRL. Not defined by SGP.22 v3.1, which withdraws
 * LoadCRL.
 * 
 * @constant
 * @type {number}
 */
export
const LoadCRLResponseError_verificationKeyNotFound: LoadCRLResponseError = 4; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary LoadCRLResponseError_verificationKeyNotFound
 * @description
 * 
 * No local key verifies this CRL. Not defined by SGP.22 v3.1, which withdraws
 * LoadCRL.
 * 
 * @constant
 * @type {number}
 */
export
const verificationKeyNotFound: LoadCRLResponseError = LoadCRLResponseError_verificationKeyNotFound; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary LoadCRLResponseError_fresherCrlAlreadyLoaded
 * @description
 * 
 * A CRL with a higher cRLNumber for this scope is already stored. Not defined
 * by SGP.22 v3.1, which withdraws LoadCRL. v3.1 §4.6.1 still requires cRLNumber
 * to increase by one at each publication.
 * 
 * @constant
 * @type {number}
 */
export
const LoadCRLResponseError_fresherCrlAlreadyLoaded: LoadCRLResponseError = 5; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary LoadCRLResponseError_fresherCrlAlreadyLoaded
 * @description
 * 
 * A CRL with a higher cRLNumber for this scope is already stored. Not defined
 * by SGP.22 v3.1, which withdraws LoadCRL. v3.1 §4.6.1 still requires cRLNumber
 * to increase by one at each publication.
 * 
 * @constant
 * @type {number}
 */
export
const fresherCrlAlreadyLoaded: LoadCRLResponseError = LoadCRLResponseError_fresherCrlAlreadyLoaded; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary LoadCRLResponseError_baseCrlMissing
 * @description
 * 
 * A partial CRL arrived and its base CRL is not present. Not defined by SGP.22
 * v3.1. v3.1 §4.6.1 forbids delta CRLs and requires a complete base list.
 * 
 * @constant
 * @type {number}
 */
export
const LoadCRLResponseError_baseCrlMissing: LoadCRLResponseError = 6; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary LoadCRLResponseError_baseCrlMissing
 * @description
 * 
 * A partial CRL arrived and its base CRL is not present. Not defined by SGP.22
 * v3.1. v3.1 §4.6.1 forbids delta CRLs and requires a complete base list.
 * 
 * @constant
 * @type {number}
 */
export
const baseCrlMissing: LoadCRLResponseError = LoadCRLResponseError_baseCrlMissing; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary LoadCRLResponseError_undefinedError
 * @description
 * 
 * LoadCRL failed for another reason. Not defined by SGP.22 v3.1, which
 * withdraws the function.
 * 
 * @constant
 * @type {number}
 */
export
const LoadCRLResponseError_undefinedError: LoadCRLResponseError = 127; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary LoadCRLResponseError_undefinedError
 * @description
 * 
 * LoadCRL failed for another reason. Not defined by SGP.22 v3.1, which
 * withdraws the function.
 * 
 * @constant
 * @type {number}
 */
export
const undefinedError: LoadCRLResponseError = LoadCRLResponseError_undefinedError; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_LoadCRLResponseError = $._decodeInteger;
export const _encode_LoadCRLResponseError = $._encodeInteger;


/* eslint-enable */
