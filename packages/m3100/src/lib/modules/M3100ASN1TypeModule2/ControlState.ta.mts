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

/* START_OF_SYMBOL_DEFINITION _enum_for_ControlState */
/**
 * @summary ControlState
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ControlState  ::=  ENUMERATED {closed(0), open(1)}
 * ```@enum {number}
 */
export enum _enum_for_ControlState {
    closed = 0,
    open = 1,
}
/* END_OF_SYMBOL_DEFINITION _enum_for_ControlState */

/* START_OF_SYMBOL_DEFINITION ControlState */
/**
 * @summary ControlState
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ControlState  ::=  ENUMERATED {closed(0), open(1)}
 * ```@enum {number}
 */
export type ControlState = _enum_for_ControlState;
/* END_OF_SYMBOL_DEFINITION ControlState */

/* START_OF_SYMBOL_DEFINITION ControlState */
/**
 * @summary ControlState
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ControlState  ::=  ENUMERATED {closed(0), open(1)}
 * ```@enum {number}
 */
export const ControlState = _enum_for_ControlState;
/* END_OF_SYMBOL_DEFINITION ControlState */

/* START_OF_SYMBOL_DEFINITION ControlState_closed */
/**
 * @summary ControlState_closed
 * @constant
 * @type {number}
 */
export const ControlState_closed: ControlState =
    ControlState.closed; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION ControlState_closed */

/* START_OF_SYMBOL_DEFINITION closed */
/**
 * @summary closed
 * @constant
 * @type {number}
 */
export const closed: ControlState =
    ControlState.closed; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION closed */

/* START_OF_SYMBOL_DEFINITION ControlState_open */
/**
 * @summary ControlState_open
 * @constant
 * @type {number}
 */
export const ControlState_open: ControlState =
    ControlState.open; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION ControlState_open */

/* START_OF_SYMBOL_DEFINITION open */
/**
 * @summary open
 * @constant
 * @type {number}
 */
export const open: ControlState =
    ControlState.open; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION open */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ControlState */
let _cached_decoder_for_ControlState: $.ASN1Decoder<ControlState> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ControlState */

/* START_OF_SYMBOL_DEFINITION _decode_ControlState */
/**
 * @summary Decodes an ASN.1 element into a(n) ControlState
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ControlState} The decoded data structure.
 */
export function _decode_ControlState(el: _Element) {
    if (!_cached_decoder_for_ControlState) {
        _cached_decoder_for_ControlState = $._decodeEnumerated;
    }
    return _cached_decoder_for_ControlState(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ControlState */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ControlState */
let _cached_encoder_for_ControlState: $.ASN1Encoder<ControlState> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ControlState */

/* START_OF_SYMBOL_DEFINITION _encode_ControlState */
/**
 * @summary Encodes a(n) ControlState into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ControlState, encoded as an ASN.1 Element.
 */
export function _encode_ControlState(
    value: ControlState,
    elGetter: $.ASN1Encoder<ControlState>
) {
    if (!_cached_encoder_for_ControlState) {
        _cached_encoder_for_ControlState = $._encodeEnumerated;
    }
    return _cached_encoder_for_ControlState(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ControlState */

/* eslint-enable */
