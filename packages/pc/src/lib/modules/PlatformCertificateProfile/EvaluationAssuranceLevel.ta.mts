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
 * @summary EvaluationAssuranceLevel
 * @description
 *
 * Common Criteria Evaluation Assurance Level of the TBB (EAL 1
 * through EAL 7). TCG Platform Certificate Profile v1.1 r19
 * §3.1.1.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * EvaluationAssuranceLevel  ::=  ENUMERATED {
 *     level1 (1),
 *     level2 (2),
 *     level3 (3),
 *     level4 (4),
 *     level5 (5),
 *     level6 (6),
 *     level7 (7) }
 * ```
 *
 * @enum {number}
 */
export
enum _enum_for_EvaluationAssuranceLevel {
    level1 = 1,
    level2 = 2,
    level3 = 3,
    level4 = 4,
    level5 = 5,
    level6 = 6,
    level7 = 7,
}

/**
 * @summary EvaluationAssuranceLevel
 * @description
 *
 * Common Criteria Evaluation Assurance Level of the TBB (EAL 1
 * through EAL 7). TCG Platform Certificate Profile v1.1 r19
 * §3.1.1.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * EvaluationAssuranceLevel  ::=  ENUMERATED {
 *     level1 (1),
 *     level2 (2),
 *     level3 (3),
 *     level4 (4),
 *     level5 (5),
 *     level6 (6),
 *     level7 (7) }
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
 * Common Criteria Evaluation Assurance Level of the TBB (EAL 1
 * through EAL 7). TCG Platform Certificate Profile v1.1 r19
 * §3.1.1.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * EvaluationAssuranceLevel  ::=  ENUMERATED {
 *     level1 (1),
 *     level2 (2),
 *     level3 (3),
 *     level4 (4),
 *     level5 (5),
 *     level6 (6),
 *     level7 (7) }
 * ```
 *
 * @enum {number}
 */
export
const EvaluationAssuranceLevel = _enum_for_EvaluationAssuranceLevel;

/**
 * @summary EvaluationAssuranceLevel_level1
 * @description
 *
 * Common Criteria EAL 1. §3.1.1.
 *
 * @constant
 * @type {number}
 */
export
const EvaluationAssuranceLevel_level1: EvaluationAssuranceLevel = EvaluationAssuranceLevel.level1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary level1
 * @description
 *
 * Common Criteria EAL 1. §3.1.1.
 *
 * @constant
 * @type {number}
 */
export
const level1: EvaluationAssuranceLevel = EvaluationAssuranceLevel.level1; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EvaluationAssuranceLevel_level2
 * @description
 *
 * Common Criteria EAL 2. §3.1.1.
 *
 * @constant
 * @type {number}
 */
export
const EvaluationAssuranceLevel_level2: EvaluationAssuranceLevel = EvaluationAssuranceLevel.level2; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary level2
 * @description
 *
 * Common Criteria EAL 2. §3.1.1.
 *
 * @constant
 * @type {number}
 */
export
const level2: EvaluationAssuranceLevel = EvaluationAssuranceLevel.level2; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EvaluationAssuranceLevel_level3
 * @description
 *
 * Common Criteria EAL 3. §3.1.1.
 *
 * @constant
 * @type {number}
 */
export
const EvaluationAssuranceLevel_level3: EvaluationAssuranceLevel = EvaluationAssuranceLevel.level3; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary level3
 * @description
 *
 * Common Criteria EAL 3. §3.1.1.
 *
 * @constant
 * @type {number}
 */
export
const level3: EvaluationAssuranceLevel = EvaluationAssuranceLevel.level3; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EvaluationAssuranceLevel_level4
 * @description
 *
 * Common Criteria EAL 4. §3.1.1.
 *
 * @constant
 * @type {number}
 */
export
const EvaluationAssuranceLevel_level4: EvaluationAssuranceLevel = EvaluationAssuranceLevel.level4; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary level4
 * @description
 *
 * Common Criteria EAL 4. §3.1.1.
 *
 * @constant
 * @type {number}
 */
export
const level4: EvaluationAssuranceLevel = EvaluationAssuranceLevel.level4; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EvaluationAssuranceLevel_level5
 * @description
 *
 * Common Criteria EAL 5. §3.1.1.
 *
 * @constant
 * @type {number}
 */
export
const EvaluationAssuranceLevel_level5: EvaluationAssuranceLevel = EvaluationAssuranceLevel.level5; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary level5
 * @description
 *
 * Common Criteria EAL 5. §3.1.1.
 *
 * @constant
 * @type {number}
 */
export
const level5: EvaluationAssuranceLevel = EvaluationAssuranceLevel.level5; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EvaluationAssuranceLevel_level6
 * @description
 *
 * Common Criteria EAL 6. §3.1.1.
 *
 * @constant
 * @type {number}
 */
export
const EvaluationAssuranceLevel_level6: EvaluationAssuranceLevel = EvaluationAssuranceLevel.level6; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary level6
 * @description
 *
 * Common Criteria EAL 6. §3.1.1.
 *
 * @constant
 * @type {number}
 */
export
const level6: EvaluationAssuranceLevel = EvaluationAssuranceLevel.level6; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EvaluationAssuranceLevel_level7
 * @description
 *
 * Common Criteria EAL 7. §3.1.1.
 *
 * @constant
 * @type {number}
 */
export
const EvaluationAssuranceLevel_level7: EvaluationAssuranceLevel = EvaluationAssuranceLevel.level7; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary level7
 * @description
 *
 * Common Criteria EAL 7. §3.1.1.
 *
 * @constant
 * @type {number}
 */
export
const level7: EvaluationAssuranceLevel = EvaluationAssuranceLevel.level7; /* SHORT_NAMED_ENUMERATED_VALUE */


export const _decode_EvaluationAssuranceLevel = $._decodeEnumerated;


export const _encode_EvaluationAssuranceLevel = $._encodeEnumerated;


/* eslint-enable */
