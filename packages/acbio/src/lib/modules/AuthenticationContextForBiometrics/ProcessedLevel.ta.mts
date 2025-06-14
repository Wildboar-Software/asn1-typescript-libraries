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
import * as $ from 'asn1-ts/dist/functional.mjs';

/* START_OF_SYMBOL_DEFINITION _enum_for_ProcessedLevel */
export enum _enum_for_ProcessedLevel {
    raw_data = 1,
    intermediate_data = 2,
    processed_data = 3,
    comparison_score = 4,
    comparison_decision = 5,
}
/* END_OF_SYMBOL_DEFINITION _enum_for_ProcessedLevel */

/* START_OF_SYMBOL_DEFINITION ProcessedLevel */
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
 * ```@enum {number}
 */
export type ProcessedLevel = _enum_for_ProcessedLevel | ENUMERATED;
/* END_OF_SYMBOL_DEFINITION ProcessedLevel */

/* START_OF_SYMBOL_DEFINITION ProcessedLevel_raw_data */
/**
 * @summary ProcessedLevel_raw_data
 * @constant
 * @type {number}
 */
export const ProcessedLevel_raw_data: ProcessedLevel = 1; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION ProcessedLevel_raw_data */

/* START_OF_SYMBOL_DEFINITION raw_data */
/**
 * @summary raw_data
 * @constant
 * @type {number}
 */
export const raw_data: ProcessedLevel = ProcessedLevel_raw_data; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION raw_data */

/* START_OF_SYMBOL_DEFINITION ProcessedLevel_intermediate_data */
/**
 * @summary ProcessedLevel_intermediate_data
 * @constant
 * @type {number}
 */
export const ProcessedLevel_intermediate_data: ProcessedLevel = 2; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION ProcessedLevel_intermediate_data */

/* START_OF_SYMBOL_DEFINITION intermediate_data */
/**
 * @summary intermediate_data
 * @constant
 * @type {number}
 */
export const intermediate_data: ProcessedLevel = ProcessedLevel_intermediate_data; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION intermediate_data */

/* START_OF_SYMBOL_DEFINITION ProcessedLevel_processed_data */
/**
 * @summary ProcessedLevel_processed_data
 * @constant
 * @type {number}
 */
export const ProcessedLevel_processed_data: ProcessedLevel = 3; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION ProcessedLevel_processed_data */

/* START_OF_SYMBOL_DEFINITION processed_data */
/**
 * @summary processed_data
 * @constant
 * @type {number}
 */
export const processed_data: ProcessedLevel = ProcessedLevel_processed_data; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION processed_data */

/* START_OF_SYMBOL_DEFINITION ProcessedLevel_comparison_score */
/**
 * @summary ProcessedLevel_comparison_score
 * @constant
 * @type {number}
 */
export const ProcessedLevel_comparison_score: ProcessedLevel = 4; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION ProcessedLevel_comparison_score */

/* START_OF_SYMBOL_DEFINITION comparison_score */
/**
 * @summary comparison_score
 * @constant
 * @type {number}
 */
export const comparison_score: ProcessedLevel = ProcessedLevel_comparison_score; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION comparison_score */

/* START_OF_SYMBOL_DEFINITION ProcessedLevel_comparison_decision */
/**
 * @summary ProcessedLevel_comparison_decision
 * @constant
 * @type {number}
 */
export const ProcessedLevel_comparison_decision: ProcessedLevel = 5; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION ProcessedLevel_comparison_decision */

/* START_OF_SYMBOL_DEFINITION comparison_decision */
/**
 * @summary comparison_decision
 * @constant
 * @type {number}
 */
export const comparison_decision: ProcessedLevel = ProcessedLevel_comparison_decision; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION comparison_decision */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ProcessedLevel */
let _cached_decoder_for_ProcessedLevel: $.ASN1Decoder<ProcessedLevel> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ProcessedLevel */

/* START_OF_SYMBOL_DEFINITION _decode_ProcessedLevel */
/**
 * @summary Decodes an ASN.1 element into a(n) ProcessedLevel
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ProcessedLevel} The decoded data structure.
 */
export function _decode_ProcessedLevel(el: _Element) {
    if (!_cached_decoder_for_ProcessedLevel) {
        _cached_decoder_for_ProcessedLevel = $._decodeEnumerated;
    }
    return _cached_decoder_for_ProcessedLevel(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ProcessedLevel */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ProcessedLevel */
let _cached_encoder_for_ProcessedLevel: $.ASN1Encoder<ProcessedLevel> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ProcessedLevel */

/* START_OF_SYMBOL_DEFINITION _encode_ProcessedLevel */
/**
 * @summary Encodes a(n) ProcessedLevel into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ProcessedLevel, encoded as an ASN.1 Element.
 */
export function _encode_ProcessedLevel(
    value: ProcessedLevel,
    elGetter: $.ASN1Encoder<ProcessedLevel>
) {
    if (!_cached_encoder_for_ProcessedLevel) {
        _cached_encoder_for_ProcessedLevel = $._encodeEnumerated;
    }
    return _cached_encoder_for_ProcessedLevel(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ProcessedLevel */

/* eslint-enable */
