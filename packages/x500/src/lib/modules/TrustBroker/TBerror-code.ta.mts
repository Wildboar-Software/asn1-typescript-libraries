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
 * Failure when the TB cannot validate the presented cert. No code 0. `other`(99) requires `diagnostic`. Validated-but-untrusted is `TBOK` with LoA 0, not these codes. `pathValidationFailed` and `timeOut` may succeed on retry.
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
 * @description
 *
 * Presented CA cert invalid, or a CA superior to the presented subject cert is invalid.
 *
 * @constant
 * @type {number}
 */
export const TBerror_code_caCertInvalid: _enum_for_TBerror_code.caCertInvalid = _enum_for_TBerror_code.caCertInvalid; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary caCertInvalid
 * @description
 *
 * Presented CA cert invalid, or a CA superior to the presented subject cert is invalid.
 *
 * @constant
 * @type {number}
 */
export const caCertInvalid: _enum_for_TBerror_code.caCertInvalid = TBerror_code_caCertInvalid; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TBerror_code_unknownCert
 * @description
 *
 * Presented cert is unknown and cannot be validated.
 *
 * @constant
 * @type {number}
 */
export const TBerror_code_unknownCert: _enum_for_TBerror_code.unknownCert = _enum_for_TBerror_code.unknownCert; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unknownCert
 * @description
 *
 * Presented cert is unknown and cannot be validated.
 *
 * @constant
 * @type {number}
 */
export const unknownCert: _enum_for_TBerror_code.unknownCert = TBerror_code_unknownCert; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TBerror_code_unknownCertStatus
 * @description
 *
 * Cert is known, but its status cannot be determined.
 *
 * @constant
 * @type {number}
 */
export const TBerror_code_unknownCertStatus: _enum_for_TBerror_code.unknownCertStatus = _enum_for_TBerror_code.unknownCertStatus; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unknownCertStatus
 * @description
 *
 * Cert is known, but its status cannot be determined.
 *
 * @constant
 * @type {number}
 */
export const unknownCertStatus: _enum_for_TBerror_code.unknownCertStatus = TBerror_code_unknownCertStatus; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TBerror_code_subjectCertRevoked
 * @description
 *
 * Presented subject certificate has been revoked.
 *
 * @constant
 * @type {number}
 */
export const TBerror_code_subjectCertRevoked: _enum_for_TBerror_code.subjectCertRevoked = _enum_for_TBerror_code.subjectCertRevoked; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary subjectCertRevoked
 * @description
 *
 * Presented subject certificate has been revoked.
 *
 * @constant
 * @type {number}
 */
export const subjectCertRevoked: _enum_for_TBerror_code.subjectCertRevoked = TBerror_code_subjectCertRevoked; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TBerror_code_incorrectCert
 * @description
 *
 * Presented certificate is incorrectly formatted.
 *
 * @constant
 * @type {number}
 */
export const TBerror_code_incorrectCert: _enum_for_TBerror_code.incorrectCert = _enum_for_TBerror_code.incorrectCert; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary incorrectCert
 * @description
 *
 * Presented certificate is incorrectly formatted.
 *
 * @constant
 * @type {number}
 */
export const incorrectCert: _enum_for_TBerror_code.incorrectCert = TBerror_code_incorrectCert; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TBerror_code_contractExpired
 * @description
 *
 * Relying party's contract with the TB has expired; renew before service resumes.
 *
 * @constant
 * @type {number}
 */
export const TBerror_code_contractExpired: _enum_for_TBerror_code.contractExpired = _enum_for_TBerror_code.contractExpired; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary contractExpired
 * @description
 *
 * Relying party's contract with the TB has expired; renew before service resumes.
 *
 * @constant
 * @type {number}
 */
export const contractExpired: _enum_for_TBerror_code.contractExpired = TBerror_code_contractExpired; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TBerror_code_pathValidationFailed
 * @description
 *
 * One or more CA certificates in the chain could not be validated; a later attempt may succeed.
 *
 * @constant
 * @type {number}
 */
export const TBerror_code_pathValidationFailed: _enum_for_TBerror_code.pathValidationFailed = _enum_for_TBerror_code.pathValidationFailed; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary pathValidationFailed
 * @description
 *
 * One or more CA certificates in the chain could not be validated; a later attempt may succeed.
 *
 * @constant
 * @type {number}
 */
export const pathValidationFailed: _enum_for_TBerror_code.pathValidationFailed = TBerror_code_pathValidationFailed; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TBerror_code_timeOut
 * @description
 *
 * Validation timed out (a needed service did not respond); retry later may succeed.
 *
 * @constant
 * @type {number}
 */
export const TBerror_code_timeOut: _enum_for_TBerror_code.timeOut = _enum_for_TBerror_code.timeOut; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary timeOut
 * @description
 *
 * Validation timed out (a needed service did not respond); retry later may succeed.
 *
 * @constant
 * @type {number}
 */
export const timeOut: _enum_for_TBerror_code.timeOut = TBerror_code_timeOut; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TBerror_code_other
 * @description
 *
 * Other reason; `diagnostic` is mandatory.
 *
 * @constant
 * @type {number}
 */
export const TBerror_code_other: _enum_for_TBerror_code.other = _enum_for_TBerror_code.other; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary other
 * @description
 *
 * Other reason; `diagnostic` is mandatory.
 *
 * @constant
 * @type {number}
 */
export const other: _enum_for_TBerror_code.other = TBerror_code_other; /* SHORT_NAMED_ENUMERATED_VALUE */


export const _decode_TBerror_code: $.ASN1Decoder<number> = $._decodeEnumerated;


export const _encode_TBerror_code: $.ASN1Encoder<number> = $._encodeEnumerated;


/* eslint-enable */
