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


export enum _enum_for_CreateVpnLCSError {
    unknownServiceClass = 1,
    requestedBandwidthNotAvailable = 2,
    resourcesUnavailable = 3,
    invalidScheduleConflict = 4,
    contractViolation = 5,
    invalidParameterValue = 6,
    requiredParameterNotSupplied = 7,
    nonExistentSAP = 8,
    sAPnotinVPN = 9,
    serviceClassnotinserviceClassList = 10,
    invalidTerminationDate = 11,
}


/**
 * @summary CreateVpnLCSError
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CreateVpnLCSError  ::=  ENUMERATED {
 *   unknownServiceClass(1), requestedBandwidthNotAvailable(2),
 *   resourcesUnavailable(3), invalidScheduleConflict(4), contractViolation(5),
 *   invalidParameterValue(6), requiredParameterNotSupplied(7), nonExistentSAP(8),
 *   sAPnotinVPN(9), serviceClassnotinserviceClassList(10),
 *   invalidTerminationDate(11), ...
 *   }
 * ```
 * 
 * @enum {number}
 */
export type CreateVpnLCSError = _enum_for_CreateVpnLCSError | ENUMERATED;


/**
 * @summary CreateVpnLCSError_unknownServiceClass
 * @constant
 * @type {number}
 */
export const CreateVpnLCSError_unknownServiceClass: CreateVpnLCSError = 1; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary unknownServiceClass
 * @constant
 * @type {number}
 */
export const unknownServiceClass: CreateVpnLCSError = CreateVpnLCSError_unknownServiceClass; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary CreateVpnLCSError_requestedBandwidthNotAvailable
 * @constant
 * @type {number}
 */
export const CreateVpnLCSError_requestedBandwidthNotAvailable: CreateVpnLCSError = 2; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary requestedBandwidthNotAvailable
 * @constant
 * @type {number}
 */
export const requestedBandwidthNotAvailable: CreateVpnLCSError = CreateVpnLCSError_requestedBandwidthNotAvailable; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary CreateVpnLCSError_resourcesUnavailable
 * @constant
 * @type {number}
 */
export const CreateVpnLCSError_resourcesUnavailable: CreateVpnLCSError = 3; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary resourcesUnavailable
 * @constant
 * @type {number}
 */
export const resourcesUnavailable: CreateVpnLCSError = CreateVpnLCSError_resourcesUnavailable; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary CreateVpnLCSError_invalidScheduleConflict
 * @constant
 * @type {number}
 */
export const CreateVpnLCSError_invalidScheduleConflict: CreateVpnLCSError = 4; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary invalidScheduleConflict
 * @constant
 * @type {number}
 */
export const invalidScheduleConflict: CreateVpnLCSError = CreateVpnLCSError_invalidScheduleConflict; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary CreateVpnLCSError_contractViolation
 * @constant
 * @type {number}
 */
export const CreateVpnLCSError_contractViolation: CreateVpnLCSError = 5; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary contractViolation
 * @constant
 * @type {number}
 */
export const contractViolation: CreateVpnLCSError = CreateVpnLCSError_contractViolation; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary CreateVpnLCSError_invalidParameterValue
 * @constant
 * @type {number}
 */
export const CreateVpnLCSError_invalidParameterValue: CreateVpnLCSError = 6; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary invalidParameterValue
 * @constant
 * @type {number}
 */
export const invalidParameterValue: CreateVpnLCSError = CreateVpnLCSError_invalidParameterValue; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary CreateVpnLCSError_requiredParameterNotSupplied
 * @constant
 * @type {number}
 */
export const CreateVpnLCSError_requiredParameterNotSupplied: CreateVpnLCSError = 7; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary requiredParameterNotSupplied
 * @constant
 * @type {number}
 */
export const requiredParameterNotSupplied: CreateVpnLCSError = CreateVpnLCSError_requiredParameterNotSupplied; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary CreateVpnLCSError_nonExistentSAP
 * @constant
 * @type {number}
 */
export const CreateVpnLCSError_nonExistentSAP: CreateVpnLCSError = 8; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary nonExistentSAP
 * @constant
 * @type {number}
 */
export const nonExistentSAP: CreateVpnLCSError = CreateVpnLCSError_nonExistentSAP; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary CreateVpnLCSError_sAPnotinVPN
 * @constant
 * @type {number}
 */
export const CreateVpnLCSError_sAPnotinVPN: CreateVpnLCSError = 9; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary sAPnotinVPN
 * @constant
 * @type {number}
 */
export const sAPnotinVPN: CreateVpnLCSError = CreateVpnLCSError_sAPnotinVPN; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary CreateVpnLCSError_serviceClassnotinserviceClassList
 * @constant
 * @type {number}
 */
export const CreateVpnLCSError_serviceClassnotinserviceClassList: CreateVpnLCSError = 10; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary serviceClassnotinserviceClassList
 * @constant
 * @type {number}
 */
export const serviceClassnotinserviceClassList: CreateVpnLCSError = CreateVpnLCSError_serviceClassnotinserviceClassList; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary CreateVpnLCSError_invalidTerminationDate
 * @constant
 * @type {number}
 */
export const CreateVpnLCSError_invalidTerminationDate: CreateVpnLCSError = 11; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary invalidTerminationDate
 * @constant
 * @type {number}
 */
export const invalidTerminationDate: CreateVpnLCSError = CreateVpnLCSError_invalidTerminationDate; /* SHORT_NAMED_ENUMERATED_VALUE */




export const _decode_CreateVpnLCSError = $._decodeEnumerated;




export const _encode_CreateVpnLCSError = $._encodeEnumerated;


/* eslint-enable */
