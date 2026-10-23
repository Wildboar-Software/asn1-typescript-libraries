/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary EvaluationStatus
 * @description
 *
 * Status of the Common Criteria evaluation named by the surrounding measures.
 *
 * TCG EK Credential Profile for TPM Family 2.0, Level 0, Version 2.7, §3.1.1.
 *
 * @see https://trustedcomputinggroup.org/wp-content/uploads/TCG-EK-Credential-Profile-for-TPM-Family-2.0-Level-0-Version-2.7_Pub.pdf
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
    /**
     * The target is designed to meet the claimed evaluation.
     *
     * TCG EK Credential Profile for TPM Family 2.0, Level 0, Version 2.7,
     * §3.1.1.
     *
     * @see https://trustedcomputinggroup.org/wp-content/uploads/TCG-EK-Credential-Profile-for-TPM-Family-2.0-Level-0-Version-2.7_Pub.pdf
     */
    designedToMeet = 0,
    /**
     * Evaluation against the stated profile or target is in progress.
     *
     * TCG EK Credential Profile for TPM Family 2.0, Level 0, Version 2.7,
     * §3.1.1.
     *
     * @see https://trustedcomputinggroup.org/wp-content/uploads/TCG-EK-Credential-Profile-for-TPM-Family-2.0-Level-0-Version-2.7_Pub.pdf
     */
    evaluationInProgress = 1,
    /**
     * Evaluation against the stated profile or target has completed.
     *
     * TCG EK Credential Profile for TPM Family 2.0, Level 0, Version 2.7,
     * §3.1.1.
     *
     * @see https://trustedcomputinggroup.org/wp-content/uploads/TCG-EK-Credential-Profile-for-TPM-Family-2.0-Level-0-Version-2.7_Pub.pdf
     */
    evaluationCompleted = 2,
}

/**
 * @summary EvaluationStatus
 * @description
 *
 * Status of the Common Criteria evaluation named by the surrounding measures.
 *
 * TCG EK Credential Profile for TPM Family 2.0, Level 0, Version 2.7, §3.1.1.
 *
 * @see https://trustedcomputinggroup.org/wp-content/uploads/TCG-EK-Credential-Profile-for-TPM-Family-2.0-Level-0-Version-2.7_Pub.pdf
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
 * Status of the Common Criteria evaluation named by the surrounding measures.
 *
 * TCG EK Credential Profile for TPM Family 2.0, Level 0, Version 2.7, §3.1.1.
 *
 * @see https://trustedcomputinggroup.org/wp-content/uploads/TCG-EK-Credential-Profile-for-TPM-Family-2.0-Level-0-Version-2.7_Pub.pdf
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
 * @description
 *
 * The target is designed to meet the claimed evaluation.
 *
 * TCG EK Credential Profile for TPM Family 2.0, Level 0, Version 2.7, §3.1.1.
 *
 * @see https://trustedcomputinggroup.org/wp-content/uploads/TCG-EK-Credential-Profile-for-TPM-Family-2.0-Level-0-Version-2.7_Pub.pdf
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
 * The target is designed to meet the claimed evaluation.
 *
 * TCG EK Credential Profile for TPM Family 2.0, Level 0, Version 2.7, §3.1.1.
 *
 * @see https://trustedcomputinggroup.org/wp-content/uploads/TCG-EK-Credential-Profile-for-TPM-Family-2.0-Level-0-Version-2.7_Pub.pdf
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
 * Evaluation against the stated profile or target is in progress.
 *
 * TCG EK Credential Profile for TPM Family 2.0, Level 0, Version 2.7, §3.1.1.
 *
 * @see https://trustedcomputinggroup.org/wp-content/uploads/TCG-EK-Credential-Profile-for-TPM-Family-2.0-Level-0-Version-2.7_Pub.pdf
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
 * Evaluation against the stated profile or target is in progress.
 *
 * TCG EK Credential Profile for TPM Family 2.0, Level 0, Version 2.7, §3.1.1.
 *
 * @see https://trustedcomputinggroup.org/wp-content/uploads/TCG-EK-Credential-Profile-for-TPM-Family-2.0-Level-0-Version-2.7_Pub.pdf
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
 * Evaluation against the stated profile or target has completed.
 *
 * TCG EK Credential Profile for TPM Family 2.0, Level 0, Version 2.7, §3.1.1.
 *
 * @see https://trustedcomputinggroup.org/wp-content/uploads/TCG-EK-Credential-Profile-for-TPM-Family-2.0-Level-0-Version-2.7_Pub.pdf
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
 * Evaluation against the stated profile or target has completed.
 *
 * TCG EK Credential Profile for TPM Family 2.0, Level 0, Version 2.7, §3.1.1.
 *
 * @see https://trustedcomputinggroup.org/wp-content/uploads/TCG-EK-Credential-Profile-for-TPM-Family-2.0-Level-0-Version-2.7_Pub.pdf
 *
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
