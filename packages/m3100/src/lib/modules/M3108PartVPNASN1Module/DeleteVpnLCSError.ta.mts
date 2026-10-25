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


export enum _enum_for_DeleteVpnLCSError {
    invalidServiceID = 1,
    unlockedAdministrativeState = 2,
    alreadyDeleted = 3,
    invalidCircuitNumber = 4,
    notBeinginAppropriateServiceAdministrativeState = 5,
    contractViolation = 6,
    invalidVPNIdentifier = 7,
}


/**
 * @summary DeleteVpnLCSError
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DeleteVpnLCSError  ::=  ENUMERATED {
 *   invalidServiceID(1), unlockedAdministrativeState(2), alreadyDeleted(3),
 *   invalidCircuitNumber(4), notBeinginAppropriateServiceAdministrativeState(5),
 *   contractViolation(6), invalidVPNIdentifier(7), ...
 *   }
 * ```
 *
 * @enum {number}
 */
export type DeleteVpnLCSError = _enum_for_DeleteVpnLCSError | ENUMERATED;


/**
 * @summary DeleteVpnLCSError_invalidServiceID
 * @constant
 * @type {number}
 */
export const DeleteVpnLCSError_invalidServiceID = _enum_for_DeleteVpnLCSError.invalidServiceID satisfies DeleteVpnLCSError; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary invalidServiceID
 * @constant
 * @type {number}
 */
export const invalidServiceID = DeleteVpnLCSError_invalidServiceID satisfies DeleteVpnLCSError; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary DeleteVpnLCSError_unlockedAdministrativeState
 * @constant
 * @type {number}
 */
export const DeleteVpnLCSError_unlockedAdministrativeState = _enum_for_DeleteVpnLCSError.unlockedAdministrativeState satisfies DeleteVpnLCSError; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary unlockedAdministrativeState
 * @constant
 * @type {number}
 */
export const unlockedAdministrativeState = DeleteVpnLCSError_unlockedAdministrativeState satisfies DeleteVpnLCSError; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary DeleteVpnLCSError_alreadyDeleted
 * @constant
 * @type {number}
 */
export const DeleteVpnLCSError_alreadyDeleted = _enum_for_DeleteVpnLCSError.alreadyDeleted satisfies DeleteVpnLCSError; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary alreadyDeleted
 * @constant
 * @type {number}
 */
export const alreadyDeleted = DeleteVpnLCSError_alreadyDeleted satisfies DeleteVpnLCSError; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary DeleteVpnLCSError_invalidCircuitNumber
 * @constant
 * @type {number}
 */
export const DeleteVpnLCSError_invalidCircuitNumber = _enum_for_DeleteVpnLCSError.invalidCircuitNumber satisfies DeleteVpnLCSError; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary invalidCircuitNumber
 * @constant
 * @type {number}
 */
export const invalidCircuitNumber = DeleteVpnLCSError_invalidCircuitNumber satisfies DeleteVpnLCSError; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary DeleteVpnLCSError_notBeinginAppropriateServiceAdministrativeState
 * @constant
 * @type {number}
 */
export const DeleteVpnLCSError_notBeinginAppropriateServiceAdministrativeState = _enum_for_DeleteVpnLCSError.notBeinginAppropriateServiceAdministrativeState satisfies DeleteVpnLCSError; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary notBeinginAppropriateServiceAdministrativeState
 * @constant
 * @type {number}
 */
export const notBeinginAppropriateServiceAdministrativeState = DeleteVpnLCSError_notBeinginAppropriateServiceAdministrativeState satisfies DeleteVpnLCSError; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary DeleteVpnLCSError_contractViolation
 * @constant
 * @type {number}
 */
export const DeleteVpnLCSError_contractViolation = _enum_for_DeleteVpnLCSError.contractViolation satisfies DeleteVpnLCSError; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary contractViolation
 * @constant
 * @type {number}
 */
export const contractViolation = DeleteVpnLCSError_contractViolation satisfies DeleteVpnLCSError; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary DeleteVpnLCSError_invalidVPNIdentifier
 * @constant
 * @type {number}
 */
export const DeleteVpnLCSError_invalidVPNIdentifier = _enum_for_DeleteVpnLCSError.invalidVPNIdentifier satisfies DeleteVpnLCSError; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary invalidVPNIdentifier
 * @constant
 * @type {number}
 */
export const invalidVPNIdentifier = DeleteVpnLCSError_invalidVPNIdentifier satisfies DeleteVpnLCSError; /* SHORT_NAMED_ENUMERATED_VALUE */




export const _decode_DeleteVpnLCSError = $._decodeEnumerated;




export const _encode_DeleteVpnLCSError = $._encodeEnumerated;


/* eslint-enable */
