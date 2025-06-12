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

/* START_OF_SYMBOL_DEFINITION _enum_for_ResetError */
export enum _enum_for_ResetError {
    resetFail = 0,
    entityInService = 1,
}
/* END_OF_SYMBOL_DEFINITION _enum_for_ResetError */

/* START_OF_SYMBOL_DEFINITION ResetError */
/**
 * @summary ResetError
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ResetError  ::=  ENUMERATED {resetFail(0), entityInService(1), ...
 *                            }
 * ```@enum {number}
 */
export type ResetError = _enum_for_ResetError | ENUMERATED;
/* END_OF_SYMBOL_DEFINITION ResetError */

/* START_OF_SYMBOL_DEFINITION ResetError_resetFail */
/**
 * @summary ResetError_resetFail
 * @constant
 * @type {number}
 */
export const ResetError_resetFail: ResetError = 0; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION ResetError_resetFail */

/* START_OF_SYMBOL_DEFINITION resetFail */
/**
 * @summary resetFail
 * @constant
 * @type {number}
 */
export const resetFail: ResetError = ResetError_resetFail; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION resetFail */

/* START_OF_SYMBOL_DEFINITION ResetError_entityInService */
/**
 * @summary ResetError_entityInService
 * @constant
 * @type {number}
 */
export const ResetError_entityInService: ResetError = 1; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION ResetError_entityInService */

/* START_OF_SYMBOL_DEFINITION entityInService */
/**
 * @summary entityInService
 * @constant
 * @type {number}
 */
export const entityInService: ResetError = ResetError_entityInService; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION entityInService */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ResetError */
let _cached_decoder_for_ResetError: $.ASN1Decoder<ResetError> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ResetError */

/* START_OF_SYMBOL_DEFINITION _decode_ResetError */
/**
 * @summary Decodes an ASN.1 element into a(n) ResetError
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ResetError} The decoded data structure.
 */
export function _decode_ResetError(el: _Element) {
    if (!_cached_decoder_for_ResetError) {
        _cached_decoder_for_ResetError = $._decodeEnumerated;
    }
    return _cached_decoder_for_ResetError(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ResetError */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ResetError */
let _cached_encoder_for_ResetError: $.ASN1Encoder<ResetError> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ResetError */

/* START_OF_SYMBOL_DEFINITION _encode_ResetError */
/**
 * @summary Encodes a(n) ResetError into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ResetError, encoded as an ASN.1 Element.
 */
export function _encode_ResetError(
    value: ResetError,
    elGetter: $.ASN1Encoder<ResetError>
) {
    if (!_cached_encoder_for_ResetError) {
        _cached_encoder_for_ResetError = $._encodeEnumerated;
    }
    return _cached_encoder_for_ResetError(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ResetError */

/* eslint-enable */
