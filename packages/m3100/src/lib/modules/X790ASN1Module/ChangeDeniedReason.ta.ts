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

/* START_OF_SYMBOL_DEFINITION _enum_for_ChangeDeniedReason */
export enum _enum_for_ChangeDeniedReason {
    waitingVerificationOfClosure = 1,
    troubleReportAlreadyClosed = 2,
    activityAuthorizationPending = 3,
}
/* END_OF_SYMBOL_DEFINITION _enum_for_ChangeDeniedReason */

/* START_OF_SYMBOL_DEFINITION ChangeDeniedReason */
/**
 * @summary ChangeDeniedReason
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ChangeDeniedReason  ::=  ENUMERATED {
 *   waitingVerificationOfClosure(1), troubleReportAlreadyClosed(2),
 *   activityAuthorizationPending(3), ...
 *   }
 * ```@enum {number}
 */
export type ChangeDeniedReason = _enum_for_ChangeDeniedReason | ENUMERATED;
/* END_OF_SYMBOL_DEFINITION ChangeDeniedReason */

/* START_OF_SYMBOL_DEFINITION ChangeDeniedReason_waitingVerificationOfClosure */
/**
 * @summary ChangeDeniedReason_waitingVerificationOfClosure
 * @constant
 * @type {number}
 */
export const ChangeDeniedReason_waitingVerificationOfClosure: ChangeDeniedReason = 1; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION ChangeDeniedReason_waitingVerificationOfClosure */

/* START_OF_SYMBOL_DEFINITION waitingVerificationOfClosure */
/**
 * @summary waitingVerificationOfClosure
 * @constant
 * @type {number}
 */
export const waitingVerificationOfClosure: ChangeDeniedReason = ChangeDeniedReason_waitingVerificationOfClosure; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION waitingVerificationOfClosure */

/* START_OF_SYMBOL_DEFINITION ChangeDeniedReason_troubleReportAlreadyClosed */
/**
 * @summary ChangeDeniedReason_troubleReportAlreadyClosed
 * @constant
 * @type {number}
 */
export const ChangeDeniedReason_troubleReportAlreadyClosed: ChangeDeniedReason = 2; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION ChangeDeniedReason_troubleReportAlreadyClosed */

/* START_OF_SYMBOL_DEFINITION troubleReportAlreadyClosed */
/**
 * @summary troubleReportAlreadyClosed
 * @constant
 * @type {number}
 */
export const troubleReportAlreadyClosed: ChangeDeniedReason = ChangeDeniedReason_troubleReportAlreadyClosed; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION troubleReportAlreadyClosed */

/* START_OF_SYMBOL_DEFINITION ChangeDeniedReason_activityAuthorizationPending */
/**
 * @summary ChangeDeniedReason_activityAuthorizationPending
 * @constant
 * @type {number}
 */
export const ChangeDeniedReason_activityAuthorizationPending: ChangeDeniedReason = 3; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION ChangeDeniedReason_activityAuthorizationPending */

/* START_OF_SYMBOL_DEFINITION activityAuthorizationPending */
/**
 * @summary activityAuthorizationPending
 * @constant
 * @type {number}
 */
export const activityAuthorizationPending: ChangeDeniedReason = ChangeDeniedReason_activityAuthorizationPending; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION activityAuthorizationPending */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ChangeDeniedReason */
let _cached_decoder_for_ChangeDeniedReason: $.ASN1Decoder<ChangeDeniedReason> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ChangeDeniedReason */

/* START_OF_SYMBOL_DEFINITION _decode_ChangeDeniedReason */
/**
 * @summary Decodes an ASN.1 element into a(n) ChangeDeniedReason
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ChangeDeniedReason} The decoded data structure.
 */
export function _decode_ChangeDeniedReason(el: _Element) {
    if (!_cached_decoder_for_ChangeDeniedReason) {
        _cached_decoder_for_ChangeDeniedReason = $._decodeEnumerated;
    }
    return _cached_decoder_for_ChangeDeniedReason(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ChangeDeniedReason */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ChangeDeniedReason */
let _cached_encoder_for_ChangeDeniedReason: $.ASN1Encoder<ChangeDeniedReason> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ChangeDeniedReason */

/* START_OF_SYMBOL_DEFINITION _encode_ChangeDeniedReason */
/**
 * @summary Encodes a(n) ChangeDeniedReason into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ChangeDeniedReason, encoded as an ASN.1 Element.
 */
export function _encode_ChangeDeniedReason(
    value: ChangeDeniedReason,
    elGetter: $.ASN1Encoder<ChangeDeniedReason>
) {
    if (!_cached_encoder_for_ChangeDeniedReason) {
        _cached_encoder_for_ChangeDeniedReason = $._encodeEnumerated;
    }
    return _cached_encoder_for_ChangeDeniedReason(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ChangeDeniedReason */

/* eslint-enable */
