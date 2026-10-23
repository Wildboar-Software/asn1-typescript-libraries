/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary StrengthOfFunction
 * @description
 *
 * Strength-of-function claim from the Common Criteria evaluation. Optional in
 * `CommonCriteriaMeasures`.
 *
 * TCG EK Credential Profile for TPM Family 2.0, Level 0, Version 2.7, §3.1.1.
 *
 * @see https://trustedcomputinggroup.org/wp-content/uploads/TCG-EK-Credential-Profile-for-TPM-Family-2.0-Level-0-Version-2.7_Pub.pdf
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * StrengthOfFunction  ::=  ENUMERATED {
 *     basic (0),
 *     medium (1),
 *     high (2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_StrengthOfFunction {
    /**
     * Basic strength of function. The profile names the value and does not
     * define the metric.
     *
     * TCG EK Credential Profile for TPM Family 2.0, Level 0, Version 2.7,
     * §3.1.1.
     *
     * @see https://trustedcomputinggroup.org/wp-content/uploads/TCG-EK-Credential-Profile-for-TPM-Family-2.0-Level-0-Version-2.7_Pub.pdf
     */
    basic = 0,
    /**
     * Medium strength of function. The profile names the value and does not
     * define the metric.
     *
     * TCG EK Credential Profile for TPM Family 2.0, Level 0, Version 2.7,
     * §3.1.1.
     *
     * @see https://trustedcomputinggroup.org/wp-content/uploads/TCG-EK-Credential-Profile-for-TPM-Family-2.0-Level-0-Version-2.7_Pub.pdf
     */
    medium = 1,
    /**
     * High strength of function. The profile names the value and does not
     * define the metric.
     *
     * TCG EK Credential Profile for TPM Family 2.0, Level 0, Version 2.7,
     * §3.1.1.
     *
     * @see https://trustedcomputinggroup.org/wp-content/uploads/TCG-EK-Credential-Profile-for-TPM-Family-2.0-Level-0-Version-2.7_Pub.pdf
     */
    high = 2,
}

/**
 * @summary StrengthOfFunction
 * @description
 *
 * Strength-of-function claim from the Common Criteria evaluation. Optional in
 * `CommonCriteriaMeasures`.
 *
 * TCG EK Credential Profile for TPM Family 2.0, Level 0, Version 2.7, §3.1.1.
 *
 * @see https://trustedcomputinggroup.org/wp-content/uploads/TCG-EK-Credential-Profile-for-TPM-Family-2.0-Level-0-Version-2.7_Pub.pdf
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * StrengthOfFunction  ::=  ENUMERATED {
 *     basic (0),
 *     medium (1),
 *     high (2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type StrengthOfFunction = _enum_for_StrengthOfFunction;

/**
 * @summary StrengthOfFunction
 * @description
 *
 * Strength-of-function claim from the Common Criteria evaluation. Optional in
 * `CommonCriteriaMeasures`.
 *
 * TCG EK Credential Profile for TPM Family 2.0, Level 0, Version 2.7, §3.1.1.
 *
 * @see https://trustedcomputinggroup.org/wp-content/uploads/TCG-EK-Credential-Profile-for-TPM-Family-2.0-Level-0-Version-2.7_Pub.pdf
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * StrengthOfFunction  ::=  ENUMERATED {
 *     basic (0),
 *     medium (1),
 *     high (2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const StrengthOfFunction = _enum_for_StrengthOfFunction;

/**
 * @summary StrengthOfFunction_basic
 * @description
 *
 * Basic strength of function. The profile names the value and does not define
 * the metric.
 *
 * TCG EK Credential Profile for TPM Family 2.0, Level 0, Version 2.7, §3.1.1.
 *
 * @see https://trustedcomputinggroup.org/wp-content/uploads/TCG-EK-Credential-Profile-for-TPM-Family-2.0-Level-0-Version-2.7_Pub.pdf
 *
 * @constant
 * @type {number}
 */
export
const StrengthOfFunction_basic: StrengthOfFunction = StrengthOfFunction.basic; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary basic
 * @description
 *
 * Basic strength of function. The profile names the value and does not define
 * the metric.
 *
 * TCG EK Credential Profile for TPM Family 2.0, Level 0, Version 2.7, §3.1.1.
 *
 * @see https://trustedcomputinggroup.org/wp-content/uploads/TCG-EK-Credential-Profile-for-TPM-Family-2.0-Level-0-Version-2.7_Pub.pdf
 *
 * @constant
 * @type {number}
 */
export
const basic: StrengthOfFunction = StrengthOfFunction.basic; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary StrengthOfFunction_medium
 * @description
 *
 * Medium strength of function. The profile names the value and does not define
 * the metric.
 *
 * TCG EK Credential Profile for TPM Family 2.0, Level 0, Version 2.7, §3.1.1.
 *
 * @see https://trustedcomputinggroup.org/wp-content/uploads/TCG-EK-Credential-Profile-for-TPM-Family-2.0-Level-0-Version-2.7_Pub.pdf
 *
 * @constant
 * @type {number}
 */
export
const StrengthOfFunction_medium: StrengthOfFunction = StrengthOfFunction.medium; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary medium
 * @description
 *
 * Medium strength of function. The profile names the value and does not define
 * the metric.
 *
 * TCG EK Credential Profile for TPM Family 2.0, Level 0, Version 2.7, §3.1.1.
 *
 * @see https://trustedcomputinggroup.org/wp-content/uploads/TCG-EK-Credential-Profile-for-TPM-Family-2.0-Level-0-Version-2.7_Pub.pdf
 *
 * @constant
 * @type {number}
 */
export
const medium: StrengthOfFunction = StrengthOfFunction.medium; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary StrengthOfFunction_high
 * @description
 *
 * High strength of function. The profile names the value and does not define
 * the metric.
 *
 * TCG EK Credential Profile for TPM Family 2.0, Level 0, Version 2.7, §3.1.1.
 *
 * @see https://trustedcomputinggroup.org/wp-content/uploads/TCG-EK-Credential-Profile-for-TPM-Family-2.0-Level-0-Version-2.7_Pub.pdf
 *
 * @constant
 * @type {number}
 */
export
const StrengthOfFunction_high: StrengthOfFunction = StrengthOfFunction.high; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary high
 * @description
 *
 * High strength of function. The profile names the value and does not define
 * the metric.
 *
 * TCG EK Credential Profile for TPM Family 2.0, Level 0, Version 2.7, §3.1.1.
 *
 * @see https://trustedcomputinggroup.org/wp-content/uploads/TCG-EK-Credential-Profile-for-TPM-Family-2.0-Level-0-Version-2.7_Pub.pdf
 *
 * @constant
 * @type {number}
 */
export
const high: StrengthOfFunction = StrengthOfFunction.high; /* SHORT_NAMED_ENUMERATED_VALUE */

export
const _decode_StrengthOfFunction: $.ASN1Decoder<StrengthOfFunction> = $._decodeEnumerated;

export
const _encode_StrengthOfFunction: $.ASN1Encoder<StrengthOfFunction> = $._encodeEnumerated;

/* eslint-enable */
