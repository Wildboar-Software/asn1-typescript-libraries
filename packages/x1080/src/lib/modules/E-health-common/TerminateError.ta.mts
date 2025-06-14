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

/* START_OF_SYMBOL_DEFINITION _enum_for_TerminateError */
export enum _enum_for_TerminateError {
    terminationNotAllowed = 0,
    invalidSessionType = 1,
    invalidSessionId = 2,
}
/* END_OF_SYMBOL_DEFINITION _enum_for_TerminateError */

/* START_OF_SYMBOL_DEFINITION TerminateError */
/**
 * @summary TerminateError
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TerminateError  ::=  ENUMERATED {
 *   terminationNotAllowed,
 *   invalidSessionType,
 *   invalidSessionId,
 *   ... }
 * ```@enum {number}
 */
export type TerminateError = _enum_for_TerminateError | ENUMERATED;
/* END_OF_SYMBOL_DEFINITION TerminateError */

/* START_OF_SYMBOL_DEFINITION TerminateError_terminationNotAllowed */
/**
 * @summary TerminateError_terminationNotAllowed
 * @constant
 * @type {number}
 */
export const TerminateError_terminationNotAllowed: TerminateError = 0; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION TerminateError_terminationNotAllowed */

/* START_OF_SYMBOL_DEFINITION terminationNotAllowed */
/**
 * @summary terminationNotAllowed
 * @constant
 * @type {number}
 */
export const terminationNotAllowed: TerminateError = TerminateError_terminationNotAllowed; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION terminationNotAllowed */

/* START_OF_SYMBOL_DEFINITION TerminateError_invalidSessionType */
/**
 * @summary TerminateError_invalidSessionType
 * @constant
 * @type {number}
 */
export const TerminateError_invalidSessionType: TerminateError = 1; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION TerminateError_invalidSessionType */

/* START_OF_SYMBOL_DEFINITION invalidSessionType */
/**
 * @summary invalidSessionType
 * @constant
 * @type {number}
 */
export const invalidSessionType: TerminateError = TerminateError_invalidSessionType; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION invalidSessionType */

/* START_OF_SYMBOL_DEFINITION TerminateError_invalidSessionId */
/**
 * @summary TerminateError_invalidSessionId
 * @constant
 * @type {number}
 */
export const TerminateError_invalidSessionId: TerminateError = 2; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION TerminateError_invalidSessionId */

/* START_OF_SYMBOL_DEFINITION invalidSessionId */
/**
 * @summary invalidSessionId
 * @constant
 * @type {number}
 */
export const invalidSessionId: TerminateError = TerminateError_invalidSessionId; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION invalidSessionId */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_TerminateError */
let _cached_decoder_for_TerminateError: $.ASN1Decoder<TerminateError> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_TerminateError */

/* START_OF_SYMBOL_DEFINITION _decode_TerminateError */
/**
 * @summary Decodes an ASN.1 element into a(n) TerminateError
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {TerminateError} The decoded data structure.
 */
export function _decode_TerminateError(el: _Element) {
    if (!_cached_decoder_for_TerminateError) {
        _cached_decoder_for_TerminateError = $._decodeEnumerated;
    }
    return _cached_decoder_for_TerminateError(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_TerminateError */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_TerminateError */
let _cached_encoder_for_TerminateError: $.ASN1Encoder<TerminateError> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_TerminateError */

/* START_OF_SYMBOL_DEFINITION _encode_TerminateError */
/**
 * @summary Encodes a(n) TerminateError into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TerminateError, encoded as an ASN.1 Element.
 */
export function _encode_TerminateError(
    value: TerminateError,
    elGetter: $.ASN1Encoder<TerminateError>
) {
    if (!_cached_encoder_for_TerminateError) {
        _cached_encoder_for_TerminateError = $._encodeEnumerated;
    }
    return _cached_encoder_for_TerminateError(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_TerminateError */

/* eslint-enable */
