/* eslint-disable */
import { ASN1Element as _Element, ENUMERATED } from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";

export enum _enum_for_CASP_CertStatusCode {
    noReason = 1,
    unknownCert = 2,
}

/**
 * @summary CASP_CertStatusCode
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CASP-CertStatusCode  ::=  ENUMERATED {
 *   noReason       (1),
 *   unknownCert    (2),
 *   ... }
 * ```
 * 
 * @enum {number}
 */
export type CASP_CertStatusCode = _enum_for_CASP_CertStatusCode | ENUMERATED;

/**
 * @summary CASP_CertStatusCode_noReason
 * @constant
 * @type {number}
 */
export const CASP_CertStatusCode_noReason: CASP_CertStatusCode = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary noReason
 * @constant
 * @type {number}
 */
export const noReason: CASP_CertStatusCode = CASP_CertStatusCode_noReason; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CASP_CertStatusCode_unknownCert
 * @constant
 * @type {number}
 */
export const CASP_CertStatusCode_unknownCert: CASP_CertStatusCode = 2; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unknownCert
 * @constant
 * @type {number}
 */
export const unknownCert: CASP_CertStatusCode = CASP_CertStatusCode_unknownCert; /* SHORT_NAMED_ENUMERATED_VALUE */


export const _decode_CASP_CertStatusCode = $._decodeEnumerated;


export const _encode_CASP_CertStatusCode = $._encodeEnumerated;


/* eslint-enable */
