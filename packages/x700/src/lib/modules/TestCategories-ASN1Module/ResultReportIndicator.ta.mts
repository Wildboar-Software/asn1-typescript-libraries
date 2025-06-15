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

/* START_OF_SYMBOL_DEFINITION _enum_for_ResultReportIndicator */
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
 * ```@enum {number}
 */
export enum _enum_for_ResultReportIndicator {
    resultReportForPassedSequences = 0,
    noResultReportForPassedSequences = 1,
}
/* END_OF_SYMBOL_DEFINITION _enum_for_ResultReportIndicator */

/* START_OF_SYMBOL_DEFINITION ResultReportIndicator */
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
 * ```@enum {number}
 */
export type ResultReportIndicator = _enum_for_ResultReportIndicator;
/* END_OF_SYMBOL_DEFINITION ResultReportIndicator */

/* START_OF_SYMBOL_DEFINITION ResultReportIndicator */
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
 * ```@enum {number}
 */
export const ResultReportIndicator = _enum_for_ResultReportIndicator;
/* END_OF_SYMBOL_DEFINITION ResultReportIndicator */

/* START_OF_SYMBOL_DEFINITION ResultReportIndicator_resultReportForPassedSequences */
/**
 * @summary ResultReportIndicator_resultReportForPassedSequences
 * @constant
 * @type {number}
 */
export const ResultReportIndicator_resultReportForPassedSequences: ResultReportIndicator =
    ResultReportIndicator.resultReportForPassedSequences; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION ResultReportIndicator_resultReportForPassedSequences */

/* START_OF_SYMBOL_DEFINITION resultReportForPassedSequences */
/**
 * @summary resultReportForPassedSequences
 * @constant
 * @type {number}
 */
export const resultReportForPassedSequences: ResultReportIndicator =
    ResultReportIndicator.resultReportForPassedSequences; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION resultReportForPassedSequences */

/* START_OF_SYMBOL_DEFINITION ResultReportIndicator_noResultReportForPassedSequences */
/**
 * @summary ResultReportIndicator_noResultReportForPassedSequences
 * @constant
 * @type {number}
 */
export const ResultReportIndicator_noResultReportForPassedSequences: ResultReportIndicator =
    ResultReportIndicator.noResultReportForPassedSequences; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION ResultReportIndicator_noResultReportForPassedSequences */

/* START_OF_SYMBOL_DEFINITION noResultReportForPassedSequences */
/**
 * @summary noResultReportForPassedSequences
 * @constant
 * @type {number}
 */
export const noResultReportForPassedSequences: ResultReportIndicator =
    ResultReportIndicator.noResultReportForPassedSequences; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION noResultReportForPassedSequences */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ResultReportIndicator */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ResultReportIndicator */

/* START_OF_SYMBOL_DEFINITION _decode_ResultReportIndicator */
export const _decode_ResultReportIndicator = $._decodeEnumerated;
/* END_OF_SYMBOL_DEFINITION _decode_ResultReportIndicator */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ResultReportIndicator */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ResultReportIndicator */

/* START_OF_SYMBOL_DEFINITION _encode_ResultReportIndicator */
export const _encode_ResultReportIndicator = $._encodeEnumerated;

/* END_OF_SYMBOL_DEFINITION _encode_ResultReportIndicator */

/* eslint-enable */
