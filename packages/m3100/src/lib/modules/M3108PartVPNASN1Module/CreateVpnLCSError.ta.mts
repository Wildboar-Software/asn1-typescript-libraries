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
export const CreateVpnLCSError_unknownServiceClass = _enum_for_CreateVpnLCSError.unknownServiceClass satisfies CreateVpnLCSError; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary unknownServiceClass
 * @constant
 * @type {number}
 */
export const unknownServiceClass = CreateVpnLCSError_unknownServiceClass satisfies CreateVpnLCSError; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary CreateVpnLCSError_requestedBandwidthNotAvailable
 * @constant
 * @type {number}
 */
export const CreateVpnLCSError_requestedBandwidthNotAvailable = _enum_for_CreateVpnLCSError.requestedBandwidthNotAvailable satisfies CreateVpnLCSError; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary requestedBandwidthNotAvailable
 * @constant
 * @type {number}
 */
export const requestedBandwidthNotAvailable = CreateVpnLCSError_requestedBandwidthNotAvailable satisfies CreateVpnLCSError; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary CreateVpnLCSError_resourcesUnavailable
 * @constant
 * @type {number}
 */
export const CreateVpnLCSError_resourcesUnavailable = _enum_for_CreateVpnLCSError.resourcesUnavailable satisfies CreateVpnLCSError; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary resourcesUnavailable
 * @constant
 * @type {number}
 */
export const resourcesUnavailable = CreateVpnLCSError_resourcesUnavailable satisfies CreateVpnLCSError; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary CreateVpnLCSError_invalidScheduleConflict
 * @constant
 * @type {number}
 */
export const CreateVpnLCSError_invalidScheduleConflict = _enum_for_CreateVpnLCSError.invalidScheduleConflict satisfies CreateVpnLCSError; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary invalidScheduleConflict
 * @constant
 * @type {number}
 */
export const invalidScheduleConflict = CreateVpnLCSError_invalidScheduleConflict satisfies CreateVpnLCSError; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary CreateVpnLCSError_contractViolation
 * @constant
 * @type {number}
 */
export const CreateVpnLCSError_contractViolation = _enum_for_CreateVpnLCSError.contractViolation satisfies CreateVpnLCSError; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary contractViolation
 * @constant
 * @type {number}
 */
export const contractViolation = CreateVpnLCSError_contractViolation satisfies CreateVpnLCSError; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary CreateVpnLCSError_invalidParameterValue
 * @constant
 * @type {number}
 */
export const CreateVpnLCSError_invalidParameterValue = _enum_for_CreateVpnLCSError.invalidParameterValue satisfies CreateVpnLCSError; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary invalidParameterValue
 * @constant
 * @type {number}
 */
export const invalidParameterValue = CreateVpnLCSError_invalidParameterValue satisfies CreateVpnLCSError; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary CreateVpnLCSError_requiredParameterNotSupplied
 * @constant
 * @type {number}
 */
export const CreateVpnLCSError_requiredParameterNotSupplied = _enum_for_CreateVpnLCSError.requiredParameterNotSupplied satisfies CreateVpnLCSError; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary requiredParameterNotSupplied
 * @constant
 * @type {number}
 */
export const requiredParameterNotSupplied = CreateVpnLCSError_requiredParameterNotSupplied satisfies CreateVpnLCSError; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary CreateVpnLCSError_nonExistentSAP
 * @constant
 * @type {number}
 */
export const CreateVpnLCSError_nonExistentSAP = _enum_for_CreateVpnLCSError.nonExistentSAP satisfies CreateVpnLCSError; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary nonExistentSAP
 * @constant
 * @type {number}
 */
export const nonExistentSAP = CreateVpnLCSError_nonExistentSAP satisfies CreateVpnLCSError; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary CreateVpnLCSError_sAPnotinVPN
 * @constant
 * @type {number}
 */
export const CreateVpnLCSError_sAPnotinVPN = _enum_for_CreateVpnLCSError.sAPnotinVPN satisfies CreateVpnLCSError; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary sAPnotinVPN
 * @constant
 * @type {number}
 */
export const sAPnotinVPN = CreateVpnLCSError_sAPnotinVPN satisfies CreateVpnLCSError; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary CreateVpnLCSError_serviceClassnotinserviceClassList
 * @constant
 * @type {number}
 */
export const CreateVpnLCSError_serviceClassnotinserviceClassList = _enum_for_CreateVpnLCSError.serviceClassnotinserviceClassList satisfies CreateVpnLCSError; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary serviceClassnotinserviceClassList
 * @constant
 * @type {number}
 */
export const serviceClassnotinserviceClassList = CreateVpnLCSError_serviceClassnotinserviceClassList satisfies CreateVpnLCSError; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary CreateVpnLCSError_invalidTerminationDate
 * @constant
 * @type {number}
 */
export const CreateVpnLCSError_invalidTerminationDate = _enum_for_CreateVpnLCSError.invalidTerminationDate satisfies CreateVpnLCSError; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary invalidTerminationDate
 * @constant
 * @type {number}
 */
export const invalidTerminationDate = CreateVpnLCSError_invalidTerminationDate satisfies CreateVpnLCSError; /* SHORT_NAMED_ENUMERATED_VALUE */




export const _decode_CreateVpnLCSError = $._decodeEnumerated;




export const _encode_CreateVpnLCSError = $._encodeEnumerated;


/* eslint-enable */
