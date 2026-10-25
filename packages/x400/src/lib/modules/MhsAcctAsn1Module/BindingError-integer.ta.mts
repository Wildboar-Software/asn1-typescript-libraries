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
 * @summary BindingError_integer
 * @description
 *
 * Defined in ITU-T X.411 (1999) (accounting objects).
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
export const BindingError_integer_busy: 0 = 0 satisfies BindingError_integer; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary BindingError_integer_busy
 * @constant
 * @type {number}
 */
export const busy: 0 = BindingError_integer_busy; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary BindingError_integer_authentication_error
 * @constant
 * @type {number}
 */
export const BindingError_integer_authentication_error: 2 = 2 satisfies BindingError_integer; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary BindingError_integer_authentication_error
 * @constant
 * @type {number}
 */
export const authentication_error: 2 = BindingError_integer_authentication_error; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary BindingError_integer_unacceptable_dialogue_mode
 * @constant
 * @type {number}
 */
export const BindingError_integer_unacceptable_dialogue_mode: 3 = 3 satisfies BindingError_integer; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary BindingError_integer_unacceptable_dialogue_mode
 * @constant
 * @type {number}
 */
export const unacceptable_dialogue_mode: 3 = BindingError_integer_unacceptable_dialogue_mode; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary BindingError_integer_unacceptable_security_context
 * @constant
 * @type {number}
 */
export const BindingError_integer_unacceptable_security_context: 4 = 4 satisfies BindingError_integer; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary BindingError_integer_unacceptable_security_context
 * @constant
 * @type {number}
 */
export const unacceptable_security_context: 4 = BindingError_integer_unacceptable_security_context; /* SHORT_NAMED_INTEGER_VALUE */


export const _decode_BindingError_integer: $.ASN1Decoder<INTEGER> = $._decodeInteger;


export const _encode_BindingError_integer: $.ASN1Encoder<INTEGER> = $._encodeInteger;


/* eslint-enable */
