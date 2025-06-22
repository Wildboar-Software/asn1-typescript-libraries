/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from 'asn1-ts';
import * as $ from '@wildboar/asn1/functional';


/**
 * @summary ReleaseProtectionError
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ReleaseProtectionError  ::=  ENUMERATED {failure(0), timeout(1)}
 * ```
 *
 * @enum {number}
 */
export enum _enum_for_ReleaseProtectionError {
    failure = 0,
    timeout = 1,
}


/**
 * @summary ReleaseProtectionError
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ReleaseProtectionError  ::=  ENUMERATED {failure(0), timeout(1)}
 * ```
 *
 * @enum {number}
 */
export type ReleaseProtectionError = _enum_for_ReleaseProtectionError;


/**
 * @summary ReleaseProtectionError
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ReleaseProtectionError  ::=  ENUMERATED {failure(0), timeout(1)}
 * ```
 *
 * @enum {number}
 */
export const ReleaseProtectionError = _enum_for_ReleaseProtectionError;


/**
 * @summary ReleaseProtectionError_failure
 * @constant
 * @type {number}
 */
export const ReleaseProtectionError_failure: ReleaseProtectionError =
    ReleaseProtectionError.failure; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary failure
 * @constant
 * @type {number}
 */
export const failure: ReleaseProtectionError =
    ReleaseProtectionError.failure; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary ReleaseProtectionError_timeout
 * @constant
 * @type {number}
 */
export const ReleaseProtectionError_timeout: ReleaseProtectionError =
    ReleaseProtectionError.timeout; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary timeout
 * @constant
 * @type {number}
 */
export const timeout: ReleaseProtectionError =
    ReleaseProtectionError.timeout; /* SHORT_NAMED_ENUMERATED_VALUE */




export const _decode_ReleaseProtectionError = $._decodeEnumerated;




export const _encode_ReleaseProtectionError = $._encodeEnumerated;


/* eslint-enable */
