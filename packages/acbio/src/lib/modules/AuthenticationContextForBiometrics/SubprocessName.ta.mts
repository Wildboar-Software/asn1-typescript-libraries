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
export const SubprocessName_data_capture: 1 = _enum_for_SubprocessName.data_capture; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary data_capture
 * @constant
 * @type {number}
 */
export const data_capture: 1 = SubprocessName_data_capture; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary SubprocessName_intermediate_signal_processing
 * @constant
 * @type {number}
 */
export const SubprocessName_intermediate_signal_processing: 2 = _enum_for_SubprocessName.intermediate_signal_processing; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary intermediate_signal_processing
 * @constant
 * @type {number}
 */
export const intermediate_signal_processing: 2 = SubprocessName_intermediate_signal_processing; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary SubprocessName_final_signal_processing
 * @constant
 * @type {number}
 */
export const SubprocessName_final_signal_processing: 3 = _enum_for_SubprocessName.final_signal_processing; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary final_signal_processing
 * @constant
 * @type {number}
 */
export const final_signal_processing: 3 = SubprocessName_final_signal_processing; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary SubprocessName_storage
 * @constant
 * @type {number}
 */
export const SubprocessName_storage: 4 = _enum_for_SubprocessName.storage; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary storage
 * @constant
 * @type {number}
 */
export const storage: 4 = SubprocessName_storage; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary SubprocessName_comparison
 * @constant
 * @type {number}
 */
export const SubprocessName_comparison: 5 = _enum_for_SubprocessName.comparison; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary comparison
 * @constant
 * @type {number}
 */
export const comparison: 5 = SubprocessName_comparison; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary SubprocessName_decision
 * @constant
 * @type {number}
 */
export const SubprocessName_decision: 6 = _enum_for_SubprocessName.decision; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary decision
 * @constant
 * @type {number}
 */
export const decision: 6 = SubprocessName_decision; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary SubprocessName_sample_fusion
 * @constant
 * @type {number}
 */
export const SubprocessName_sample_fusion: 7 = _enum_for_SubprocessName.sample_fusion; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary sample_fusion
 * @constant
 * @type {number}
 */
export const sample_fusion: 7 = SubprocessName_sample_fusion; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary SubprocessName_feature_fusion
 * @constant
 * @type {number}
 */
export const SubprocessName_feature_fusion: 8 = _enum_for_SubprocessName.feature_fusion; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary feature_fusion
 * @constant
 * @type {number}
 */
export const feature_fusion: 8 = SubprocessName_feature_fusion; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary SubprocessName_score_fusion
 * @constant
 * @type {number}
 */
export const SubprocessName_score_fusion: 9 = _enum_for_SubprocessName.score_fusion; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary score_fusion
 * @constant
 * @type {number}
 */
export const score_fusion: 9 = SubprocessName_score_fusion; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary SubprocessName_decision_fusion
 * @constant
 * @type {number}
 */
export const SubprocessName_decision_fusion: 10 = _enum_for_SubprocessName.decision_fusion; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary decision_fusion
 * @constant
 * @type {number}
 */
export const decision_fusion: 10 = SubprocessName_decision_fusion; /* SHORT_NAMED_ENUMERATED_VALUE */




export const _decode_SubprocessName: $.ASN1Decoder<number> = $._decodeEnumerated;




export const _encode_SubprocessName: $.ASN1Encoder<number> = $._encodeEnumerated;


/* eslint-enable */
