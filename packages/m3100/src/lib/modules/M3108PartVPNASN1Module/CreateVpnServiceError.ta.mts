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


export enum _enum_for_CreateVpnServiceError {
    invalidServiceClasses = 1,
    duplicatedVPNIdentifier = 2,
    invalidSAG = 3,
}


/**
 * @summary CreateVpnServiceError
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CreateVpnServiceError  ::=  ENUMERATED {
 *   invalidServiceClasses(1), duplicatedVPNIdentifier(2), invalidSAG(3), ...
 *   }
 * ```
 * 
 * @enum {number}
 */
export type CreateVpnServiceError =
    | _enum_for_CreateVpnServiceError
    | ENUMERATED;


/**
 * @summary CreateVpnServiceError_invalidServiceClasses
 * @constant
 * @type {number}
 */
export const CreateVpnServiceError_invalidServiceClasses: CreateVpnServiceError = 1; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary invalidServiceClasses
 * @constant
 * @type {number}
 */
export const invalidServiceClasses: CreateVpnServiceError = CreateVpnServiceError_invalidServiceClasses; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary CreateVpnServiceError_duplicatedVPNIdentifier
 * @constant
 * @type {number}
 */
export const CreateVpnServiceError_duplicatedVPNIdentifier: CreateVpnServiceError = 2; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary duplicatedVPNIdentifier
 * @constant
 * @type {number}
 */
export const duplicatedVPNIdentifier: CreateVpnServiceError = CreateVpnServiceError_duplicatedVPNIdentifier; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary CreateVpnServiceError_invalidSAG
 * @constant
 * @type {number}
 */
export const CreateVpnServiceError_invalidSAG: CreateVpnServiceError = 3; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary invalidSAG
 * @constant
 * @type {number}
 */
export const invalidSAG: CreateVpnServiceError = CreateVpnServiceError_invalidSAG; /* SHORT_NAMED_ENUMERATED_VALUE */




export const _decode_CreateVpnServiceError = $._decodeEnumerated;




export const _encode_CreateVpnServiceError = $._encodeEnumerated;


/* eslint-enable */
