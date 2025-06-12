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

/* START_OF_SYMBOL_DEFINITION _enum_for_ControlledTestRequestType */
/**
 * @summary ControlledTestRequestType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ControlledTestRequestType  ::=  ENUMERATED {independent(0), related(1)}
 * ```@enum {number}
 */
export enum _enum_for_ControlledTestRequestType {
    independent = 0,
    related = 1,
}
/* END_OF_SYMBOL_DEFINITION _enum_for_ControlledTestRequestType */

/* START_OF_SYMBOL_DEFINITION ControlledTestRequestType */
/**
 * @summary ControlledTestRequestType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ControlledTestRequestType  ::=  ENUMERATED {independent(0), related(1)}
 * ```@enum {number}
 */
export type ControlledTestRequestType = _enum_for_ControlledTestRequestType;
/* END_OF_SYMBOL_DEFINITION ControlledTestRequestType */

/* START_OF_SYMBOL_DEFINITION ControlledTestRequestType */
/**
 * @summary ControlledTestRequestType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ControlledTestRequestType  ::=  ENUMERATED {independent(0), related(1)}
 * ```@enum {number}
 */
export const ControlledTestRequestType = _enum_for_ControlledTestRequestType;
/* END_OF_SYMBOL_DEFINITION ControlledTestRequestType */

/* START_OF_SYMBOL_DEFINITION ControlledTestRequestType_independent */
/**
 * @summary ControlledTestRequestType_independent
 * @constant
 * @type {number}
 */
export const ControlledTestRequestType_independent: ControlledTestRequestType =
    ControlledTestRequestType.independent; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION ControlledTestRequestType_independent */

/* START_OF_SYMBOL_DEFINITION independent */
/**
 * @summary independent
 * @constant
 * @type {number}
 */
export const independent: ControlledTestRequestType =
    ControlledTestRequestType.independent; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION independent */

/* START_OF_SYMBOL_DEFINITION ControlledTestRequestType_related */
/**
 * @summary ControlledTestRequestType_related
 * @constant
 * @type {number}
 */
export const ControlledTestRequestType_related: ControlledTestRequestType =
    ControlledTestRequestType.related; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION ControlledTestRequestType_related */

/* START_OF_SYMBOL_DEFINITION related */
/**
 * @summary related
 * @constant
 * @type {number}
 */
export const related: ControlledTestRequestType =
    ControlledTestRequestType.related; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION related */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ControlledTestRequestType */
let _cached_decoder_for_ControlledTestRequestType: $.ASN1Decoder<ControlledTestRequestType> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ControlledTestRequestType */

/* START_OF_SYMBOL_DEFINITION _decode_ControlledTestRequestType */
/**
 * @summary Decodes an ASN.1 element into a(n) ControlledTestRequestType
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ControlledTestRequestType} The decoded data structure.
 */
export function _decode_ControlledTestRequestType(el: _Element) {
    if (!_cached_decoder_for_ControlledTestRequestType) {
        _cached_decoder_for_ControlledTestRequestType = $._decodeEnumerated;
    }
    return _cached_decoder_for_ControlledTestRequestType(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ControlledTestRequestType */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ControlledTestRequestType */
let _cached_encoder_for_ControlledTestRequestType: $.ASN1Encoder<ControlledTestRequestType> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ControlledTestRequestType */

/* START_OF_SYMBOL_DEFINITION _encode_ControlledTestRequestType */
/**
 * @summary Encodes a(n) ControlledTestRequestType into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ControlledTestRequestType, encoded as an ASN.1 Element.
 */
export function _encode_ControlledTestRequestType(
    value: ControlledTestRequestType,
    elGetter: $.ASN1Encoder<ControlledTestRequestType>
) {
    if (!_cached_encoder_for_ControlledTestRequestType) {
        _cached_encoder_for_ControlledTestRequestType = $._encodeEnumerated;
    }
    return _cached_encoder_for_ControlledTestRequestType(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ControlledTestRequestType */

/* eslint-enable */
