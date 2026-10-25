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
export const ModifyLCSError_contractViolation = _enum_for_ModifyLCSError.contractViolation satisfies ModifyLCSError; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary contractViolation
 * @constant
 * @type {number}
 */
export const contractViolation = ModifyLCSError_contractViolation satisfies ModifyLCSError; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary ModifyLCSError_invalidAliasName
 * @constant
 * @type {number}
 */
export const ModifyLCSError_invalidAliasName = _enum_for_ModifyLCSError.invalidAliasName satisfies ModifyLCSError; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary invalidAliasName
 * @constant
 * @type {number}
 */
export const invalidAliasName = ModifyLCSError_invalidAliasName satisfies ModifyLCSError; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary ModifyLCSError_invalidCircuitNumber
 * @constant
 * @type {number}
 */
export const ModifyLCSError_invalidCircuitNumber = _enum_for_ModifyLCSError.invalidCircuitNumber satisfies ModifyLCSError; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary invalidCircuitNumber
 * @constant
 * @type {number}
 */
export const invalidCircuitNumber = ModifyLCSError_invalidCircuitNumber satisfies ModifyLCSError; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary ModifyLCSError_invalidCPEType
 * @constant
 * @type {number}
 */
export const ModifyLCSError_invalidCPEType = _enum_for_ModifyLCSError.invalidCPEType satisfies ModifyLCSError; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary invalidCPEType
 * @constant
 * @type {number}
 */
export const invalidCPEType = ModifyLCSError_invalidCPEType satisfies ModifyLCSError; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary ModifyLCSError_invalidSchedule
 * @constant
 * @type {number}
 */
export const ModifyLCSError_invalidSchedule = _enum_for_ModifyLCSError.invalidSchedule satisfies ModifyLCSError; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary invalidSchedule
 * @constant
 * @type {number}
 */
export const invalidSchedule = ModifyLCSError_invalidSchedule satisfies ModifyLCSError; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary ModifyLCSError_invalidServiceTerminationDate
 * @constant
 * @type {number}
 */
export const ModifyLCSError_invalidServiceTerminationDate = _enum_for_ModifyLCSError.invalidServiceTerminationDate satisfies ModifyLCSError; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary invalidServiceTerminationDate
 * @constant
 * @type {number}
 */
export const invalidServiceTerminationDate = ModifyLCSError_invalidServiceTerminationDate satisfies ModifyLCSError; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary ModifyLCSError_invalidValue
 * @constant
 * @type {number}
 */
export const ModifyLCSError_invalidValue = _enum_for_ModifyLCSError.invalidValue satisfies ModifyLCSError; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary invalidValue
 * @constant
 * @type {number}
 */
export const invalidValue = ModifyLCSError_invalidValue satisfies ModifyLCSError; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary ModifyLCSError_requestedBandwidthNotAvailable
 * @constant
 * @type {number}
 */
export const ModifyLCSError_requestedBandwidthNotAvailable = _enum_for_ModifyLCSError.requestedBandwidthNotAvailable satisfies ModifyLCSError; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary requestedBandwidthNotAvailable
 * @constant
 * @type {number}
 */
export const requestedBandwidthNotAvailable = ModifyLCSError_requestedBandwidthNotAvailable satisfies ModifyLCSError; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary ModifyLCSError_resourceUnavailable
 * @constant
 * @type {number}
 */
export const ModifyLCSError_resourceUnavailable = _enum_for_ModifyLCSError.resourceUnavailable satisfies ModifyLCSError; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary resourceUnavailable
 * @constant
 * @type {number}
 */
export const resourceUnavailable = ModifyLCSError_resourceUnavailable satisfies ModifyLCSError; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary ModifyLCSError_scheduleConflicts
 * @constant
 * @type {number}
 */
export const ModifyLCSError_scheduleConflicts = _enum_for_ModifyLCSError.scheduleConflicts satisfies ModifyLCSError; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary scheduleConflicts
 * @constant
 * @type {number}
 */
export const scheduleConflicts = ModifyLCSError_scheduleConflicts satisfies ModifyLCSError; /* SHORT_NAMED_ENUMERATED_VALUE */




export const _decode_ModifyLCSError = $._decodeEnumerated;




export const _encode_ModifyLCSError = $._encodeEnumerated;


/* eslint-enable */
