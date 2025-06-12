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

/* START_OF_SYMBOL_DEFINITION _enum_for_RequestState */
export enum _enum_for_RequestState {
    requested = 1,
    provided = 2,
    denied = 3,
}
/* END_OF_SYMBOL_DEFINITION _enum_for_RequestState */

/* START_OF_SYMBOL_DEFINITION RequestState */
/**
 * @summary RequestState
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RequestState  ::=  ENUMERATED {requested(1), provided(2), denied(3), ...
 *                              }
 * ```@enum {number}
 */
export type RequestState = _enum_for_RequestState | ENUMERATED;
/* END_OF_SYMBOL_DEFINITION RequestState */

/* START_OF_SYMBOL_DEFINITION RequestState_requested */
/**
 * @summary RequestState_requested
 * @constant
 * @type {number}
 */
export const RequestState_requested: RequestState = 1; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION RequestState_requested */

/* START_OF_SYMBOL_DEFINITION requested */
/**
 * @summary requested
 * @constant
 * @type {number}
 */
export const requested: RequestState = RequestState_requested; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION requested */

/* START_OF_SYMBOL_DEFINITION RequestState_provided */
/**
 * @summary RequestState_provided
 * @constant
 * @type {number}
 */
export const RequestState_provided: RequestState = 2; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION RequestState_provided */

/* START_OF_SYMBOL_DEFINITION provided */
/**
 * @summary provided
 * @constant
 * @type {number}
 */
export const provided: RequestState = RequestState_provided; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION provided */

/* START_OF_SYMBOL_DEFINITION RequestState_denied */
/**
 * @summary RequestState_denied
 * @constant
 * @type {number}
 */
export const RequestState_denied: RequestState = 3; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION RequestState_denied */

/* START_OF_SYMBOL_DEFINITION denied */
/**
 * @summary denied
 * @constant
 * @type {number}
 */
export const denied: RequestState = RequestState_denied; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION denied */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_RequestState */
let _cached_decoder_for_RequestState: $.ASN1Decoder<RequestState> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_RequestState */

/* START_OF_SYMBOL_DEFINITION _decode_RequestState */
/**
 * @summary Decodes an ASN.1 element into a(n) RequestState
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {RequestState} The decoded data structure.
 */
export function _decode_RequestState(el: _Element) {
    if (!_cached_decoder_for_RequestState) {
        _cached_decoder_for_RequestState = $._decodeEnumerated;
    }
    return _cached_decoder_for_RequestState(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_RequestState */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_RequestState */
let _cached_encoder_for_RequestState: $.ASN1Encoder<RequestState> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_RequestState */

/* START_OF_SYMBOL_DEFINITION _encode_RequestState */
/**
 * @summary Encodes a(n) RequestState into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RequestState, encoded as an ASN.1 Element.
 */
export function _encode_RequestState(
    value: RequestState,
    elGetter: $.ASN1Encoder<RequestState>
) {
    if (!_cached_encoder_for_RequestState) {
        _cached_encoder_for_RequestState = $._encodeEnumerated;
    }
    return _cached_encoder_for_RequestState(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_RequestState */

/* eslint-enable */
