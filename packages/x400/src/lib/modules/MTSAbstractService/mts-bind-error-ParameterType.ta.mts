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

/* START_OF_SYMBOL_DEFINITION mts_bind_error_ParameterType */
/**
 * @summary mts_bind_error_ParameterType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * mts-bind-error-ParameterType ::= INTEGER { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type mts_bind_error_ParameterType = INTEGER;
/* END_OF_SYMBOL_DEFINITION mts_bind_error_ParameterType */

/* START_OF_SYMBOL_DEFINITION mts_bind_error_ParameterType_busy */
/**
 * @summary mts_bind_error_ParameterType_busy
 * @constant
 * @type {number}
 */
export const mts_bind_error_ParameterType_busy: mts_bind_error_ParameterType = 0; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION mts_bind_error_ParameterType_busy */

/* START_OF_SYMBOL_DEFINITION busy */
/**
 * @summary mts_bind_error_ParameterType_busy
 * @constant
 * @type {number}
 */
export const busy: mts_bind_error_ParameterType = mts_bind_error_ParameterType_busy; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION busy */

/* START_OF_SYMBOL_DEFINITION mts_bind_error_ParameterType_authentication_error */
/**
 * @summary mts_bind_error_ParameterType_authentication_error
 * @constant
 * @type {number}
 */
export const mts_bind_error_ParameterType_authentication_error: mts_bind_error_ParameterType = 2; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION mts_bind_error_ParameterType_authentication_error */

/* START_OF_SYMBOL_DEFINITION authentication_error */
/**
 * @summary mts_bind_error_ParameterType_authentication_error
 * @constant
 * @type {number}
 */
export const authentication_error: mts_bind_error_ParameterType = mts_bind_error_ParameterType_authentication_error; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION authentication_error */

/* START_OF_SYMBOL_DEFINITION mts_bind_error_ParameterType_unacceptable_dialogue_mode */
/**
 * @summary mts_bind_error_ParameterType_unacceptable_dialogue_mode
 * @constant
 * @type {number}
 */
export const mts_bind_error_ParameterType_unacceptable_dialogue_mode: mts_bind_error_ParameterType = 3; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION mts_bind_error_ParameterType_unacceptable_dialogue_mode */

/* START_OF_SYMBOL_DEFINITION unacceptable_dialogue_mode */
/**
 * @summary mts_bind_error_ParameterType_unacceptable_dialogue_mode
 * @constant
 * @type {number}
 */
export const unacceptable_dialogue_mode: mts_bind_error_ParameterType = mts_bind_error_ParameterType_unacceptable_dialogue_mode; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION unacceptable_dialogue_mode */

/* START_OF_SYMBOL_DEFINITION mts_bind_error_ParameterType_unacceptable_security_context */
/**
 * @summary mts_bind_error_ParameterType_unacceptable_security_context
 * @constant
 * @type {number}
 */
export const mts_bind_error_ParameterType_unacceptable_security_context: mts_bind_error_ParameterType = 4; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION mts_bind_error_ParameterType_unacceptable_security_context */

/* START_OF_SYMBOL_DEFINITION unacceptable_security_context */
/**
 * @summary mts_bind_error_ParameterType_unacceptable_security_context
 * @constant
 * @type {number}
 */
export const unacceptable_security_context: mts_bind_error_ParameterType = mts_bind_error_ParameterType_unacceptable_security_context; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION unacceptable_security_context */

/* START_OF_SYMBOL_DEFINITION mts_bind_error_ParameterType_inadequate_association_confidentiality */
/**
 * @summary mts_bind_error_ParameterType_inadequate_association_confidentiality
 * @constant
 * @type {number}
 */
export const mts_bind_error_ParameterType_inadequate_association_confidentiality: mts_bind_error_ParameterType = 5; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION mts_bind_error_ParameterType_inadequate_association_confidentiality */

/* START_OF_SYMBOL_DEFINITION inadequate_association_confidentiality */
/**
 * @summary mts_bind_error_ParameterType_inadequate_association_confidentiality
 * @constant
 * @type {number}
 */
export const inadequate_association_confidentiality: mts_bind_error_ParameterType = mts_bind_error_ParameterType_inadequate_association_confidentiality; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION inadequate_association_confidentiality */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_mts_bind_error_ParameterType */
let _cached_decoder_for_mts_bind_error_ParameterType: $.ASN1Decoder<mts_bind_error_ParameterType> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_mts_bind_error_ParameterType */

/* START_OF_SYMBOL_DEFINITION _decode_mts_bind_error_ParameterType */
/**
 * @summary Decodes an ASN.1 element into a(n) mts_bind_error_ParameterType
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {mts_bind_error_ParameterType} The decoded data structure.
 */
export function _decode_mts_bind_error_ParameterType(el: _Element) {
    if (!_cached_decoder_for_mts_bind_error_ParameterType) {
        _cached_decoder_for_mts_bind_error_ParameterType = $._decodeInteger;
    }
    return _cached_decoder_for_mts_bind_error_ParameterType(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_mts_bind_error_ParameterType */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_mts_bind_error_ParameterType */
let _cached_encoder_for_mts_bind_error_ParameterType: $.ASN1Encoder<mts_bind_error_ParameterType> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_mts_bind_error_ParameterType */

/* START_OF_SYMBOL_DEFINITION _encode_mts_bind_error_ParameterType */
/**
 * @summary Encodes a(n) mts_bind_error_ParameterType into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The mts_bind_error_ParameterType, encoded as an ASN.1 Element.
 */
export function _encode_mts_bind_error_ParameterType(
    value: mts_bind_error_ParameterType,
    elGetter: $.ASN1Encoder<mts_bind_error_ParameterType>
) {
    if (!_cached_encoder_for_mts_bind_error_ParameterType) {
        _cached_encoder_for_mts_bind_error_ParameterType = $._encodeInteger;
    }
    return _cached_encoder_for_mts_bind_error_ParameterType(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_mts_bind_error_ParameterType */

/* eslint-enable */
