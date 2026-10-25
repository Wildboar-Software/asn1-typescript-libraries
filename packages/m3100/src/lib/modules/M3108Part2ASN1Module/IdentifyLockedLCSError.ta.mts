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
export const IdentifyLockedLCSError_administrativeStateUnlocked = _enum_for_IdentifyLockedLCSError.administrativeStateUnlocked satisfies IdentifyLockedLCSError; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary administrativeStateUnlocked
 * @constant
 * @type {number}
 */
export const administrativeStateUnlocked = IdentifyLockedLCSError_administrativeStateUnlocked satisfies IdentifyLockedLCSError; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary IdentifyLockedLCSError_nonExistentSAP
 * @constant
 * @type {number}
 */
export const IdentifyLockedLCSError_nonExistentSAP = _enum_for_IdentifyLockedLCSError.nonExistentSAP satisfies IdentifyLockedLCSError; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary nonExistentSAP
 * @constant
 * @type {number}
 */
export const nonExistentSAP = IdentifyLockedLCSError_nonExistentSAP satisfies IdentifyLockedLCSError; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary IdentifyLockedLCSError_unknownServiceType
 * @constant
 * @type {number}
 */
export const IdentifyLockedLCSError_unknownServiceType = _enum_for_IdentifyLockedLCSError.unknownServiceType satisfies IdentifyLockedLCSError; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary unknownServiceType
 * @constant
 * @type {number}
 */
export const unknownServiceType = IdentifyLockedLCSError_unknownServiceType satisfies IdentifyLockedLCSError; /* SHORT_NAMED_ENUMERATED_VALUE */




export const _decode_IdentifyLockedLCSError = $._decodeEnumerated;




export const _encode_IdentifyLockedLCSError = $._encodeEnumerated;


/* eslint-enable */
