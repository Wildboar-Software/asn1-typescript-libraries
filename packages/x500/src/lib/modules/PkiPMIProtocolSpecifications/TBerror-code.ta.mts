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
export const TBerror_code_caCertInvalid = _enum_for_TBerror_code.caCertInvalid satisfies TBerror_code; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary caCertInvalid
 * @constant
 * @type {number}
 */
export const caCertInvalid = TBerror_code_caCertInvalid satisfies TBerror_code; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TBerror_code_unknownCert
 * @constant
 * @type {number}
 */
export const TBerror_code_unknownCert = _enum_for_TBerror_code.unknownCert satisfies TBerror_code; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unknownCert
 * @constant
 * @type {number}
 */
export const unknownCert = TBerror_code_unknownCert satisfies TBerror_code; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TBerror_code_unknownCertStatus
 * @constant
 * @type {number}
 */
export const TBerror_code_unknownCertStatus = _enum_for_TBerror_code.unknownCertStatus satisfies TBerror_code; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unknownCertStatus
 * @constant
 * @type {number}
 */
export const unknownCertStatus = TBerror_code_unknownCertStatus satisfies TBerror_code; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TBerror_code_subjectCertRevoked
 * @constant
 * @type {number}
 */
export const TBerror_code_subjectCertRevoked = _enum_for_TBerror_code.subjectCertRevoked satisfies TBerror_code; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary subjectCertRevoked
 * @constant
 * @type {number}
 */
export const subjectCertRevoked = TBerror_code_subjectCertRevoked satisfies TBerror_code; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TBerror_code_incorrectCert
 * @constant
 * @type {number}
 */
export const TBerror_code_incorrectCert = _enum_for_TBerror_code.incorrectCert satisfies TBerror_code; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary incorrectCert
 * @constant
 * @type {number}
 */
export const incorrectCert = TBerror_code_incorrectCert satisfies TBerror_code; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TBerror_code_contractExpired
 * @constant
 * @type {number}
 */
export const TBerror_code_contractExpired = _enum_for_TBerror_code.contractExpired satisfies TBerror_code; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary contractExpired
 * @constant
 * @type {number}
 */
export const contractExpired = TBerror_code_contractExpired satisfies TBerror_code; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TBerror_code_pathValidationFailed
 * @constant
 * @type {number}
 */
export const TBerror_code_pathValidationFailed = _enum_for_TBerror_code.pathValidationFailed satisfies TBerror_code; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary pathValidationFailed
 * @constant
 * @type {number}
 */
export const pathValidationFailed = TBerror_code_pathValidationFailed satisfies TBerror_code; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TBerror_code_timeOut
 * @constant
 * @type {number}
 */
export const TBerror_code_timeOut = _enum_for_TBerror_code.timeOut satisfies TBerror_code; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary timeOut
 * @constant
 * @type {number}
 */
export const timeOut = TBerror_code_timeOut satisfies TBerror_code; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TBerror_code_other
 * @constant
 * @type {number}
 */
export const TBerror_code_other = _enum_for_TBerror_code.other satisfies TBerror_code; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary other
 * @constant
 * @type {number}
 */
export const other = TBerror_code_other satisfies TBerror_code; /* SHORT_NAMED_ENUMERATED_VALUE */


export const _decode_TBerror_code = $._decodeEnumerated;


export const _encode_TBerror_code = $._encodeEnumerated;


/* eslint-enable */
