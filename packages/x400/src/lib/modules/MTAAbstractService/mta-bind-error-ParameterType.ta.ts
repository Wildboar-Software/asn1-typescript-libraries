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
let _cached_decoder_for_mta_bind_error_ParameterType: $.ASN1Decoder<mta_bind_error_ParameterType> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_mta_bind_error_ParameterType */

/* START_OF_SYMBOL_DEFINITION _decode_mta_bind_error_ParameterType */
/**
 * @summary Decodes an ASN.1 element into a(n) mta_bind_error_ParameterType
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {mta_bind_error_ParameterType} The decoded data structure.
 */
export function _decode_mta_bind_error_ParameterType(el: _Element) {
    if (!_cached_decoder_for_mta_bind_error_ParameterType) {
        _cached_decoder_for_mta_bind_error_ParameterType = $._decodeInteger;
    }
    return _cached_decoder_for_mta_bind_error_ParameterType(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_mta_bind_error_ParameterType */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_mta_bind_error_ParameterType */
let _cached_encoder_for_mta_bind_error_ParameterType: $.ASN1Encoder<mta_bind_error_ParameterType> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_mta_bind_error_ParameterType */

/* START_OF_SYMBOL_DEFINITION _encode_mta_bind_error_ParameterType */
/**
 * @summary Encodes a(n) mta_bind_error_ParameterType into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The mta_bind_error_ParameterType, encoded as an ASN.1 Element.
 */
export function _encode_mta_bind_error_ParameterType(
    value: mta_bind_error_ParameterType,
    elGetter: $.ASN1Encoder<mta_bind_error_ParameterType>
) {
    if (!_cached_encoder_for_mta_bind_error_ParameterType) {
        _cached_encoder_for_mta_bind_error_ParameterType = $._encodeInteger;
    }
    return _cached_encoder_for_mta_bind_error_ParameterType(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_mta_bind_error_ParameterType */

/* eslint-enable */
