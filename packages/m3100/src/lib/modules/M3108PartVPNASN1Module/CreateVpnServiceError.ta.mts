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
export const CreateVpnServiceError_invalidServiceClasses: _enum_for_CreateVpnServiceError.invalidServiceClasses = _enum_for_CreateVpnServiceError.invalidServiceClasses; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary invalidServiceClasses
 * @constant
 * @type {number}
 */
export const invalidServiceClasses: _enum_for_CreateVpnServiceError.invalidServiceClasses = CreateVpnServiceError_invalidServiceClasses; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary CreateVpnServiceError_duplicatedVPNIdentifier
 * @constant
 * @type {number}
 */
export const CreateVpnServiceError_duplicatedVPNIdentifier: _enum_for_CreateVpnServiceError.duplicatedVPNIdentifier = _enum_for_CreateVpnServiceError.duplicatedVPNIdentifier; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary duplicatedVPNIdentifier
 * @constant
 * @type {number}
 */
export const duplicatedVPNIdentifier: _enum_for_CreateVpnServiceError.duplicatedVPNIdentifier = CreateVpnServiceError_duplicatedVPNIdentifier; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary CreateVpnServiceError_invalidSAG
 * @constant
 * @type {number}
 */
export const CreateVpnServiceError_invalidSAG: _enum_for_CreateVpnServiceError.invalidSAG = _enum_for_CreateVpnServiceError.invalidSAG; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary invalidSAG
 * @constant
 * @type {number}
 */
export const invalidSAG: _enum_for_CreateVpnServiceError.invalidSAG = CreateVpnServiceError_invalidSAG; /* SHORT_NAMED_ENUMERATED_VALUE */




export const _decode_CreateVpnServiceError: $.ASN1Decoder<number> = $._decodeEnumerated;




export const _encode_CreateVpnServiceError: $.ASN1Encoder<number> = $._encodeEnumerated;


/* eslint-enable */
