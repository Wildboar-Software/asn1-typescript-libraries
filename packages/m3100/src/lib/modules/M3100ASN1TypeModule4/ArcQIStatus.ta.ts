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

/* START_OF_SYMBOL_DEFINITION _enum_for_ArcQIStatus */
/**
 * @summary ArcQIStatus
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ArcQIStatus  ::=  ENUMERATED {
 *   notApplicable(0), nalmNotReported(1), nalmCountDown(2)}
 * ```@enum {number}
 */
export enum _enum_for_ArcQIStatus {
    notApplicable = 0,
    nalmNotReported = 1,
    nalmCountDown = 2,
}
/* END_OF_SYMBOL_DEFINITION _enum_for_ArcQIStatus */

/* START_OF_SYMBOL_DEFINITION ArcQIStatus */
/**
 * @summary ArcQIStatus
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ArcQIStatus  ::=  ENUMERATED {
 *   notApplicable(0), nalmNotReported(1), nalmCountDown(2)}
 * ```@enum {number}
 */
export type ArcQIStatus = _enum_for_ArcQIStatus;
/* END_OF_SYMBOL_DEFINITION ArcQIStatus */

/* START_OF_SYMBOL_DEFINITION ArcQIStatus */
/**
 * @summary ArcQIStatus
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ArcQIStatus  ::=  ENUMERATED {
 *   notApplicable(0), nalmNotReported(1), nalmCountDown(2)}
 * ```@enum {number}
 */
export const ArcQIStatus = _enum_for_ArcQIStatus;
/* END_OF_SYMBOL_DEFINITION ArcQIStatus */

/* START_OF_SYMBOL_DEFINITION ArcQIStatus_notApplicable */
/**
 * @summary ArcQIStatus_notApplicable
 * @constant
 * @type {number}
 */
export const ArcQIStatus_notApplicable: ArcQIStatus =
    ArcQIStatus.notApplicable; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION ArcQIStatus_notApplicable */

/* START_OF_SYMBOL_DEFINITION notApplicable */
/**
 * @summary notApplicable
 * @constant
 * @type {number}
 */
export const notApplicable: ArcQIStatus =
    ArcQIStatus.notApplicable; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION notApplicable */

/* START_OF_SYMBOL_DEFINITION ArcQIStatus_nalmNotReported */
/**
 * @summary ArcQIStatus_nalmNotReported
 * @constant
 * @type {number}
 */
export const ArcQIStatus_nalmNotReported: ArcQIStatus =
    ArcQIStatus.nalmNotReported; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION ArcQIStatus_nalmNotReported */

/* START_OF_SYMBOL_DEFINITION nalmNotReported */
/**
 * @summary nalmNotReported
 * @constant
 * @type {number}
 */
export const nalmNotReported: ArcQIStatus =
    ArcQIStatus.nalmNotReported; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION nalmNotReported */

/* START_OF_SYMBOL_DEFINITION ArcQIStatus_nalmCountDown */
/**
 * @summary ArcQIStatus_nalmCountDown
 * @constant
 * @type {number}
 */
export const ArcQIStatus_nalmCountDown: ArcQIStatus =
    ArcQIStatus.nalmCountDown; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION ArcQIStatus_nalmCountDown */

/* START_OF_SYMBOL_DEFINITION nalmCountDown */
/**
 * @summary nalmCountDown
 * @constant
 * @type {number}
 */
export const nalmCountDown: ArcQIStatus =
    ArcQIStatus.nalmCountDown; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION nalmCountDown */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ArcQIStatus */
let _cached_decoder_for_ArcQIStatus: $.ASN1Decoder<ArcQIStatus> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ArcQIStatus */

/* START_OF_SYMBOL_DEFINITION _decode_ArcQIStatus */
/**
 * @summary Decodes an ASN.1 element into a(n) ArcQIStatus
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ArcQIStatus} The decoded data structure.
 */
export function _decode_ArcQIStatus(el: _Element) {
    if (!_cached_decoder_for_ArcQIStatus) {
        _cached_decoder_for_ArcQIStatus = $._decodeEnumerated;
    }
    return _cached_decoder_for_ArcQIStatus(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ArcQIStatus */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ArcQIStatus */
let _cached_encoder_for_ArcQIStatus: $.ASN1Encoder<ArcQIStatus> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ArcQIStatus */

/* START_OF_SYMBOL_DEFINITION _encode_ArcQIStatus */
/**
 * @summary Encodes a(n) ArcQIStatus into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ArcQIStatus, encoded as an ASN.1 Element.
 */
export function _encode_ArcQIStatus(
    value: ArcQIStatus,
    elGetter: $.ASN1Encoder<ArcQIStatus>
) {
    if (!_cached_encoder_for_ArcQIStatus) {
        _cached_encoder_for_ArcQIStatus = $._encodeEnumerated;
    }
    return _cached_encoder_for_ArcQIStatus(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ArcQIStatus */

/* eslint-enable */
