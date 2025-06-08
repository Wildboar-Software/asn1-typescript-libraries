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

/* START_OF_SYMBOL_DEFINITION _enum_for_SwitchStatus */
/**
 * @summary SwitchStatus
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SwitchStatus  ::=  ENUMERATED {pending(0), completed(1), operateFailed(2)}
 * ```@enum {number}
 */
export enum _enum_for_SwitchStatus {
    pending = 0,
    completed = 1,
    operateFailed = 2,
}
/* END_OF_SYMBOL_DEFINITION _enum_for_SwitchStatus */

/* START_OF_SYMBOL_DEFINITION SwitchStatus */
/**
 * @summary SwitchStatus
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SwitchStatus  ::=  ENUMERATED {pending(0), completed(1), operateFailed(2)}
 * ```@enum {number}
 */
export type SwitchStatus = _enum_for_SwitchStatus;
/* END_OF_SYMBOL_DEFINITION SwitchStatus */

/* START_OF_SYMBOL_DEFINITION SwitchStatus */
/**
 * @summary SwitchStatus
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SwitchStatus  ::=  ENUMERATED {pending(0), completed(1), operateFailed(2)}
 * ```@enum {number}
 */
export const SwitchStatus = _enum_for_SwitchStatus;
/* END_OF_SYMBOL_DEFINITION SwitchStatus */

/* START_OF_SYMBOL_DEFINITION SwitchStatus_pending */
/**
 * @summary SwitchStatus_pending
 * @constant
 * @type {number}
 */
export const SwitchStatus_pending: SwitchStatus =
    SwitchStatus.pending; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION SwitchStatus_pending */

/* START_OF_SYMBOL_DEFINITION pending */
/**
 * @summary pending
 * @constant
 * @type {number}
 */
export const pending: SwitchStatus =
    SwitchStatus.pending; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION pending */

/* START_OF_SYMBOL_DEFINITION SwitchStatus_completed */
/**
 * @summary SwitchStatus_completed
 * @constant
 * @type {number}
 */
export const SwitchStatus_completed: SwitchStatus =
    SwitchStatus.completed; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION SwitchStatus_completed */

/* START_OF_SYMBOL_DEFINITION completed */
/**
 * @summary completed
 * @constant
 * @type {number}
 */
export const completed: SwitchStatus =
    SwitchStatus.completed; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION completed */

/* START_OF_SYMBOL_DEFINITION SwitchStatus_operateFailed */
/**
 * @summary SwitchStatus_operateFailed
 * @constant
 * @type {number}
 */
export const SwitchStatus_operateFailed: SwitchStatus =
    SwitchStatus.operateFailed; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION SwitchStatus_operateFailed */

/* START_OF_SYMBOL_DEFINITION operateFailed */
/**
 * @summary operateFailed
 * @constant
 * @type {number}
 */
export const operateFailed: SwitchStatus =
    SwitchStatus.operateFailed; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION operateFailed */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_SwitchStatus */
let _cached_decoder_for_SwitchStatus: $.ASN1Decoder<SwitchStatus> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_SwitchStatus */

/* START_OF_SYMBOL_DEFINITION _decode_SwitchStatus */
/**
 * @summary Decodes an ASN.1 element into a(n) SwitchStatus
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SwitchStatus} The decoded data structure.
 */
export function _decode_SwitchStatus(el: _Element) {
    if (!_cached_decoder_for_SwitchStatus) {
        _cached_decoder_for_SwitchStatus = $._decodeEnumerated;
    }
    return _cached_decoder_for_SwitchStatus(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_SwitchStatus */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_SwitchStatus */
let _cached_encoder_for_SwitchStatus: $.ASN1Encoder<SwitchStatus> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_SwitchStatus */

/* START_OF_SYMBOL_DEFINITION _encode_SwitchStatus */
/**
 * @summary Encodes a(n) SwitchStatus into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SwitchStatus, encoded as an ASN.1 Element.
 */
export function _encode_SwitchStatus(
    value: SwitchStatus,
    elGetter: $.ASN1Encoder<SwitchStatus>
) {
    if (!_cached_encoder_for_SwitchStatus) {
        _cached_encoder_for_SwitchStatus = $._encodeEnumerated;
    }
    return _cached_encoder_for_SwitchStatus(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_SwitchStatus */

/* eslint-enable */
