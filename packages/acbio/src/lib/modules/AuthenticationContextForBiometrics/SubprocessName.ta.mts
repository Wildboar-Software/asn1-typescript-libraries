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


export const _enum_for_SubprocessName = {
    data_capture: 1,
    intermediate_signal_processing: 2,
    final_signal_processing: 3,
    storage: 4,
    comparison: 5,
    decision: 6,
    sample_fusion: 7,
    feature_fusion: 8,
    score_fusion: 9,
    decision_fusion: 10,
} as const;

export type _enum_for_SubprocessName = (typeof _enum_for_SubprocessName)[keyof typeof _enum_for_SubprocessName];


/**
 * @summary SubprocessName
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SubprocessName  ::=  ENUMERATED {
 *     data-capture(1),
 *     intermediate-signal-processing(2),
 *     final-signal-processing(3),
 *     storage(4),
 *     comparison(5),
 *     decision(6),
 *     sample-fusion(7),
 *     feature-fusion(8),
 *     score-fusion(9),
 *     decision-fusion(10),
 *     ...}
 * ```
 *
 * @enum {number}
 */
export type SubprocessName = _enum_for_SubprocessName | ENUMERATED;


/**
 * @summary SubprocessName_data_capture
 * @constant
 * @type {number}
 */
export const SubprocessName_data_capture = _enum_for_SubprocessName.data_capture satisfies SubprocessName; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary data_capture
 * @constant
 * @type {number}
 */
export const data_capture = SubprocessName_data_capture satisfies SubprocessName; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary SubprocessName_intermediate_signal_processing
 * @constant
 * @type {number}
 */
export const SubprocessName_intermediate_signal_processing = _enum_for_SubprocessName.intermediate_signal_processing satisfies SubprocessName; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary intermediate_signal_processing
 * @constant
 * @type {number}
 */
export const intermediate_signal_processing = SubprocessName_intermediate_signal_processing satisfies SubprocessName; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary SubprocessName_final_signal_processing
 * @constant
 * @type {number}
 */
export const SubprocessName_final_signal_processing = _enum_for_SubprocessName.final_signal_processing satisfies SubprocessName; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary final_signal_processing
 * @constant
 * @type {number}
 */
export const final_signal_processing = SubprocessName_final_signal_processing satisfies SubprocessName; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary SubprocessName_storage
 * @constant
 * @type {number}
 */
export const SubprocessName_storage = _enum_for_SubprocessName.storage satisfies SubprocessName; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary storage
 * @constant
 * @type {number}
 */
export const storage = SubprocessName_storage satisfies SubprocessName; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary SubprocessName_comparison
 * @constant
 * @type {number}
 */
export const SubprocessName_comparison = _enum_for_SubprocessName.comparison satisfies SubprocessName; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary comparison
 * @constant
 * @type {number}
 */
export const comparison = SubprocessName_comparison satisfies SubprocessName; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary SubprocessName_decision
 * @constant
 * @type {number}
 */
export const SubprocessName_decision = _enum_for_SubprocessName.decision satisfies SubprocessName; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary decision
 * @constant
 * @type {number}
 */
export const decision = SubprocessName_decision satisfies SubprocessName; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary SubprocessName_sample_fusion
 * @constant
 * @type {number}
 */
export const SubprocessName_sample_fusion = _enum_for_SubprocessName.sample_fusion satisfies SubprocessName; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary sample_fusion
 * @constant
 * @type {number}
 */
export const sample_fusion = SubprocessName_sample_fusion satisfies SubprocessName; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary SubprocessName_feature_fusion
 * @constant
 * @type {number}
 */
export const SubprocessName_feature_fusion = _enum_for_SubprocessName.feature_fusion satisfies SubprocessName; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary feature_fusion
 * @constant
 * @type {number}
 */
export const feature_fusion = SubprocessName_feature_fusion satisfies SubprocessName; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary SubprocessName_score_fusion
 * @constant
 * @type {number}
 */
export const SubprocessName_score_fusion = _enum_for_SubprocessName.score_fusion satisfies SubprocessName; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary score_fusion
 * @constant
 * @type {number}
 */
export const score_fusion = SubprocessName_score_fusion satisfies SubprocessName; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary SubprocessName_decision_fusion
 * @constant
 * @type {number}
 */
export const SubprocessName_decision_fusion = _enum_for_SubprocessName.decision_fusion satisfies SubprocessName; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary decision_fusion
 * @constant
 * @type {number}
 */
export const decision_fusion = SubprocessName_decision_fusion satisfies SubprocessName; /* SHORT_NAMED_ENUMERATED_VALUE */




export const _decode_SubprocessName = $._decodeEnumerated;




export const _encode_SubprocessName = $._encodeEnumerated;


/* eslint-enable */
