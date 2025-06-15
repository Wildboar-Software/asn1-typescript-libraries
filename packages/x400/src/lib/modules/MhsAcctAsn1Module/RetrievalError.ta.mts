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

/* START_OF_SYMBOL_DEFINITION RetrievalError */
/**
 * @summary RetrievalError
 * @description
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
/* END_OF_SYMBOL_DEFINITION RetrievalError */

/* START_OF_SYMBOL_DEFINITION RetrievalError_attribute_error */
/**
 * @summary RetrievalError_attribute_error
 * @constant
 * @type {number}
 */
export const RetrievalError_attribute_error: RetrievalError = 1; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION RetrievalError_attribute_error */

/* START_OF_SYMBOL_DEFINITION attribute_error */
/**
 * @summary RetrievalError_attribute_error
 * @constant
 * @type {number}
 */
export const attribute_error: RetrievalError = RetrievalError_attribute_error; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION attribute_error */

/* START_OF_SYMBOL_DEFINITION RetrievalError_auto_action_request_error */
/**
 * @summary RetrievalError_auto_action_request_error
 * @constant
 * @type {number}
 */
export const RetrievalError_auto_action_request_error: RetrievalError = 2; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION RetrievalError_auto_action_request_error */

/* START_OF_SYMBOL_DEFINITION auto_action_request_error */
/**
 * @summary RetrievalError_auto_action_request_error
 * @constant
 * @type {number}
 */
export const auto_action_request_error: RetrievalError = RetrievalError_auto_action_request_error; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION auto_action_request_error */

/* START_OF_SYMBOL_DEFINITION RetrievalError_delete_error */
/**
 * @summary RetrievalError_delete_error
 * @constant
 * @type {number}
 */
export const RetrievalError_delete_error: RetrievalError = 3; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION RetrievalError_delete_error */

/* START_OF_SYMBOL_DEFINITION delete_error */
/**
 * @summary RetrievalError_delete_error
 * @constant
 * @type {number}
 */
export const delete_error: RetrievalError = RetrievalError_delete_error; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION delete_error */

/* START_OF_SYMBOL_DEFINITION RetrievalError_fetch_restriction_error */
/**
 * @summary RetrievalError_fetch_restriction_error
 * @constant
 * @type {number}
 */
export const RetrievalError_fetch_restriction_error: RetrievalError = 4; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION RetrievalError_fetch_restriction_error */

/* START_OF_SYMBOL_DEFINITION fetch_restriction_error */
/**
 * @summary RetrievalError_fetch_restriction_error
 * @constant
 * @type {number}
 */
export const fetch_restriction_error: RetrievalError = RetrievalError_fetch_restriction_error; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION fetch_restriction_error */

/* START_OF_SYMBOL_DEFINITION RetrievalError_invalid_parameter_error */
/**
 * @summary RetrievalError_invalid_parameter_error
 * @constant
 * @type {number}
 */
export const RetrievalError_invalid_parameter_error: RetrievalError = 5; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION RetrievalError_invalid_parameter_error */

/* START_OF_SYMBOL_DEFINITION invalid_parameter_error */
/**
 * @summary RetrievalError_invalid_parameter_error
 * @constant
 * @type {number}
 */
export const invalid_parameter_error: RetrievalError = RetrievalError_invalid_parameter_error; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION invalid_parameter_error */

/* START_OF_SYMBOL_DEFINITION RetrievalError_range_error */
/**
 * @summary RetrievalError_range_error
 * @constant
 * @type {number}
 */
export const RetrievalError_range_error: RetrievalError = 6; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION RetrievalError_range_error */

/* START_OF_SYMBOL_DEFINITION range_error */
/**
 * @summary RetrievalError_range_error
 * @constant
 * @type {number}
 */
export const range_error: RetrievalError = RetrievalError_range_error; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION range_error */

/* START_OF_SYMBOL_DEFINITION RetrievalError_security_error */
/**
 * @summary RetrievalError_security_error
 * @constant
 * @type {number}
 */
export const RetrievalError_security_error: RetrievalError = 7; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION RetrievalError_security_error */

/* START_OF_SYMBOL_DEFINITION security_error */
/**
 * @summary RetrievalError_security_error
 * @constant
 * @type {number}
 */
export const security_error: RetrievalError = RetrievalError_security_error; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION security_error */

/* START_OF_SYMBOL_DEFINITION RetrievalError_sequence_number_error */
/**
 * @summary RetrievalError_sequence_number_error
 * @constant
 * @type {number}
 */
export const RetrievalError_sequence_number_error: RetrievalError = 8; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION RetrievalError_sequence_number_error */

/* START_OF_SYMBOL_DEFINITION sequence_number_error */
/**
 * @summary RetrievalError_sequence_number_error
 * @constant
 * @type {number}
 */
export const sequence_number_error: RetrievalError = RetrievalError_sequence_number_error; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION sequence_number_error */

/* START_OF_SYMBOL_DEFINITION RetrievalError_service_error */
/**
 * @summary RetrievalError_service_error
 * @constant
 * @type {number}
 */
export const RetrievalError_service_error: RetrievalError = 9; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION RetrievalError_service_error */

/* START_OF_SYMBOL_DEFINITION service_error */
/**
 * @summary RetrievalError_service_error
 * @constant
 * @type {number}
 */
export const service_error: RetrievalError = RetrievalError_service_error; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION service_error */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_RetrievalError */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_RetrievalError */

/* START_OF_SYMBOL_DEFINITION _decode_RetrievalError */
export const _decode_RetrievalError = $._decodeInteger;
/* END_OF_SYMBOL_DEFINITION _decode_RetrievalError */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_RetrievalError */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_RetrievalError */

/* START_OF_SYMBOL_DEFINITION _encode_RetrievalError */
export const _encode_RetrievalError = $._encodeInteger;

/* END_OF_SYMBOL_DEFINITION _encode_RetrievalError */

/* eslint-enable */
