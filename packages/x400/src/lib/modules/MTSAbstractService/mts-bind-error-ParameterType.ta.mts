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

/**
 * @summary mts_bind_error_ParameterType_busy
 * @constant
 * @type {number}
 */
export const mts_bind_error_ParameterType_busy: mts_bind_error_ParameterType = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary mts_bind_error_ParameterType_busy
 * @constant
 * @type {number}
 */
export const busy: mts_bind_error_ParameterType = mts_bind_error_ParameterType_busy; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary mts_bind_error_ParameterType_authentication_error
 * @constant
 * @type {number}
 */
export const mts_bind_error_ParameterType_authentication_error: mts_bind_error_ParameterType = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary mts_bind_error_ParameterType_authentication_error
 * @constant
 * @type {number}
 */
export const authentication_error: mts_bind_error_ParameterType = mts_bind_error_ParameterType_authentication_error; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary mts_bind_error_ParameterType_unacceptable_dialogue_mode
 * @constant
 * @type {number}
 */
export const mts_bind_error_ParameterType_unacceptable_dialogue_mode: mts_bind_error_ParameterType = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary mts_bind_error_ParameterType_unacceptable_dialogue_mode
 * @constant
 * @type {number}
 */
export const unacceptable_dialogue_mode: mts_bind_error_ParameterType = mts_bind_error_ParameterType_unacceptable_dialogue_mode; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary mts_bind_error_ParameterType_unacceptable_security_context
 * @constant
 * @type {number}
 */
export const mts_bind_error_ParameterType_unacceptable_security_context: mts_bind_error_ParameterType = 4; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary mts_bind_error_ParameterType_unacceptable_security_context
 * @constant
 * @type {number}
 */
export const unacceptable_security_context: mts_bind_error_ParameterType = mts_bind_error_ParameterType_unacceptable_security_context; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary mts_bind_error_ParameterType_inadequate_association_confidentiality
 * @constant
 * @type {number}
 */
export const mts_bind_error_ParameterType_inadequate_association_confidentiality: mts_bind_error_ParameterType = 5; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary mts_bind_error_ParameterType_inadequate_association_confidentiality
 * @constant
 * @type {number}
 */
export const inadequate_association_confidentiality: mts_bind_error_ParameterType = mts_bind_error_ParameterType_inadequate_association_confidentiality; /* SHORT_NAMED_INTEGER_VALUE */


export const _decode_mts_bind_error_ParameterType = $._decodeInteger;


export const _encode_mts_bind_error_ParameterType = $._encodeInteger;


/* eslint-enable */
