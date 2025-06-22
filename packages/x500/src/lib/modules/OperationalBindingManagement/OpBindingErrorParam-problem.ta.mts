/* eslint-disable */
import { ASN1Element as _Element, ENUMERATED } from "asn1-ts";
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
export const OpBindingErrorParam_problem_invalidID: OpBindingErrorParam_problem = 0; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary invalidID
 * @constant
 * @type {number}
 */
export const invalidID: OpBindingErrorParam_problem = OpBindingErrorParam_problem_invalidID; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OpBindingErrorParam_problem_duplicateID
 * @constant
 * @type {number}
 */
export const OpBindingErrorParam_problem_duplicateID: OpBindingErrorParam_problem = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary duplicateID
 * @constant
 * @type {number}
 */
export const duplicateID: OpBindingErrorParam_problem = OpBindingErrorParam_problem_duplicateID; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OpBindingErrorParam_problem_unsupportedBindingType
 * @constant
 * @type {number}
 */
export const OpBindingErrorParam_problem_unsupportedBindingType: OpBindingErrorParam_problem = 2; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unsupportedBindingType
 * @constant
 * @type {number}
 */
export const unsupportedBindingType: OpBindingErrorParam_problem = OpBindingErrorParam_problem_unsupportedBindingType; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OpBindingErrorParam_problem_notAllowedForRole
 * @constant
 * @type {number}
 */
export const OpBindingErrorParam_problem_notAllowedForRole: OpBindingErrorParam_problem = 3; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary notAllowedForRole
 * @constant
 * @type {number}
 */
export const notAllowedForRole: OpBindingErrorParam_problem = OpBindingErrorParam_problem_notAllowedForRole; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OpBindingErrorParam_problem_parametersMissing
 * @constant
 * @type {number}
 */
export const OpBindingErrorParam_problem_parametersMissing: OpBindingErrorParam_problem = 4; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary parametersMissing
 * @constant
 * @type {number}
 */
export const parametersMissing: OpBindingErrorParam_problem = OpBindingErrorParam_problem_parametersMissing; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OpBindingErrorParam_problem_roleAssignment
 * @constant
 * @type {number}
 */
export const OpBindingErrorParam_problem_roleAssignment: OpBindingErrorParam_problem = 5; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary roleAssignment
 * @constant
 * @type {number}
 */
export const roleAssignment: OpBindingErrorParam_problem = OpBindingErrorParam_problem_roleAssignment; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OpBindingErrorParam_problem_invalidStartTime
 * @constant
 * @type {number}
 */
export const OpBindingErrorParam_problem_invalidStartTime: OpBindingErrorParam_problem = 6; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary invalidStartTime
 * @constant
 * @type {number}
 */
export const invalidStartTime: OpBindingErrorParam_problem = OpBindingErrorParam_problem_invalidStartTime; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OpBindingErrorParam_problem_invalidEndTime
 * @constant
 * @type {number}
 */
export const OpBindingErrorParam_problem_invalidEndTime: OpBindingErrorParam_problem = 7; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary invalidEndTime
 * @constant
 * @type {number}
 */
export const invalidEndTime: OpBindingErrorParam_problem = OpBindingErrorParam_problem_invalidEndTime; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OpBindingErrorParam_problem_invalidAgreement
 * @constant
 * @type {number}
 */
export const OpBindingErrorParam_problem_invalidAgreement: OpBindingErrorParam_problem = 8; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary invalidAgreement
 * @constant
 * @type {number}
 */
export const invalidAgreement: OpBindingErrorParam_problem = OpBindingErrorParam_problem_invalidAgreement; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OpBindingErrorParam_problem_currentlyNotDecidable
 * @constant
 * @type {number}
 */
export const OpBindingErrorParam_problem_currentlyNotDecidable: OpBindingErrorParam_problem = 9; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary currentlyNotDecidable
 * @constant
 * @type {number}
 */
export const currentlyNotDecidable: OpBindingErrorParam_problem = OpBindingErrorParam_problem_currentlyNotDecidable; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OpBindingErrorParam_problem_modificationNotAllowed
 * @constant
 * @type {number}
 */
export const OpBindingErrorParam_problem_modificationNotAllowed: OpBindingErrorParam_problem = 10; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary modificationNotAllowed
 * @constant
 * @type {number}
 */
export const modificationNotAllowed: OpBindingErrorParam_problem = OpBindingErrorParam_problem_modificationNotAllowed; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OpBindingErrorParam_problem_invalidBindingType
 * @constant
 * @type {number}
 */
export const OpBindingErrorParam_problem_invalidBindingType: OpBindingErrorParam_problem = 11; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary invalidBindingType
 * @constant
 * @type {number}
 */
export const invalidBindingType: OpBindingErrorParam_problem = OpBindingErrorParam_problem_invalidBindingType; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OpBindingErrorParam_problem_invalidNewID
 * @constant
 * @type {number}
 */
export const OpBindingErrorParam_problem_invalidNewID: OpBindingErrorParam_problem = 12; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary invalidNewID
 * @constant
 * @type {number}
 */
export const invalidNewID: OpBindingErrorParam_problem = OpBindingErrorParam_problem_invalidNewID; /* SHORT_NAMED_ENUMERATED_VALUE */


export const _decode_OpBindingErrorParam_problem = $._decodeEnumerated;


export const _encode_OpBindingErrorParam_problem = $._encodeEnumerated;


/* eslint-enable */
