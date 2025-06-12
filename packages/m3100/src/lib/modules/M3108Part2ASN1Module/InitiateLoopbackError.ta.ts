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

/* START_OF_SYMBOL_DEFINITION _enum_for_InitiateLoopbackError */
export enum _enum_for_InitiateLoopbackError {
    unavailableLCS = 1,
    offDutyLCS = 2,
    loopbackNotSupported = 3,
}
/* END_OF_SYMBOL_DEFINITION _enum_for_InitiateLoopbackError */

/* START_OF_SYMBOL_DEFINITION InitiateLoopbackError */
/**
 * @summary InitiateLoopbackError
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * InitiateLoopbackError  ::=  ENUMERATED {
 *   unavailableLCS(1), offDutyLCS(2), loopbackNotSupported(3), ...
 *   }
 * ```@enum {number}
 */
export type InitiateLoopbackError =
    | _enum_for_InitiateLoopbackError
    | ENUMERATED;
/* END_OF_SYMBOL_DEFINITION InitiateLoopbackError */

/* START_OF_SYMBOL_DEFINITION InitiateLoopbackError_unavailableLCS */
/**
 * @summary InitiateLoopbackError_unavailableLCS
 * @constant
 * @type {number}
 */
export const InitiateLoopbackError_unavailableLCS: InitiateLoopbackError = 1; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION InitiateLoopbackError_unavailableLCS */

/* START_OF_SYMBOL_DEFINITION unavailableLCS */
/**
 * @summary unavailableLCS
 * @constant
 * @type {number}
 */
export const unavailableLCS: InitiateLoopbackError = InitiateLoopbackError_unavailableLCS; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION unavailableLCS */

/* START_OF_SYMBOL_DEFINITION InitiateLoopbackError_offDutyLCS */
/**
 * @summary InitiateLoopbackError_offDutyLCS
 * @constant
 * @type {number}
 */
export const InitiateLoopbackError_offDutyLCS: InitiateLoopbackError = 2; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION InitiateLoopbackError_offDutyLCS */

/* START_OF_SYMBOL_DEFINITION offDutyLCS */
/**
 * @summary offDutyLCS
 * @constant
 * @type {number}
 */
export const offDutyLCS: InitiateLoopbackError = InitiateLoopbackError_offDutyLCS; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION offDutyLCS */

/* START_OF_SYMBOL_DEFINITION InitiateLoopbackError_loopbackNotSupported */
/**
 * @summary InitiateLoopbackError_loopbackNotSupported
 * @constant
 * @type {number}
 */
export const InitiateLoopbackError_loopbackNotSupported: InitiateLoopbackError = 3; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION InitiateLoopbackError_loopbackNotSupported */

/* START_OF_SYMBOL_DEFINITION loopbackNotSupported */
/**
 * @summary loopbackNotSupported
 * @constant
 * @type {number}
 */
export const loopbackNotSupported: InitiateLoopbackError = InitiateLoopbackError_loopbackNotSupported; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION loopbackNotSupported */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_InitiateLoopbackError */
let _cached_decoder_for_InitiateLoopbackError: $.ASN1Decoder<InitiateLoopbackError> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_InitiateLoopbackError */

/* START_OF_SYMBOL_DEFINITION _decode_InitiateLoopbackError */
/**
 * @summary Decodes an ASN.1 element into a(n) InitiateLoopbackError
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {InitiateLoopbackError} The decoded data structure.
 */
export function _decode_InitiateLoopbackError(el: _Element) {
    if (!_cached_decoder_for_InitiateLoopbackError) {
        _cached_decoder_for_InitiateLoopbackError = $._decodeEnumerated;
    }
    return _cached_decoder_for_InitiateLoopbackError(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_InitiateLoopbackError */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_InitiateLoopbackError */
let _cached_encoder_for_InitiateLoopbackError: $.ASN1Encoder<InitiateLoopbackError> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_InitiateLoopbackError */

/* START_OF_SYMBOL_DEFINITION _encode_InitiateLoopbackError */
/**
 * @summary Encodes a(n) InitiateLoopbackError into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The InitiateLoopbackError, encoded as an ASN.1 Element.
 */
export function _encode_InitiateLoopbackError(
    value: InitiateLoopbackError,
    elGetter: $.ASN1Encoder<InitiateLoopbackError>
) {
    if (!_cached_encoder_for_InitiateLoopbackError) {
        _cached_encoder_for_InitiateLoopbackError = $._encodeEnumerated;
    }
    return _cached_encoder_for_InitiateLoopbackError(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_InitiateLoopbackError */

/* eslint-enable */
