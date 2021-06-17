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

/* START_OF_SYMBOL_DEFINITION _enum_for_ProtectionDirection */
/**
 * @summary ProtectionDirection
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ProtectionDirection  ::=  ENUMERATED {transmit(0), receive(1), bidirectional(2)}
 * ```@enum {number}
 */
export enum _enum_for_ProtectionDirection {
    transmit = 0,
    receive = 1,
    bidirectional = 2,
}
/* END_OF_SYMBOL_DEFINITION _enum_for_ProtectionDirection */

/* START_OF_SYMBOL_DEFINITION ProtectionDirection */
/**
 * @summary ProtectionDirection
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ProtectionDirection  ::=  ENUMERATED {transmit(0), receive(1), bidirectional(2)}
 * ```@enum {number}
 */
export type ProtectionDirection = _enum_for_ProtectionDirection;
/* END_OF_SYMBOL_DEFINITION ProtectionDirection */

/* START_OF_SYMBOL_DEFINITION ProtectionDirection */
/**
 * @summary ProtectionDirection
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ProtectionDirection  ::=  ENUMERATED {transmit(0), receive(1), bidirectional(2)}
 * ```@enum {number}
 */
export const ProtectionDirection = _enum_for_ProtectionDirection;
/* END_OF_SYMBOL_DEFINITION ProtectionDirection */

/* START_OF_SYMBOL_DEFINITION ProtectionDirection_transmit */
/**
 * @summary ProtectionDirection_transmit
 * @constant
 * @type {number}
 */
export const ProtectionDirection_transmit: ProtectionDirection =
    ProtectionDirection.transmit; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION ProtectionDirection_transmit */

/* START_OF_SYMBOL_DEFINITION transmit */
/**
 * @summary transmit
 * @constant
 * @type {number}
 */
export const transmit: ProtectionDirection =
    ProtectionDirection.transmit; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION transmit */

/* START_OF_SYMBOL_DEFINITION ProtectionDirection_receive */
/**
 * @summary ProtectionDirection_receive
 * @constant
 * @type {number}
 */
export const ProtectionDirection_receive: ProtectionDirection =
    ProtectionDirection.receive; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION ProtectionDirection_receive */

/* START_OF_SYMBOL_DEFINITION receive */
/**
 * @summary receive
 * @constant
 * @type {number}
 */
export const receive: ProtectionDirection =
    ProtectionDirection.receive; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION receive */

/* START_OF_SYMBOL_DEFINITION ProtectionDirection_bidirectional */
/**
 * @summary ProtectionDirection_bidirectional
 * @constant
 * @type {number}
 */
export const ProtectionDirection_bidirectional: ProtectionDirection =
    ProtectionDirection.bidirectional; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION ProtectionDirection_bidirectional */

/* START_OF_SYMBOL_DEFINITION bidirectional */
/**
 * @summary bidirectional
 * @constant
 * @type {number}
 */
export const bidirectional: ProtectionDirection =
    ProtectionDirection.bidirectional; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION bidirectional */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ProtectionDirection */
let _cached_decoder_for_ProtectionDirection: $.ASN1Decoder<ProtectionDirection> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ProtectionDirection */

/* START_OF_SYMBOL_DEFINITION _decode_ProtectionDirection */
/**
 * @summary Decodes an ASN.1 element into a(n) ProtectionDirection
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ProtectionDirection} The decoded data structure.
 */
export function _decode_ProtectionDirection(el: _Element) {
    if (!_cached_decoder_for_ProtectionDirection) {
        _cached_decoder_for_ProtectionDirection = $._decodeEnumerated;
    }
    return _cached_decoder_for_ProtectionDirection(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ProtectionDirection */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ProtectionDirection */
let _cached_encoder_for_ProtectionDirection: $.ASN1Encoder<ProtectionDirection> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ProtectionDirection */

/* START_OF_SYMBOL_DEFINITION _encode_ProtectionDirection */
/**
 * @summary Encodes a(n) ProtectionDirection into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ProtectionDirection, encoded as an ASN.1 Element.
 */
export function _encode_ProtectionDirection(
    value: ProtectionDirection,
    elGetter: $.ASN1Encoder<ProtectionDirection>
) {
    if (!_cached_encoder_for_ProtectionDirection) {
        _cached_encoder_for_ProtectionDirection = $._encodeEnumerated;
    }
    return _cached_encoder_for_ProtectionDirection(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ProtectionDirection */

/* eslint-enable */
