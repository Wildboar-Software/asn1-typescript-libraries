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

/* START_OF_SYMBOL_DEFINITION BindingError_integer */
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
/* END_OF_SYMBOL_DEFINITION BindingError_integer */

/* START_OF_SYMBOL_DEFINITION BindingError_integer_busy */
/**
 * @summary BindingError_integer_busy
 * @constant
 * @type {number}
 */
export const BindingError_integer_busy: BindingError_integer = 0; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION BindingError_integer_busy */

/* START_OF_SYMBOL_DEFINITION busy */
/**
 * @summary BindingError_integer_busy
 * @constant
 * @type {number}
 */
export const busy: BindingError_integer = BindingError_integer_busy; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION busy */

/* START_OF_SYMBOL_DEFINITION BindingError_integer_authentication_error */
/**
 * @summary BindingError_integer_authentication_error
 * @constant
 * @type {number}
 */
export const BindingError_integer_authentication_error: BindingError_integer = 2; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION BindingError_integer_authentication_error */

/* START_OF_SYMBOL_DEFINITION authentication_error */
/**
 * @summary BindingError_integer_authentication_error
 * @constant
 * @type {number}
 */
export const authentication_error: BindingError_integer = BindingError_integer_authentication_error; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION authentication_error */

/* START_OF_SYMBOL_DEFINITION BindingError_integer_unacceptable_dialogue_mode */
/**
 * @summary BindingError_integer_unacceptable_dialogue_mode
 * @constant
 * @type {number}
 */
export const BindingError_integer_unacceptable_dialogue_mode: BindingError_integer = 3; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION BindingError_integer_unacceptable_dialogue_mode */

/* START_OF_SYMBOL_DEFINITION unacceptable_dialogue_mode */
/**
 * @summary BindingError_integer_unacceptable_dialogue_mode
 * @constant
 * @type {number}
 */
export const unacceptable_dialogue_mode: BindingError_integer = BindingError_integer_unacceptable_dialogue_mode; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION unacceptable_dialogue_mode */

/* START_OF_SYMBOL_DEFINITION BindingError_integer_unacceptable_security_context */
/**
 * @summary BindingError_integer_unacceptable_security_context
 * @constant
 * @type {number}
 */
export const BindingError_integer_unacceptable_security_context: BindingError_integer = 4; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION BindingError_integer_unacceptable_security_context */

/* START_OF_SYMBOL_DEFINITION unacceptable_security_context */
/**
 * @summary BindingError_integer_unacceptable_security_context
 * @constant
 * @type {number}
 */
export const unacceptable_security_context: BindingError_integer = BindingError_integer_unacceptable_security_context; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION unacceptable_security_context */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_BindingError_integer */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_BindingError_integer */

/* START_OF_SYMBOL_DEFINITION _decode_BindingError_integer */
export const _decode_BindingError_integer = $._decodeInteger;
/* END_OF_SYMBOL_DEFINITION _decode_BindingError_integer */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_BindingError_integer */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_BindingError_integer */

/* START_OF_SYMBOL_DEFINITION _encode_BindingError_integer */
export const _encode_BindingError_integer = $._encodeInteger;

/* END_OF_SYMBOL_DEFINITION _encode_BindingError_integer */

/* eslint-enable */
