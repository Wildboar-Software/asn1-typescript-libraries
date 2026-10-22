/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary EvaluationStatus
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EvaluationStatus  ::=  ENUMERATED {
 *     designedToMeet (0),
 *     evaluationInProgress (1),
 *     evaluationCompleted (2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_EvaluationStatus {
    designedToMeet = 0,
    evaluationInProgress = 1,
    evaluationCompleted = 2,
}

/**
 * @summary EvaluationStatus
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EvaluationStatus  ::=  ENUMERATED {
 *     designedToMeet (0),
 *     evaluationInProgress (1),
 *     evaluationCompleted (2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type EvaluationStatus = _enum_for_EvaluationStatus;

/**
 * @summary EvaluationStatus
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EvaluationStatus  ::=  ENUMERATED {
 *     designedToMeet (0),
 *     evaluationInProgress (1),
 *     evaluationCompleted (2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const EvaluationStatus = _enum_for_EvaluationStatus;

/**
 * @summary EvaluationStatus_designedToMeet
 * @constant
 * @type {number}
 */
export
const EvaluationStatus_designedToMeet: EvaluationStatus = EvaluationStatus.designedToMeet; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary designedToMeet
 * @constant
 * @type {number}
 */
export
const designedToMeet: EvaluationStatus = EvaluationStatus.designedToMeet; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EvaluationStatus_evaluationInProgress
 * @constant
 * @type {number}
 */
export
const EvaluationStatus_evaluationInProgress: EvaluationStatus = EvaluationStatus.evaluationInProgress; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary evaluationInProgress
 * @constant
 * @type {number}
 */
export
const evaluationInProgress: EvaluationStatus = EvaluationStatus.evaluationInProgress; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EvaluationStatus_evaluationCompleted
 * @constant
 * @type {number}
 */
export
const EvaluationStatus_evaluationCompleted: EvaluationStatus = EvaluationStatus.evaluationCompleted; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary evaluationCompleted
 * @constant
 * @type {number}
 */
export
const evaluationCompleted: EvaluationStatus = EvaluationStatus.evaluationCompleted; /* SHORT_NAMED_ENUMERATED_VALUE */

export
const _decode_EvaluationStatus: $.ASN1Decoder<EvaluationStatus> = $._decodeEnumerated;

export
const _encode_EvaluationStatus: $.ASN1Encoder<EvaluationStatus> = $._encodeEnumerated;

/* eslint-enable */
