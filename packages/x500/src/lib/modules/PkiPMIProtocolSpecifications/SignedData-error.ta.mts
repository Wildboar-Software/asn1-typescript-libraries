/* eslint-disable */
import { ASN1Element as _Element, ENUMERATED } from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";

export enum _enum_for_SignedData_error {
    noReason = 0,
    signedDataContectTypeExpected = 1,
    wrongSignedDataVersion = 2,
    missingContent = 3,
    missingContentComponent = 4,
    invalidContentComponent = 5,
    unsupportedHashAlgorithm = 6,
}

/**
 * @summary SignedData_error
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SignedData-error  ::=  ENUMERATED {
 *   noReason                           (0),
 *   signedDataContectTypeExpected      (1),
 *   wrongSignedDataVersion             (2),
 *   missingContent                     (3),
 *   missingContentComponent            (4),
 *   invalidContentComponent            (5),
 *   unsupportedHashAlgorithm           (6),
 *   ... }
 * ```@enum {number}
 */
export type SignedData_error = _enum_for_SignedData_error | ENUMERATED;

/**
 * @summary SignedData_error_noReason
 * @constant
 * @type {number}
 */
export const SignedData_error_noReason: SignedData_error = 0; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary noReason
 * @constant
 * @type {number}
 */
export const noReason: SignedData_error = SignedData_error_noReason; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SignedData_error_signedDataContectTypeExpected
 * @constant
 * @type {number}
 */
export const SignedData_error_signedDataContectTypeExpected: SignedData_error = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary signedDataContectTypeExpected
 * @constant
 * @type {number}
 */
export const signedDataContectTypeExpected: SignedData_error = SignedData_error_signedDataContectTypeExpected; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SignedData_error_wrongSignedDataVersion
 * @constant
 * @type {number}
 */
export const SignedData_error_wrongSignedDataVersion: SignedData_error = 2; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary wrongSignedDataVersion
 * @constant
 * @type {number}
 */
export const wrongSignedDataVersion: SignedData_error = SignedData_error_wrongSignedDataVersion; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SignedData_error_missingContent
 * @constant
 * @type {number}
 */
export const SignedData_error_missingContent: SignedData_error = 3; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary missingContent
 * @constant
 * @type {number}
 */
export const missingContent: SignedData_error = SignedData_error_missingContent; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SignedData_error_missingContentComponent
 * @constant
 * @type {number}
 */
export const SignedData_error_missingContentComponent: SignedData_error = 4; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary missingContentComponent
 * @constant
 * @type {number}
 */
export const missingContentComponent: SignedData_error = SignedData_error_missingContentComponent; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SignedData_error_invalidContentComponent
 * @constant
 * @type {number}
 */
export const SignedData_error_invalidContentComponent: SignedData_error = 5; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary invalidContentComponent
 * @constant
 * @type {number}
 */
export const invalidContentComponent: SignedData_error = SignedData_error_invalidContentComponent; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SignedData_error_unsupportedHashAlgorithm
 * @constant
 * @type {number}
 */
export const SignedData_error_unsupportedHashAlgorithm: SignedData_error = 6; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unsupportedHashAlgorithm
 * @constant
 * @type {number}
 */
export const unsupportedHashAlgorithm: SignedData_error = SignedData_error_unsupportedHashAlgorithm; /* SHORT_NAMED_ENUMERATED_VALUE */


export const _decode_SignedData_error = $._decodeEnumerated;


export const _encode_SignedData_error = $._encodeEnumerated;


/* eslint-enable */
