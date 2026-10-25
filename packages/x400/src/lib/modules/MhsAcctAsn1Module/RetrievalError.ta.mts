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
 * @summary RetrievalError
 * @description
 *
 * Defined in ITU-T X.411 (1999) (accounting objects).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RetrievalError  ::=  INTEGER {
 *   --  Most of these have parameters
 *   attribute-error(1), auto-action-request-error(2), delete-error(3),
 *   fetch-restriction-error(4), invalid-parameter-error(5), range-error(6),
 *   security-error(7), sequence-number-error(8), service-error(9)}
 * ```
 */
export type RetrievalError = INTEGER;

/**
 * @summary RetrievalError_attribute_error
 * @constant
 * @type {number}
 */
export const RetrievalError_attribute_error: 1 = 1 satisfies RetrievalError; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RetrievalError_attribute_error
 * @constant
 * @type {number}
 */
export const attribute_error: 1 = RetrievalError_attribute_error; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RetrievalError_auto_action_request_error
 * @constant
 * @type {number}
 */
export const RetrievalError_auto_action_request_error: 2 = 2 satisfies RetrievalError; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RetrievalError_auto_action_request_error
 * @constant
 * @type {number}
 */
export const auto_action_request_error: 2 = RetrievalError_auto_action_request_error; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RetrievalError_delete_error
 * @constant
 * @type {number}
 */
export const RetrievalError_delete_error: 3 = 3 satisfies RetrievalError; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RetrievalError_delete_error
 * @constant
 * @type {number}
 */
export const delete_error: 3 = RetrievalError_delete_error; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RetrievalError_fetch_restriction_error
 * @constant
 * @type {number}
 */
export const RetrievalError_fetch_restriction_error: 4 = 4 satisfies RetrievalError; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RetrievalError_fetch_restriction_error
 * @constant
 * @type {number}
 */
export const fetch_restriction_error: 4 = RetrievalError_fetch_restriction_error; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RetrievalError_invalid_parameter_error
 * @constant
 * @type {number}
 */
export const RetrievalError_invalid_parameter_error: 5 = 5 satisfies RetrievalError; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RetrievalError_invalid_parameter_error
 * @constant
 * @type {number}
 */
export const invalid_parameter_error: 5 = RetrievalError_invalid_parameter_error; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RetrievalError_range_error
 * @constant
 * @type {number}
 */
export const RetrievalError_range_error: 6 = 6 satisfies RetrievalError; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RetrievalError_range_error
 * @constant
 * @type {number}
 */
export const range_error: 6 = RetrievalError_range_error; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RetrievalError_security_error
 * @constant
 * @type {number}
 */
export const RetrievalError_security_error: 7 = 7 satisfies RetrievalError; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RetrievalError_security_error
 * @constant
 * @type {number}
 */
export const security_error: 7 = RetrievalError_security_error; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RetrievalError_sequence_number_error
 * @constant
 * @type {number}
 */
export const RetrievalError_sequence_number_error: 8 = 8 satisfies RetrievalError; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RetrievalError_sequence_number_error
 * @constant
 * @type {number}
 */
export const sequence_number_error: 8 = RetrievalError_sequence_number_error; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RetrievalError_service_error
 * @constant
 * @type {number}
 */
export const RetrievalError_service_error: 9 = 9 satisfies RetrievalError; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RetrievalError_service_error
 * @constant
 * @type {number}
 */
export const service_error: 9 = RetrievalError_service_error; /* SHORT_NAMED_INTEGER_VALUE */


export const _decode_RetrievalError: $.ASN1Decoder<INTEGER> = $._decodeInteger;


export const _encode_RetrievalError: $.ASN1Encoder<INTEGER> = $._encodeInteger;


/* eslint-enable */
