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


export enum _enum_for_IdentifyLockedLCSError {
    administrativeStateUnlocked = 0,
    nonExistentSAP = 1,
    unknownServiceType = 2,
}


/**
 * @summary IdentifyLockedLCSError
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * IdentifyLockedLCSError  ::=  ENUMERATED {
 *   administrativeStateUnlocked(0), nonExistentSAP(1), unknownServiceType(2), ...
 *   }
 * ```
 *
 * @enum {number}
 */
export type IdentifyLockedLCSError =
    | _enum_for_IdentifyLockedLCSError
    | ENUMERATED;


/**
 * @summary IdentifyLockedLCSError_administrativeStateUnlocked
 * @constant
 * @type {number}
 */
export const IdentifyLockedLCSError_administrativeStateUnlocked: IdentifyLockedLCSError = 0; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary administrativeStateUnlocked
 * @constant
 * @type {number}
 */
export const administrativeStateUnlocked: IdentifyLockedLCSError = IdentifyLockedLCSError_administrativeStateUnlocked; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary IdentifyLockedLCSError_nonExistentSAP
 * @constant
 * @type {number}
 */
export const IdentifyLockedLCSError_nonExistentSAP: IdentifyLockedLCSError = 1; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary nonExistentSAP
 * @constant
 * @type {number}
 */
export const nonExistentSAP: IdentifyLockedLCSError = IdentifyLockedLCSError_nonExistentSAP; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary IdentifyLockedLCSError_unknownServiceType
 * @constant
 * @type {number}
 */
export const IdentifyLockedLCSError_unknownServiceType: IdentifyLockedLCSError = 2; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary unknownServiceType
 * @constant
 * @type {number}
 */
export const unknownServiceType: IdentifyLockedLCSError = IdentifyLockedLCSError_unknownServiceType; /* SHORT_NAMED_ENUMERATED_VALUE */




export const _decode_IdentifyLockedLCSError = $._decodeEnumerated;




export const _encode_IdentifyLockedLCSError = $._encodeEnumerated;


/* eslint-enable */
