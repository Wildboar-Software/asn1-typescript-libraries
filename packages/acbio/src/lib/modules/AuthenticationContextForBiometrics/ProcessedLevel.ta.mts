/* eslint-disable */
import {
    ENUMERATED,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from 'asn1-ts';
import * as $ from '@wildboar/asn1/functional';


export enum _enum_for_ProcessedLevel {
    raw_data = 1,
    intermediate_data = 2,
    processed_data = 3,
    comparison_score = 4,
    comparison_decision = 5,
}


/**
 * @summary ProcessedLevel
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ProcessedLevel  ::=  ENUMERATED {
 *     raw-data(1),
 *     intermediate-data(2),
 *     processed-data(3),
 *     comparison-score(4),
 *     comparison-decision(5),
 *     ...}
 * ```
 *
 * @enum {number}
 */
export type ProcessedLevel = _enum_for_ProcessedLevel | ENUMERATED;


/**
 * @summary ProcessedLevel_raw_data
 * @constant
 * @type {number}
 */
export const ProcessedLevel_raw_data: ProcessedLevel = 1; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary raw_data
 * @constant
 * @type {number}
 */
export const raw_data: ProcessedLevel = ProcessedLevel_raw_data; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary ProcessedLevel_intermediate_data
 * @constant
 * @type {number}
 */
export const ProcessedLevel_intermediate_data: ProcessedLevel = 2; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary intermediate_data
 * @constant
 * @type {number}
 */
export const intermediate_data: ProcessedLevel = ProcessedLevel_intermediate_data; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary ProcessedLevel_processed_data
 * @constant
 * @type {number}
 */
export const ProcessedLevel_processed_data: ProcessedLevel = 3; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary processed_data
 * @constant
 * @type {number}
 */
export const processed_data: ProcessedLevel = ProcessedLevel_processed_data; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary ProcessedLevel_comparison_score
 * @constant
 * @type {number}
 */
export const ProcessedLevel_comparison_score: ProcessedLevel = 4; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary comparison_score
 * @constant
 * @type {number}
 */
export const comparison_score: ProcessedLevel = ProcessedLevel_comparison_score; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary ProcessedLevel_comparison_decision
 * @constant
 * @type {number}
 */
export const ProcessedLevel_comparison_decision: ProcessedLevel = 5; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary comparison_decision
 * @constant
 * @type {number}
 */
export const comparison_decision: ProcessedLevel = ProcessedLevel_comparison_decision; /* SHORT_NAMED_ENUMERATED_VALUE */




export const _decode_ProcessedLevel = $._decodeEnumerated;




export const _encode_ProcessedLevel = $._encodeEnumerated;


/* eslint-enable */
