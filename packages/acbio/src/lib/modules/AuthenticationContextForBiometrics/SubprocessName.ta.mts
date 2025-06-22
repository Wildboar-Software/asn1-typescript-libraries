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
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';


export enum _enum_for_SubprocessName {
    data_capture = 1,
    intermediate_signal_processing = 2,
    final_signal_processing = 3,
    storage = 4,
    comparison = 5,
    decision = 6,
    sample_fusion = 7,
    feature_fusion = 8,
    score_fusion = 9,
    decision_fusion = 10,
}


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
export const SubprocessName_data_capture: SubprocessName = 1; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary data_capture
 * @constant
 * @type {number}
 */
export const data_capture: SubprocessName = SubprocessName_data_capture; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary SubprocessName_intermediate_signal_processing
 * @constant
 * @type {number}
 */
export const SubprocessName_intermediate_signal_processing: SubprocessName = 2; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary intermediate_signal_processing
 * @constant
 * @type {number}
 */
export const intermediate_signal_processing: SubprocessName = SubprocessName_intermediate_signal_processing; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary SubprocessName_final_signal_processing
 * @constant
 * @type {number}
 */
export const SubprocessName_final_signal_processing: SubprocessName = 3; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary final_signal_processing
 * @constant
 * @type {number}
 */
export const final_signal_processing: SubprocessName = SubprocessName_final_signal_processing; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary SubprocessName_storage
 * @constant
 * @type {number}
 */
export const SubprocessName_storage: SubprocessName = 4; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary storage
 * @constant
 * @type {number}
 */
export const storage: SubprocessName = SubprocessName_storage; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary SubprocessName_comparison
 * @constant
 * @type {number}
 */
export const SubprocessName_comparison: SubprocessName = 5; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary comparison
 * @constant
 * @type {number}
 */
export const comparison: SubprocessName = SubprocessName_comparison; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary SubprocessName_decision
 * @constant
 * @type {number}
 */
export const SubprocessName_decision: SubprocessName = 6; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary decision
 * @constant
 * @type {number}
 */
export const decision: SubprocessName = SubprocessName_decision; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary SubprocessName_sample_fusion
 * @constant
 * @type {number}
 */
export const SubprocessName_sample_fusion: SubprocessName = 7; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary sample_fusion
 * @constant
 * @type {number}
 */
export const sample_fusion: SubprocessName = SubprocessName_sample_fusion; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary SubprocessName_feature_fusion
 * @constant
 * @type {number}
 */
export const SubprocessName_feature_fusion: SubprocessName = 8; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary feature_fusion
 * @constant
 * @type {number}
 */
export const feature_fusion: SubprocessName = SubprocessName_feature_fusion; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary SubprocessName_score_fusion
 * @constant
 * @type {number}
 */
export const SubprocessName_score_fusion: SubprocessName = 9; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary score_fusion
 * @constant
 * @type {number}
 */
export const score_fusion: SubprocessName = SubprocessName_score_fusion; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary SubprocessName_decision_fusion
 * @constant
 * @type {number}
 */
export const SubprocessName_decision_fusion: SubprocessName = 10; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary decision_fusion
 * @constant
 * @type {number}
 */
export const decision_fusion: SubprocessName = SubprocessName_decision_fusion; /* SHORT_NAMED_ENUMERATED_VALUE */




export const _decode_SubprocessName = $._decodeEnumerated;




export const _encode_SubprocessName = $._encodeEnumerated;


/* eslint-enable */
