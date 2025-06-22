/* eslint-disable */
import { ASN1Element as _Element, BIT_STRING } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary PKIFailureInfo
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PKIFailureInfo  ::=  BIT STRING {
 *     badAlg               (0),
 *     -- unrecognized or unsupported Algorithm Identifier
 *     badRequest           (2),
 *     -- transaction not permitted or supported
 *     badDataFormat        (5),
 *     -- the data submitted has the wrong format
 *     timeNotAvailable    (14),
 *     -- the TSA's time source is not available
 *     unacceptedPolicy    (15),
 *     -- the requested TSA policy is not supported by the TSA.
 *     unacceptedExtension (16),
 *     -- the requested extension is not supported by the TSA.
 *     addInfoNotAvailable (17),
 *     -- the additional information requested could not be understood
 *     -- or is not available
 *     systemFailure       (25)
 *     -- the request cannot be handled due to system failure
 * }
 * ```
 */
export type PKIFailureInfo = BIT_STRING;

/**
 * @summary PKIFailureInfo_badAlg
 * @constant
 */
export const PKIFailureInfo_badAlg: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary badAlg
 * @constant
 */
export const badAlg: number = PKIFailureInfo_badAlg; /* SHORT_NAMED_BIT */

/**
 * @summary PKIFailureInfo_badRequest
 * @constant
 */
export const PKIFailureInfo_badRequest: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary badRequest
 * @constant
 */
export const badRequest: number = PKIFailureInfo_badRequest; /* SHORT_NAMED_BIT */

/**
 * @summary PKIFailureInfo_badDataFormat
 * @constant
 */
export const PKIFailureInfo_badDataFormat: number = 5; /* LONG_NAMED_BIT */

/**
 * @summary badDataFormat
 * @constant
 */
export const badDataFormat: number = PKIFailureInfo_badDataFormat; /* SHORT_NAMED_BIT */

/**
 * @summary PKIFailureInfo_timeNotAvailable
 * @constant
 */
export const PKIFailureInfo_timeNotAvailable: number = 14; /* LONG_NAMED_BIT */

/**
 * @summary timeNotAvailable
 * @constant
 */
export const timeNotAvailable: number = PKIFailureInfo_timeNotAvailable; /* SHORT_NAMED_BIT */

/**
 * @summary PKIFailureInfo_unacceptedPolicy
 * @constant
 */
export const PKIFailureInfo_unacceptedPolicy: number = 15; /* LONG_NAMED_BIT */

/**
 * @summary unacceptedPolicy
 * @constant
 */
export const unacceptedPolicy: number = PKIFailureInfo_unacceptedPolicy; /* SHORT_NAMED_BIT */

/**
 * @summary PKIFailureInfo_unacceptedExtension
 * @constant
 */
export const PKIFailureInfo_unacceptedExtension: number = 16; /* LONG_NAMED_BIT */

/**
 * @summary unacceptedExtension
 * @constant
 */
export const unacceptedExtension: number = PKIFailureInfo_unacceptedExtension; /* SHORT_NAMED_BIT */

/**
 * @summary PKIFailureInfo_addInfoNotAvailable
 * @constant
 */
export const PKIFailureInfo_addInfoNotAvailable: number = 17; /* LONG_NAMED_BIT */

/**
 * @summary addInfoNotAvailable
 * @constant
 */
export const addInfoNotAvailable: number = PKIFailureInfo_addInfoNotAvailable; /* SHORT_NAMED_BIT */

/**
 * @summary PKIFailureInfo_systemFailure
 * @constant
 */
export const PKIFailureInfo_systemFailure: number = 25; /* LONG_NAMED_BIT */

/**
 * @summary systemFailure
 * @constant
 */
export const systemFailure: number = PKIFailureInfo_systemFailure; /* SHORT_NAMED_BIT */


export const _decode_PKIFailureInfo = $._decodeBitString;


export const _encode_PKIFailureInfo = $._encodeBitString;


/* eslint-enable */
