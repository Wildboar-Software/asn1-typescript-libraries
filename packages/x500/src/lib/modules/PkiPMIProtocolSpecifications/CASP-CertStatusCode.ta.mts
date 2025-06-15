/* eslint-disable */
import { ASN1Element as _Element, ENUMERATED } from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";

/* START_OF_SYMBOL_DEFINITION _enum_for_CASP_CertStatusCode */
export enum _enum_for_CASP_CertStatusCode {
    noReason = 1,
    unknownCert = 2,
}
/* END_OF_SYMBOL_DEFINITION _enum_for_CASP_CertStatusCode */

/* START_OF_SYMBOL_DEFINITION CASP_CertStatusCode */
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
 * ```@enum {number}
 */
export type CASP_CertStatusCode = _enum_for_CASP_CertStatusCode | ENUMERATED;
/* END_OF_SYMBOL_DEFINITION CASP_CertStatusCode */

/* START_OF_SYMBOL_DEFINITION CASP_CertStatusCode_noReason */
/**
 * @summary CASP_CertStatusCode_noReason
 * @constant
 * @type {number}
 */
export const CASP_CertStatusCode_noReason: CASP_CertStatusCode = 1; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION CASP_CertStatusCode_noReason */

/* START_OF_SYMBOL_DEFINITION noReason */
/**
 * @summary noReason
 * @constant
 * @type {number}
 */
export const noReason: CASP_CertStatusCode = CASP_CertStatusCode_noReason; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION noReason */

/* START_OF_SYMBOL_DEFINITION CASP_CertStatusCode_unknownCert */
/**
 * @summary CASP_CertStatusCode_unknownCert
 * @constant
 * @type {number}
 */
export const CASP_CertStatusCode_unknownCert: CASP_CertStatusCode = 2; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION CASP_CertStatusCode_unknownCert */

/* START_OF_SYMBOL_DEFINITION unknownCert */
/**
 * @summary unknownCert
 * @constant
 * @type {number}
 */
export const unknownCert: CASP_CertStatusCode = CASP_CertStatusCode_unknownCert; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION unknownCert */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_CASP_CertStatusCode */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_CASP_CertStatusCode */

/* START_OF_SYMBOL_DEFINITION _decode_CASP_CertStatusCode */
export const _decode_CASP_CertStatusCode = $._decodeEnumerated;
/* END_OF_SYMBOL_DEFINITION _decode_CASP_CertStatusCode */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_CASP_CertStatusCode */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_CASP_CertStatusCode */

/* START_OF_SYMBOL_DEFINITION _encode_CASP_CertStatusCode */
export const _encode_CASP_CertStatusCode = $._encodeEnumerated;

/* END_OF_SYMBOL_DEFINITION _encode_CASP_CertStatusCode */

/* eslint-enable */
