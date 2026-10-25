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
 * @summary mts_bind_error_ParameterType
 * @description
 *
 * Defined in ITU-T X.411 (1999) (§8).
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
export const mts_bind_error_ParameterType_busy: 0 = 0 satisfies mts_bind_error_ParameterType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary mts_bind_error_ParameterType_busy
 * @constant
 * @type {number}
 */
export const busy: 0 = mts_bind_error_ParameterType_busy; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary mts_bind_error_ParameterType_authentication_error
 * @constant
 * @type {number}
 */
export const mts_bind_error_ParameterType_authentication_error: 2 = 2 satisfies mts_bind_error_ParameterType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary mts_bind_error_ParameterType_authentication_error
 * @constant
 * @type {number}
 */
export const authentication_error: 2 = mts_bind_error_ParameterType_authentication_error; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary mts_bind_error_ParameterType_unacceptable_dialogue_mode
 * @constant
 * @type {number}
 */
export const mts_bind_error_ParameterType_unacceptable_dialogue_mode: 3 = 3 satisfies mts_bind_error_ParameterType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary mts_bind_error_ParameterType_unacceptable_dialogue_mode
 * @constant
 * @type {number}
 */
export const unacceptable_dialogue_mode: 3 = mts_bind_error_ParameterType_unacceptable_dialogue_mode; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary mts_bind_error_ParameterType_unacceptable_security_context
 * @constant
 * @type {number}
 */
export const mts_bind_error_ParameterType_unacceptable_security_context: 4 = 4 satisfies mts_bind_error_ParameterType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary mts_bind_error_ParameterType_unacceptable_security_context
 * @constant
 * @type {number}
 */
export const unacceptable_security_context: 4 = mts_bind_error_ParameterType_unacceptable_security_context; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary mts_bind_error_ParameterType_inadequate_association_confidentiality
 * @constant
 * @type {number}
 */
export const mts_bind_error_ParameterType_inadequate_association_confidentiality: 5 = 5 satisfies mts_bind_error_ParameterType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary mts_bind_error_ParameterType_inadequate_association_confidentiality
 * @constant
 * @type {number}
 */
export const inadequate_association_confidentiality: 5 = mts_bind_error_ParameterType_inadequate_association_confidentiality; /* SHORT_NAMED_INTEGER_VALUE */


export const _decode_mts_bind_error_ParameterType: $.ASN1Decoder<INTEGER> = $._decodeInteger;


export const _encode_mts_bind_error_ParameterType: $.ASN1Encoder<INTEGER> = $._encodeInteger;


/* eslint-enable */
