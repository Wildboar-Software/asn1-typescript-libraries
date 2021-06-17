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

/* START_OF_SYMBOL_DEFINITION _enum_for_SignalDirection */
/**
 * @summary SignalDirection
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SignalDirection  ::=  ENUMERATED {send(0), receive(1)}
 * ```@enum {number}
 */
export enum _enum_for_SignalDirection {
    send = 0,
    receive = 1,
}
/* END_OF_SYMBOL_DEFINITION _enum_for_SignalDirection */

/* START_OF_SYMBOL_DEFINITION SignalDirection */
/**
 * @summary SignalDirection
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SignalDirection  ::=  ENUMERATED {send(0), receive(1)}
 * ```@enum {number}
 */
export type SignalDirection = _enum_for_SignalDirection;
/* END_OF_SYMBOL_DEFINITION SignalDirection */

/* START_OF_SYMBOL_DEFINITION SignalDirection */
/**
 * @summary SignalDirection
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SignalDirection  ::=  ENUMERATED {send(0), receive(1)}
 * ```@enum {number}
 */
export const SignalDirection = _enum_for_SignalDirection;
/* END_OF_SYMBOL_DEFINITION SignalDirection */

/* START_OF_SYMBOL_DEFINITION SignalDirection_send */
/**
 * @summary SignalDirection_send
 * @constant
 * @type {number}
 */
export const SignalDirection_send: SignalDirection =
    SignalDirection.send; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION SignalDirection_send */

/* START_OF_SYMBOL_DEFINITION send */
/**
 * @summary send
 * @constant
 * @type {number}
 */
export const send: SignalDirection =
    SignalDirection.send; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION send */

/* START_OF_SYMBOL_DEFINITION SignalDirection_receive */
/**
 * @summary SignalDirection_receive
 * @constant
 * @type {number}
 */
export const SignalDirection_receive: SignalDirection =
    SignalDirection.receive; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION SignalDirection_receive */

/* START_OF_SYMBOL_DEFINITION receive */
/**
 * @summary receive
 * @constant
 * @type {number}
 */
export const receive: SignalDirection =
    SignalDirection.receive; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION receive */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_SignalDirection */
let _cached_decoder_for_SignalDirection: $.ASN1Decoder<SignalDirection> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_SignalDirection */

/* START_OF_SYMBOL_DEFINITION _decode_SignalDirection */
/**
 * @summary Decodes an ASN.1 element into a(n) SignalDirection
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SignalDirection} The decoded data structure.
 */
export function _decode_SignalDirection(el: _Element) {
    if (!_cached_decoder_for_SignalDirection) {
        _cached_decoder_for_SignalDirection = $._decodeEnumerated;
    }
    return _cached_decoder_for_SignalDirection(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_SignalDirection */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_SignalDirection */
let _cached_encoder_for_SignalDirection: $.ASN1Encoder<SignalDirection> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_SignalDirection */

/* START_OF_SYMBOL_DEFINITION _encode_SignalDirection */
/**
 * @summary Encodes a(n) SignalDirection into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SignalDirection, encoded as an ASN.1 Element.
 */
export function _encode_SignalDirection(
    value: SignalDirection,
    elGetter: $.ASN1Encoder<SignalDirection>
) {
    if (!_cached_encoder_for_SignalDirection) {
        _cached_encoder_for_SignalDirection = $._encodeEnumerated;
    }
    return _cached_encoder_for_SignalDirection(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_SignalDirection */

/* eslint-enable */
