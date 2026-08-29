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
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary EvaluationStatus
 * @description
 *
 * Status of the TBB's Common Criteria evaluation. TCG Platform
 * Certificate Profile v1.1 r19 §3.1.1.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * EvaluationStatus  ::=  ENUMERATED {
 *     designedToMeet (0),
 *     evaluationInProgress (1),
 *     evaluationCompleted (2) }
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
 * Status of the TBB's Common Criteria evaluation. TCG Platform
 * Certificate Profile v1.1 r19 §3.1.1.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * EvaluationStatus  ::=  ENUMERATED {
 *     designedToMeet (0),
 *     evaluationInProgress (1),
 *     evaluationCompleted (2) }
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
 * Status of the TBB's Common Criteria evaluation. TCG Platform
 * Certificate Profile v1.1 r19 §3.1.1.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * EvaluationStatus  ::=  ENUMERATED {
 *     designedToMeet (0),
 *     evaluationInProgress (1),
 *     evaluationCompleted (2) }
 * ```
 *
 * @enum {number}
 */
export
const EvaluationStatus = _enum_for_EvaluationStatus;

/**
 * @summary EvaluationStatus_designedToMeet
 * @description
 *
 * Designed to meet the claimed CC profile/target. §3.1.1.
 *
 * @constant
 * @type {number}
 */
export
const EvaluationStatus_designedToMeet: EvaluationStatus = EvaluationStatus.designedToMeet; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary designedToMeet
 * @description
 *
 * Designed to meet the claimed CC profile/target. §3.1.1.
 *
 * @constant
 * @type {number}
 */
export
const designedToMeet: EvaluationStatus = EvaluationStatus.designedToMeet; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EvaluationStatus_evaluationInProgress
 * @description
 *
 * CC evaluation is in progress. §3.1.1.
 *
 * @constant
 * @type {number}
 */
export
const EvaluationStatus_evaluationInProgress: EvaluationStatus = EvaluationStatus.evaluationInProgress; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary evaluationInProgress
 * @description
 *
 * CC evaluation is in progress. §3.1.1.
 *
 * @constant
 * @type {number}
 */
export
const evaluationInProgress: EvaluationStatus = EvaluationStatus.evaluationInProgress; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EvaluationStatus_evaluationCompleted
 * @description
 *
 * CC evaluation has completed. §3.1.1.
 *
 * @constant
 * @type {number}
 */
export
const EvaluationStatus_evaluationCompleted: EvaluationStatus = EvaluationStatus.evaluationCompleted; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary evaluationCompleted
 * @description
 *
 * CC evaluation has completed. §3.1.1.
 *
 * @constant
 * @type {number}
 */
export
const evaluationCompleted: EvaluationStatus = EvaluationStatus.evaluationCompleted; /* SHORT_NAMED_ENUMERATED_VALUE */


export const _decode_EvaluationStatus = $._decodeEnumerated;


export const _encode_EvaluationStatus = $._encodeEnumerated;


/* eslint-enable */
