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
} from 'asn1-ts';
import * as $ from 'asn1-ts/dist/functional.mjs';


export enum _enum_for_ModifyLCSError {
    contractViolation = 0,
    invalidAliasName = 1,
    invalidCircuitNumber = 2,
    invalidCPEType = 3,
    invalidSchedule = 4,
    invalidServiceTerminationDate = 5,
    invalidValue = 6,
    requestedBandwidthNotAvailable = 7,
    resourceUnavailable = 8,
    scheduleConflicts = 9,
}


/**
 * @summary ModifyLCSError
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ModifyLCSError  ::=  ENUMERATED {
 *   contractViolation(0), invalidAliasName(1), invalidCircuitNumber(2),
 *   invalidCPEType(3), invalidSchedule(4), invalidServiceTerminationDate(5),
 *   invalidValue(6), requestedBandwidthNotAvailable(7), resourceUnavailable(8),
 *   scheduleConflicts(9), ...
 *   }
 * ```
 *
 * @enum {number}
 */
export type ModifyLCSError = _enum_for_ModifyLCSError | ENUMERATED;


/**
 * @summary ModifyLCSError_contractViolation
 * @constant
 * @type {number}
 */
export const ModifyLCSError_contractViolation: ModifyLCSError = 0; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary contractViolation
 * @constant
 * @type {number}
 */
export const contractViolation: ModifyLCSError = ModifyLCSError_contractViolation; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary ModifyLCSError_invalidAliasName
 * @constant
 * @type {number}
 */
export const ModifyLCSError_invalidAliasName: ModifyLCSError = 1; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary invalidAliasName
 * @constant
 * @type {number}
 */
export const invalidAliasName: ModifyLCSError = ModifyLCSError_invalidAliasName; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary ModifyLCSError_invalidCircuitNumber
 * @constant
 * @type {number}
 */
export const ModifyLCSError_invalidCircuitNumber: ModifyLCSError = 2; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary invalidCircuitNumber
 * @constant
 * @type {number}
 */
export const invalidCircuitNumber: ModifyLCSError = ModifyLCSError_invalidCircuitNumber; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary ModifyLCSError_invalidCPEType
 * @constant
 * @type {number}
 */
export const ModifyLCSError_invalidCPEType: ModifyLCSError = 3; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary invalidCPEType
 * @constant
 * @type {number}
 */
export const invalidCPEType: ModifyLCSError = ModifyLCSError_invalidCPEType; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary ModifyLCSError_invalidSchedule
 * @constant
 * @type {number}
 */
export const ModifyLCSError_invalidSchedule: ModifyLCSError = 4; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary invalidSchedule
 * @constant
 * @type {number}
 */
export const invalidSchedule: ModifyLCSError = ModifyLCSError_invalidSchedule; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary ModifyLCSError_invalidServiceTerminationDate
 * @constant
 * @type {number}
 */
export const ModifyLCSError_invalidServiceTerminationDate: ModifyLCSError = 5; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary invalidServiceTerminationDate
 * @constant
 * @type {number}
 */
export const invalidServiceTerminationDate: ModifyLCSError = ModifyLCSError_invalidServiceTerminationDate; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary ModifyLCSError_invalidValue
 * @constant
 * @type {number}
 */
export const ModifyLCSError_invalidValue: ModifyLCSError = 6; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary invalidValue
 * @constant
 * @type {number}
 */
export const invalidValue: ModifyLCSError = ModifyLCSError_invalidValue; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary ModifyLCSError_requestedBandwidthNotAvailable
 * @constant
 * @type {number}
 */
export const ModifyLCSError_requestedBandwidthNotAvailable: ModifyLCSError = 7; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary requestedBandwidthNotAvailable
 * @constant
 * @type {number}
 */
export const requestedBandwidthNotAvailable: ModifyLCSError = ModifyLCSError_requestedBandwidthNotAvailable; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary ModifyLCSError_resourceUnavailable
 * @constant
 * @type {number}
 */
export const ModifyLCSError_resourceUnavailable: ModifyLCSError = 8; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary resourceUnavailable
 * @constant
 * @type {number}
 */
export const resourceUnavailable: ModifyLCSError = ModifyLCSError_resourceUnavailable; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary ModifyLCSError_scheduleConflicts
 * @constant
 * @type {number}
 */
export const ModifyLCSError_scheduleConflicts: ModifyLCSError = 9; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary scheduleConflicts
 * @constant
 * @type {number}
 */
export const scheduleConflicts: ModifyLCSError = ModifyLCSError_scheduleConflicts; /* SHORT_NAMED_ENUMERATED_VALUE */




export const _decode_ModifyLCSError = $._decodeEnumerated;




export const _encode_ModifyLCSError = $._encodeEnumerated;


/* eslint-enable */
