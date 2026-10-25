/* eslint-disable */
import {
    type INTEGER,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';

/**
 * @summary ErrorCode_Item
 * @description
 *
 * One named outcome in `ErrorCode`. Meanings: ITU-T Rec. X.753
 * (10/97)
 * [§8.2.1](https://www.itu.int/rec/T-REC-X.753-199710-I),
 * §8.2.2.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ErrorCode-Item ::= INTEGER { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type ErrorCode_Item = INTEGER;

/**
 * @summary ErrorCode_Item_noError
 * @description
 *
 * Execution succeeded. ITU-T Rec. X.753 (10/97) §8.2.1–§8.2.2.
 *
 * @constant
 * @type {number}
 */
export const ErrorCode_Item_noError = 0 satisfies ErrorCode_Item; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ErrorCode_Item_noError
 * @description
 *
 * Execution succeeded. ITU-T Rec. X.753 (10/97) §8.2.1–§8.2.2.
 *
 * @constant
 * @type {number}
 */
export const noError = ErrorCode_Item_noError satisfies ErrorCode_Item; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ErrorCode_Item_noScriptError
 * @description
 *
 * Failed because no script name was specified (no execution
 * parameter list on the trigger and no default). ITU-T Rec.
 * X.753 (10/97) §7.1, §8.2.1–§8.2.2.
 *
 * @constant
 * @type {number}
 */
export const ErrorCode_Item_noScriptError = 1 satisfies ErrorCode_Item; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ErrorCode_Item_noScriptError
 * @description
 *
 * Failed because no script name was specified (no execution
 * parameter list on the trigger and no default). ITU-T Rec.
 * X.753 (10/97) §7.1, §8.2.1–§8.2.2.
 *
 * @constant
 * @type {number}
 */
export const noScriptError = ErrorCode_Item_noScriptError satisfies ErrorCode_Item; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ErrorCode_Item_scriptRejectedError
 * @description
 *
 * Script is not in the launch pad's `availableScriptList`.
 * ITU-T Rec. X.753 (10/97) §7.1, §8.2.1–§8.2.2.
 *
 * @constant
 * @type {number}
 */
export const ErrorCode_Item_scriptRejectedError = 2 satisfies ErrorCode_Item; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ErrorCode_Item_scriptRejectedError
 * @description
 *
 * Script is not in the launch pad's `availableScriptList`.
 * ITU-T Rec. X.753 (10/97) §7.1, §8.2.1–§8.2.2.
 *
 * @constant
 * @type {number}
 */
export const scriptRejectedError = ErrorCode_Item_scriptRejectedError satisfies ErrorCode_Item; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ErrorCode_Item_invalidParameterTypeError
 * @description
 *
 * Parameter type expected by the script does not match the
 * type supplied. ITU-T Rec. X.753 (10/97) §8.2.1–§8.2.2.
 *
 * @constant
 * @type {number}
 */
export const ErrorCode_Item_invalidParameterTypeError = 3 satisfies ErrorCode_Item; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ErrorCode_Item_invalidParameterTypeError
 * @description
 *
 * Parameter type expected by the script does not match the
 * type supplied. ITU-T Rec. X.753 (10/97) §8.2.1–§8.2.2.
 *
 * @constant
 * @type {number}
 */
export const invalidParameterTypeError = ErrorCode_Item_invalidParameterTypeError satisfies ErrorCode_Item; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ErrorCode_Item_invalidParameterValueError
 * @description
 *
 * Parameter value is invalid (e.g. out of range). ITU-T Rec.
 * X.753 (10/97) §8.2.1–§8.2.2.
 *
 * @constant
 * @type {number}
 */
export const ErrorCode_Item_invalidParameterValueError = 4 satisfies ErrorCode_Item; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ErrorCode_Item_invalidParameterValueError
 * @description
 *
 * Parameter value is invalid (e.g. out of range). ITU-T Rec.
 * X.753 (10/97) §8.2.1–§8.2.2.
 *
 * @constant
 * @type {number}
 */
export const invalidParameterValueError = ErrorCode_Item_invalidParameterValueError satisfies ErrorCode_Item; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ErrorCode_Item_scriptSyntaxError
 * @description
 *
 * Script failed due to a syntax error. ITU-T Rec. X.753 (10/97)
 * §8.2.1–§8.2.2.
 *
 * @constant
 * @type {number}
 */
export const ErrorCode_Item_scriptSyntaxError = 5 satisfies ErrorCode_Item; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ErrorCode_Item_scriptSyntaxError
 * @description
 *
 * Script failed due to a syntax error. ITU-T Rec. X.753 (10/97)
 * §8.2.1–§8.2.2.
 *
 * @constant
 * @type {number}
 */
export const scriptSyntaxError = ErrorCode_Item_scriptSyntaxError satisfies ErrorCode_Item; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ErrorCode_Item_scriptExecutionFailedError
 * @description
 *
 * Script failed for a reason other than improper syntax. ITU-T
 * Rec. X.753 (10/97) §8.2.1–§8.2.2.
 *
 * @constant
 * @type {number}
 */
export const ErrorCode_Item_scriptExecutionFailedError = 6 satisfies ErrorCode_Item; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ErrorCode_Item_scriptExecutionFailedError
 * @description
 *
 * Script failed for a reason other than improper syntax. ITU-T
 * Rec. X.753 (10/97) §8.2.1–§8.2.2.
 *
 * @constant
 * @type {number}
 */
export const scriptExecutionFailedError = ErrorCode_Item_scriptExecutionFailedError satisfies ErrorCode_Item; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ErrorCode_Item_invalidParmeterNumber
 * @description
 *
 * Number of parameters supplied does not match the number the
 * script expects. ASN.1 identifier omits an "a" in
 * "Parameter". ITU-T Rec. X.753 (10/97) §8.2.1–§8.2.2.
 *
 * @constant
 * @type {number}
 */
export const ErrorCode_Item_invalidParmeterNumber = 7 satisfies ErrorCode_Item; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ErrorCode_Item_invalidParmeterNumber
 * @description
 *
 * Number of parameters supplied does not match the number the
 * script expects. ASN.1 identifier omits an "a" in
 * "Parameter". ITU-T Rec. X.753 (10/97) §8.2.1–§8.2.2.
 *
 * @constant
 * @type {number}
 */
export const invalidParmeterNumber = ErrorCode_Item_invalidParmeterNumber satisfies ErrorCode_Item; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ErrorCode_Item_unauthorizedAccessError
 * @description
 *
 * Access denied to one or more object instances the script
 * uses. ITU-T Rec. X.753 (10/97) §7.5, §8.2.1–§8.2.2.
 *
 * @constant
 * @type {number}
 */
export const ErrorCode_Item_unauthorizedAccessError = 8 satisfies ErrorCode_Item; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ErrorCode_Item_unauthorizedAccessError
 * @description
 *
 * Access denied to one or more object instances the script
 * uses. ITU-T Rec. X.753 (10/97) §7.5, §8.2.1–§8.2.2.
 *
 * @constant
 * @type {number}
 */
export const unauthorizedAccessError = ErrorCode_Item_unauthorizedAccessError satisfies ErrorCode_Item; /* SHORT_NAMED_INTEGER_VALUE */


export const _decode_ErrorCode_Item = $._decodeInteger;


export const _encode_ErrorCode_Item = $._encodeInteger;


/* eslint-enable */
