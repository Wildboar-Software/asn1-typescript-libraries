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
import * as $ from '@wildboar/asn1/functional';

/**
 * @summary BindingError_integer
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * BindingError-integer ::= INTEGER { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type BindingError_integer = INTEGER;

/**
 * @summary BindingError_integer_busy
 * @constant
 * @type {number}
 */
export const BindingError_integer_busy: BindingError_integer = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary BindingError_integer_busy
 * @constant
 * @type {number}
 */
export const busy: BindingError_integer = BindingError_integer_busy; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary BindingError_integer_authentication_error
 * @constant
 * @type {number}
 */
export const BindingError_integer_authentication_error: BindingError_integer = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary BindingError_integer_authentication_error
 * @constant
 * @type {number}
 */
export const authentication_error: BindingError_integer = BindingError_integer_authentication_error; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary BindingError_integer_unacceptable_dialogue_mode
 * @constant
 * @type {number}
 */
export const BindingError_integer_unacceptable_dialogue_mode: BindingError_integer = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary BindingError_integer_unacceptable_dialogue_mode
 * @constant
 * @type {number}
 */
export const unacceptable_dialogue_mode: BindingError_integer = BindingError_integer_unacceptable_dialogue_mode; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary BindingError_integer_unacceptable_security_context
 * @constant
 * @type {number}
 */
export const BindingError_integer_unacceptable_security_context: BindingError_integer = 4; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary BindingError_integer_unacceptable_security_context
 * @constant
 * @type {number}
 */
export const unacceptable_security_context: BindingError_integer = BindingError_integer_unacceptable_security_context; /* SHORT_NAMED_INTEGER_VALUE */


export const _decode_BindingError_integer = $._decodeInteger;


export const _encode_BindingError_integer = $._encodeInteger;


/* eslint-enable */
