/* eslint-disable */
import { ASN1Element as _Element, type ENUMERATED } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

export enum _enum_for_OpBindingErrorParam_problem {
    invalidID = 0,
    duplicateID = 1,
    unsupportedBindingType = 2,
    notAllowedForRole = 3,
    parametersMissing = 4,
    roleAssignment = 5,
    invalidStartTime = 6,
    invalidEndTime = 7,
    invalidAgreement = 8,
    currentlyNotDecidable = 9,
    modificationNotAllowed = 10,
    invalidBindingType = 11,
    invalidNewID = 12,
}

/**
 * @summary OpBindingErrorParam_problem
 * @description
 *
 * ENUMERATED: `invalidID`(0), `duplicateID`(1), `unsupportedBindingType`(2),
 * `notAllowedForRole`(3), `parametersMissing`(4), `roleAssignment`(5),
 * `invalidStartTime`(6), `invalidEndTime`(7), `invalidAgreement`(8),
 * `currentlyNotDecidable`(9), `modificationNotAllowed`(10),
 * `invalidBindingType`(11), `invalidNewID`(12). Extensible (`...`). 0 is a
 * defined problem, not "no error".
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * OpBindingErrorParam-problem ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 * @enum {number}
 */
export type OpBindingErrorParam_problem =
    | _enum_for_OpBindingErrorParam_problem
    | ENUMERATED;

/**
 * @summary OpBindingErrorParam_problem_invalidID
 * @constant
 * @type {number}
 */
export const OpBindingErrorParam_problem_invalidID = _enum_for_OpBindingErrorParam_problem.invalidID satisfies OpBindingErrorParam_problem; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary invalidID
 * @constant
 * @type {number}
 */
export const invalidID = OpBindingErrorParam_problem_invalidID satisfies OpBindingErrorParam_problem; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OpBindingErrorParam_problem_duplicateID
 * @constant
 * @type {number}
 */
export const OpBindingErrorParam_problem_duplicateID = _enum_for_OpBindingErrorParam_problem.duplicateID satisfies OpBindingErrorParam_problem; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary duplicateID
 * @constant
 * @type {number}
 */
export const duplicateID = OpBindingErrorParam_problem_duplicateID satisfies OpBindingErrorParam_problem; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OpBindingErrorParam_problem_unsupportedBindingType
 * @constant
 * @type {number}
 */
export const OpBindingErrorParam_problem_unsupportedBindingType = _enum_for_OpBindingErrorParam_problem.unsupportedBindingType satisfies OpBindingErrorParam_problem; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unsupportedBindingType
 * @constant
 * @type {number}
 */
export const unsupportedBindingType = OpBindingErrorParam_problem_unsupportedBindingType satisfies OpBindingErrorParam_problem; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OpBindingErrorParam_problem_notAllowedForRole
 * @constant
 * @type {number}
 */
export const OpBindingErrorParam_problem_notAllowedForRole = _enum_for_OpBindingErrorParam_problem.notAllowedForRole satisfies OpBindingErrorParam_problem; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary notAllowedForRole
 * @constant
 * @type {number}
 */
export const notAllowedForRole = OpBindingErrorParam_problem_notAllowedForRole satisfies OpBindingErrorParam_problem; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OpBindingErrorParam_problem_parametersMissing
 * @constant
 * @type {number}
 */
export const OpBindingErrorParam_problem_parametersMissing = _enum_for_OpBindingErrorParam_problem.parametersMissing satisfies OpBindingErrorParam_problem; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary parametersMissing
 * @constant
 * @type {number}
 */
export const parametersMissing = OpBindingErrorParam_problem_parametersMissing satisfies OpBindingErrorParam_problem; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OpBindingErrorParam_problem_roleAssignment
 * @constant
 * @type {number}
 */
export const OpBindingErrorParam_problem_roleAssignment = _enum_for_OpBindingErrorParam_problem.roleAssignment satisfies OpBindingErrorParam_problem; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary roleAssignment
 * @constant
 * @type {number}
 */
export const roleAssignment = OpBindingErrorParam_problem_roleAssignment satisfies OpBindingErrorParam_problem; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OpBindingErrorParam_problem_invalidStartTime
 * @constant
 * @type {number}
 */
export const OpBindingErrorParam_problem_invalidStartTime = _enum_for_OpBindingErrorParam_problem.invalidStartTime satisfies OpBindingErrorParam_problem; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary invalidStartTime
 * @constant
 * @type {number}
 */
export const invalidStartTime = OpBindingErrorParam_problem_invalidStartTime satisfies OpBindingErrorParam_problem; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OpBindingErrorParam_problem_invalidEndTime
 * @constant
 * @type {number}
 */
export const OpBindingErrorParam_problem_invalidEndTime = _enum_for_OpBindingErrorParam_problem.invalidEndTime satisfies OpBindingErrorParam_problem; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary invalidEndTime
 * @constant
 * @type {number}
 */
export const invalidEndTime = OpBindingErrorParam_problem_invalidEndTime satisfies OpBindingErrorParam_problem; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OpBindingErrorParam_problem_invalidAgreement
 * @constant
 * @type {number}
 */
export const OpBindingErrorParam_problem_invalidAgreement = _enum_for_OpBindingErrorParam_problem.invalidAgreement satisfies OpBindingErrorParam_problem; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary invalidAgreement
 * @constant
 * @type {number}
 */
export const invalidAgreement = OpBindingErrorParam_problem_invalidAgreement satisfies OpBindingErrorParam_problem; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OpBindingErrorParam_problem_currentlyNotDecidable
 * @constant
 * @type {number}
 */
export const OpBindingErrorParam_problem_currentlyNotDecidable = _enum_for_OpBindingErrorParam_problem.currentlyNotDecidable satisfies OpBindingErrorParam_problem; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary currentlyNotDecidable
 * @constant
 * @type {number}
 */
export const currentlyNotDecidable = OpBindingErrorParam_problem_currentlyNotDecidable satisfies OpBindingErrorParam_problem; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OpBindingErrorParam_problem_modificationNotAllowed
 * @constant
 * @type {number}
 */
export const OpBindingErrorParam_problem_modificationNotAllowed = _enum_for_OpBindingErrorParam_problem.modificationNotAllowed satisfies OpBindingErrorParam_problem; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary modificationNotAllowed
 * @constant
 * @type {number}
 */
export const modificationNotAllowed = OpBindingErrorParam_problem_modificationNotAllowed satisfies OpBindingErrorParam_problem; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OpBindingErrorParam_problem_invalidBindingType
 * @constant
 * @type {number}
 */
export const OpBindingErrorParam_problem_invalidBindingType = _enum_for_OpBindingErrorParam_problem.invalidBindingType satisfies OpBindingErrorParam_problem; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary invalidBindingType
 * @constant
 * @type {number}
 */
export const invalidBindingType = OpBindingErrorParam_problem_invalidBindingType satisfies OpBindingErrorParam_problem; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OpBindingErrorParam_problem_invalidNewID
 * @constant
 * @type {number}
 */
export const OpBindingErrorParam_problem_invalidNewID = _enum_for_OpBindingErrorParam_problem.invalidNewID satisfies OpBindingErrorParam_problem; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary invalidNewID
 * @constant
 * @type {number}
 */
export const invalidNewID = OpBindingErrorParam_problem_invalidNewID satisfies OpBindingErrorParam_problem; /* SHORT_NAMED_ENUMERATED_VALUE */


export const _decode_OpBindingErrorParam_problem = $._decodeEnumerated;


export const _encode_OpBindingErrorParam_problem = $._encodeEnumerated;


/* eslint-enable */
