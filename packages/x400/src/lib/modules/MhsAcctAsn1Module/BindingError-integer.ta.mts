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
let _cached_decoder_for_BindingError_integer: $.ASN1Decoder<BindingError_integer> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_BindingError_integer */

/* START_OF_SYMBOL_DEFINITION _decode_BindingError_integer */
/**
 * @summary Decodes an ASN.1 element into a(n) BindingError_integer
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {BindingError_integer} The decoded data structure.
 */
export function _decode_BindingError_integer(el: _Element) {
    if (!_cached_decoder_for_BindingError_integer) {
        _cached_decoder_for_BindingError_integer = $._decodeInteger;
    }
    return _cached_decoder_for_BindingError_integer(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_BindingError_integer */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_BindingError_integer */
let _cached_encoder_for_BindingError_integer: $.ASN1Encoder<BindingError_integer> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_BindingError_integer */

/* START_OF_SYMBOL_DEFINITION _encode_BindingError_integer */
/**
 * @summary Encodes a(n) BindingError_integer into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The BindingError_integer, encoded as an ASN.1 Element.
 */
export function _encode_BindingError_integer(
    value: BindingError_integer,
    elGetter: $.ASN1Encoder<BindingError_integer>
) {
    if (!_cached_encoder_for_BindingError_integer) {
        _cached_encoder_for_BindingError_integer = $._encodeInteger;
    }
    return _cached_encoder_for_BindingError_integer(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_BindingError_integer */

/* eslint-enable */
