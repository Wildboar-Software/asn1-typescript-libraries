/* eslint-disable */
import {
    ENUMERATED,
    ASN1Element as _Element,
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
 * @constant
 * @type {number}
 */
export const SetupError_setupNotAllowed: SetupError = 0; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary setupNotAllowed
 * @constant
 * @type {number}
 */
export const setupNotAllowed: SetupError = SetupError_setupNotAllowed; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary SetupError_facilityTemporarilyUnavailable
 * @constant
 * @type {number}
 */
export const SetupError_facilityTemporarilyUnavailable: SetupError = 1; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary facilityTemporarilyUnavailable
 * @constant
 * @type {number}
 */
export const facilityTemporarilyUnavailable: SetupError = SetupError_facilityTemporarilyUnavailable; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary SetupError_facilityPermanentlyUnavailable
 * @constant
 * @type {number}
 */
export const SetupError_facilityPermanentlyUnavailable: SetupError = 2; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary facilityPermanentlyUnavailable
 * @constant
 * @type {number}
 */
export const facilityPermanentlyUnavailable: SetupError = SetupError_facilityPermanentlyUnavailable; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary SetupError_unknownSessionType
 * @constant
 * @type {number}
 */
export const SetupError_unknownSessionType: SetupError = 3; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary unknownSessionType
 * @constant
 * @type {number}
 */
export const unknownSessionType: SetupError = SetupError_unknownSessionType; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary SetupError_sessionTypeNotSupported
 * @constant
 * @type {number}
 */
export const SetupError_sessionTypeNotSupported: SetupError = 4; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary sessionTypeNotSupported
 * @constant
 * @type {number}
 */
export const sessionTypeNotSupported: SetupError = SetupError_sessionTypeNotSupported; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary SetupError_batchModeNotSupported
 * @constant
 * @type {number}
 */
export const SetupError_batchModeNotSupported: SetupError = 5; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary batchModeNotSupported
 * @constant
 * @type {number}
 */
export const batchModeNotSupported: SetupError = SetupError_batchModeNotSupported; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary SetupError_continuousReturnNotSupported
 * @constant
 * @type {number}
 */
export const SetupError_continuousReturnNotSupported: SetupError = 6; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary continuousReturnNotSupported
 * @constant
 * @type {number}
 */
export const continuousReturnNotSupported: SetupError = SetupError_continuousReturnNotSupported; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary SetupError_sensorTemporarilyUnavailable
 * @constant
 * @type {number}
 */
export const SetupError_sensorTemporarilyUnavailable: SetupError = 7; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary sensorTemporarilyUnavailable
 * @constant
 * @type {number}
 */
export const sensorTemporarilyUnavailable: SetupError = SetupError_sensorTemporarilyUnavailable; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary SetupError_sensorPermanentlyUnavailable
 * @constant
 * @type {number}
 */
export const SetupError_sensorPermanentlyUnavailable: SetupError = 8; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary sensorPermanentlyUnavailable
 * @constant
 * @type {number}
 */
export const sensorPermanentlyUnavailable: SetupError = SetupError_sensorPermanentlyUnavailable; /* SHORT_NAMED_ENUMERATED_VALUE */




export const _decode_SetupError = $._decodeEnumerated;




export const _encode_SetupError = $._encodeEnumerated;


/* eslint-enable */
