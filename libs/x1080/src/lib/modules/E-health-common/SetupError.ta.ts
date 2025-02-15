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

/* START_OF_SYMBOL_DEFINITION _enum_for_SetupError */
export enum _enum_for_SetupError {
    setupNotAllowed = 0,
    facilityTemporarilyUnavailable = 1,
    facilityPermanentlyUnavailable = 2,
    unknownSessionType = 3,
    sessionTypeNotSupported = 4,
    batchModeNotSupported = 5,
    continuousReturnNotSupported = 6,
    sensorTemporarilyUnavailable = 7,
    sensorPermanentlyUnavailable = 8,
}
/* END_OF_SYMBOL_DEFINITION _enum_for_SetupError */

/* START_OF_SYMBOL_DEFINITION SetupError */
/**
 * @summary SetupError
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SetupError  ::=  ENUMERATED {
 *   setupNotAllowed,
 *   facilityTemporarilyUnavailable,
 *   facilityPermanentlyUnavailable,
 *   unknownSessionType,
 *   sessionTypeNotSupported,
 *   batchModeNotSupported,
 *   continuousReturnNotSupported,
 *   sensorTemporarilyUnavailable,
 *   sensorPermanentlyUnavailable,
 *   ... }
 * ```@enum {number}
 */
export type SetupError = _enum_for_SetupError | ENUMERATED;
/* END_OF_SYMBOL_DEFINITION SetupError */

/* START_OF_SYMBOL_DEFINITION SetupError_setupNotAllowed */
/**
 * @summary SetupError_setupNotAllowed
 * @constant
 * @type {number}
 */
export const SetupError_setupNotAllowed: SetupError = 0; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION SetupError_setupNotAllowed */

/* START_OF_SYMBOL_DEFINITION setupNotAllowed */
/**
 * @summary setupNotAllowed
 * @constant
 * @type {number}
 */
export const setupNotAllowed: SetupError = SetupError_setupNotAllowed; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION setupNotAllowed */

/* START_OF_SYMBOL_DEFINITION SetupError_facilityTemporarilyUnavailable */
/**
 * @summary SetupError_facilityTemporarilyUnavailable
 * @constant
 * @type {number}
 */
export const SetupError_facilityTemporarilyUnavailable: SetupError = 1; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION SetupError_facilityTemporarilyUnavailable */

/* START_OF_SYMBOL_DEFINITION facilityTemporarilyUnavailable */
/**
 * @summary facilityTemporarilyUnavailable
 * @constant
 * @type {number}
 */
export const facilityTemporarilyUnavailable: SetupError = SetupError_facilityTemporarilyUnavailable; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION facilityTemporarilyUnavailable */

/* START_OF_SYMBOL_DEFINITION SetupError_facilityPermanentlyUnavailable */
/**
 * @summary SetupError_facilityPermanentlyUnavailable
 * @constant
 * @type {number}
 */
export const SetupError_facilityPermanentlyUnavailable: SetupError = 2; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION SetupError_facilityPermanentlyUnavailable */

/* START_OF_SYMBOL_DEFINITION facilityPermanentlyUnavailable */
/**
 * @summary facilityPermanentlyUnavailable
 * @constant
 * @type {number}
 */
export const facilityPermanentlyUnavailable: SetupError = SetupError_facilityPermanentlyUnavailable; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION facilityPermanentlyUnavailable */

/* START_OF_SYMBOL_DEFINITION SetupError_unknownSessionType */
/**
 * @summary SetupError_unknownSessionType
 * @constant
 * @type {number}
 */
export const SetupError_unknownSessionType: SetupError = 3; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION SetupError_unknownSessionType */

/* START_OF_SYMBOL_DEFINITION unknownSessionType */
/**
 * @summary unknownSessionType
 * @constant
 * @type {number}
 */
export const unknownSessionType: SetupError = SetupError_unknownSessionType; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION unknownSessionType */

/* START_OF_SYMBOL_DEFINITION SetupError_sessionTypeNotSupported */
/**
 * @summary SetupError_sessionTypeNotSupported
 * @constant
 * @type {number}
 */
export const SetupError_sessionTypeNotSupported: SetupError = 4; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION SetupError_sessionTypeNotSupported */

