/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from 'asn1-ts';
import * as $ from 'asn1-ts/dist/functional.mjs';

/**
 * @summary ResultReportIndicator
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ResultReportIndicator  ::=  ENUMERATED {
 *   resultReportForPassedSequences(0), noResultReportForPassedSequences(1)
 * }
 * ```
 *
 * @enum {number}
 */
export enum _enum_for_ResultReportIndicator {
    resultReportForPassedSequences = 0,
    noResultReportForPassedSequences = 1,
}

/**
 * @summary ResultReportIndicator
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ResultReportIndicator  ::=  ENUMERATED {
 *   resultReportForPassedSequences(0), noResultReportForPassedSequences(1)
 * }
 * ```
 *
 * @enum {number}
 */
export type ResultReportIndicator = _enum_for_ResultReportIndicator;

/**
 * @summary ResultReportIndicator
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ResultReportIndicator  ::=  ENUMERATED {
 *   resultReportForPassedSequences(0), noResultReportForPassedSequences(1)
 * }
 * ```
 *
 * @enum {number}
 */
export const ResultReportIndicator = _enum_for_ResultReportIndicator;

/**
 * @summary ResultReportIndicator_resultReportForPassedSequences
 * @constant
 * @type {number}
 */
export const ResultReportIndicator_resultReportForPassedSequences: ResultReportIndicator =
    ResultReportIndicator.resultReportForPassedSequences; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary resultReportForPassedSequences
 * @constant
 * @type {number}
 */
export const resultReportForPassedSequences: ResultReportIndicator =
    ResultReportIndicator.resultReportForPassedSequences; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ResultReportIndicator_noResultReportForPassedSequences
 * @constant
 * @type {number}
 */
export const ResultReportIndicator_noResultReportForPassedSequences: ResultReportIndicator =
    ResultReportIndicator.noResultReportForPassedSequences; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary noResultReportForPassedSequences
 * @constant
 * @type {number}
 */
export const noResultReportForPassedSequences: ResultReportIndicator =
    ResultReportIndicator.noResultReportForPassedSequences; /* SHORT_NAMED_ENUMERATED_VALUE */


export const _decode_ResultReportIndicator = $._decodeEnumerated;


export const _encode_ResultReportIndicator = $._encodeEnumerated;


/* eslint-enable */
