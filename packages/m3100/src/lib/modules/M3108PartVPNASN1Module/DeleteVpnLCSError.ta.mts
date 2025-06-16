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
export const DeleteVpnLCSError_invalidServiceID: DeleteVpnLCSError = 1; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary invalidServiceID
 * @constant
 * @type {number}
 */
export const invalidServiceID: DeleteVpnLCSError = DeleteVpnLCSError_invalidServiceID; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary DeleteVpnLCSError_unlockedAdministrativeState
 * @constant
 * @type {number}
 */
export const DeleteVpnLCSError_unlockedAdministrativeState: DeleteVpnLCSError = 2; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary unlockedAdministrativeState
 * @constant
 * @type {number}
 */
export const unlockedAdministrativeState: DeleteVpnLCSError = DeleteVpnLCSError_unlockedAdministrativeState; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary DeleteVpnLCSError_alreadyDeleted
 * @constant
 * @type {number}
 */
export const DeleteVpnLCSError_alreadyDeleted: DeleteVpnLCSError = 3; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary alreadyDeleted
 * @constant
 * @type {number}
 */
export const alreadyDeleted: DeleteVpnLCSError = DeleteVpnLCSError_alreadyDeleted; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary DeleteVpnLCSError_invalidCircuitNumber
 * @constant
 * @type {number}
 */
export const DeleteVpnLCSError_invalidCircuitNumber: DeleteVpnLCSError = 4; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary invalidCircuitNumber
 * @constant
 * @type {number}
 */
export const invalidCircuitNumber: DeleteVpnLCSError = DeleteVpnLCSError_invalidCircuitNumber; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary DeleteVpnLCSError_notBeinginAppropriateServiceAdministrativeState
 * @constant
 * @type {number}
 */
export const DeleteVpnLCSError_notBeinginAppropriateServiceAdministrativeState: DeleteVpnLCSError = 5; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary notBeinginAppropriateServiceAdministrativeState
 * @constant
 * @type {number}
 */
export const notBeinginAppropriateServiceAdministrativeState: DeleteVpnLCSError = DeleteVpnLCSError_notBeinginAppropriateServiceAdministrativeState; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary DeleteVpnLCSError_contractViolation
 * @constant
 * @type {number}
 */
export const DeleteVpnLCSError_contractViolation: DeleteVpnLCSError = 6; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary contractViolation
 * @constant
 * @type {number}
 */
export const contractViolation: DeleteVpnLCSError = DeleteVpnLCSError_contractViolation; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary DeleteVpnLCSError_invalidVPNIdentifier
 * @constant
 * @type {number}
 */
export const DeleteVpnLCSError_invalidVPNIdentifier: DeleteVpnLCSError = 7; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary invalidVPNIdentifier
 * @constant
 * @type {number}
 */
export const invalidVPNIdentifier: DeleteVpnLCSError = DeleteVpnLCSError_invalidVPNIdentifier; /* SHORT_NAMED_ENUMERATED_VALUE */




export const _decode_DeleteVpnLCSError = $._decodeEnumerated;




export const _encode_DeleteVpnLCSError = $._encodeEnumerated;


/* eslint-enable */