/* START_OF_SYMBOL_DEFINITION sessionTypeNotSupported */
/**
 * @summary sessionTypeNotSupported
 * @constant
 * @type {number}
 */
export const sessionTypeNotSupported: SetupError = SetupError_sessionTypeNotSupported; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION sessionTypeNotSupported */

/* START_OF_SYMBOL_DEFINITION SetupError_batchModeNotSupported */
/**
 * @summary SetupError_batchModeNotSupported
 * @constant
 * @type {number}
 */
export const SetupError_batchModeNotSupported: SetupError = 5; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION SetupError_batchModeNotSupported */

/* START_OF_SYMBOL_DEFINITION batchModeNotSupported */
/**
 * @summary batchModeNotSupported
 * @constant
 * @type {number}
 */
export const batchModeNotSupported: SetupError = SetupError_batchModeNotSupported; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION batchModeNotSupported */

/* START_OF_SYMBOL_DEFINITION SetupError_continuousReturnNotSupported */
/**
 * @summary SetupError_continuousReturnNotSupported
 * @constant
 * @type {number}
 */
export const SetupError_continuousReturnNotSupported: SetupError = 6; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION SetupError_continuousReturnNotSupported */

/* START_OF_SYMBOL_DEFINITION continuousReturnNotSupported */
/**
 * @summary continuousReturnNotSupported
 * @constant
 * @type {number}
 */
export const continuousReturnNotSupported: SetupError = SetupError_continuousReturnNotSupported; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION continuousReturnNotSupported */

/* START_OF_SYMBOL_DEFINITION SetupError_sensorTemporarilyUnavailable */
/**
 * @summary SetupError_sensorTemporarilyUnavailable
 * @constant
 * @type {number}
 */
export const SetupError_sensorTemporarilyUnavailable: SetupError = 7; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION SetupError_sensorTemporarilyUnavailable */

/* START_OF_SYMBOL_DEFINITION sensorTemporarilyUnavailable */
/**
 * @summary sensorTemporarilyUnavailable
 * @constant
 * @type {number}
 */
export const sensorTemporarilyUnavailable: SetupError = SetupError_sensorTemporarilyUnavailable; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION sensorTemporarilyUnavailable */

/* START_OF_SYMBOL_DEFINITION SetupError_sensorPermanentlyUnavailable */
/**
 * @summary SetupError_sensorPermanentlyUnavailable
 * @constant
 * @type {number}
 */
export const SetupError_sensorPermanentlyUnavailable: SetupError = 8; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION SetupError_sensorPermanentlyUnavailable */

/* START_OF_SYMBOL_DEFINITION sensorPermanentlyUnavailable */
/**
 * @summary sensorPermanentlyUnavailable
 * @constant
 * @type {number}
 */
export const sensorPermanentlyUnavailable: SetupError = SetupError_sensorPermanentlyUnavailable; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION sensorPermanentlyUnavailable */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_SetupError */
let _cached_decoder_for_SetupError: $.ASN1Decoder<SetupError> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_SetupError */

/* START_OF_SYMBOL_DEFINITION _decode_SetupError */
/**
 * @summary Decodes an ASN.1 element into a(n) SetupError
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SetupError} The decoded data structure.
 */
export function _decode_SetupError(el: _Element) {
    if (!_cached_decoder_for_SetupError) {
        _cached_decoder_for_SetupError = $._decodeEnumerated;
    }
    return _cached_decoder_for_SetupError(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_SetupError */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_SetupError */
let _cached_encoder_for_SetupError: $.ASN1Encoder<SetupError> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_SetupError */

/* START_OF_SYMBOL_DEFINITION _encode_SetupError */
/**
 * @summary Encodes a(n) SetupError into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SetupError, encoded as an ASN.1 Element.
 */
export function _encode_SetupError(
    value: SetupError,
    elGetter: $.ASN1Encoder<SetupError>
) {
    if (!_cached_encoder_for_SetupError) {
        _cached_encoder_for_SetupError = $._encodeEnumerated;
    }
    return _cached_encoder_for_SetupError(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_SetupError */

/* eslint-enable */
