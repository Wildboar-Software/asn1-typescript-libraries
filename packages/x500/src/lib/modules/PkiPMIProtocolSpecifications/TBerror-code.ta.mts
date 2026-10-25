/* eslint-disable */
import { ASN1Element as _Element, type ENUMERATED } from "@wildboar/asn1";
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
export const TBerror_code_caCertInvalid = _enum_for_TBerror_code.caCertInvalid; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary caCertInvalid
 * @constant
 * @type {number}
 */
export const caCertInvalid = TBerror_code_caCertInvalid; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TBerror_code_unknownCert
 * @constant
 * @type {number}
 */
export const TBerror_code_unknownCert = _enum_for_TBerror_code.unknownCert; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unknownCert
 * @constant
 * @type {number}
 */
export const unknownCert = TBerror_code_unknownCert; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TBerror_code_unknownCertStatus
 * @constant
 * @type {number}
 */
export const TBerror_code_unknownCertStatus = _enum_for_TBerror_code.unknownCertStatus; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unknownCertStatus
 * @constant
 * @type {number}
 */
export const unknownCertStatus = TBerror_code_unknownCertStatus; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TBerror_code_subjectCertRevoked
 * @constant
 * @type {number}
 */
export const TBerror_code_subjectCertRevoked = _enum_for_TBerror_code.subjectCertRevoked; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary subjectCertRevoked
 * @constant
 * @type {number}
 */
export const subjectCertRevoked = TBerror_code_subjectCertRevoked; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TBerror_code_incorrectCert
 * @constant
 * @type {number}
 */
export const TBerror_code_incorrectCert = _enum_for_TBerror_code.incorrectCert; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary incorrectCert
 * @constant
 * @type {number}
 */
export const incorrectCert = TBerror_code_incorrectCert; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TBerror_code_contractExpired
 * @constant
 * @type {number}
 */
export const TBerror_code_contractExpired = _enum_for_TBerror_code.contractExpired; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary contractExpired
 * @constant
 * @type {number}
 */
export const contractExpired = TBerror_code_contractExpired; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TBerror_code_pathValidationFailed
 * @constant
 * @type {number}
 */
export const TBerror_code_pathValidationFailed = _enum_for_TBerror_code.pathValidationFailed; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary pathValidationFailed
 * @constant
 * @type {number}
 */
export const pathValidationFailed = TBerror_code_pathValidationFailed; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TBerror_code_timeOut
 * @constant
 * @type {number}
 */
export const TBerror_code_timeOut = _enum_for_TBerror_code.timeOut; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary timeOut
 * @constant
 * @type {number}
 */
export const timeOut = TBerror_code_timeOut; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TBerror_code_other
 * @constant
 * @type {number}
 */
export const TBerror_code_other = _enum_for_TBerror_code.other; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary other
 * @constant
 * @type {number}
 */
export const other = TBerror_code_other; /* SHORT_NAMED_ENUMERATED_VALUE */


export const _decode_TBerror_code = $._decodeEnumerated;


export const _encode_TBerror_code = $._encodeEnumerated;


/* eslint-enable */
