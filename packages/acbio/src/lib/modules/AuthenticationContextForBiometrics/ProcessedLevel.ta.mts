/* eslint-disable */
import {
    type ENUMERATED,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';


export const _enum_for_ProcessedLevel = {
    raw_data: 1,
    intermediate_data: 2,
    processed_data: 3,
    comparison_score: 4,
    comparison_decision: 5,
} as const;

export type _enum_for_ProcessedLevel = (typeof _enum_for_ProcessedLevel)[keyof typeof _enum_for_ProcessedLevel];


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
export const ProcessedLevel_raw_data: 1 = _enum_for_ProcessedLevel.raw_data; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary raw_data
 * @constant
 * @type {number}
 */
export const raw_data: 1 = ProcessedLevel_raw_data; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary ProcessedLevel_intermediate_data
 * @constant
 * @type {number}
 */
export const ProcessedLevel_intermediate_data: 2 = _enum_for_ProcessedLevel.intermediate_data; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary intermediate_data
 * @constant
 * @type {number}
 */
export const intermediate_data: 2 = ProcessedLevel_intermediate_data; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary ProcessedLevel_processed_data
 * @constant
 * @type {number}
 */
export const ProcessedLevel_processed_data: 3 = _enum_for_ProcessedLevel.processed_data; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary processed_data
 * @constant
 * @type {number}
 */
export const processed_data: 3 = ProcessedLevel_processed_data; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary ProcessedLevel_comparison_score
 * @constant
 * @type {number}
 */
export const ProcessedLevel_comparison_score: 4 = _enum_for_ProcessedLevel.comparison_score; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary comparison_score
 * @constant
 * @type {number}
 */
export const comparison_score: 4 = ProcessedLevel_comparison_score; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary ProcessedLevel_comparison_decision
 * @constant
 * @type {number}
 */
export const ProcessedLevel_comparison_decision: 5 = _enum_for_ProcessedLevel.comparison_decision; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary comparison_decision
 * @constant
 * @type {number}
 */
export const comparison_decision: 5 = ProcessedLevel_comparison_decision; /* SHORT_NAMED_ENUMERATED_VALUE */




export const _decode_ProcessedLevel: $.ASN1Decoder<number> = $._decodeEnumerated;




export const _encode_ProcessedLevel: $.ASN1Encoder<number> = $._encodeEnumerated;


/* eslint-enable */
