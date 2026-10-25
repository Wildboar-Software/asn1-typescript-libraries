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
 * @summary mta_bind_error_ParameterType
 * @description
 *
 * Defined in ITU-T X.411 (1999) (§12).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * mta-bind-error-ParameterType ::= INTEGER { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type mta_bind_error_ParameterType = INTEGER;

/**
 * @summary mta_bind_error_ParameterType_busy
 * @constant
 * @type {number}
 */
export const mta_bind_error_ParameterType_busy = 0 satisfies mta_bind_error_ParameterType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary mta_bind_error_ParameterType_busy
 * @constant
 * @type {number}
 */
export const busy = mta_bind_error_ParameterType_busy; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary mta_bind_error_ParameterType_authentication_error
 * @constant
 * @type {number}
 */
export const mta_bind_error_ParameterType_authentication_error = 2 satisfies mta_bind_error_ParameterType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary mta_bind_error_ParameterType_authentication_error
 * @constant
 * @type {number}
 */
export const authentication_error = mta_bind_error_ParameterType_authentication_error; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary mta_bind_error_ParameterType_unacceptable_dialogue_mode
 * @constant
 * @type {number}
 */
export const mta_bind_error_ParameterType_unacceptable_dialogue_mode = 3 satisfies mta_bind_error_ParameterType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary mta_bind_error_ParameterType_unacceptable_dialogue_mode
 * @constant
 * @type {number}
 */
export const unacceptable_dialogue_mode = mta_bind_error_ParameterType_unacceptable_dialogue_mode; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary mta_bind_error_ParameterType_unacceptable_security_context
 * @constant
 * @type {number}
 */
export const mta_bind_error_ParameterType_unacceptable_security_context = 4 satisfies mta_bind_error_ParameterType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary mta_bind_error_ParameterType_unacceptable_security_context
 * @constant
 * @type {number}
 */
export const unacceptable_security_context = mta_bind_error_ParameterType_unacceptable_security_context; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary mta_bind_error_ParameterType_inadequate_association_confidentiality
 * @constant
 * @type {number}
 */
export const mta_bind_error_ParameterType_inadequate_association_confidentiality = 5 satisfies mta_bind_error_ParameterType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary mta_bind_error_ParameterType_inadequate_association_confidentiality
 * @constant
 * @type {number}
 */
export const inadequate_association_confidentiality = mta_bind_error_ParameterType_inadequate_association_confidentiality; /* SHORT_NAMED_INTEGER_VALUE */


export const _decode_mta_bind_error_ParameterType = $._decodeInteger;


export const _encode_mta_bind_error_ParameterType = $._encodeInteger;


/* eslint-enable */
