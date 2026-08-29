/* eslint-disable */
import {
    INTEGER,
    ASN1Element as _Element,
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
export const ErrorCode_Item_noError: ErrorCode_Item = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ErrorCode_Item_noError
 * @description
 *
 * Execution succeeded. ITU-T Rec. X.753 (10/97) §8.2.1–§8.2.2.
 *
 * @constant
 * @type {number}
 */
export const noError: ErrorCode_Item = ErrorCode_Item_noError; /* SHORT_NAMED_INTEGER_VALUE */

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
export const ErrorCode_Item_noScriptError: ErrorCode_Item = 1; /* LONG_NAMED_INTEGER_VALUE */

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
export const noScriptError: ErrorCode_Item = ErrorCode_Item_noScriptError; /* SHORT_NAMED_INTEGER_VALUE */

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
export const ErrorCode_Item_scriptRejectedError: ErrorCode_Item = 2; /* LONG_NAMED_INTEGER_VALUE */

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
export const scriptRejectedError: ErrorCode_Item = ErrorCode_Item_scriptRejectedError; /* SHORT_NAMED_INTEGER_VALUE */

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
export const ErrorCode_Item_invalidParameterTypeError: ErrorCode_Item = 3; /* LONG_NAMED_INTEGER_VALUE */

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
export const invalidParameterTypeError: ErrorCode_Item = ErrorCode_Item_invalidParameterTypeError; /* SHORT_NAMED_INTEGER_VALUE */

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
export const ErrorCode_Item_invalidParameterValueError: ErrorCode_Item = 4; /* LONG_NAMED_INTEGER_VALUE */

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
export const invalidParameterValueError: ErrorCode_Item = ErrorCode_Item_invalidParameterValueError; /* SHORT_NAMED_INTEGER_VALUE */

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
export const ErrorCode_Item_scriptSyntaxError: ErrorCode_Item = 5; /* LONG_NAMED_INTEGER_VALUE */

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
export const scriptSyntaxError: ErrorCode_Item = ErrorCode_Item_scriptSyntaxError; /* SHORT_NAMED_INTEGER_VALUE */

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
export const ErrorCode_Item_scriptExecutionFailedError: ErrorCode_Item = 6; /* LONG_NAMED_INTEGER_VALUE */

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
export const scriptExecutionFailedError: ErrorCode_Item = ErrorCode_Item_scriptExecutionFailedError; /* SHORT_NAMED_INTEGER_VALUE */

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
export const ErrorCode_Item_invalidParmeterNumber: ErrorCode_Item = 7; /* LONG_NAMED_INTEGER_VALUE */

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
export const invalidParmeterNumber: ErrorCode_Item = ErrorCode_Item_invalidParmeterNumber; /* SHORT_NAMED_INTEGER_VALUE */

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
export const ErrorCode_Item_unauthorizedAccessError: ErrorCode_Item = 8; /* LONG_NAMED_INTEGER_VALUE */

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
export const unauthorizedAccessError: ErrorCode_Item = ErrorCode_Item_unauthorizedAccessError; /* SHORT_NAMED_INTEGER_VALUE */


export const _decode_ErrorCode_Item = $._decodeInteger;


export const _encode_ErrorCode_Item = $._encodeInteger;


/* eslint-enable */
