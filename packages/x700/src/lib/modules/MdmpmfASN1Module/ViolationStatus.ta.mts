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

/* START_OF_SYMBOL_DEFINITION _enum_for_ViolationStatus */
/**
 * @summary ViolationStatus
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ViolationStatus  ::=  ENUMERATED {
 *   unknown(1), no-violation(2), violation-detected(3)}
 * ```@enum {number}
 */
export enum _enum_for_ViolationStatus {
    unknown = 1,
    no_violation = 2,
    violation_detected = 3,
}
/* END_OF_SYMBOL_DEFINITION _enum_for_ViolationStatus */

/* START_OF_SYMBOL_DEFINITION ViolationStatus */
/**
 * @summary ViolationStatus
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ViolationStatus  ::=  ENUMERATED {
 *   unknown(1), no-violation(2), violation-detected(3)}
 * ```@enum {number}
 */
export type ViolationStatus = _enum_for_ViolationStatus;
/* END_OF_SYMBOL_DEFINITION ViolationStatus */

/* START_OF_SYMBOL_DEFINITION ViolationStatus */
/**
 * @summary ViolationStatus
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ViolationStatus  ::=  ENUMERATED {
 *   unknown(1), no-violation(2), violation-detected(3)}
 * ```@enum {number}
 */
export const ViolationStatus = _enum_for_ViolationStatus;
/* END_OF_SYMBOL_DEFINITION ViolationStatus */

/* START_OF_SYMBOL_DEFINITION ViolationStatus_unknown */
/**
 * @summary ViolationStatus_unknown
 * @constant
 * @type {number}
 */
export const ViolationStatus_unknown: ViolationStatus =
    ViolationStatus.unknown; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION ViolationStatus_unknown */

/* START_OF_SYMBOL_DEFINITION unknown */
/**
 * @summary unknown
 * @constant
 * @type {number}
 */
export const unknown: ViolationStatus =
    ViolationStatus.unknown; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION unknown */

/* START_OF_SYMBOL_DEFINITION ViolationStatus_no_violation */
/**
 * @summary ViolationStatus_no_violation
 * @constant
 * @type {number}
 */
export const ViolationStatus_no_violation: ViolationStatus =
    ViolationStatus.no_violation; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION ViolationStatus_no_violation */

/* START_OF_SYMBOL_DEFINITION no_violation */
/**
 * @summary no_violation
 * @constant
 * @type {number}
 */
export const no_violation: ViolationStatus =
    ViolationStatus.no_violation; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION no_violation */

/* START_OF_SYMBOL_DEFINITION ViolationStatus_violation_detected */
/**
 * @summary ViolationStatus_violation_detected
 * @constant
 * @type {number}
 */
export const ViolationStatus_violation_detected: ViolationStatus =
    ViolationStatus.violation_detected; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION ViolationStatus_violation_detected */

/* START_OF_SYMBOL_DEFINITION violation_detected */
/**
 * @summary violation_detected
 * @constant
 * @type {number}
 */
export const violation_detected: ViolationStatus =
    ViolationStatus.violation_detected; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION violation_detected */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ViolationStatus */
let _cached_decoder_for_ViolationStatus: $.ASN1Decoder<ViolationStatus> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ViolationStatus */

/* START_OF_SYMBOL_DEFINITION _decode_ViolationStatus */
/**
 * @summary Decodes an ASN.1 element into a(n) ViolationStatus
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ViolationStatus} The decoded data structure.
 */
export function _decode_ViolationStatus(el: _Element) {
    if (!_cached_decoder_for_ViolationStatus) {
        _cached_decoder_for_ViolationStatus = $._decodeEnumerated;
    }
    return _cached_decoder_for_ViolationStatus(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ViolationStatus */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ViolationStatus */
let _cached_encoder_for_ViolationStatus: $.ASN1Encoder<ViolationStatus> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ViolationStatus */

/* START_OF_SYMBOL_DEFINITION _encode_ViolationStatus */
/**
 * @summary Encodes a(n) ViolationStatus into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ViolationStatus, encoded as an ASN.1 Element.
 */
export function _encode_ViolationStatus(
    value: ViolationStatus,
    elGetter: $.ASN1Encoder<ViolationStatus>
) {
    if (!_cached_encoder_for_ViolationStatus) {
        _cached_encoder_for_ViolationStatus = $._encodeEnumerated;
    }
    return _cached_encoder_for_ViolationStatus(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ViolationStatus */

/* eslint-enable */
