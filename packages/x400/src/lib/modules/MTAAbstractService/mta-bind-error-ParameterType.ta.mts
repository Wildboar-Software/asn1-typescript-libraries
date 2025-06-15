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

/* START_OF_SYMBOL_DEFINITION mta_bind_error_ParameterType */
/**
 * @summary mta_bind_error_ParameterType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * mta-bind-error-ParameterType ::= INTEGER { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type mta_bind_error_ParameterType = INTEGER;
/* END_OF_SYMBOL_DEFINITION mta_bind_error_ParameterType */

/* START_OF_SYMBOL_DEFINITION mta_bind_error_ParameterType_busy */
/**
 * @summary mta_bind_error_ParameterType_busy
 * @constant
 * @type {number}
 */
export const mta_bind_error_ParameterType_busy: mta_bind_error_ParameterType = 0; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION mta_bind_error_ParameterType_busy */

/* START_OF_SYMBOL_DEFINITION busy */
/**
 * @summary mta_bind_error_ParameterType_busy
 * @constant
 * @type {number}
 */
export const busy: mta_bind_error_ParameterType = mta_bind_error_ParameterType_busy; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION busy */

/* START_OF_SYMBOL_DEFINITION mta_bind_error_ParameterType_authentication_error */
/**
 * @summary mta_bind_error_ParameterType_authentication_error
 * @constant
 * @type {number}
 */
export const mta_bind_error_ParameterType_authentication_error: mta_bind_error_ParameterType = 2; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION mta_bind_error_ParameterType_authentication_error */

/* START_OF_SYMBOL_DEFINITION authentication_error */
/**
 * @summary mta_bind_error_ParameterType_authentication_error
 * @constant
 * @type {number}
 */
export const authentication_error: mta_bind_error_ParameterType = mta_bind_error_ParameterType_authentication_error; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION authentication_error */

/* START_OF_SYMBOL_DEFINITION mta_bind_error_ParameterType_unacceptable_dialogue_mode */
/**
 * @summary mta_bind_error_ParameterType_unacceptable_dialogue_mode
 * @constant
 * @type {number}
 */
export const mta_bind_error_ParameterType_unacceptable_dialogue_mode: mta_bind_error_ParameterType = 3; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION mta_bind_error_ParameterType_unacceptable_dialogue_mode */

/* START_OF_SYMBOL_DEFINITION unacceptable_dialogue_mode */
/**
 * @summary mta_bind_error_ParameterType_unacceptable_dialogue_mode
 * @constant
 * @type {number}
 */
export const unacceptable_dialogue_mode: mta_bind_error_ParameterType = mta_bind_error_ParameterType_unacceptable_dialogue_mode; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION unacceptable_dialogue_mode */

/* START_OF_SYMBOL_DEFINITION mta_bind_error_ParameterType_unacceptable_security_context */
/**
 * @summary mta_bind_error_ParameterType_unacceptable_security_context
 * @constant
 * @type {number}
 */
export const mta_bind_error_ParameterType_unacceptable_security_context: mta_bind_error_ParameterType = 4; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION mta_bind_error_ParameterType_unacceptable_security_context */

/* START_OF_SYMBOL_DEFINITION unacceptable_security_context */
/**
 * @summary mta_bind_error_ParameterType_unacceptable_security_context
 * @constant
 * @type {number}
 */
export const unacceptable_security_context: mta_bind_error_ParameterType = mta_bind_error_ParameterType_unacceptable_security_context; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION unacceptable_security_context */

/* START_OF_SYMBOL_DEFINITION mta_bind_error_ParameterType_inadequate_association_confidentiality */
/**
 * @summary mta_bind_error_ParameterType_inadequate_association_confidentiality
 * @constant
 * @type {number}
 */
export const mta_bind_error_ParameterType_inadequate_association_confidentiality: mta_bind_error_ParameterType = 5; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION mta_bind_error_ParameterType_inadequate_association_confidentiality */

/* START_OF_SYMBOL_DEFINITION inadequate_association_confidentiality */
/**
 * @summary mta_bind_error_ParameterType_inadequate_association_confidentiality
 * @constant
 * @type {number}
 */
export const inadequate_association_confidentiality: mta_bind_error_ParameterType = mta_bind_error_ParameterType_inadequate_association_confidentiality; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION inadequate_association_confidentiality */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_mta_bind_error_ParameterType */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_mta_bind_error_ParameterType */

/* START_OF_SYMBOL_DEFINITION _decode_mta_bind_error_ParameterType */
export const _decode_mta_bind_error_ParameterType = $._decodeInteger;
/* END_OF_SYMBOL_DEFINITION _decode_mta_bind_error_ParameterType */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_mta_bind_error_ParameterType */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_mta_bind_error_ParameterType */

/* START_OF_SYMBOL_DEFINITION _encode_mta_bind_error_ParameterType */
export const _encode_mta_bind_error_ParameterType = $._encodeInteger;

/* END_OF_SYMBOL_DEFINITION _encode_mta_bind_error_ParameterType */

/* eslint-enable */
