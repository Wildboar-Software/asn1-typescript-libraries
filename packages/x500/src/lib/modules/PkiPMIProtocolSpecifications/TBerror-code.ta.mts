/* eslint-disable */
import { ASN1Element as _Element, ENUMERATED } from "asn1-ts";
import * as $ from "@wildboar/asn1/functional";

export enum _enum_for_TBerror_code {
    caCertInvalid = 1,
    unknownCert = 2,
    unknownCertStatus = 3,
    subjectCertRevoked = 4,
    incorrectCert = 5,
    contractExpired = 6,
    pathValidationFailed = 7,
    timeOut = 8,
    other = 99,
}

/**
 * @summary TBerror_code
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TBerror-code ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 * @enum {number}
 */
export type TBerror_code = _enum_for_TBerror_code | ENUMERATED;

/**
 * @summary TBerror_code_caCertInvalid
 * @constant
 * @type {number}
 */
export const TBerror_code_caCertInvalid: TBerror_code = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary caCertInvalid
 * @constant
 * @type {number}
 */
export const caCertInvalid: TBerror_code = TBerror_code_caCertInvalid; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TBerror_code_unknownCert
 * @constant
 * @type {number}
 */
export const TBerror_code_unknownCert: TBerror_code = 2; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unknownCert
 * @constant
 * @type {number}
 */
export const unknownCert: TBerror_code = TBerror_code_unknownCert; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TBerror_code_unknownCertStatus
 * @constant
 * @type {number}
 */
export const TBerror_code_unknownCertStatus: TBerror_code = 3; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unknownCertStatus
 * @constant
 * @type {number}
 */
export const unknownCertStatus: TBerror_code = TBerror_code_unknownCertStatus; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TBerror_code_subjectCertRevoked
 * @constant
 * @type {number}
 */
export const TBerror_code_subjectCertRevoked: TBerror_code = 4; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary subjectCertRevoked
 * @constant
 * @type {number}
 */
export const subjectCertRevoked: TBerror_code = TBerror_code_subjectCertRevoked; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TBerror_code_incorrectCert
 * @constant
 * @type {number}
 */
export const TBerror_code_incorrectCert: TBerror_code = 5; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary incorrectCert
 * @constant
 * @type {number}
 */
export const incorrectCert: TBerror_code = TBerror_code_incorrectCert; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TBerror_code_contractExpired
 * @constant
 * @type {number}
 */
export const TBerror_code_contractExpired: TBerror_code = 6; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary contractExpired
 * @constant
 * @type {number}
 */
export const contractExpired: TBerror_code = TBerror_code_contractExpired; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TBerror_code_pathValidationFailed
 * @constant
 * @type {number}
 */
export const TBerror_code_pathValidationFailed: TBerror_code = 7; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary pathValidationFailed
 * @constant
 * @type {number}
 */
export const pathValidationFailed: TBerror_code = TBerror_code_pathValidationFailed; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TBerror_code_timeOut
 * @constant
 * @type {number}
 */
export const TBerror_code_timeOut: TBerror_code = 8; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary timeOut
 * @constant
 * @type {number}
 */
export const timeOut: TBerror_code = TBerror_code_timeOut; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TBerror_code_other
 * @constant
 * @type {number}
 */
export const TBerror_code_other: TBerror_code = 99; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary other
 * @constant
 * @type {number}
 */
export const other: TBerror_code = TBerror_code_other; /* SHORT_NAMED_ENUMERATED_VALUE */


export const _decode_TBerror_code = $._decodeEnumerated;


export const _encode_TBerror_code = $._encodeEnumerated;


/* eslint-enable */
