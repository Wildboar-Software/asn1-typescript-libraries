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

/* START_OF_SYMBOL_DEFINITION _enum_for_LoopbackControl_status */
/**
 * @summary LoopbackControl_status
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * LoopbackControl-status ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```@enum {number}
 */
export enum _enum_for_LoopbackControl_status {
    noLoopback = 0,
    endALoopedBack = 1,
    endBLoopedBack = 2,
}
/* END_OF_SYMBOL_DEFINITION _enum_for_LoopbackControl_status */

/* START_OF_SYMBOL_DEFINITION LoopbackControl_status */
/**
 * @summary LoopbackControl_status
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * LoopbackControl-status ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```@enum {number}
 */
export type LoopbackControl_status = _enum_for_LoopbackControl_status;
/* END_OF_SYMBOL_DEFINITION LoopbackControl_status */

/* START_OF_SYMBOL_DEFINITION LoopbackControl_status */
/**
 * @summary LoopbackControl_status
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * LoopbackControl-status ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```@enum {number}
 */
export const LoopbackControl_status = _enum_for_LoopbackControl_status;
/* END_OF_SYMBOL_DEFINITION LoopbackControl_status */

/* START_OF_SYMBOL_DEFINITION LoopbackControl_status_noLoopback */
/**
 * @summary LoopbackControl_status_noLoopback
 * @constant
 * @type {number}
 */
export const LoopbackControl_status_noLoopback: LoopbackControl_status =
    LoopbackControl_status.noLoopback; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION LoopbackControl_status_noLoopback */

/* START_OF_SYMBOL_DEFINITION noLoopback */
/**
 * @summary noLoopback
 * @constant
 * @type {number}
 */
export const noLoopback: LoopbackControl_status =
    LoopbackControl_status.noLoopback; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION noLoopback */

/* START_OF_SYMBOL_DEFINITION LoopbackControl_status_endALoopedBack */
/**
 * @summary LoopbackControl_status_endALoopedBack
 * @constant
 * @type {number}
 */
export const LoopbackControl_status_endALoopedBack: LoopbackControl_status =
    LoopbackControl_status.endALoopedBack; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION LoopbackControl_status_endALoopedBack */

/* START_OF_SYMBOL_DEFINITION endALoopedBack */
/**
 * @summary endALoopedBack
 * @constant
 * @type {number}
 */
export const endALoopedBack: LoopbackControl_status =
    LoopbackControl_status.endALoopedBack; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION endALoopedBack */

/* START_OF_SYMBOL_DEFINITION LoopbackControl_status_endBLoopedBack */
/**
 * @summary LoopbackControl_status_endBLoopedBack
 * @constant
 * @type {number}
 */
export const LoopbackControl_status_endBLoopedBack: LoopbackControl_status =
    LoopbackControl_status.endBLoopedBack; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION LoopbackControl_status_endBLoopedBack */

/* START_OF_SYMBOL_DEFINITION endBLoopedBack */
/**
 * @summary endBLoopedBack
 * @constant
 * @type {number}
 */
export const endBLoopedBack: LoopbackControl_status =
    LoopbackControl_status.endBLoopedBack; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION endBLoopedBack */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_LoopbackControl_status */
let _cached_decoder_for_LoopbackControl_status: $.ASN1Decoder<LoopbackControl_status> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_LoopbackControl_status */

/* START_OF_SYMBOL_DEFINITION _decode_LoopbackControl_status */
/**
 * @summary Decodes an ASN.1 element into a(n) LoopbackControl_status
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {LoopbackControl_status} The decoded data structure.
 */
export function _decode_LoopbackControl_status(el: _Element) {
    if (!_cached_decoder_for_LoopbackControl_status) {
        _cached_decoder_for_LoopbackControl_status = $._decodeEnumerated;
    }
    return _cached_decoder_for_LoopbackControl_status(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_LoopbackControl_status */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_LoopbackControl_status */
let _cached_encoder_for_LoopbackControl_status: $.ASN1Encoder<LoopbackControl_status> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_LoopbackControl_status */

/* START_OF_SYMBOL_DEFINITION _encode_LoopbackControl_status */
/**
 * @summary Encodes a(n) LoopbackControl_status into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The LoopbackControl_status, encoded as an ASN.1 Element.
 */
export function _encode_LoopbackControl_status(
    value: LoopbackControl_status,
    elGetter: $.ASN1Encoder<LoopbackControl_status>
) {
    if (!_cached_encoder_for_LoopbackControl_status) {
        _cached_encoder_for_LoopbackControl_status = $._encodeEnumerated;
    }
    return _cached_encoder_for_LoopbackControl_status(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_LoopbackControl_status */

/* eslint-enable */
