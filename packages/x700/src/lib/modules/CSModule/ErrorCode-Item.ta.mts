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
} from 'asn1-ts';
import * as $ from 'asn1-ts/dist/functional.mjs';

/**
 * @summary ErrorCode_Item
 * @description
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
 * @constant
 * @type {number}
 */
export const ErrorCode_Item_noError: ErrorCode_Item = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ErrorCode_Item_noError
 * @constant
 * @type {number}
 */
export const noError: ErrorCode_Item = ErrorCode_Item_noError; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ErrorCode_Item_noScriptError
 * @constant
 * @type {number}
 */
export const ErrorCode_Item_noScriptError: ErrorCode_Item = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ErrorCode_Item_noScriptError
 * @constant
 * @type {number}
 */
export const noScriptError: ErrorCode_Item = ErrorCode_Item_noScriptError; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ErrorCode_Item_scriptRejectedError
 * @constant
 * @type {number}
 */
export const ErrorCode_Item_scriptRejectedError: ErrorCode_Item = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ErrorCode_Item_scriptRejectedError
 * @constant
 * @type {number}
 */
export const scriptRejectedError: ErrorCode_Item = ErrorCode_Item_scriptRejectedError; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ErrorCode_Item_invalidParameterTypeError
 * @constant
 * @type {number}
 */
export const ErrorCode_Item_invalidParameterTypeError: ErrorCode_Item = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ErrorCode_Item_invalidParameterTypeError
 * @constant
 * @type {number}
 */
export const invalidParameterTypeError: ErrorCode_Item = ErrorCode_Item_invalidParameterTypeError; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ErrorCode_Item_invalidParameterValueError
 * @constant
 * @type {number}
 */
export const ErrorCode_Item_invalidParameterValueError: ErrorCode_Item = 4; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ErrorCode_Item_invalidParameterValueError
 * @constant
 * @type {number}
 */
export const invalidParameterValueError: ErrorCode_Item = ErrorCode_Item_invalidParameterValueError; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ErrorCode_Item_scriptSyntaxError
 * @constant
 * @type {number}
 */
export const ErrorCode_Item_scriptSyntaxError: ErrorCode_Item = 5; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ErrorCode_Item_scriptSyntaxError
 * @constant
 * @type {number}
 */
export const scriptSyntaxError: ErrorCode_Item = ErrorCode_Item_scriptSyntaxError; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ErrorCode_Item_scriptExecutionFailedError
 * @constant
 * @type {number}
 */
export const ErrorCode_Item_scriptExecutionFailedError: ErrorCode_Item = 6; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ErrorCode_Item_scriptExecutionFailedError
 * @constant
 * @type {number}
 */
export const scriptExecutionFailedError: ErrorCode_Item = ErrorCode_Item_scriptExecutionFailedError; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ErrorCode_Item_invalidParmeterNumber
 * @constant
 * @type {number}
 */
export const ErrorCode_Item_invalidParmeterNumber: ErrorCode_Item = 7; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ErrorCode_Item_invalidParmeterNumber
 * @constant
 * @type {number}
 */
export const invalidParmeterNumber: ErrorCode_Item = ErrorCode_Item_invalidParmeterNumber; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ErrorCode_Item_unauthorizedAccessError
 * @constant
 * @type {number}
 */
export const ErrorCode_Item_unauthorizedAccessError: ErrorCode_Item = 8; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ErrorCode_Item_unauthorizedAccessError
 * @constant
 * @type {number}
 */
export const unauthorizedAccessError: ErrorCode_Item = ErrorCode_Item_unauthorizedAccessError; /* SHORT_NAMED_INTEGER_VALUE */


export const _decode_ErrorCode_Item = $._decodeInteger;


export const _encode_ErrorCode_Item = $._encodeInteger;


/* eslint-enable */
