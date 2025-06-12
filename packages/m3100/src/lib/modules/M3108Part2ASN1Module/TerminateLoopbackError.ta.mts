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

/* START_OF_SYMBOL_DEFINITION _enum_for_TerminateLoopbackError */
export enum _enum_for_TerminateLoopbackError {
    loopbackNotSet = 0,
    loopbackNotSupported = 1,
}
/* END_OF_SYMBOL_DEFINITION _enum_for_TerminateLoopbackError */

/* START_OF_SYMBOL_DEFINITION TerminateLoopbackError */
/**
 * @summary TerminateLoopbackError
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TerminateLoopbackError  ::=  ENUMERATED {
 *   loopbackNotSet(0), loopbackNotSupported(1), ...
 *   }
 * ```@enum {number}
 */
export type TerminateLoopbackError =
    | _enum_for_TerminateLoopbackError
    | ENUMERATED;
/* END_OF_SYMBOL_DEFINITION TerminateLoopbackError */

/* START_OF_SYMBOL_DEFINITION TerminateLoopbackError_loopbackNotSet */
/**
 * @summary TerminateLoopbackError_loopbackNotSet
 * @constant
 * @type {number}
 */
export const TerminateLoopbackError_loopbackNotSet: TerminateLoopbackError = 0; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION TerminateLoopbackError_loopbackNotSet */

/* START_OF_SYMBOL_DEFINITION loopbackNotSet */
/**
 * @summary loopbackNotSet
 * @constant
 * @type {number}
 */
export const loopbackNotSet: TerminateLoopbackError = TerminateLoopbackError_loopbackNotSet; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION loopbackNotSet */

/* START_OF_SYMBOL_DEFINITION TerminateLoopbackError_loopbackNotSupported */
/**
 * @summary TerminateLoopbackError_loopbackNotSupported
 * @constant
 * @type {number}
 */
export const TerminateLoopbackError_loopbackNotSupported: TerminateLoopbackError = 1; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION TerminateLoopbackError_loopbackNotSupported */

/* START_OF_SYMBOL_DEFINITION loopbackNotSupported */
/**
 * @summary loopbackNotSupported
 * @constant
 * @type {number}
 */
export const loopbackNotSupported: TerminateLoopbackError = TerminateLoopbackError_loopbackNotSupported; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION loopbackNotSupported */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_TerminateLoopbackError */
let _cached_decoder_for_TerminateLoopbackError: $.ASN1Decoder<TerminateLoopbackError> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_TerminateLoopbackError */

/* START_OF_SYMBOL_DEFINITION _decode_TerminateLoopbackError */
/**
 * @summary Decodes an ASN.1 element into a(n) TerminateLoopbackError
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {TerminateLoopbackError} The decoded data structure.
 */
export function _decode_TerminateLoopbackError(el: _Element) {
    if (!_cached_decoder_for_TerminateLoopbackError) {
        _cached_decoder_for_TerminateLoopbackError = $._decodeEnumerated;
    }
    return _cached_decoder_for_TerminateLoopbackError(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_TerminateLoopbackError */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_TerminateLoopbackError */
let _cached_encoder_for_TerminateLoopbackError: $.ASN1Encoder<TerminateLoopbackError> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_TerminateLoopbackError */

/* START_OF_SYMBOL_DEFINITION _encode_TerminateLoopbackError */
/**
 * @summary Encodes a(n) TerminateLoopbackError into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TerminateLoopbackError, encoded as an ASN.1 Element.
 */
export function _encode_TerminateLoopbackError(
    value: TerminateLoopbackError,
    elGetter: $.ASN1Encoder<TerminateLoopbackError>
) {
    if (!_cached_encoder_for_TerminateLoopbackError) {
        _cached_encoder_for_TerminateLoopbackError = $._encodeEnumerated;
    }
    return _cached_encoder_for_TerminateLoopbackError(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_TerminateLoopbackError */

/* eslint-enable */
