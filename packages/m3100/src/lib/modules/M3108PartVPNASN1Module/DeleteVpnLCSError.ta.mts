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
export const DeleteVpnLCSError_invalidServiceID: _enum_for_DeleteVpnLCSError.invalidServiceID = _enum_for_DeleteVpnLCSError.invalidServiceID; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary invalidServiceID
 * @constant
 * @type {number}
 */
export const invalidServiceID: _enum_for_DeleteVpnLCSError.invalidServiceID = DeleteVpnLCSError_invalidServiceID; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary DeleteVpnLCSError_unlockedAdministrativeState
 * @constant
 * @type {number}
 */
export const DeleteVpnLCSError_unlockedAdministrativeState: _enum_for_DeleteVpnLCSError.unlockedAdministrativeState = _enum_for_DeleteVpnLCSError.unlockedAdministrativeState; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary unlockedAdministrativeState
 * @constant
 * @type {number}
 */
export const unlockedAdministrativeState: _enum_for_DeleteVpnLCSError.unlockedAdministrativeState = DeleteVpnLCSError_unlockedAdministrativeState; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary DeleteVpnLCSError_alreadyDeleted
 * @constant
 * @type {number}
 */
export const DeleteVpnLCSError_alreadyDeleted: _enum_for_DeleteVpnLCSError.alreadyDeleted = _enum_for_DeleteVpnLCSError.alreadyDeleted; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary alreadyDeleted
 * @constant
 * @type {number}
 */
export const alreadyDeleted: _enum_for_DeleteVpnLCSError.alreadyDeleted = DeleteVpnLCSError_alreadyDeleted; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary DeleteVpnLCSError_invalidCircuitNumber
 * @constant
 * @type {number}
 */
export const DeleteVpnLCSError_invalidCircuitNumber: _enum_for_DeleteVpnLCSError.invalidCircuitNumber = _enum_for_DeleteVpnLCSError.invalidCircuitNumber; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary invalidCircuitNumber
 * @constant
 * @type {number}
 */
export const invalidCircuitNumber: _enum_for_DeleteVpnLCSError.invalidCircuitNumber = DeleteVpnLCSError_invalidCircuitNumber; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary DeleteVpnLCSError_notBeinginAppropriateServiceAdministrativeState
 * @constant
 * @type {number}
 */
export const DeleteVpnLCSError_notBeinginAppropriateServiceAdministrativeState: _enum_for_DeleteVpnLCSError.notBeinginAppropriateServiceAdministrativeState = _enum_for_DeleteVpnLCSError.notBeinginAppropriateServiceAdministrativeState; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary notBeinginAppropriateServiceAdministrativeState
 * @constant
 * @type {number}
 */
export const notBeinginAppropriateServiceAdministrativeState: _enum_for_DeleteVpnLCSError.notBeinginAppropriateServiceAdministrativeState = DeleteVpnLCSError_notBeinginAppropriateServiceAdministrativeState; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary DeleteVpnLCSError_contractViolation
 * @constant
 * @type {number}
 */
export const DeleteVpnLCSError_contractViolation: _enum_for_DeleteVpnLCSError.contractViolation = _enum_for_DeleteVpnLCSError.contractViolation; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary contractViolation
 * @constant
 * @type {number}
 */
export const contractViolation: _enum_for_DeleteVpnLCSError.contractViolation = DeleteVpnLCSError_contractViolation; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary DeleteVpnLCSError_invalidVPNIdentifier
 * @constant
 * @type {number}
 */
export const DeleteVpnLCSError_invalidVPNIdentifier: _enum_for_DeleteVpnLCSError.invalidVPNIdentifier = _enum_for_DeleteVpnLCSError.invalidVPNIdentifier; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary invalidVPNIdentifier
 * @constant
 * @type {number}
 */
export const invalidVPNIdentifier: _enum_for_DeleteVpnLCSError.invalidVPNIdentifier = DeleteVpnLCSError_invalidVPNIdentifier; /* SHORT_NAMED_ENUMERATED_VALUE */




export const _decode_DeleteVpnLCSError: $.ASN1Decoder<number> = $._decodeEnumerated;




export const _encode_DeleteVpnLCSError: $.ASN1Encoder<number> = $._encodeEnumerated;


/* eslint-enable */
