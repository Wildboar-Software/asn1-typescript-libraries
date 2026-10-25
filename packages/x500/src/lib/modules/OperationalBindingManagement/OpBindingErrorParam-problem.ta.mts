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
export const OpBindingErrorParam_problem_invalidID: _enum_for_OpBindingErrorParam_problem.invalidID = _enum_for_OpBindingErrorParam_problem.invalidID; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary invalidID
 * @constant
 * @type {number}
 */
export const invalidID: _enum_for_OpBindingErrorParam_problem.invalidID = OpBindingErrorParam_problem_invalidID; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OpBindingErrorParam_problem_duplicateID
 * @constant
 * @type {number}
 */
export const OpBindingErrorParam_problem_duplicateID: _enum_for_OpBindingErrorParam_problem.duplicateID = _enum_for_OpBindingErrorParam_problem.duplicateID; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary duplicateID
 * @constant
 * @type {number}
 */
export const duplicateID: _enum_for_OpBindingErrorParam_problem.duplicateID = OpBindingErrorParam_problem_duplicateID; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OpBindingErrorParam_problem_unsupportedBindingType
 * @constant
 * @type {number}
 */
export const OpBindingErrorParam_problem_unsupportedBindingType: _enum_for_OpBindingErrorParam_problem.unsupportedBindingType = _enum_for_OpBindingErrorParam_problem.unsupportedBindingType; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unsupportedBindingType
 * @constant
 * @type {number}
 */
export const unsupportedBindingType: _enum_for_OpBindingErrorParam_problem.unsupportedBindingType = OpBindingErrorParam_problem_unsupportedBindingType; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OpBindingErrorParam_problem_notAllowedForRole
 * @constant
 * @type {number}
 */
export const OpBindingErrorParam_problem_notAllowedForRole: _enum_for_OpBindingErrorParam_problem.notAllowedForRole = _enum_for_OpBindingErrorParam_problem.notAllowedForRole; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary notAllowedForRole
 * @constant
 * @type {number}
 */
export const notAllowedForRole: _enum_for_OpBindingErrorParam_problem.notAllowedForRole = OpBindingErrorParam_problem_notAllowedForRole; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OpBindingErrorParam_problem_parametersMissing
 * @constant
 * @type {number}
 */
export const OpBindingErrorParam_problem_parametersMissing: _enum_for_OpBindingErrorParam_problem.parametersMissing = _enum_for_OpBindingErrorParam_problem.parametersMissing; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary parametersMissing
 * @constant
 * @type {number}
 */
export const parametersMissing: _enum_for_OpBindingErrorParam_problem.parametersMissing = OpBindingErrorParam_problem_parametersMissing; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OpBindingErrorParam_problem_roleAssignment
 * @constant
 * @type {number}
 */
export const OpBindingErrorParam_problem_roleAssignment: _enum_for_OpBindingErrorParam_problem.roleAssignment = _enum_for_OpBindingErrorParam_problem.roleAssignment; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary roleAssignment
 * @constant
 * @type {number}
 */
export const roleAssignment: _enum_for_OpBindingErrorParam_problem.roleAssignment = OpBindingErrorParam_problem_roleAssignment; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OpBindingErrorParam_problem_invalidStartTime
 * @constant
 * @type {number}
 */
export const OpBindingErrorParam_problem_invalidStartTime: _enum_for_OpBindingErrorParam_problem.invalidStartTime = _enum_for_OpBindingErrorParam_problem.invalidStartTime; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary invalidStartTime
 * @constant
 * @type {number}
 */
export const invalidStartTime: _enum_for_OpBindingErrorParam_problem.invalidStartTime = OpBindingErrorParam_problem_invalidStartTime; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OpBindingErrorParam_problem_invalidEndTime
 * @constant
 * @type {number}
 */
export const OpBindingErrorParam_problem_invalidEndTime: _enum_for_OpBindingErrorParam_problem.invalidEndTime = _enum_for_OpBindingErrorParam_problem.invalidEndTime; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary invalidEndTime
 * @constant
 * @type {number}
 */
export const invalidEndTime: _enum_for_OpBindingErrorParam_problem.invalidEndTime = OpBindingErrorParam_problem_invalidEndTime; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OpBindingErrorParam_problem_invalidAgreement
 * @constant
 * @type {number}
 */
export const OpBindingErrorParam_problem_invalidAgreement: _enum_for_OpBindingErrorParam_problem.invalidAgreement = _enum_for_OpBindingErrorParam_problem.invalidAgreement; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary invalidAgreement
 * @constant
 * @type {number}
 */
export const invalidAgreement: _enum_for_OpBindingErrorParam_problem.invalidAgreement = OpBindingErrorParam_problem_invalidAgreement; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OpBindingErrorParam_problem_currentlyNotDecidable
 * @constant
 * @type {number}
 */
export const OpBindingErrorParam_problem_currentlyNotDecidable: _enum_for_OpBindingErrorParam_problem.currentlyNotDecidable = _enum_for_OpBindingErrorParam_problem.currentlyNotDecidable; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary currentlyNotDecidable
 * @constant
 * @type {number}
 */
export const currentlyNotDecidable: _enum_for_OpBindingErrorParam_problem.currentlyNotDecidable = OpBindingErrorParam_problem_currentlyNotDecidable; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OpBindingErrorParam_problem_modificationNotAllowed
 * @constant
 * @type {number}
 */
export const OpBindingErrorParam_problem_modificationNotAllowed: _enum_for_OpBindingErrorParam_problem.modificationNotAllowed = _enum_for_OpBindingErrorParam_problem.modificationNotAllowed; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary modificationNotAllowed
 * @constant
 * @type {number}
 */
export const modificationNotAllowed: _enum_for_OpBindingErrorParam_problem.modificationNotAllowed = OpBindingErrorParam_problem_modificationNotAllowed; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OpBindingErrorParam_problem_invalidBindingType
 * @constant
 * @type {number}
 */
export const OpBindingErrorParam_problem_invalidBindingType: _enum_for_OpBindingErrorParam_problem.invalidBindingType = _enum_for_OpBindingErrorParam_problem.invalidBindingType; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary invalidBindingType
 * @constant
 * @type {number}
 */
export const invalidBindingType: _enum_for_OpBindingErrorParam_problem.invalidBindingType = OpBindingErrorParam_problem_invalidBindingType; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OpBindingErrorParam_problem_invalidNewID
 * @constant
 * @type {number}
 */
export const OpBindingErrorParam_problem_invalidNewID: _enum_for_OpBindingErrorParam_problem.invalidNewID = _enum_for_OpBindingErrorParam_problem.invalidNewID; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary invalidNewID
 * @constant
 * @type {number}
 */
export const invalidNewID: _enum_for_OpBindingErrorParam_problem.invalidNewID = OpBindingErrorParam_problem_invalidNewID; /* SHORT_NAMED_ENUMERATED_VALUE */


export const _decode_OpBindingErrorParam_problem: $.ASN1Decoder<number> = $._decodeEnumerated;


export const _encode_OpBindingErrorParam_problem: $.ASN1Encoder<number> = $._encodeEnumerated;


/* eslint-enable */
