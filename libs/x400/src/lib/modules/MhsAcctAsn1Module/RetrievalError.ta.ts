/* eslint-disable */
import {
    itu_t,
    itu_r,
    ccitt,
    iso,
    joint_iso_itu_t,
    joint_iso_ccitt,
    OPTIONAL,
    BOOLEAN,
    INTEGER,
    BIT_STRING,
    OCTET_STRING,
    NULL,
    OBJECT_IDENTIFIER,
    ObjectDescriptor,
    EXTERNAL,
    REAL,
    INSTANCE_OF,
    ENUMERATED,
    EMBEDDED_PDV,
    UTF8String,
    RELATIVE_OID,
    SEQUENCE,
    SEQUENCE_OF,
    SET,
    SET_OF,
    GraphicString,
    NumericString,
    VisibleString,
    PrintableString,
    ISO646String,
    TeletexString,
    GeneralString,
    T61String,
    UniversalString,
    VideotexString,
    BMPString,
    IA5String,
    CharacterString,
    UTCTime,
    GeneralizedTime,
    TIME,
    DATE,
    TIME_OF_DAY,
    DATE_TIME,
    DURATION,
    OID_IRI,
    RELATIVE_OID_IRI,
    TRUE,
    FALSE,
    TRUE_BIT,
    FALSE_BIT,
    PLUS_INFINITY,
    MINUS_INFINITY,
    NOT_A_NUMBER,
    TYPE_IDENTIFIER,
    ABSTRACT_SYNTAX,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from 'asn1-ts';
import * as $ from 'asn1-ts/dist/node/functional';

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
let _cached_decoder_for_RetrievalError: $.ASN1Decoder<RetrievalError> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_RetrievalError */

/* START_OF_SYMBOL_DEFINITION _decode_RetrievalError */
/**
 * @summary Decodes an ASN.1 element into a(n) RetrievalError
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {RetrievalError} The decoded data structure.
 */
export function _decode_RetrievalError(el: _Element) {
    if (!_cached_decoder_for_RetrievalError) {
        _cached_decoder_for_RetrievalError = $._decodeInteger;
    }
    return _cached_decoder_for_RetrievalError(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_RetrievalError */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_RetrievalError */
let _cached_encoder_for_RetrievalError: $.ASN1Encoder<RetrievalError> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_RetrievalError */

/* START_OF_SYMBOL_DEFINITION _encode_RetrievalError */
/**
 * @summary Encodes a(n) RetrievalError into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RetrievalError, encoded as an ASN.1 Element.
 */
export function _encode_RetrievalError(
    value: RetrievalError,
    elGetter: $.ASN1Encoder<RetrievalError>
) {
    if (!_cached_encoder_for_RetrievalError) {
        _cached_encoder_for_RetrievalError = $._encodeInteger;
    }
    return _cached_encoder_for_RetrievalError(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_RetrievalError */

/* eslint-enable */
