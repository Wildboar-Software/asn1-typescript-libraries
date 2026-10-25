/* eslint-disable */
import {
    type ASN1Element as _Element,
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
const _enum_for_EvaluationStatus = {
    designedToMeet: 0,
    evaluationInProgress: 1,
    evaluationCompleted: 2,
} as const;

export
type _enum_for_EvaluationStatus = (typeof _enum_for_EvaluationStatus)[keyof typeof _enum_for_EvaluationStatus];

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
const EvaluationStatus: typeof _enum_for_EvaluationStatus = _enum_for_EvaluationStatus;

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
const EvaluationStatus_designedToMeet: 0 = EvaluationStatus.designedToMeet; /* LONG_NAMED_ENUMERATED_VALUE */

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
const designedToMeet: 0 = EvaluationStatus.designedToMeet; /* SHORT_NAMED_ENUMERATED_VALUE */

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
const EvaluationStatus_evaluationInProgress: 1 = EvaluationStatus.evaluationInProgress; /* LONG_NAMED_ENUMERATED_VALUE */

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
const evaluationInProgress: 1 = EvaluationStatus.evaluationInProgress; /* SHORT_NAMED_ENUMERATED_VALUE */

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
const EvaluationStatus_evaluationCompleted: 2 = EvaluationStatus.evaluationCompleted; /* LONG_NAMED_ENUMERATED_VALUE */

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
const evaluationCompleted: 2 = EvaluationStatus.evaluationCompleted; /* SHORT_NAMED_ENUMERATED_VALUE */


export function _decode_EvaluationStatus(el: _Element): EvaluationStatus {
    const enumerated = $._decodeEnumerated(el);
    switch (enumerated) {
        case EvaluationStatus.designedToMeet: return EvaluationStatus.designedToMeet;
        case EvaluationStatus.evaluationInProgress: return EvaluationStatus.evaluationInProgress;
        case EvaluationStatus.evaluationCompleted: return EvaluationStatus.evaluationCompleted;
        default:
            throw new _ConstructionError(
                "Invalid ENUMERATED value " + enumerated + " for EvaluationStatus.",
                el,
            );
    }
}


export const _encode_EvaluationStatus: $.ASN1Encoder<EvaluationStatus> = $._encodeEnumerated as $.ASN1Encoder<EvaluationStatus>;


/* eslint-enable */
