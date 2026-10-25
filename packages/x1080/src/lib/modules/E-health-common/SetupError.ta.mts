/* eslint-disable */
import {
    type ENUMERATED,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';


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


/**
 * @summary SetupError
 * @description
 *
 * Why session establishment failed. ITU-T Rec. X.1080.1 (05/2018)
 * [§11.1.3](https://www.itu.int/rec/T-REC-X.1080.1-201805-I).
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
 * ```
 *
 * @enum {number}
 */
export type SetupError = _enum_for_SetupError | ENUMERATED;


/**
 * @summary SetupError_setupNotAllowed
 * @description
 *
 * Initiator is not allowed to start a session. ITU-T Rec.
 * X.1080.1 (05/2018) §11.1.3 a).
 *
 * @constant
 * @type {number}
 */
export const SetupError_setupNotAllowed = _enum_for_SetupError.setupNotAllowed satisfies SetupError; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary setupNotAllowed
 * @description
 *
 * Initiator is not allowed to start a session. ITU-T Rec.
 * X.1080.1 (05/2018) §11.1.3 a).
 *
 * @constant
 * @type {number}
 */
export const setupNotAllowed = SetupError_setupNotAllowed satisfies SetupError; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary SetupError_facilityTemporarilyUnavailable
 * @description
 *
 * Responder is temporarily not in a position to establish a
 * session. ITU-T Rec. X.1080.1 (05/2018) §11.1.3 b).
 *
 * @constant
 * @type {number}
 */
export const SetupError_facilityTemporarilyUnavailable = _enum_for_SetupError.facilityTemporarilyUnavailable satisfies SetupError; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary facilityTemporarilyUnavailable
 * @description
 *
 * Responder is temporarily not in a position to establish a
 * session. ITU-T Rec. X.1080.1 (05/2018) §11.1.3 b).
 *
 * @constant
 * @type {number}
 */
export const facilityTemporarilyUnavailable = SetupError_facilityTemporarilyUnavailable satisfies SetupError; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary SetupError_facilityPermanentlyUnavailable
 * @description
 *
 * Responder is permanently not in a position to establish a
 * session; intervention may be required. ITU-T Rec. X.1080.1
 * (05/2018) §11.1.3 c).
 *
 * @constant
 * @type {number}
 */
export const SetupError_facilityPermanentlyUnavailable = _enum_for_SetupError.facilityPermanentlyUnavailable satisfies SetupError; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary facilityPermanentlyUnavailable
 * @description
 *
 * Responder is permanently not in a position to establish a
 * session; intervention may be required. ITU-T Rec. X.1080.1
 * (05/2018) §11.1.3 c).
 *
 * @constant
 * @type {number}
 */
export const facilityPermanentlyUnavailable = SetupError_facilityPermanentlyUnavailable satisfies SetupError; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary SetupError_unknownSessionType
 * @description
 *
 * Suggested session type is not known by the responder.
 * ITU-T Rec. X.1080.1 (05/2018) §11.1.3 d).
 *
 * @constant
 * @type {number}
 */
export const SetupError_unknownSessionType = _enum_for_SetupError.unknownSessionType satisfies SetupError; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary unknownSessionType
 * @description
 *
 * Suggested session type is not known by the responder.
 * ITU-T Rec. X.1080.1 (05/2018) §11.1.3 d).
 *
 * @constant
 * @type {number}
 */
export const unknownSessionType = SetupError_unknownSessionType satisfies SetupError; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary SetupError_sessionTypeNotSupported
 * @description
 *
 * Suggested session type is not supported by the responder.
 * ITU-T Rec. X.1080.1 (05/2018) §11.1.3 e).
 *
 * @constant
 * @type {number}
 */
export const SetupError_sessionTypeNotSupported = _enum_for_SetupError.sessionTypeNotSupported satisfies SetupError; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary sessionTypeNotSupported
 * @description
 *
 * Suggested session type is not supported by the responder.
 * ITU-T Rec. X.1080.1 (05/2018) §11.1.3 e).
 *
 * @constant
 * @type {number}
 */
export const sessionTypeNotSupported = SetupError_sessionTypeNotSupported satisfies SetupError; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary SetupError_batchModeNotSupported
 * @description
 *
 * Batch return of results is not supported, or the session type
 * is not suited to batch transmission. ITU-T Rec. X.1080.1
 * (05/2018) §11.1.3 f).
 *
 * @constant
 * @type {number}
 */
export const SetupError_batchModeNotSupported = _enum_for_SetupError.batchModeNotSupported satisfies SetupError; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary batchModeNotSupported
 * @description
 *
 * Batch return of results is not supported, or the session type
 * is not suited to batch transmission. ITU-T Rec. X.1080.1
 * (05/2018) §11.1.3 f).
 *
 * @constant
 * @type {number}
 */
export const batchModeNotSupported = SetupError_batchModeNotSupported satisfies SetupError; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary SetupError_continuousReturnNotSupported
 * @description
 *
 * Continuous return of results is not supported, or the session
 * type is not suited to continuous transmission. ITU-T Rec.
 * X.1080.1 (05/2018) §11.1.3 g).
 *
 * @constant
 * @type {number}
 */
export const SetupError_continuousReturnNotSupported = _enum_for_SetupError.continuousReturnNotSupported satisfies SetupError; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary continuousReturnNotSupported
 * @description
 *
 * Continuous return of results is not supported, or the session
 * type is not suited to continuous transmission. ITU-T Rec.
 * X.1080.1 (05/2018) §11.1.3 g).
 *
 * @constant
 * @type {number}
 */
export const continuousReturnNotSupported = SetupError_continuousReturnNotSupported satisfies SetupError; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary SetupError_sensorTemporarilyUnavailable
 * @description
 *
 * Needed sensor is temporarily out of service; retry is a local
 * decision. ITU-T Rec. X.1080.1 (05/2018) §11.1.3 h).
 *
 * @constant
 * @type {number}
 */
export const SetupError_sensorTemporarilyUnavailable = _enum_for_SetupError.sensorTemporarilyUnavailable satisfies SetupError; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary sensorTemporarilyUnavailable
 * @description
 *
 * Needed sensor is temporarily out of service; retry is a local
 * decision. ITU-T Rec. X.1080.1 (05/2018) §11.1.3 h).
 *
 * @constant
 * @type {number}
 */
export const sensorTemporarilyUnavailable = SetupError_sensorTemporarilyUnavailable satisfies SetupError; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary SetupError_sensorPermanentlyUnavailable
 * @description
 *
 * Needed sensor has a permanent error that needs attention.
 * ITU-T Rec. X.1080.1 (05/2018) §11.1.3 i).
 *
 * @constant
 * @type {number}
 */
export const SetupError_sensorPermanentlyUnavailable = _enum_for_SetupError.sensorPermanentlyUnavailable satisfies SetupError; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary sensorPermanentlyUnavailable
 * @description
 *
 * Needed sensor has a permanent error that needs attention.
 * ITU-T Rec. X.1080.1 (05/2018) §11.1.3 i).
 *
 * @constant
 * @type {number}
 */
export const sensorPermanentlyUnavailable = SetupError_sensorPermanentlyUnavailable satisfies SetupError; /* SHORT_NAMED_ENUMERATED_VALUE */




export const _decode_SetupError = $._decodeEnumerated;




export const _encode_SetupError = $._encodeEnumerated;


/* eslint-enable */
