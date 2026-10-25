/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary EvaluationAssuranceLevel
 * @description
 *
 * Common Criteria evaluation assurance level asserted for the TPM. The profile
 * does not restate the Common Criteria requirements for each level.
 *
 * TCG EK Credential Profile for TPM Family 2.0, Level 0, Version 2.7, §3.1.1.
 *
 * @see https://trustedcomputinggroup.org/wp-content/uploads/TCG-EK-Credential-Profile-for-TPM-Family-2.0-Level-0-Version-2.7_Pub.pdf
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EvaluationAssuranceLevel  ::=  ENUMERATED {
 *     levell (1),
 *     level2 (2),
 *     level3 (3),
 *     level4 (4),
 *     level5 (5),
 *     level6 (6),
 *     level7 (7)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_EvaluationAssuranceLevel {
    /**
     * Common Criteria evaluation assurance level 1. The profile spells this
     * enumerator `levell`.
     *
     * TCG EK Credential Profile for TPM Family 2.0, Level 0, Version 2.7,
     * §3.1.1.
     *
     * @see https://trustedcomputinggroup.org/wp-content/uploads/TCG-EK-Credential-Profile-for-TPM-Family-2.0-Level-0-Version-2.7_Pub.pdf
     */
    levell = 1,
    /**
     * Common Criteria evaluation assurance level 2.
     *
     * TCG EK Credential Profile for TPM Family 2.0, Level 0, Version 2.7,
     * §3.1.1.
     *
     * @see https://trustedcomputinggroup.org/wp-content/uploads/TCG-EK-Credential-Profile-for-TPM-Family-2.0-Level-0-Version-2.7_Pub.pdf
     */
    level2 = 2,
    /**
     * Common Criteria evaluation assurance level 3.
     *
     * TCG EK Credential Profile for TPM Family 2.0, Level 0, Version 2.7,
     * §3.1.1.
     *
     * @see https://trustedcomputinggroup.org/wp-content/uploads/TCG-EK-Credential-Profile-for-TPM-Family-2.0-Level-0-Version-2.7_Pub.pdf
     */
    level3 = 3,
    /**
     * Common Criteria evaluation assurance level 4.
     *
     * TCG EK Credential Profile for TPM Family 2.0, Level 0, Version 2.7,
     * §3.1.1.
     *
     * @see https://trustedcomputinggroup.org/wp-content/uploads/TCG-EK-Credential-Profile-for-TPM-Family-2.0-Level-0-Version-2.7_Pub.pdf
     */
    level4 = 4,
    /**
     * Common Criteria evaluation assurance level 5.
     *
     * TCG EK Credential Profile for TPM Family 2.0, Level 0, Version 2.7,
     * §3.1.1.
     *
     * @see https://trustedcomputinggroup.org/wp-content/uploads/TCG-EK-Credential-Profile-for-TPM-Family-2.0-Level-0-Version-2.7_Pub.pdf
     */
    level5 = 5,
    /**
     * Common Criteria evaluation assurance level 6.
     *
     * TCG EK Credential Profile for TPM Family 2.0, Level 0, Version 2.7,
     * §3.1.1.
     *
     * @see https://trustedcomputinggroup.org/wp-content/uploads/TCG-EK-Credential-Profile-for-TPM-Family-2.0-Level-0-Version-2.7_Pub.pdf
     */
    level6 = 6,
    /**
     * Common Criteria evaluation assurance level 7.
     *
     * TCG EK Credential Profile for TPM Family 2.0, Level 0, Version 2.7,
     * §3.1.1.
     *
     * @see https://trustedcomputinggroup.org/wp-content/uploads/TCG-EK-Credential-Profile-for-TPM-Family-2.0-Level-0-Version-2.7_Pub.pdf
     */
    level7 = 7,
}

/**
 * @summary EvaluationAssuranceLevel
 * @description
 *
 * Common Criteria evaluation assurance level asserted for the TPM. The profile
 * does not restate the Common Criteria requirements for each level.
 *
 * TCG EK Credential Profile for TPM Family 2.0, Level 0, Version 2.7, §3.1.1.
 *
 * @see https://trustedcomputinggroup.org/wp-content/uploads/TCG-EK-Credential-Profile-for-TPM-Family-2.0-Level-0-Version-2.7_Pub.pdf
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EvaluationAssuranceLevel  ::=  ENUMERATED {
 *     levell (1),
 *     level2 (2),
 *     level3 (3),
 *     level4 (4),
 *     level5 (5),
 *     level6 (6),
 *     level7 (7)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type EvaluationAssuranceLevel = _enum_for_EvaluationAssuranceLevel;

/**
 * @summary EvaluationAssuranceLevel
 * @description
 *
 * Common Criteria evaluation assurance level asserted for the TPM. The profile
 * does not restate the Common Criteria requirements for each level.
 *
 * TCG EK Credential Profile for TPM Family 2.0, Level 0, Version 2.7, §3.1.1.
 *
 * @see https://trustedcomputinggroup.org/wp-content/uploads/TCG-EK-Credential-Profile-for-TPM-Family-2.0-Level-0-Version-2.7_Pub.pdf
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EvaluationAssuranceLevel  ::=  ENUMERATED {
 *     levell (1),
 *     level2 (2),
 *     level3 (3),
 *     level4 (4),
 *     level5 (5),
 *     level6 (6),
 *     level7 (7)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const EvaluationAssuranceLevel = _enum_for_EvaluationAssuranceLevel;

/**
 * @summary EvaluationAssuranceLevel_levell
 * @description
 *
 * Common Criteria evaluation assurance level 1. The profile spells this
 * enumerator `levell`.
 *
 * TCG EK Credential Profile for TPM Family 2.0, Level 0, Version 2.7, §3.1.1.
 *
 * @see https://trustedcomputinggroup.org/wp-content/uploads/TCG-EK-Credential-Profile-for-TPM-Family-2.0-Level-0-Version-2.7_Pub.pdf
 *
 * @constant
 * @type {number}
 */
export
const EvaluationAssuranceLevel_levell = EvaluationAssuranceLevel.levell satisfies EvaluationAssuranceLevel; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary levell
 * @description
 *
 * Common Criteria evaluation assurance level 1. The profile spells this
 * enumerator `levell`.
 *
 * TCG EK Credential Profile for TPM Family 2.0, Level 0, Version 2.7, §3.1.1.
 *
 * @see https://trustedcomputinggroup.org/wp-content/uploads/TCG-EK-Credential-Profile-for-TPM-Family-2.0-Level-0-Version-2.7_Pub.pdf
 *
 * @constant
 * @type {number}
 */
export
const levell = EvaluationAssuranceLevel.levell satisfies EvaluationAssuranceLevel; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EvaluationAssuranceLevel_level2
 * @description
 *
 * Common Criteria evaluation assurance level 2.
 *
 * TCG EK Credential Profile for TPM Family 2.0, Level 0, Version 2.7, §3.1.1.
 *
 * @see https://trustedcomputinggroup.org/wp-content/uploads/TCG-EK-Credential-Profile-for-TPM-Family-2.0-Level-0-Version-2.7_Pub.pdf
 *
 * @constant
 * @type {number}
 */
export
const EvaluationAssuranceLevel_level2 = EvaluationAssuranceLevel.level2 satisfies EvaluationAssuranceLevel; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary level2
 * @description
 *
 * Common Criteria evaluation assurance level 2.
 *
 * TCG EK Credential Profile for TPM Family 2.0, Level 0, Version 2.7, §3.1.1.
 *
 * @see https://trustedcomputinggroup.org/wp-content/uploads/TCG-EK-Credential-Profile-for-TPM-Family-2.0-Level-0-Version-2.7_Pub.pdf
 *
 * @constant
 * @type {number}
 */
export
const level2 = EvaluationAssuranceLevel.level2 satisfies EvaluationAssuranceLevel; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EvaluationAssuranceLevel_level3
 * @description
 *
 * Common Criteria evaluation assurance level 3.
 *
 * TCG EK Credential Profile for TPM Family 2.0, Level 0, Version 2.7, §3.1.1.
 *
 * @see https://trustedcomputinggroup.org/wp-content/uploads/TCG-EK-Credential-Profile-for-TPM-Family-2.0-Level-0-Version-2.7_Pub.pdf
 *
 * @constant
 * @type {number}
 */
export
const EvaluationAssuranceLevel_level3 = EvaluationAssuranceLevel.level3 satisfies EvaluationAssuranceLevel; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary level3
 * @description
 *
 * Common Criteria evaluation assurance level 3.
 *
 * TCG EK Credential Profile for TPM Family 2.0, Level 0, Version 2.7, §3.1.1.
 *
 * @see https://trustedcomputinggroup.org/wp-content/uploads/TCG-EK-Credential-Profile-for-TPM-Family-2.0-Level-0-Version-2.7_Pub.pdf
 *
 * @constant
 * @type {number}
 */
export
const level3 = EvaluationAssuranceLevel.level3 satisfies EvaluationAssuranceLevel; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EvaluationAssuranceLevel_level4
 * @description
 *
 * Common Criteria evaluation assurance level 4.
 *
 * TCG EK Credential Profile for TPM Family 2.0, Level 0, Version 2.7, §3.1.1.
 *
 * @see https://trustedcomputinggroup.org/wp-content/uploads/TCG-EK-Credential-Profile-for-TPM-Family-2.0-Level-0-Version-2.7_Pub.pdf
 *
 * @constant
 * @type {number}
 */
export
const EvaluationAssuranceLevel_level4 = EvaluationAssuranceLevel.level4 satisfies EvaluationAssuranceLevel; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary level4
 * @description
 *
 * Common Criteria evaluation assurance level 4.
 *
 * TCG EK Credential Profile for TPM Family 2.0, Level 0, Version 2.7, §3.1.1.
 *
 * @see https://trustedcomputinggroup.org/wp-content/uploads/TCG-EK-Credential-Profile-for-TPM-Family-2.0-Level-0-Version-2.7_Pub.pdf
 *
 * @constant
 * @type {number}
 */
export
const level4 = EvaluationAssuranceLevel.level4 satisfies EvaluationAssuranceLevel; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EvaluationAssuranceLevel_level5
 * @description
 *
 * Common Criteria evaluation assurance level 5.
 *
 * TCG EK Credential Profile for TPM Family 2.0, Level 0, Version 2.7, §3.1.1.
 *
 * @see https://trustedcomputinggroup.org/wp-content/uploads/TCG-EK-Credential-Profile-for-TPM-Family-2.0-Level-0-Version-2.7_Pub.pdf
 *
 * @constant
 * @type {number}
 */
export
const EvaluationAssuranceLevel_level5 = EvaluationAssuranceLevel.level5 satisfies EvaluationAssuranceLevel; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary level5
 * @description
 *
 * Common Criteria evaluation assurance level 5.
 *
 * TCG EK Credential Profile for TPM Family 2.0, Level 0, Version 2.7, §3.1.1.
 *
 * @see https://trustedcomputinggroup.org/wp-content/uploads/TCG-EK-Credential-Profile-for-TPM-Family-2.0-Level-0-Version-2.7_Pub.pdf
 *
 * @constant
 * @type {number}
 */
export
const level5 = EvaluationAssuranceLevel.level5 satisfies EvaluationAssuranceLevel; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EvaluationAssuranceLevel_level6
 * @description
 *
 * Common Criteria evaluation assurance level 6.
 *
 * TCG EK Credential Profile for TPM Family 2.0, Level 0, Version 2.7, §3.1.1.
 *
 * @see https://trustedcomputinggroup.org/wp-content/uploads/TCG-EK-Credential-Profile-for-TPM-Family-2.0-Level-0-Version-2.7_Pub.pdf
 *
 * @constant
 * @type {number}
 */
export
const EvaluationAssuranceLevel_level6 = EvaluationAssuranceLevel.level6 satisfies EvaluationAssuranceLevel; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary level6
 * @description
 *
 * Common Criteria evaluation assurance level 6.
 *
 * TCG EK Credential Profile for TPM Family 2.0, Level 0, Version 2.7, §3.1.1.
 *
 * @see https://trustedcomputinggroup.org/wp-content/uploads/TCG-EK-Credential-Profile-for-TPM-Family-2.0-Level-0-Version-2.7_Pub.pdf
 *
 * @constant
 * @type {number}
 */
export
const level6 = EvaluationAssuranceLevel.level6 satisfies EvaluationAssuranceLevel; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EvaluationAssuranceLevel_level7
 * @description
 *
 * Common Criteria evaluation assurance level 7.
 *
 * TCG EK Credential Profile for TPM Family 2.0, Level 0, Version 2.7, §3.1.1.
 *
 * @see https://trustedcomputinggroup.org/wp-content/uploads/TCG-EK-Credential-Profile-for-TPM-Family-2.0-Level-0-Version-2.7_Pub.pdf
 *
 * @constant
 * @type {number}
 */
export
const EvaluationAssuranceLevel_level7 = EvaluationAssuranceLevel.level7 satisfies EvaluationAssuranceLevel; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary level7
 * @description
 *
 * Common Criteria evaluation assurance level 7.
 *
 * TCG EK Credential Profile for TPM Family 2.0, Level 0, Version 2.7, §3.1.1.
 *
 * @see https://trustedcomputinggroup.org/wp-content/uploads/TCG-EK-Credential-Profile-for-TPM-Family-2.0-Level-0-Version-2.7_Pub.pdf
 *
 * @constant
 * @type {number}
 */
export
const level7 = EvaluationAssuranceLevel.level7 satisfies EvaluationAssuranceLevel; /* SHORT_NAMED_ENUMERATED_VALUE */

export
const _decode_EvaluationAssuranceLevel: $.ASN1Decoder<EvaluationAssuranceLevel> = $._decodeEnumerated;

export
const _encode_EvaluationAssuranceLevel: $.ASN1Encoder<EvaluationAssuranceLevel> = $._encodeEnumerated;

/* eslint-enable */
